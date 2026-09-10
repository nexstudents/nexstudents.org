-- ============================================================================
-- 008 · A signed-in customer's own downloads
--
-- Paul, 2026-09-10: "I would still like a way they can download it again ...
-- a link that can confirm it was purchased by this user if they are logged in."
-- /account/ could list purchases but not download them: the list reads
-- `purchases` through RLS, and access_token is deliberately not handed out that
-- way (see 005). This function hands a signed-in person THEIR OWN tokens, and
-- nobody else's.
--
-- 🚨 WHO COUNTS AS "THEIR OWN". Rows whose account_id is theirs, AND guest rows
-- bought with the same email before the account existed. The email match is
-- safe because sign-in here is a magic link: holding the session means the
-- inbox has already been proven.
-- 🚨 anon gets NOTHING. auth.uid() is null for anon, and the function returns
-- no rows then, but the grant is withheld as well so it fails loudly instead.
-- ============================================================================

create or replace function public.my_downloads()
returns table (product text, title text, token uuid, bought_at timestamptz, amount_cents integer)
language plpgsql security definer set search_path = public as $$
declare
  v_uid   uuid := auth.uid();
  v_email text;
begin
  if v_uid is null then
    return;
  end if;
  select lower(u.email) into v_email from auth.users u where u.id = v_uid;

  return query
    select p.product, pr.title, p.access_token, p.bought_at, p.amount_cents
      from public.purchases p
      join public.products pr on pr.slug = p.product
     where p.account_id = v_uid
        or (v_email is not null and lower(p.email) = v_email)
     order by p.bought_at desc;
end; $$;

revoke all on function public.my_downloads() from public, anon;
grant execute on function public.my_downloads() to authenticated;
