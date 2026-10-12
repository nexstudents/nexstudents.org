-- ============================================================================
-- 024 · Entitlements: what an account OWNS (ROADMAP 42, the first slice)
--
-- Paul, 2026-10-12: lesson homework sheets are paid on their own and free to
-- whoever owns the lesson; sold singly, as unit packs, and as all of 7th grade.
-- One sheet, two ways to own it. This table is the "owns" half.
--
--   scope   what is owned. Scopes NEST, wider covers narrower:
--             all                      everything
--             grade:7                  every lesson and sheet in grade 7
--             grade:7.maths            one subject in one grade
--             unit:grade-7/maths/2     one unit (a unit pack)
--             lesson:maths/dividing-decimals   one lesson (covers its sheets)
--             sheet:dividing-decimals-homework one sheet bought on its own
--           A sheet carries the list of scopes that cover it (R2 metadata on
--           the gated file); the worker asks "does this account own any one".
--   source  how it was granted: 'admin' by hand, later 'stripe' / 'paypal'.
--
-- 🚨 THE BROWSER CAN READ ITS OWN ROWS AND NOTHING ELSE, AND CAN WRITE NOTHING.
-- There is no insert, update or delete policy, so only the SQL editor (and
-- later the payment webhook, through a security-definer function) can grant a
-- scope. A parent cannot give themselves grade 7 from the console.
-- The worker checks ownership by reading this table WITH THE PARENT'S OWN
-- TOKEN, so RLS does the "is it yours" part and the worker never holds a
-- privileged key.
--
-- Entitlements belong to the ACCOUNT (the parent), never a student: every
-- student under the account shares what the family bought.
--
-- Applied: 2026-10-12 in the SQL editor (Paul pressed Run). Verified: a signed-out
-- select returns [] (RLS), and Paul's account opens the gated sheet through /sheet.
-- ============================================================================

create table if not exists public.entitlements (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  scope      text not null check (scope ~ '^(all|grade:[0-9k]+(\.[a-z]+)?|unit:[a-z0-9/-]{1,80}|lesson:[a-z0-9/-]{1,120}|sheet:[a-z0-9-]{1,120})$'),
  source     text not null default 'admin' check (source in ('admin', 'stripe', 'paypal', 'free')),
  granted_at timestamptz not null default now(),
  unique (user_id, scope)
);

create index if not exists entitlements_user_idx on public.entitlements (user_id);

alter table public.entitlements enable row level security;

drop policy if exists "own entitlements select" on public.entitlements;
create policy "own entitlements select"
  on public.entitlements for select
  using (user_id = auth.uid());

-- Grant grade 7 to the account Kolten's profile lives under, so his homework
-- keeps opening when the first sheet is gated.
insert into public.entitlements (user_id, scope, source)
select s.account_id, 'grade:7', 'admin'
  from public.students s
 where s.id = 'e8de0e8c-c30b-468e-8ff4-44d375946b84'
on conflict (user_id, scope) do nothing;

-- Shows the grant took: one row, scope grade:7.
select scope, source, granted_at from public.entitlements;
