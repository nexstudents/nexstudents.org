-- ============================================================================
-- 004 · Everything goes through the cart, including free items
--
-- Paul, 2026-09-06: "even if a free item is purchased it goes to the cart and
-- they have to check it out either as guest or logged in."
--
-- Good for the business: a free download stops being anonymous and becomes a
-- known customer with an email. But it opens a hole that has to be closed here.
--
-- 🚨 THE HOLE: a paid item is recorded by the Stripe webhook, which holds the
-- secret key. A FREE item never touches Stripe, so something else has to write
-- that row -- and if the browser could write it, anyone could open the console
-- and grant themselves the $14 US History bundle.
-- The fix is that the SERVER decides what is free. `products` is the price list,
-- and `checkout_free()` refuses anything with a price on it.
-- ============================================================================

-- ── 1. the price list ───────────────────────────────────────────────────────
-- ⚠️ THIS IS THE ONLY PLACE A PRICE IS TRUSTED. The page can display whatever
-- it likes; the database decides what is actually free. Never take a price from
-- the client -- that is the whole reason this table exists.
create table if not exists public.products (
  slug        text primary key,           -- "us-history-semester-1"
  title       text not null,
  price_cents integer not null default 0 check (price_cents >= 0),
  active      boolean not null default true,
  created_at  timestamptz not null default now()
);

alter table public.products enable row level security;

-- Anyone may read the catalogue, signed in or not. It is a shop window.
drop policy if exists "read products" on public.products;
create policy "read products"
  on public.products for select
  using (active);
-- ⚠️ No insert/update/delete policy: the catalogue is edited in the dashboard
-- or by the service role, never by a visitor.

-- Seed what the site sells today. Re-runnable.
insert into public.products (slug, title, price_cents) values
  ('us-history-semester-1', 'Complete Units 1-5: 8th Grade US History Bundle', 1400),
  ('manuscript-alphabet',   'Manuscript Alphabet: Stroke Order and Direction',   0),
  ('cursive-alphabet',      'Cursive Alphabet: Trace and Practice',              0),
  ('multiplication-drill-100','100 Multiplication Facts: Speed Drill',           0),
  ('division-drill-100',    '100 Division Facts: Speed Drill',                   0),
  ('lewis-and-clark',       'Lewis and Clark: The Corps of Discovery',           0),
  ('thirteen-colonies',     'The Thirteen Colonies',                             0),
  ('boston-tea-party',      'The Boston Tea Party',                              0),
  ('weekly-spelling-test',  'Weekly Spelling Test',                              0),
  ('spelling-flashcards',   '3rd Grade Spelling Flashcards',                     0),
  ('newtons-laws-of-motion','Newton''s Three Laws of Motion',                     0)
on conflict (slug) do update
  set title = excluded.title, price_cents = excluded.price_cents;

-- ── 2. free checkout ────────────────────────────────────────────────────────
-- 🚨 `security definer` so it can write to purchases, which no client may touch.
-- 🚨 IT RE-READS THE PRICE FROM THE DATABASE and refuses anything not zero. The
-- caller passes a slug and an email, never a price. That is what stops the
-- console trick: calling this with 'us-history-semester-1' raises an exception.
-- ⚠️ Idempotent on (email, product): clicking checkout twice, or a double
-- submit, must not create two rows.
create or replace function public.checkout_free(p_slug text, p_email text)
returns public.purchases
language plpgsql security definer set search_path = public as $$
declare
  v_price int;
  v_row   public.purchases;
begin
  if p_email is null or position('@' in p_email) = 0 then
    raise exception 'a valid email is required';
  end if;

  select price_cents into v_price
    from public.products where slug = p_slug and active;

  if v_price is null then
    raise exception 'unknown product %', p_slug;
  end if;

  -- the line that matters
  if v_price <> 0 then
    raise exception 'product % is not free', p_slug;
  end if;

  -- already has it? hand back the existing row rather than duplicating
  select * into v_row from public.purchases
   where lower(email) = lower(p_email) and product = p_slug
   limit 1;
  if found then return v_row; end if;

  insert into public.purchases (account_id, email, product, amount_cents)
  values (auth.uid(), lower(p_email), p_slug, 0)
  returning * into v_row;

  return v_row;
end; $$;

-- Guests are not signed in, so `anon` must be allowed to call it.
grant execute on function public.checkout_free(text, text) to anon, authenticated;

-- ⚠️ The cart itself is NOT a table. It lives in the browser until checkout,
-- because a cart nobody has paid for is not worth a round trip, and a signed-out
-- visitor has no row to attach one to. Only the completed purchase is stored.
