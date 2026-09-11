-- ============================================================================
-- 014 · Two parent profiles, ten students, a PIN per parent, student settings
--
-- Paul, 2026-09-11, after seeing 013 on a local copy (NOT live yet):
--   "we're going to have a max of 10 total student accounts and a max of two
--    parent accounts ... the student accounts needs more settings in the menu
--    like birthday, male or female, grade level, theme color"
-- His calls the same evening:
--   - EACH PARENT HAS THEIR OWN PIN.
--   - Theme color means BOTH the profile box color and the lesson color theme,
--     from ONE shared set of eight: "i do want 8 differnt theme color types
--     including the graphite color we made". So it is ONE column, "theme",
--     and 013's "avatar" (a separate box colour) is dropped. 013 never went
--     live and holds no rows.
--   - Birthday is OPTIONAL: "they can choose not to add the age".
--   - One + box that asks Parent or Student.
--
-- 🚨 "TWO PARENTS" IS PROFILES, NOT LOGINS. The account holder is parent 1
-- and is NOT a row here (their name lives in auth user_metadata). Parent 2 is
-- a row in public.students with kind = 'parent'. So the caps are 10 student
-- rows and 1 parent row per account. ⚠️ The table keeps the name "students"
-- because every policy, the progress FK and the client already say so; a
-- rename buys nothing but risk. "A profile row" is the honest reading.
--
-- 🚨 THE CAPS ARE A TRIGGER, NOT A HIDDEN BUTTON. The + box disappears when
-- full, but anyone with a console can POST a row, so the database refuses
-- the 11th student and the 2nd parent row itself.
--
-- 🚨 PINS MOVE TO ONE TABLE KEYED (account, profile). The owner's key is the
-- account id itself (no students row has that id, they are separate uuids),
-- so one table and one set of functions serves both parents. Same rule as
-- 013: RLS ON, NO POLICIES, only the security-definer functions touch it.
-- account_pins from 013 is copied across and dropped. 013 never went live.
-- ============================================================================

-- ── 1. profile fields ────────────────────────────────────────────────────────
alter table public.students add column if not exists kind text not null default 'student';
alter table public.students add column if not exists birthday date;
alter table public.students add column if not exists gender text;
alter table public.students drop column if exists avatar;
alter table public.students add column if not exists theme text not null default 'ocean';

alter table public.students drop constraint if exists students_kind_ok;
alter table public.students add constraint students_kind_ok check (kind in ('student', 'parent'));
alter table public.students drop constraint if exists students_gender_ok;
alter table public.students add constraint students_gender_ok check (gender is null or gender in ('male', 'female'));
-- ⚠️ The eight keys are THEMES in tools/lesson-template.html. Add a theme there
-- and this list must grow in the same change, or saving it fails.
alter table public.students drop constraint if exists students_theme_ok;
alter table public.students add constraint students_theme_ok
  check (theme in ('forest', 'ocean', 'ember', 'violet', 'graphite', 'rose', 'gold', 'teal'));
-- No future birthdays and nothing absurd. current_date is not immutable, so
-- the "not in the future" half lives in the trigger below; this is the floor.
alter table public.students drop constraint if exists students_birthday_ok;
alter table public.students add constraint students_birthday_ok check (birthday is null or birthday >= date '1900-01-01');

-- ── 2. caps, kind is fixed, birthday not in the future ───────────────────────
create or replace function public.profile_rules()
returns trigger
language plpgsql security definer set search_path = public as $$
declare
  n integer;
begin
  if new.birthday is not null and new.birthday > current_date then
    raise exception 'birthday is in the future';
  end if;
  if tg_op = 'UPDATE' then
    if new.kind <> old.kind then
      raise exception 'profile kind cannot change';
    end if;
    return new;
  end if;
  select count(*) into n from public.students
   where account_id = new.account_id and kind = new.kind;
  if new.kind = 'student' and n >= 10 then
    raise exception 'profile limit: 10 students';
  end if;
  if new.kind = 'parent' and n >= 1 then
    raise exception 'profile limit: 2 parents';
  end if;
  return new;
end; $$;

-- ⚠️ POSTGRES FIRES TRIGGERS ALPHABETICALLY (see CLAUDE.md). This is the only
-- trigger on students.
drop trigger if exists students_profile_rules on public.students;
create trigger students_profile_rules
  before insert or update on public.students
  for each row execute function public.profile_rules();

-- ── 3. one PIN table for both parents ────────────────────────────────────────
create table if not exists public.pins (
  account_id   uuid not null references public.accounts(id) on delete cascade,
  profile_key  uuid not null,          -- = account_id for the owner, else the parent row's id
  pin_hash     text not null,
  fails        integer not null default 0,
  locked_until timestamptz,
  updated_at   timestamptz not null default now(),
  primary key (account_id, profile_key)
);
alter table public.pins enable row level security;
revoke all on public.pins from public, anon, authenticated;

insert into public.pins (account_id, profile_key, pin_hash, fails, locked_until, updated_at)
select account_id, account_id, pin_hash, fails, locked_until, updated_at from public.account_pins
on conflict do nothing;

