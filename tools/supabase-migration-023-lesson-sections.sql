-- ============================================================================
-- 023 · Lesson section switches, per student (ROADMAP 92)
--
-- Paul, 2026-10-12: "if the teacher only wants the first set of questions but
-- not the second or even to turn the worksheets off" ... "have a checkbox that
-- turns on and off only to this lesson or this entire subject for this grade."
-- A parent switches sections Off PER STUDENT inside the lesson's Teacher Notes.
-- A section that is Off simply disappears for that student, and every score
-- counts only the sections left On.
--
--   scope      'lesson'  = this one lesson
--              'subject' = every lesson of one subject at one grade
--   scope_key  lesson:  the site's own id ("maths/long-division"), the SAME id
--                       progress and lesson_videos use, and like them NOT a
--                       foreign key: lessons live in the generated site.
--              subject: "grade-7/maths" (grade folder + subject folder).
--   hidden     the section keys that are Off. Generic on purpose, so one
--              setting means the same thing in every lesson of a subject:
--                set1..set9  question sets in page order (Part One, Part Two)
--                vocab       the word cards
--                work        Your Turn / worked problems
--                homework    the footer homework button
--              Empty array = everything On (it still records "this lesson
--              overrides the subject setting").
--
-- A lesson row beats a subject row for that lesson; the page does the merge.
--
-- 🚨 RLS reaches a row through its STUDENT, with the exact ownership test
-- lesson_videos uses, so an account only ever reads or writes its own
-- students' switches. Update IS allowed (unlike videos): a save is an upsert on
-- (student_id, scope, scope_key).
-- 🚨 WHO IS ACTIVE IS A HOUSEHOLD SETTING, NOT A PERMISSION (BEHAVIOR.md). The
-- session is the parent's either way, so the browser asks for every student's
-- rows and applies the active one's.
--
-- The page degrades quietly until this is run: Teacher Notes says "Lesson
-- sections aren't switched on yet." and the lesson shows everything.
--
-- Applied: 2026-10-12 in the SQL editor (Paul pressed Run). Verified: select answers 200, a signed-out insert is refused by RLS.
-- ============================================================================

create table if not exists public.student_sections (
  id         uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id) on delete cascade,
  scope      text not null check (scope in ('lesson', 'subject')),
  scope_key  text not null check (length(scope_key) between 1 and 120),
  hidden     text[] not null default '{}'
             check (cardinality(hidden) <= 12
                    and hidden <@ array['set1','set2','set3','set4','set5','set6','set7','set8','set9',
                                        'vocab','work','homework']::text[]),
  updated_at timestamptz default now(),
  unique (student_id, scope, scope_key)
);

create index if not exists student_sections_student_idx
  on public.student_sections (student_id);

alter table public.student_sections enable row level security;

drop policy if exists "own student sections select" on public.student_sections;
drop policy if exists "own student sections insert" on public.student_sections;
drop policy if exists "own student sections update" on public.student_sections;
drop policy if exists "own student sections delete" on public.student_sections;

create policy "own student sections select"
  on public.student_sections for select
  using (exists (select 1 from public.students s
                  where s.id = student_sections.student_id and s.account_id = auth.uid()));

create policy "own student sections insert"
  on public.student_sections for insert
  with check (exists (select 1 from public.students s
                  where s.id = student_sections.student_id and s.account_id = auth.uid()));

create policy "own student sections update"
  on public.student_sections for update
  using (exists (select 1 from public.students s
                  where s.id = student_sections.student_id and s.account_id = auth.uid()))
  with check (exists (select 1 from public.students s
                  where s.id = student_sections.student_id and s.account_id = auth.uid()));

create policy "own student sections delete"
  on public.student_sections for delete
  using (exists (select 1 from public.students s
                  where s.id = student_sections.student_id and s.account_id = auth.uid()));

-- The browser role, not anon: a signed-out visitor has no students to own.
grant select, insert, update, delete on public.student_sections to authenticated;
