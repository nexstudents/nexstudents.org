-- ============================================================================
-- 013 · Student profiles and the Parent/Teacher PIN
--
-- ROADMAP 50. Paul, 2026-09-11: "should feel a bit like Netflix accounts ...
-- we also mentioned about having a parent or teacher pin." He chose:
--   - the PIN guards the PARENT side only (Netflix Profile Lock). Leaving a
--     student profile, Manage Profiles, Orders and Account ask for it.
--     Students have no PIN of their own.
--   - a full-screen "Who's learning?" picker after sign-in.
--
-- 🚨 THE PIN IS NOT ON public.accounts, AND THAT IS THE WHOLE POINT. accounts
-- has a "read own account" policy, so any column there is readable by the
-- signed-in browser - which is the device the child is sitting at. A 4-digit
-- PIN has 10,000 values; a readable hash of one is a readable PIN. It lives in
-- its own table with RLS ON and NO policies at all, so no client role can read
-- or write a row. Only the three security-definer functions below touch it.
--
-- ⚠️ THIS IS A HOUSEHOLD LOCK, NOT A SECURITY BOUNDARY AGAINST THE ACCOUNT
-- HOLDER. The session belongs to the parent. It stops a child wandering into
-- the parent side, the way Netflix's does. Anything that must be enforced
-- against the child later (answer keys, ROADMAP 56/57) needs a server rule on
-- top of this, not just the PIN screen.
-- ============================================================================

-- ── 1. students: an avatar, and account_id filled in by the server ─────────
-- avatar is a colour KEY ("red", "blue" ...), not a colour. The palette lives
-- in the CSS, so it can be re-tuned without a migration.
alter table public.students add column if not exists avatar text not null default 'blue';
-- The browser never has to send account_id; the policy's WITH CHECK still
-- refuses any other value, so a console edit cannot file a child under a
-- stranger's account.
alter table public.students alter column account_id set default auth.uid();

-- A name is required and short. The panel strip shows ~9 characters.
alter table public.students drop constraint if exists students_name_len;
alter table public.students add constraint students_name_len
  check (char_length(btrim(name)) between 1 and 30);

-- ── 2. the PIN table: RLS on, no policies ───────────────────────────────────
create table if not exists public.account_pins (
  account_id   uuid primary key references public.accounts(id) on delete cascade,
  pin_hash     text not null,
  fails        integer not null default 0,
  locked_until timestamptz,
  updated_at   timestamptz not null default now()
);
alter table public.account_pins enable row level security;
revoke all on public.account_pins from public, anon, authenticated;

-- ── 3. has_pin() ─────────────────────────────────────────────────────────────
create or replace function public.has_pin()
returns boolean
language sql security definer set search_path = public as $$
  select exists (select 1 from public.account_pins where account_id = auth.uid());
$$;

-- ── 4. check_pin(pin) ───────────────────────────────────────────────────────
-- 🚨 FIVE WRONG TRIES LOCK IT FOR FIVE MINUTES. 10,000 values guessed at the
-- speed of a script is seconds; at five per five minutes it is about a week of
-- nonstop trying, and the parent would notice long before.
-- Returns true/false. A lockout raises, so the panel can say how long.
create or replace function public.check_pin(pin text)
returns boolean
language plpgsql security definer set search_path = public, extensions as $$
declare
  r public.account_pins%rowtype;
begin
  if auth.uid() is null then
    raise exception 'not signed in';
  end if;
  select * into r from public.account_pins where account_id = auth.uid() for update;
  if not found then
    return true;   -- no PIN set: nothing to guard
  end if;
  if r.locked_until is not null and r.locked_until > now() then
    raise exception 'pin locked until %', to_char(r.locked_until at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS"Z"');
  end if;
  if r.pin_hash = crypt(coalesce(pin, ''), r.pin_hash) then
    update public.account_pins set fails = 0, locked_until = null where account_id = auth.uid();
    return true;
  end if;
  update public.account_pins
     set fails = case when r.fails + 1 >= 5 then 0 else r.fails + 1 end,
         locked_until = case when r.fails + 1 >= 5 then now() + interval '5 minutes' else null end
   where account_id = auth.uid();
  return false;
end; $$;

-- ── 5. set_pin(new_pin, old_pin) ────────────────────────────────────────────
-- First time: old_pin is ignored. Changing it: old_pin must match, OR the
-- parent signed in with their PASSWORD in the last 10 minutes - that is the
-- "Forgot PIN?" route, the same one Netflix uses (prove it is you with the
-- account password, then pick a new PIN).
-- ⚠️ The password check reads the login token's `amr` claim, which Supabase
-- stamps with the method and time of the ORIGINAL sign-in and carries through
-- every refresh. A refreshed token is not a fresh sign-in, correctly.
create or replace function public.set_pin(new_pin text, old_pin text default null)
returns void
language plpgsql security definer set search_path = public, extensions as $$
declare
  r      public.account_pins%rowtype;
  fresh  boolean := false;
begin
  if auth.uid() is null then
    raise exception 'not signed in';
  end if;
  if new_pin is null or new_pin !~ '^[0-9]{4}$' then
    raise exception 'pin must be 4 digits';
  end if;

  select * into r from public.account_pins where account_id = auth.uid() for update;
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
    update public.account_pins
       set pin_hash = crypt(new_pin, gen_salt('bf')), fails = 0, locked_until = null, updated_at = now()
     where account_id = auth.uid();
  else
    insert into public.account_pins (account_id, pin_hash)
    values (auth.uid(), crypt(new_pin, gen_salt('bf')));
  end if;
end; $$;

revoke all on function public.has_pin()              from public, anon;
revoke all on function public.check_pin(text)        from public, anon;
revoke all on function public.set_pin(text, text)    from public, anon;
grant execute on function public.has_pin()           to authenticated;
grant execute on function public.check_pin(text)     to authenticated;
grant execute on function public.set_pin(text, text) to authenticated;
