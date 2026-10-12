-- ─────────────────────────────────────────────────────────────────────────────
-- Migration 022 — lesson_videos takes any video, not only YouTube (2026-10-12)
--
-- Paul, 2026-10-12: "technically I think it can be any kind of video not just
-- YouTube videos." A parent pastes a YouTube, Vimeo or Google Drive link, or a
-- direct https link to a video file. `kind` says which; `video_id` holds what that
-- kind's player needs, and the check below holds each kind to its own shape, so a
-- row can never carry something the page would hand to an iframe or <video> blind.
--
--   youtube  11-character id                 (the old rule, unchanged)
--   vimeo    numeric id, optional /hash       (unlisted videos carry a hash)
--   drive    Google Drive file id             (the file must be shared by link)
--   file     https address ending .mp4 .webm .m4v .mov
--
-- Existing rows are all YouTube and take the default. The page reads select=* and
-- sends `kind` only when it isn't youtube, so YouTube saves never depended on this.
--
-- Applied: 2026-10-12 in the SQL editor (Paul pressed Run). Verified: select=kind answers 200.
-- ─────────────────────────────────────────────────────────────────────────────

alter table public.lesson_videos add column if not exists kind text not null default 'youtube';

alter table public.lesson_videos drop constraint if exists lesson_videos_video_id_check;
alter table public.lesson_videos drop constraint if exists lesson_videos_kind_ok;
alter table public.lesson_videos add constraint lesson_videos_kind_ok check (
     (kind = 'youtube' and video_id ~ '^[A-Za-z0-9_-]{11}$')
  or (kind = 'vimeo'   and video_id ~ '^[0-9]{6,12}(/[0-9a-f]{6,20})?$')
  or (kind = 'drive'   and video_id ~ '^[A-Za-z0-9_-]{20,80}$')
  or (kind = 'file'    and length(video_id) <= 800
                       and video_id ~* '^https://[^\s"''<>]{4,800}\.(mp4|webm|m4v|mov)(\?[^\s"''<>]*)?$')
);
