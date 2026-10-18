-- 026 · two $2 sheets, 2026-10-18 (Paul)
-- 6th grade Math, Part 1 and Part 2. The PDFs are in R2 at paid/<slug>.pdf.
-- The price lives here, not in the page: /checkout reads this row.
-- (025 is on the shop-wip branch, not yet merged.)
insert into public.products (slug, title, price_cents) values
  ('multiplying-and-dividing-decimals', 'Multiplying and Dividing Decimals', 200),
  ('metric-system-conversions',         'The Metric System',                 200)
on conflict (slug) do update
  set title = excluded.title, price_cents = excluded.price_cents;
