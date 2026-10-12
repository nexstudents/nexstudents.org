-- ============================================================================
-- 021 · Parent-added videos, per student, per lesson (ROADMAP 92)
--
-- Paul, 2026-10-12: lessons stop shipping YouTube videos inside public pages.
-- A parent or teacher adds them instead, PER STUDENT, inside the lesson's
-- Teacher Notes, so Kolten and Ariana can have different ones. The Visual
-- Panel plays the ACTIVE student's: one video full size, several as tiles in
-- the order the parent added them (a series).
--
--   video_id  the 11-character YouTube id and nothing else. The page builds
--             the youtube-nocookie URL itself, so no link a parent pastes is
--             ever stored or played as typed.
--   start_s   optional start time in seconds (a pasted ?t=90 link)
--   label     optional, 80 characters at most; the page says "Video 1",
--             "Video 2"... when it is empty
--   position  order added. The page sends max + 1; created_at breaks a tie
--   lesson_id the site's own id ("maths/long-division"), the SAME id progress
--             uses and, like progress, NOT a foreign key: lessons live in the
--             generated site, and a renamed lesson must not delete a parent's
--             list. Orphaned rows are harmless.
--
-- 🚨 RLS reaches a row through its STUDENT, with the exact ownership test the
-- "own progress" policy uses, so an account can only ever read, add or remove
-- videos for its own students. There is NO update policy on purpose: a video
-- is added or removed, never edited.
-- 🚨 WHO IS ACTIVE IS A HOUSEHOLD SETTING, NOT A PERMISSION (BEHAVIOR.md). The
-- session is the parent's either way, so the browser asks for every student's
-- rows at once and shows the active one's. That is fine: they are the parent's
-- own rows, and a video is not private from the household.
-- 🚨 12 VIDEOS PER STUDENT PER LESSON, enforced by a trigger, so the cap holds
-- even if someone calls the table directly. The page checks it first and shows
-- a friendly line; this is the backstop.
--
-- The page degrades quietly until this is run: Teacher Notes says "Videos
-- aren't switched on yet." and the Visual Panel behaves as it always did.
--
-- Applied: 2026-10-12 in the SQL editor (Paul pressed Run). Verified: REST answers 200, a signed-out insert is refused by RLS.
-- ============================================================================

create table if not exists public.lesson_videos (
  id         uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id) on delete cascade,
  lesson_id  text not null,
  video_id   text not null check (video_id ~ '^[A-Za-z0-9_-]{11}$'),
  start_s    int  not null default 0 check (start_s >= 0),
  label      text check (length(label) <= 80),
  position   int  not null default 0,
  created_at timestamptz default now()
);

create index if not exists lesson_videos_student_lesson_idx
  on public.lesson_videos (student_id, lesson_id);

alter table public.lesson_videos enable row level security;

drop policy if exists "own lesson videos select" on public.lesson_videos;
drop policy if exists "own lesson videos insert" on public.lesson_videos;
drop policy if exists "own lesson videos delete" on public.lesson_videos;

create policy "own lesson videos select"
  on public.lesson_videos for select
  using (exists (select 1 from public.students s
                  where s.id = lesson_videos.student_id and s.account_id = auth.uid()));

create policy "own lesson videos insert"
  on public.lesson_videos for insert
  with check (exists (select 1 from public.students s
                  where s.id = lesson_videos.student_id and s.account_id = auth.uid()));

create policy "own lesson videos delete"
  on public.lesson_videos for delete
  using (exists (select 1 from public.students s
                  where s.id = lesson_videos.student_id and s.account_id = auth.uid()));

-- The cap. Counts the rows already there, so the 13th insert is the one refused.
-- The message carries "video limit" so the page can word it for a parent.
create or replace function public.lesson_videos_cap()
returns trigger
language plpgsql
set search_path = public, pg_temp
as $$
begin
  if (select count(*) from public.lesson_videos
       where student_id = new.student_id and lesson_id = new.lesson_id) >= 12 then
    raise exception 'video limit: 12 per student per lesson';
  end if;
  return new;
end;
$$;

drop trigger if exists lesson_videos_cap on public.lesson_videos;
create trigger lesson_videos_cap
  before insert on public.lesson_videos
  for each row execute function public.lesson_videos_cap();

-- The browser role, not anon: a signed-out visitor has no students to own.
grant select, insert, delete on public.lesson_videos to authenticated;
