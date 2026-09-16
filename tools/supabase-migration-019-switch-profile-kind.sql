-- ─────────────────────────────────────────────────────────────────────────────
-- 019 — CHANGE A PROFILE'S KIND, AND SWITCH THE ACCOUNT HOLDER
--
-- Paul, 2026-09-16, after his son signed up with his own Gmail and became an
-- account holder: "I want that option to switch account holder ... then after I
-- do that it gives me an option to change to student profile or parent profile.
-- you have to verify with a pin to make the changes."
--
-- 🚨 WHY THIS IS NOT COSMETIC. nsProgPush() in nav.js begins with
--      if (!isSignedIn() || !nsIsStudent(id)) return;
--    and nsIsStudent is kind = 'student'. A PARENT PROFILE RECORDS NO PROGRESS,
--    EVER. Kolten was the account holder, so every lesson he finished stayed in
--    his browser and reached no server. Being able to change kind is what makes
--    a child's schoolwork start existing.
--
-- 🚨 MIGRATION 014 DELIBERATELY FORBADE THIS, and that guard STAYS:
--      if new.kind <> old.kind then raise exception 'profile kind cannot change'
--    It is what stops a student quietly becoming a parent - which, once roadmap
--    56/57 land, is a child unlocking their own work. This migration does not
--    delete the rule. It adds ONE narrow, deliberate door through it.
--
-- ⚠️ WHAT "ACCOUNT HOLDER" IS, so this is not oversold. The LOGIN belongs to the
--    auth user and does not move. This moves the holder ROW inside one account.
--    To change who signs in, use changeEmail() in ns-account.js, which already
--    ships. The two together are the real takeover path.
--
-- ⚠️ ORDER MATTERS IN THIS FILE. The column exists before any function mentions
--    it, and the trigger learns the escape hatch before any function uses it.
--    Run top to bottom, once.
-- ─────────────────────────────────────────────────────────────────────────────

-- ── 1. the holder becomes a column ───────────────────────────────────────────
-- 014 identified the holder as "the row whose pins.profile_key = account_id",
-- which cannot express "this row is the holder" once the role can move.
alter table public.students
  add column if not exists is_holder boolean not null default false;

-- Backfill: the existing parent row on each account is today's holder.
update public.students s
   set is_holder = true
 where s.kind = 'parent'
   and not exists (select 1 from public.students o
                    where o.account_id = s.account_id and o.is_holder);

-- Exactly one holder per account, enforced by the database rather than by hope.
create unique index if not exists students_one_holder
  on public.students (account_id) where is_holder;


-- ── 2. one narrow door through the immutable-kind rule ───────────────────────
-- 🚨 NOT session_replication_role. That disables ALL triggers and needs rights
--    Supabase does not hand to the app role - it would fail in production and
--    pass nowhere useful. A transaction-local GUC is the standard way: only a
--    function that sets it can change a kind, and it dies with the transaction.
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
    if new.kind <> old.kind
       and coalesce(current_setting('nexstudents.kind_change', true), '') <> 'on' then
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

-- The trigger itself is unchanged and still the only one on students.
drop trigger if exists students_profile_rules on public.students;
create trigger students_profile_rules
  before insert or update on public.students
  for each row execute function public.profile_rules();


-- ── 3. set_profile_kind(profile, kind) ───────────────────────────────────────
create or replace function public.set_profile_kind(p_profile uuid, p_kind text)
returns void
language plpgsql security definer set search_path = public as $$
declare
  acct    uuid;
  cur     text;
  holder  boolean;
  n       integer;
  parents integer;
begin
  if p_kind not in ('student','parent') then
    raise exception 'kind must be student or parent';
  end if;

  -- 🚨 THE CALLER MUST OWN THE ROW. security definer bypasses RLS, so ownership
  --    is checked HERE or this function hands anyone any profile.
  select account_id, kind, is_holder into acct, cur, holder
    from public.students where id = p_profile;
  if acct is null then raise exception 'no such profile'; end if;
  if acct <> auth.uid() then raise exception 'not your profile'; end if;
  if cur = p_kind then return; end if;

  -- 🚨 THE HOLDER CANNOT BE DEMOTED IN PLACE. Hand the role over first. This is
  --    also the order Paul described: switch the holder, THEN change the kind.
  if holder and p_kind = 'student' then
    raise exception 'switch the account holder before making this profile a student';
  end if;

  -- The same caps profile_rules enforces on insert, re-checked for the move.
  select count(*) into n
    from public.students where account_id = acct and kind = p_kind;
  if p_kind = 'student' and n >= 10 then
    raise exception 'profile limit: 10 students';
  end if;
  if p_kind = 'parent' and n >= 1 then
    raise exception 'profile limit: 2 parents';
  end if;

  -- 🚨 NO "LAST PARENT" CHECK, AND THAT IS DELIBERATE. I wrote one and it was
  --    wrong: THE ACCOUNT HOLDER IS THE AUTH USER, NOT A ROW IN THIS TABLE.
  --    adMe() reads user_metadata; students holds only the SECOND parent and
  --    the children. So counting parent rows sees one grown-up when there are
  --    two, and refuses a demotion that is perfectly safe - which is exactly
  --    what blocked Paul from demoting his son after the handover.
  --    The holder always exists and cannot be demoted here, so there is always
  --    an adult. Do not "restore" this check without re-reading adOwner().

  perform set_config('nexstudents.kind_change', 'on', true);   -- true = this tx only
  update public.students set kind = p_kind where id = p_profile;
  perform set_config('nexstudents.kind_change', 'off', true);
end; $$;

revoke all on function public.set_profile_kind(uuid, text) from public;
grant execute on function public.set_profile_kind(uuid, text) to authenticated;


-- ── 4. swap_account_holder(new_holder) ───────────────────────────────────────
create or replace function public.swap_account_holder(p_new_holder uuid)
returns void
language plpgsql security definer set search_path = public as $$
declare
  acct uuid;
  k    text;
begin
  select account_id, kind into acct, k
    from public.students where id = p_new_holder;
  if acct is null then raise exception 'no such profile'; end if;
  if acct <> auth.uid() then raise exception 'not your profile'; end if;
  -- 🚨 ONLY A PARENT CAN HOLD THE ACCOUNT. Promote first, then swap.
  if k <> 'parent' then
    raise exception 'the account holder must be a parent profile';
  end if;

  -- ⚠️ CLEAR EVERY FLAG BEFORE SETTING THE NEW ONE. students_one_holder is a
  --    unique partial index, so setting the new holder while the old one still
  --    holds would violate it mid-statement.
  update public.students set is_holder = false
   where account_id = acct and is_holder;
  update public.students set is_holder = true
   where id = p_new_holder;
end; $$;

revoke all on function public.swap_account_holder(uuid) from public;
grant execute on function public.swap_account_holder(uuid) to authenticated;
