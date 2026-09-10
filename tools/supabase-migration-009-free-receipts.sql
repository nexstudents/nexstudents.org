-- ============================================================================
-- 009 · A receipt for a FREE checkout, without an open email relay
--
-- Paul, 2026-09-09, asked for confirmation on free items too. Paid receipts
-- come from the Stripe webhook (r2-worker.js), which Stripe signs. A free
-- checkout has no such signer: it happens in the browser through
-- checkout_free(), and the browser must never hold the Resend key.
--
-- 🚨 SO THE WORKER ASKS POSTGRES FIRST, AND POSTGRES SAYS YES ONCE.
-- A public "send a receipt" route is a spam cannon pointed at our own domain's
-- reputation. claim_free_receipt() only returns rows that are:
--   · the purchase ids the cart just got back from checkout_free()
--     (random UUIDs, known only to the buyer's own page)
--   · for that exact email
--   · free (amount_cents = 0)
--   · bought in the last 15 minutes
--   · never receipted before - and it marks them receipted as it returns them
-- Anything else returns nothing, and the Worker sends nothing.
-- ============================================================================

alter table public.purchases add column if not exists receipt_sent_at timestamptz;

create or replace function public.claim_free_receipt(p_ids uuid[], p_email text)
returns table (product text, title text)
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
      returning p.product
    )
    select c.product, pr.title
      from claimed c
      join public.products pr on pr.slug = c.product;
end; $$;

grant execute on function public.claim_free_receipt(uuid[], text) to anon, authenticated;
