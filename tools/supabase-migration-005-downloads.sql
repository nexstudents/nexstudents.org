-- ============================================================================
-- 005 · Redeeming a download
--
-- Paul, 2026-09-06: "what we can do is send them a confirmation and the file
-- downloads off the site."
-- So the email is a RECEIPT, never a carrier. It says what was bought and links
-- back here. The file only ever comes from nexstudents.org.
--
-- 🚨 A GUEST HAS NO SESSION, so RLS cannot identify them -- they never signed
-- in. Their receipt link carries `access_token`, and this function is the only
-- way to exchange one for a download. There is deliberately no SELECT policy
-- exposing access_token through the Data API: without this function, knowing a
-- token would still get you nothing, and with it you must already hold one.
--
-- ⚠️ THE TOKEN IS A BEARER CREDENTIAL. Anyone holding the link is treated as
-- the buyer. That is the same trade every "click here to download" email makes,
-- and it is why the paid files must not also be sitting in the public repo.
-- ============================================================================

create or replace function public.redeem_download(p_token uuid)
returns table (product text, title text, bought_at timestamptz)
language plpgsql security definer set search_path = public as $$
begin
  return query
    select p.product, pr.title, p.bought_at
      from public.purchases p
      join public.products pr on pr.slug = p.product
     where p.access_token = p_token;
end; $$;

grant execute on function public.redeem_download(uuid) to anon, authenticated;

-- ⚠️ A signed-in customer does not need a token at all -- the existing
-- "read own purchases" policy already returns their rows, so /account/ can list
-- downloads without any of this. The token exists purely for the guest who
-- never made an account.
