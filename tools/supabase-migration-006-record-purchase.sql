-- ============================================================================
-- 006 · Recording a paid purchase
--
-- Paul, 2026-09-09: "I want it embedded into the checkout."
-- Embedded Checkout means the buyer pays without leaving nexstudents.org, and
-- the only thing that learns the payment cleared is the Stripe webhook. This is
-- the function that webhook calls.
--
-- 🚨 WHY NOT JUST GIVE THE WORKER THE SERVICE-ROLE KEY.
-- `r2-worker.js` says it plainly and it is still right: "Putting the SECRET key
-- in a Worker would hand the whole database to anything that ever finds a bug
-- in this file." The webhook genuinely needs to WRITE to purchases, which no
-- anon caller may do -- so the write is wrapped in one `security definer`
-- function guarded by a shared secret instead.
--
-- The secret is in the Worker either way. The difference is blast radius: the
-- service-role key is every table, forever; this is one insert into one table.
-- ⚠️ So do NOT "simplify" this later by moving the service key into the Worker.
-- That trade was considered and deliberately refused.
-- ============================================================================

-- ── 1. where the shared secret lives ────────────────────────────────────────
-- 🚨 RLS ON, AND DELIBERATELY NO POLICY AT ALL. A table with RLS enabled and no
-- policy is readable by nobody through the Data API -- not anon, not a signed-in
-- user. `security definer` functions bypass RLS, which is exactly and only how
-- record_purchase() below gets at it.
create table if not exists public.webhook_config (
  id              integer primary key default 1 check (id = 1),
  purchase_secret text not null
);

alter table public.webhook_config enable row level security;
revoke all on public.webhook_config from anon, authenticated;

-- ⚠️ SET THE REAL VALUE BY HAND in the SQL editor, once, and put the same string
-- in the Worker as PURCHASE_SECRET. It is not in this file on purpose: this file
-- is in a public GitHub repo.
--   insert into public.webhook_config (id, purchase_secret)
--   values (1, '<a long random string>')
--   on conflict (id) do update set purchase_secret = excluded.purchase_secret;

-- ── 2. the catalogue entry for the animal cell sheet ────────────────────────
-- 🚨 THE PRICE LIVES HERE, NOT IN STRIPE AND NOT IN THE PAGE. /checkout reads
-- this row to build the Checkout Session, the same way checkout_free() reads it
-- to refuse a paid item. One number, one place.
insert into public.products (slug, title, price_cents) values
  ('animal-cell', 'Animal Cell: Label the Parts', 200)
on conflict (slug) do update
  set title = excluded.title, price_cents = excluded.price_cents;

-- ── 3. recording the purchase ───────────────────────────────────────────────
-- Returns the access_token, so the webhook could mail it later if an email
-- sender is ever added. Nothing uses the return value today.
--
-- 🚨 IDEMPOTENT ON stripe_session. Stripe retries a webhook whenever the
-- endpoint answers anything but 2xx, and our webhook deliberately answers 500
-- when this call fails. Without the unique index on stripe_session doing the
-- work here, one slow reply would grant the product twice.
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

  -- ⚠️ A missing config row must FAIL, never pass. Comparing against NULL
  -- yields NULL, which is not true, so this is already safe -- but say it out
  -- loud rather than relying on three-valued logic to hold in a later edit.
  if v_expected is null or p_secret is null or p_secret <> v_expected then
    raise exception 'record_purchase: bad secret';
  end if;

  if p_slug is null or p_email is null or p_session is null then
    raise exception 'record_purchase: missing argument';
  end if;

  -- 🚨 THE PRODUCT MUST EXIST AND MUST COST SOMETHING. A free slug arriving
  -- here means the checkout route was bypassed; checkout_free() is that path.
  if not exists (select 1 from public.products
                  where slug = p_slug and active and price_cents > 0) then
    raise exception 'record_purchase: % is not a paid product', p_slug;
  end if;

  -- Already recorded? Hand back the token we already minted.
  select access_token into v_token
    from public.purchases where stripe_session = p_session;
  if v_token is not null then
    return v_token;
  end if;

  -- ⚠️ Lower-cased for the same reason migration 002 indexes it that way:
  -- "Paul@x.com" and "paul@x.com" must be one customer, or a guest who typed a
  -- capital never finds their purchase again.
  select id into v_account from auth.users where lower(email) = lower(p_email);

  insert into public.purchases (account_id, product, email, stripe_session, amount_cents)
  values (v_account, p_slug, lower(p_email), p_session, p_amount)
  on conflict (stripe_session) do nothing
  returning access_token into v_token;

  -- The conflict path returns no row, so read it back. This happens when two
  -- webhook retries land at the same instant.
  if v_token is null then
    select access_token into v_token
      from public.purchases where stripe_session = p_session;
  end if;

  return v_token;
end; $$;

-- 🚨 GRANTED TO anon, AND THAT IS SAFE ONLY BECAUSE OF THE SECRET CHECK ABOVE.
-- The Worker calls this with the PUBLISHABLE key, exactly like redeem_download.
grant execute on function
  public.record_purchase(text, text, text, text, integer) to anon, authenticated;

-- ── 4. reading a purchase back from a Checkout Session ──────────────────────
-- The thank-you page knows its session id from the return_url and nothing else.
-- It needs the token to offer the download. Same shape as redeem_download: you
-- must already hold the session id, and holding it means you just paid.
--
-- ⚠️ A Stripe session id is long and random, so this is a bearer credential the
-- same way the access_token is. It is in the buyer's own URL bar and nowhere
-- else -- it is never emailed, and the page replaces it out of history.
create or replace function public.purchase_by_session(p_session text)
returns table (product text, title text, token uuid)
language plpgsql security definer set search_path = public as $$
begin
  return query
    select p.product, pr.title, p.access_token
      from public.purchases p
      join public.products pr on pr.slug = p.product
     where p.stripe_session = p_session;
end; $$;

grant execute on function public.purchase_by_session(text) to anon, authenticated;