-- A parent row deleted takes its PIN with it. Not an FK because the owner's
-- key is not a students row.
create or replace function public.drop_profile_pin()
returns trigger
language plpgsql security definer set search_path = public as $$
begin
  delete from public.pins where account_id = old.account_id and profile_key = old.id;
  return old;
end; $$;
drop trigger if exists students_drop_pin on public.students;
create trigger students_drop_pin
  after delete on public.students
  for each row execute function public.drop_profile_pin();

-- ── 4. the functions ─────────────────────────────────────────────────────────
drop function if exists public.has_pin();
drop function if exists public.check_pin(text);
drop function if exists public.set_pin(text, text);
drop table if exists public.account_pins;

-- Which parent key a call is about. NULL = the owner. Anything else must be a
-- PARENT row of this account, or the call is refused.
create or replace function public.pin_key(profile uuid)
returns uuid
language plpgsql stable security definer set search_path = public as $$
begin
  if auth.uid() is null then
    raise exception 'not signed in';
  end if;
  if profile is null then
    return auth.uid();
  end if;
  if not exists (select 1 from public.students
                  where id = profile and account_id = auth.uid() and kind = 'parent') then
    raise exception 'no such parent profile';
  end if;
  return profile;
end; $$;

-- Every parent key that has a PIN, as {"owner": true, "<uuid>": true}.
create or replace function public.pin_map()
returns jsonb
language sql stable security definer set search_path = public as $$
  select coalesce(jsonb_object_agg(case when profile_key = account_id then 'owner' else profile_key::text end, true), '{}'::jsonb)
    from public.pins where account_id = auth.uid();
$$;

-- 🚨 FIVE WRONG TRIES LOCK THAT PARENT'S PIN FOR FIVE MINUTES (as 013).
create or replace function public.check_pin(pin text, profile uuid default null)
returns boolean
language plpgsql security definer set search_path = public, extensions as $$
declare
  k uuid := public.pin_key(profile);
  r public.pins%rowtype;
begin
  select * into r from public.pins where account_id = auth.uid() and profile_key = k for update;
  if not found then
    return true;   -- that parent has no PIN: nothing to guard
  end if;
  if r.locked_until is not null and r.locked_until > now() then
    raise exception 'pin locked until %', to_char(r.locked_until at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"');
  end if;
  if r.pin_hash = crypt(coalesce(pin, ''), r.pin_hash) then
    update public.pins set fails = 0, locked_until = null where account_id = auth.uid() and profile_key = k;
    return true;
  end if;
  update public.pins
     set fails = case when r.fails + 1 >= 5 then 0 else r.fails + 1 end,
         locked_until = case when r.fails + 1 >= 5 then now() + interval '5 minutes' else null end
   where account_id = auth.uid() and profile_key = k;
  return false;
end; $$;

-- First time: old_pin ignored. Changing: old_pin must match, OR a password
-- sign-in in the last 10 minutes (the Forgot PIN route, JWT amr claim).
-- The account password can reset EITHER parent's PIN: whoever holds the
-- password holds the account.
create or replace function public.set_pin(new_pin text, old_pin text default null, profile uuid default null)
returns void
language plpgsql security definer set search_path = public, extensions as $$
declare
  k     uuid := public.pin_key(profile);
  r     public.pins%rowtype;
  fresh boolean := false;
begin
  if new_pin is null or new_pin !~ '^[0-9]{4}$' then
    raise exception 'pin must be 4 digits';
  end if;
  select * into r from public.pins where account_id = auth.uid() and profile_key = k for update;
  if found then
    select exists (
      select 1 from jsonb_array_elements(coalesce(auth.jwt() -> 'amr', '[]'::jsonb)) a
       where a ->> 'method' = 'password'
         and to_timestamp((a ->> 'timestamp')::bigint) > now() - interval '10 minutes'
    ) into fresh;
    if not fresh then
      if r.locked_until is not null and r.locked_until > now() then
        raise exception 'pin locked until %', to_char(r.locked_until at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"');
      end if;
      if old_pin is null or r.pin_hash <> crypt(old_pin, r.pin_hash) then
        raise exception 'current pin is wrong';
      end if;
    end if;
    update public.pins
       set pin_hash = crypt(new_pin, gen_salt('bf')), fails = 0, locked_until = null, updated_at = now()
     where account_id = auth.uid() and profile_key = k;
  else
    insert into public.pins (account_id, profile_key, pin_hash)
    values (auth.uid(), k, crypt(new_pin, gen_salt('bf')));
  end if;
end; $$;

revoke all on function public.pin_key(uuid)                from public, anon, authenticated;
revoke all on function public.pin_map()                    from public, anon;
revoke all on function public.check_pin(text, uuid)        from public, anon;
revoke all on function public.set_pin(text, text, uuid)    from public, anon;
grant execute on function public.pin_map()                 to authenticated;
grant execute on function public.check_pin(text, uuid)     to authenticated;
grant execute on function public.set_pin(text, text, uuid) to authenticated;
revoke all on function public.profile_rules()   from public, anon, authenticated;
revoke all on function public.drop_profile_pin() from public, anon, authenticated;
