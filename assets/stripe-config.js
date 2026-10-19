/* ============================================================================
   NexStudents · Stripe connection
   Added 2026-09-10 with cart checkout (ROADMAP 37). PUBLIC by design, the same
   footing as supabase-config.js beside it.

   🚨 THE PUBLISHABLE KEY (pk_...) IS MEANT TO BE IN THE BROWSER. It can only
   start a Checkout the Worker has already priced; it cannot read a payment or
   move money. The SECRET key (sk_...) lives in the Worker as STRIPE_SECRET_KEY
   and must never appear in this file or anywhere this repo publishes.

   ⚠️ pk_live_ = REAL MONEY. Swapping keys again means this one line plus the
   Worker's STRIPE_SECRET_KEY and STRIPE_WEBHOOK_SECRET, all three together, or
   the page starts a live checkout the Worker cannot price.
   ⚠️ It used to be baked into each page from a STRIPE_PK env var at build time,
   so a build run without the variable silently shipped a shop with no checkout.
   ============================================================================ */
window.NS_STRIPE = {
  // LIVE since 2026-10-19 (NexEdge Studios acct_1UDogJAWPpksClj5). Sandbox was pk_test_51UDogSAu4JPty5AZ...
  publishableKey: "pk_live_51UDogJAWPpksClj5lr28KmDRUKcxsCC1xI2hyT5TuN5fBH0oVZcEQBphwYir3WwY5BfUnzCdac5ij3L0mEUFLy9U00IzgLuIhw"
};
