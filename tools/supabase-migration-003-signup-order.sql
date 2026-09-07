-- ============================================================================
-- 003 · One signup trigger, because two of them raced
--
-- 🚨 THE BUG THIS FIXES WOULD HAVE BROKEN EVERY SIGNUP BY A PREVIOUS GUEST.
-- Migration 001 added `on_auth_user_created` (makes the accounts row) and 002
-- added `on_auth_user_claim_purchases` (attaches guest purchases). Both fire on
-- insert into auth.users, and POSTGRES FIRES TRIGGERS IN ALPHABETICAL ORDER BY
-- NAME. "claim" sorts before "created", so the claim ran first and tried to set
-- purchases.account_id to an accounts row that did not exist yet:
--
--   ERROR 23503: insert or update on table "purchases" violates foreign key
--   constraint "purchases_account_id_fkey"
--   Key (account_id)=(09744225-...) is not present in table "accounts".
--
-- The signup would have failed outright -- for the one person who had already
-- paid. Caught only by actually inserting a guest purchase and then a user
-- inside a transaction and rolling back; nothing about the schema looked wrong.
--
-- ⚠️ THE FIX IS NOT TO RENAME THE TRIGGER so it sorts later. That leaves the
-- next person one alphabet accident away from the same outage. One trigger,
-- doing both things in the only order that works.
-- ============================================================================

drop trigger if exists on_auth_user_created         on auth.users;
drop trigger if exists on_auth_user_claim_purchases on auth.users;
drop function if exists public.claim_purchases();

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  -- 1. the account must exist first: purchases.account_id points at it
  insert into public.accounts (id) values (new.id) on conflict do nothing;

  -- 2. only then can a guest purchase be attached
  -- ⚠️ lower() on both sides: somebody who typed "Paul@X.com" at checkout and
  -- "paul@x.com" at signup is the same customer and must get their purchase.
  if new.email is not null then
    update public.purchases
       set account_id = new.id
     where account_id is null
       and lower(email) = lower(new.email);
  end if;

  return new;
end; $$;

-- Fires on insert AND on an email change, so a purchase still finds its owner
-- if somebody signs up with one address and later corrects it.
create trigger on_auth_user_created
  after insert or update of email on auth.users
  for each row execute function public.handle_new_user();
