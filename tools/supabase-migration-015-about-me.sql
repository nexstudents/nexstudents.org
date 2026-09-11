-- ============================================================================
-- 015 · About Me on a student profile
--
-- Paul, 2026-09-11, after walking through the HomeschoolGrades student
-- profile: "right now my main focus is the profile side." He picked the
-- student's own My Profile, where the STUDENT writes their About Me and picks
-- their Theme Color; name, birthday, male/female and grade stay parent-only.
--
-- ONE jsonb column, keys fixed by the panel (tools/nav.js AD_ABOUT):
--   me · color · food · animal · subject · game · grow_up · best_homeschool
-- ⚠️ jsonb, not eight columns: the prompts are copy, and changing a prompt
-- must not need a migration. The size cap and the object check are what stop
-- a console from parking a novel or an array here.
-- ⚠️ No new policy. "own students" (schema.sql) already lets the signed-in
-- account update its own rows, and the session is the parent's either way.
-- ============================================================================

alter table public.students add column if not exists about jsonb not null default '{}'::jsonb;

alter table public.students drop constraint if exists students_about_ok;
alter table public.students add constraint students_about_ok
  check (jsonb_typeof(about) = 'object' and length(about::text) <= 4000);
