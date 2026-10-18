-- ============================================================================
-- 025 · Buying a grade: a paid order GRANTS ownership (ROADMAP 64)
--
-- Paul, 2026-10-14: "unit one of each sample can be free" and "they need to
-- create an account so its tied to them. so buying sheets as a guest is fine
-- but buying lessons and extras they need to login or create an account."
--
-- Until now a paid order was RECORDED (purchases) but granted nothing: the
-- entitlements table (024) was filled by hand. This adds the missing step.
--
--   products.grants         the scope a purchase of this product grants, e.g.
--                           'grade:7'. Null for a plain sheet, which is owned
--                           through its purchase row as before.
--   products.needs_account  true for lessons and extras: the Worker refuses to
--                           start a checkout for one without a signed-in buyer.
--
-- 🚨 A TRIGGER, NOT A CHANGE TO record_purchase(). Same reason as 012: the
-- Worker and the cart keep their exact shape, and the grant happens however a
-- purchase row arrives. It fires on INSERT and on a later UPDATE of account_id,
-- so a purchase that only finds its account afterwards is granted then too.
-- ⚠️ POSTGRES FIRES TRIGGERS ALPHABETICALLY. purchases_order_no is BEFORE
-- insert; this one is AFTER, so the two never compete.
--
-- Applied: 2026-10-14 in the SQL editor (Paul pressed Run). Verified: the result
-- row read grade-7-lessons · 7th Grade Lesson Plan · 2500 · grade:7 · true.
-- ============================================================================

alter table public.products add column if not exists grants text
  check (grants is null or grants ~ '^(all|grade:[0-9k]+(\.[a-z]+)?|unit:[a-z0-9/-]{1,80}|lesson:[a-z0-9/-]{1,120})$');
alter table public.products add column if not exists needs_account boolean not null default false;

-- ── 1. the product ──────────────────────────────────────────────────────────
-- Stripe sandbox product prod_VRW8Ae7Fsa8sdi carries the same slug. The PRICE
-- lives here: the Worker reads price_cents and sends it to Stripe.
insert into public.products (slug, title, price_cents, active, grants, needs_account)
values ('grade-7-lessons', '7th Grade Lesson Plan', 2500, true, 'grade:7', true)
on conflict (slug) do update
   set title = excluded.title, price_cents = excluded.price_cents, active = excluded.active,
       grants = excluded.grants, needs_account = excluded.needs_account;

-- ── 2. a purchase with an account grants the product's scope ────────────────
create or replace function public.grant_from_purchase()
returns trigger
language plpgsql security definer set search_path = public as $$
declare
  v_scope text;
begin
  if new.account_id is null then
    return new;
  end if;
  select grants into v_scope from public.products where slug = new.product;
  if v_scope is null then
    return new;
  end if;
  insert into public.entitlements (user_id, scope, source)
  values (new.account_id, v_scope, 'stripe')
  on conflict (user_id, scope) do nothing;
  return new;
end; $$;

drop trigger if exists purchases_zz_grant on public.purchases;
create trigger purchases_zz_grant
  after insert or update of account_id on public.purchases
  for each row execute function public.grant_from_purchase();

-- Shows it took: the product row, with its grant and the account rule.
select slug, title, price_cents, grants, needs_account from public.products where slug = 'grade-7-lessons';
