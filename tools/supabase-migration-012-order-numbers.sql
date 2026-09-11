-- ============================================================================
-- 012 · Order numbers
--
-- Paul, 2026-09-10, of the Lizzie Peirce account: "i want it to match for the
-- type of downloads, the checkout and even the side account and order history".
-- Her orders read "Order #44807". Ours had no number at all: the account page
-- grouped rows into orders by the MINUTE they were bought, which was a guess.
--
-- One number per checkout, on every row of that checkout:
--   PAID  - the rows share a stripe_session, so they share its number.
--   FREE  - the rows have no session. checkout_free() is called once per sheet,
--           ONE AT A TIME (ns-account.js), so a free row joins the order this
--           email opened in the last two minutes, or starts a new one.
--
-- 🚨 A TRIGGER, NOT A CHANGE TO record_purchase() OR checkout_free(). Both keep
-- their exact signatures, so the Worker and the cart do not change shape, and a
-- row can never be written without a number whichever path writes it.
-- ⚠️ POSTGRES FIRES TRIGGERS ALPHABETICALLY (see CLAUDE.md). This is the only
-- trigger on purchases today; if another is added, check the order.
-- ============================================================================

create sequence if not exists public.order_no_seq start 1001;

alter table public.purchases add column if not exists order_no bigint;

-- ── 1. backfill what already exists ─────────────────────────────────────────
-- Same grouping the account page used: the session for paid, the email and
-- minute for free. Numbered oldest first, so the first order ever is #1001.
with keyed as (
  select id, bought_at,
         coalesce(stripe_session,
                  lower(email) || '|' || to_char(date_trunc('minute', bought_at), 'YYYYMMDDHH24MI')) as k
    from public.purchases
   where order_no is null
), firsts as (
  select k, min(bought_at) as first_at from keyed group by k
), numbered as (
  select k, nextval('public.order_no_seq') as n
    from (select k from firsts order by first_at) o
)
update public.purchases p
   set order_no = numbered.n
  from keyed join numbered on numbered.k = keyed.k
 where p.id = keyed.id;

-- ── 2. every new row gets one ───────────────────────────────────────────────
create or replace function public.assign_order_no()
returns trigger
language plpgsql security definer set search_path = public as $$
declare
  v bigint;
begin
  if new.order_no is not null then
    return new;
  end if;

  if new.stripe_session is not null then
    select order_no into v from public.purchases
     where stripe_session = new.stripe_session and order_no is not null
     limit 1;
  else
    select order_no into v from public.purchases
     where lower(email) = lower(new.email)
       and stripe_session is null
       and order_no is not null
       and bought_at > now() - interval '2 minutes'
     order by bought_at desc
     limit 1;
  end if;

  new.order_no := coalesce(v, nextval('public.order_no_seq'));
  return new;
end; $$;

drop trigger if exists purchases_order_no on public.purchases;
create trigger purchases_order_no
  before insert on public.purchases
  for each row execute function public.assign_order_no();

-- ── 3. my_downloads() hands the number back ─────────────────────────────────
-- ⚠️ DROP, THEN CREATE: the return columns change. Same body as 008 otherwise.
drop function if exists public.my_downloads();

create function public.my_downloads()
returns table (product text, title text, token uuid, bought_at timestamptz,
               amount_cents integer, order_no bigint)
language plpgsql security definer set search_path = public as $$
declare
  v_uid   uuid := auth.uid();
  v_email text;
begin
  if v_uid is null then
    return;
  end if;
  select lower(u.email) into v_email from auth.users u where u.id = v_uid;

  return query
    select p.product, pr.title, p.access_token, p.bought_at, p.amount_cents, p.order_no
      from public.purchases p
      join public.products pr on pr.slug = p.product
     where p.account_id = v_uid
        or (v_email is not null and lower(p.email) = v_email)
     order by p.bought_at desc;
end; $$;

revoke all on function public.my_downloads() from public, anon;
grant execute on function public.my_downloads() to authenticated;
