-- ============================================================================
-- 011 · An admin role, for Paul
--
-- Paul, 2026-09-10: "we need an admin account for myself. so like I have
-- access to certain pages that normal users can't get to ... help reset users
-- profiles ... print worksheets myself without paying for them ... see things
-- on guest mode and admin mode."
--
-- 🚨 THE ROLE LIVES IN app_metadata, NEVER user_metadata. A signed-in user can
-- rewrite their own user_metadata from the browser (that is how Profile saves a
-- name). app_metadata can only be written by the database itself, so nobody can
-- make themselves an admin from a console. It rides inside the login token, so
-- the site, the Worker and Postgres can all read it.
-- 🚨 THE BROWSER ONLY USES IT TO SHOW BUTTONS. Every admin POWER is checked
-- again server-side: is_admin() in Postgres, and the Worker asks Supabase who
-- the token belongs to before handing out a paid file.
-- ⚠️ A session started BEFORE this ran carries an old token without the role.
-- Sign out and back in (or wait for the hourly refresh) to pick it up.
-- ============================================================================

update auth.users
   set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"role":"admin"}'::jsonb
 where lower(email) = 'filamfilms@gmail.com';

create or replace function public.is_admin()
returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false);
$$;

grant execute on function public.is_admin() to anon, authenticated;
