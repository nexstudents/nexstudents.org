-- ============================================================================
-- 007 · One Checkout Session, several products
--
-- ROADMAP 37. Paul, 2026-09-09: "it should just have an add to the cart button
-- where they purchase in the cart." A cart holds several sheets and pays once,
-- so one Stripe session now owns one purchase row PER PRODUCT.
--
-- 🚨 WHY THE UNIQUE KEY HAD TO MOVE. The schema made stripe_session unique on
-- its own, which is what made a replayed webhook harmless. With two products in
-- one session the second insert hit that key and was silently dropped by
-- `on conflict do nothing`: the buyer paid for two sheets and got one.
-- The replay protection is KEPT, one level finer: (stripe_session, product).
-- ============================================================================

-- ── 1. the key ──────────────────────────────────────────────────────────────
-- The column constraint from supabase-schema.sql gets Postgres' default name.
alter table public.purchases drop constraint if exists purchases_stripe_session_key;

-- ⚠️ NULLs are distinct in a unique index, so every FREE purchase (no session)
-- still inserts freely. That is the behaviour the old column key had too.
create unique index if not exists purchases_session_product_key
  on public.purchases (stripe_session, product);

-- ── 2. record_purchase, idempotent per PRODUCT ──────────────────────────────
-- Same signature as 006, so the Worker call does not change shape. Only the
-- two lookups and the conflict target move from (session) to (session, slug).
create or replace function public.record_purchase(
  p_secret  text,
  p_slug    text,
  p_email   text,
  p_session text,
  p_amount  integer
) returns uuid
language plpgsql security definer set search_path = public as $$
declare
  v_expected text;
  v_token    uuid;
  v_account  uuid;
begin
  select purchase_secret into v_expected from public.webhook_config where id = 1;

  -- ⚠️ A missing config row must FAIL, never pass. See 006.
  if v_expected is null or p_secret is null or p_secret <> v_expected then
    raise exception 'record_purchase: bad secret';
  end if;

  if p_slug is null or p_email is null or p_session is null then
    raise exception 'record_purchase: missing argument';
  end if;

  if not exists (select 1 from public.products
                  where slug = p_slug and active and price_cents > 0) then
    raise exception 'record_purchase: % is not a paid product', p_slug;
  end if;

  -- Already recorded for THIS product in THIS session? Hand back its token.
  select access_token into v_token
    from public.purchases where stripe_session = p_session and product = p_slug;
  if v_token is not null then
    return v_token;
  end if;

  select id into v_account from auth.users where lower(email) = lower(p_email);

  -- ⚠️ p_amount is what THIS product cost, not the session total. The Worker
  -- sends the product's own price_cents per row, so a two-item order does not
  -- record the whole bill against each sheet.
  insert into public.purchases (account_id, product, email, stripe_session, amount_cents)
  values (v_account, p_slug, lower(p_email), p_session, p_amount)
  on conflict (stripe_session, product) do nothing
  returning access_token into v_token;

  if v_token is null then
    select access_token into v_token
      from public.purchases where stripe_session = p_session and product = p_slug;
  end if;

  return v_token;
end; $$;

grant execute on function
  public.record_purchase(text, text, text, text, integer) to anon, authenticated;

-- purchase_by_session() from 006 already returns a TABLE, one row per product,
-- so it needs no change. The thank-you page was the part that read only row 0.
