-- ============================================================================
-- 016 · Reading settings on a profile
--
-- Paul, 2026-09-11, of the Settings view: "the settings looks kind of barren"
-- and, asked what to put there: "you pick for me because we probably need to
-- build this out more and improve later." Picked: reading VOICE, reading
-- SPEED and LESSON COLORS - three settings the lessons already read from
-- localStorage (ns:voice, ns:speed, ns:theme) but only per device. Kept on
-- the profile, they follow the student to any device and switch with them.
--
-- ONE jsonb column, keys fixed by the panel (tools/nav.js adSettings):
--   voice  "male" | "female"             -> ns:voice = "__studio__:<voice>"
--   speed  "0.7" | "0.85" | "1"          -> ns:speed
--   lesson one of the eight THEMES keys  -> ns:theme
-- The account holder has no row; theirs live in user_metadata.settings.
-- ============================================================================

alter table public.students add column if not exists settings jsonb not null default '{}'::jsonb;

alter table public.students drop constraint if exists students_settings_ok;
alter table public.students add constraint students_settings_ok
  check (jsonb_typeof(settings) = 'object' and length(settings::text) <= 1000);
