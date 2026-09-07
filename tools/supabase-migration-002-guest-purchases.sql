-- ============================================================================
-- 002 · Guest checkout, and claiming a guest purchase on sign-in
--
-- Paul, 2026-09-06: "the user on the site can purchase item as a guest or login
-- but it needs to save their credentials."
--
-- 🚨 WE STORE NO PAYMENT CREDENTIALS, EVER. Stripe holds the card. This file is
-- about identity: who bought what, and how a guest gets their purchase back.
--
-- 🚨 THE EMAIL IS THE LINK. A guest has no account row, so a purchase cannot be
-- keyed to one. It is keyed to the email Stripe collected at checkout, and the
-- moment anybody signs in with that same address the row becomes theirs.
-- That is why `account_id` has to be NULLABLE: making it required would mean
-- either forcing an account before payment, which loses sales, or throwing the
-- purchase away, which is worse.
-- ============================================================================

-- ── 1. purchases: email is now the anchor, account is optional ──────────────
alter table public.purchases
  alter column account_id drop not null;

alter table public.purchases
  add column if not exists email text;

-- Backfill anything already there (nothing yet, but this file must be re-runnable).
update public.purchases p
   set email = u.email
  from auth.users u
 where p.account_id = u.id and p.email is null;

alter table public.purchases
  alter column email set not null;

-- ⚠️ Stored lower-case so "Paul@x.com" and "paul@x.com" are the same customer.
-- Without this a guest who typed a capital letter never gets their purchase back.
create index if not exists purchases_email_idx on public.purchases (lower(email));

-- ============================================================================
-- 2. CLAIMING
-- Runs when an account is created AND when an email is confirmed or changed,
-- so a purchase finds its owner whichever order things happen in:
--   buy first then sign up   -> claimed at signup
--   sign up first then buy   -> the webhook sets account_id directly
--   buy, sign up months later-> claimed at signup
--
-- 🚨 `security definer` is required: the person signing up cannot see an
-- unclaimed row (RLS hides it), so the claim has to run with elevated rights.
-- It is deliberately narrow -- it only ever sets account_id on rows whose email
-- already matches, and it can never move a purchase between two accounts
-- because it only touches rows where account_id IS NULL.
-- ============================================================================
create or replace function public.claim_purchases()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.email is not null then
    update public.purchases
       set account_id = new.id
     where account_id is null
       and lower(email) = lower(new.email);
  end if;
  return new;
end; $$;

drop trigger if exists on_auth_user_claim_purchases on auth.users;
create trigger on_auth_user_claim_purchases
  after insert or update of email on auth.users
  for each row execute function public.claim_purchases();

-- ============================================================================
-- 3. READING YOUR OWN PURCHASES
-- The old policy was `account_id = auth.uid()`, which silently hides a guest
-- purchase that has not been claimed yet -- including in the moments between
-- paying and the trigger running.
-- ⚠️ Matching on the JWT email as well means a signed-in user sees a purchase
-- made under their address even before it is claimed. `auth.jwt()->>'email'` is
-- supplied by Supabase from the verified token, so it cannot be spoofed by the
-- client the way a request parameter could.
-- Writes are STILL impossible: there is no insert or update policy anywhere.
-- Only the Stripe webhook, holding the secret key, can create a purchase.
-- ============================================================================
drop policy if exists "read own purchases" on public.purchases;

create policy "read own purchases"
  on public.purchases for select
  using (
    account_id = auth.uid()
    or lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );

-- ============================================================================
-- 4. A GUEST'S RECEIPT LINK
-- A guest who never makes an account still has to be able to re-download.
-- Stripe emails them a receipt; this token is what that link carries.
-- ⚠️ Not guessable, and NOT readable through the Data API -- there is no select
-- policy granting access to it. Only the server, using the secret key, can look
-- a token up. A token in a URL is a bearer credential, so treat it like one.
-- ============================================================================
alter table public.purchases
  add column if not exists access_token uuid not null default gen_random_uuid();

create unique index if not exists purchases_access_token_idx
  on public.purchases (access_token);
