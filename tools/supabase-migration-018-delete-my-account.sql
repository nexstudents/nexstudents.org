-- ============================================================================
-- 018 · Delete My Account, with the receipts kept (and Turn PIN Off, part 4)
--
-- Paul, 2026-09-11: "i dont see a way to deactivate my account. there is no way
-- to remove it and this would help me test it and also allow users to remove
-- themselves from the website."
-- And on what happens to past orders: "yea i like number one in case they
-- reactivate it possibly it still recovers."
--
-- WHAT A DELETE DOES
--   auth.users row    gone (the sign-in itself)
--   accounts          gone  (cascade from auth.users)
--   students          gone  (cascade from accounts)
--   progress          gone  (cascade from students)
--   pins              gone  (cascade from accounts)
--   purchases         KEPT, account_id set to null, email kept
--
-- 🚨 BEFORE THIS MIGRATION purchases_account_id_fkey WAS "ON DELETE CASCADE"
-- (checked live 2026-09-11). Deleting any account would have wiped its orders,
-- which also wipes the Stripe-side trail we answer refund questions from.
--
-- ⚠️ WHY A DETACHED ORDER COMES BACK: it becomes exactly a guest purchase, an
-- order with an email and no account. handle_new_user() (migration 003) claims
-- every such row at sign-up by matching the email, and my_downloads()
-- (migration 012) shows them even before that. So signing up again with the
-- same email brings every order back, and nothing new is needed for it.
-- ============================================================================

-- ── 1. Every order keeps an email, so a detached one can still find its owner
update public.purchases p
   set email = lower(u.email)
  from auth.users u
 where p.account_id = u.id
   and p.email is null
   and u.email is not null;

-- ── 2. Orders outlive the account ───────────────────────────────────────────
alter table public.purchases drop constraint purchases_account_id_fkey;
alter table public.purchases
  add constraint purchases_account_id_fkey
  foreign key (account_id) references public.accounts(id) on delete set null;

-- ── 3. delete_my_account() ──────────────────────────────────────────────────
-- Deletes the CALLER's own sign-in, nobody else's: the id comes from the login
-- token, never from an argument.
-- 🚨 FRESH SIGN-IN REQUIRED. A phone left unlocked on the kitchen table must
-- not be one tap from wiping a family's progress. The panel asks for the
-- password and signs in again first; the token's amr claim then shows a
-- password (or, later, Google) sign-in from the last 10 minutes, the same
-- test set_pin() uses for Forgot PIN (migration 014).
create or replace function public.delete_my_account()
returns void
language plpgsql security definer set search_path = public, auth as $$
declare
  v_uid uuid := auth.uid();
  fresh boolean;
begin
  if v_uid is null then
    raise exception 'not signed in';
  end if;
  select exists (
    select 1 from jsonb_array_elements(coalesce(auth.jwt() -> 'amr', '[]'::jsonb)) a
     where a ->> 'method' in ('password', 'oauth')
       and to_timestamp((a ->> 'timestamp')::bigint) > now() - interval '10 minutes'
  ) into fresh;
  if not fresh then
    raise exception 'sign in again to delete the account';
  end if;
  delete from auth.users where id = v_uid;
end; $$;

revoke all on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;

-- ── 4. clear_pin(): TURN PIN OFF ────────────────────────────────────────────
-- Paul, 2026-09-11: "if you're going to say pin on then you maybe need an
-- option to turn pin off." Takes the CURRENT PIN, or a fresh password sign-in
-- (the Forgot PIN route), exactly like set_pin().
-- 🚨 A WRONG PIN RETURNS FALSE, IT DOES NOT RAISE. Raising would roll back the
-- failed-try count, and a student could guess all 10,000 PINs for free. So the
-- check goes through check_pin(), which counts the miss and locks after five.
create or replace function public.clear_pin(old_pin text default null, profile uuid default null)
returns boolean
language plpgsql security definer set search_path = public, extensions as $$
declare
  k     uuid := public.pin_key(profile);
  fresh boolean;
begin
  select exists (
    select 1 from jsonb_array_elements(coalesce(auth.jwt() -> 'amr', '[]'::jsonb)) a
     where a ->> 'method' in ('password', 'oauth')
       and to_timestamp((a ->> 'timestamp')::bigint) > now() - interval '10 minutes'
  ) into fresh;
  if not fresh and not public.check_pin(old_pin, profile) then
    return false;
  end if;
  delete from public.pins where account_id = auth.uid() and profile_key = k;
  return true;
end; $$;

revoke all on function public.clear_pin(text, uuid) from public, anon;
grant execute on function public.clear_pin(text, uuid) to authenticated;
