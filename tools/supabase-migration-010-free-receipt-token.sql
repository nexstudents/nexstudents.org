-- ============================================================================
-- 010 · The free receipt carries the order link
--
-- Paul, 2026-09-10: "if they missed the thank you page they can get a link
-- forward back to the nexstudents.org site where it opens to redownload it."
-- Every receipt now carries ONE link, to /order/?t=<tokens>, which lists the
-- order with its Open or Download buttons. A paid receipt already had its
-- tokens from record_purchase(); a free one needs claim_free_receipt() to hand
-- them back too.
--
-- ⚠️ DROP, THEN CREATE. Postgres will not change a function's return columns
-- with `create or replace`. Nothing else calls this function but the Worker's
-- /free-receipt route, and the guard conditions are unchanged from 009.
-- ============================================================================

drop function if exists public.claim_free_receipt(uuid[], text);

create function public.claim_free_receipt(p_ids uuid[], p_email text)
returns table (product text, title text, token uuid)
language plpgsql security definer set search_path = public as $$
begin
  if p_ids is null or p_email is null or array_length(p_ids, 1) is null
     or array_length(p_ids, 1) > 20 then
    return;
  end if;

  return query
    with claimed as (
      update public.purchases p
         set receipt_sent_at = now()
       where p.id = any(p_ids)
         and lower(p.email) = lower(p_email)
         and p.amount_cents = 0
         and p.receipt_sent_at is null
         and p.bought_at > now() - interval '15 minutes'
      returning p.product, p.access_token
    )
    select c.product, pr.title, c.access_token
      from claimed c
      join public.products pr on pr.slug = c.product;
end; $$;

grant execute on function public.claim_free_receipt(uuid[], text) to anon, authenticated;
