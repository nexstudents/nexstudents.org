-- ============================================================================
-- 017 · Scores on progress, and the full record of each lesson
--
-- 🔁 REVERSES the schema's "THIS STORES NO GRADES" (2026-09-06). Paul,
-- 2026-09-11, chose to keep scores: other families on a public site have no
-- HomeschoolGrades, so NexStudents is their record. Kolten's still go to HG.
--
-- Progress now FOLLOWS THE ACTIVE STUDENT (nav.js nsProg*): the lesson pages
-- keep writing localStorage exactly as before (ns:done:<id>, ns:prog:<id>),
-- and the panel copies those records into this table for the student who is
-- on, and back out again on any device.
--   detail  {done: <the ns:done JSON>, prog: <the ns:prog JSON>} - verbatim,
--           so a lesson restores precisely, whichever shape it uses
--   score / total  copied out of ns:done for the Progress view to add up.
--           Maths, integers and English are retry-until-right and carry no
--           score; they stay null and count as finished, never as a mark.
-- ============================================================================

alter table public.progress add column if not exists score integer;
alter table public.progress add column if not exists total integer;

alter table public.progress drop constraint if exists progress_score_ok;
alter table public.progress add constraint progress_score_ok
  check ((score is null and total is null)
      or (score >= 0 and total > 0 and score <= total));

alter table public.progress drop constraint if exists progress_detail_ok;
alter table public.progress add constraint progress_detail_ok
  check (detail is null or (jsonb_typeof(detail) = 'object' and length(detail::text) <= 20000));
