-- ============================================================================
-- NexStudents · Supabase schema
-- Run this once in the Supabase SQL editor (Dashboard -> SQL Editor -> New query).
--
-- 🚨 NEXSTUDENTS IS A PUBLIC SITE WITH REAL BUYERS. Kolten is the first test
-- student, not the spec. Paul, 2026-09-06: "this is not for only Kolten ...
-- nexstudents is the lessons and a public site for other users to do lessons
-- too. HG is our own private transcript system and tracking."
-- So: one ACCOUNT can hold several STUDENTS, and a purchase belongs to the
-- account forever. localStorage could express neither.
--
-- 🚨 THIS STORES NO GRADES. Progress here is "what was done on the site" and it
-- is EXPORTED into HomeschoolGrades, which stays the transcript. Two systems
-- holding scores is two systems disagreeing about the same week.
-- ============================================================================

-- ── extensions ──────────────────────────────────────────────────────────────
create extension if not exists "pgcrypto";

-- ============================================================================
-- 1. ACCOUNTS
-- Supabase Auth owns `auth.users`. This is the row WE own alongside it, for
-- anything auth does not carry.
-- ⚠️ Never duplicate the email here. auth.users is the source of truth for it;
-- a second copy drifts the first time somebody changes it.
-- ============================================================================
create table if not exists public.accounts (
  id          uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at  timestamptz not null default now()
);

alter table public.accounts enable row level security;

create policy "read own account"
  on public.accounts for select
  using (auth.uid() = id);

create policy "update own account"
  on public.accounts for update
  using (auth.uid() = id);

-- A row appears the moment somebody signs up, so the app never has to
-- special-case "logged in but has no account row yet".
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.accounts (id) values (new.id) on conflict do nothing;
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================================================
-- 2. STUDENTS
-- 🚨 A FAMILY HAS MORE THAN ONE CHILD. This is the thing the old localStorage
-- design could not represent at all: progress was global to the browser, so two
-- siblings on one laptop overwrote each other silently.
-- ============================================================================
create table if not exists public.students (
  id         uuid primary key default gen_random_uuid(),
  account_id uuid not null references public.accounts(id) on delete cascade,
  name       text not null,
  grade      text,                      -- free text: "3", "K", "7". Display only.
  created_at timestamptz not null default now()
);

create index if not exists students_account_idx on public.students(account_id);
alter table public.students enable row level security;

create policy "own students"
  on public.students for all
  using (account_id = auth.uid())
  with check (account_id = auth.uid());

-- ============================================================================
-- 3. PROGRESS
-- One row per student per lesson. `state` mirrors what the site already paints:
-- not-started / part / done -- see progressScript in tools/build-pages.js.
--
-- ⚠️ `lesson_id` is the site's own id ("maths/long-division"), NOT a foreign
-- key. Lessons live in the generated site, not the database, and a lesson that
-- is renamed must not delete a child's history.
-- ⚠️ NO SCORES HERE. See the header.
-- ============================================================================
create table if not exists public.progress (
  student_id uuid not null references public.students(id) on delete cascade,
  lesson_id  text not null,
  state      text not null default 'part'
             check (state in ('part','done')),
  detail     jsonb,                     -- part-way position, reading minutes etc
  updated_at timestamptz not null default now(),
  primary key (student_id, lesson_id)
);

create index if not exists progress_student_idx on public.progress(student_id);
alter table public.progress enable row level security;

-- Reached through the student, so a parent can only ever see their own children.
create policy "own progress"
  on public.progress for all
  using (exists (select 1 from public.students s
                  where s.id = progress.student_id and s.account_id = auth.uid()))
  with check (exists (select 1 from public.students s
                  where s.id = progress.student_id and s.account_id = auth.uid()));

-- ============================================================================
-- 4. PURCHASES
-- 🚨 THE WHOLE REASON A LOGIN EXISTS. Somebody buys a pack, clears their
-- browser, and must still own it. This row is that promise.
--
-- 🚨 NO CLIENT MAY EVER WRITE HERE. There is deliberately no INSERT or UPDATE
-- policy, so even a signed-in user cannot grant themselves a product. Rows are
-- written by the Stripe webhook using the SERVICE ROLE key, which bypasses RLS
-- and lives ONLY on the server. If that key is ever in front-end code, anyone
-- can give themselves every product for free.
-- ============================================================================
create table if not exists public.purchases (
  id            uuid primary key default gen_random_uuid(),
  account_id    uuid not null references public.accounts(id) on delete cascade,
  product       text not null,          -- e.g. "us-history-semester-1"
  stripe_session text unique,           -- unique: makes a replayed webhook a no-op
  amount_cents  integer,
  bought_at     timestamptz not null default now()
);

create index if not exists purchases_account_idx on public.purchases(account_id);
alter table public.purchases enable row level security;

-- SELECT only. Writes come from the webhook, never the browser.
create policy "read own purchases"
  on public.purchases for select
  using (account_id = auth.uid());

-- ============================================================================
-- 5. THE HOMESCHOOLGRADES BRIDGE
-- Paul: "we need a way to see what he has done to import them into homeschool
-- grades for his progress." One flat view, easy to export as CSV.
-- ⚠️ It reports completion and dates. It does NOT report marks, because this
-- system does not hold any.
-- ============================================================================
create or replace view public.progress_export as
  select s.name  as student,
         p.lesson_id,
         p.state,
         p.updated_at
    from public.progress p
    join public.students s on s.id = p.student_id;

-- A view runs as its owner, so RLS on the tables underneath is what protects it.
alter view public.progress_export set (security_invoker = true);
