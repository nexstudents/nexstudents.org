-- ─────────────────────────────────────────────────────────────────────────
-- MIGRATION 020 — account_bootstrap(): everything the panel needs, in one call
--
-- Paul, 2026-09-17: "if there is a better way to serve request do that too"
-- and, on hearing what an RPC is: "that sounds like a good feature and if it's
-- single request it feels good to do now."
--
-- WHAT IT REPLACES. Opening the account panel asked three separate questions:
--   GET  /auth/v1/user                     who am I
--   GET  /students?select=...              which profiles exist
--   POST /rpc/pin_map                      which of them have a PIN
-- Three round trips, and the panel repainted as each one landed. This returns
-- all three together, so it is one request and one paint.
--
-- 🚨 IT ADDS NO NEW ACCESS. Every piece below is something the caller could
-- already read for themselves through the three calls above; this only saves
-- the trips. auth.uid() is the sole key, so a signed-out caller gets nothing
-- and a signed-in caller gets their own row and no one else's.
--
-- ⚠️ SECURITY DEFINER, so search_path is pinned. An unpinned search_path on a
-- definer function is the standard Postgres privilege-escalation hole: the
-- caller could put their own schema in front and have this run their code as
-- the owner. Every function in migrations 011-019 pins it for that reason.
--
-- ⚠️ THE COLUMN LIST MUST MATCH STUDENT_COLS in assets/ns-account.js. If a
-- column is added there and not here, the cached profile silently loses a
-- field and the panel renders a profile with, say, no theme. Change both.
-- ─────────────────────────────────────────────────────────────────────────

create or replace function public.account_bootstrap()
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    -- 🚨 EVERY FIELD nav.js READS OFF adUser MUST BE HERE. Checked against the
    -- source on 2026-09-17: user_metadata, email, new_email, email_confirmed_at.
    -- The first draft returned only the first two, which would have quietly
    -- broken the pending-email-change notice and the verified-email check the
    -- moment this went live. Re-check this list whenever nav.js touches adUser.
    -- ⚠️ The pending address is auth.users.email_change in the table; GoTrue
    -- calls it new_email over the API, and nav.js expects that name.
    'me', (
      select jsonb_build_object(
        'id',    u.id,
        'email', u.email,
        'new_email', nullif(u.email_change, ''),
        'email_confirmed_at', u.email_confirmed_at,
        'user_metadata', coalesce(u.raw_user_meta_data, '{}'::jsonb)
      )
      from auth.users u
      where u.id = auth.uid()
    ),

    -- The profiles, in the order the panel already expects them: created_at
    -- ascending, which is what /students?order=created_at.asc returns.
    'profiles', coalesce((
      select jsonb_agg(
        jsonb_build_object(
          'id', s.id, 'kind', s.kind, 'name', s.name, 'grade', s.grade,
          'theme', s.theme, 'birthday', s.birthday, 'gender', s.gender,
          'about', s.about, 'settings', s.settings, 'is_holder', s.is_holder,
          'created_at', s.created_at
        ) order by s.created_at asc
      )
      from public.students s
      where s.account_id = auth.uid()
    ), '[]'::jsonb),

    -- Exactly what pin_map() returns, so the client can keep one shape.
    -- ⚠️ Kept as a call rather than a copy of the query: two copies of a
    -- security rule drift, and this one decides whether a child can reach a
    -- parent's account.
    'pins', public.pin_map()
  );
$$;

-- Same grants as every other panel function: the signed-in user only.
revoke all     on function public.account_bootstrap() from public, anon;
grant  execute on function public.account_bootstrap() to authenticated;

comment on function public.account_bootstrap() is
  'One call for the account panel: the signed-in user, their profiles and their PIN map. Replaces three round trips. Added 2026-09-17, migration 020.';
