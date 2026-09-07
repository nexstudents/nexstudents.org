/* ============================================================================
   NexStudents · Supabase connection
   GENERATED 2026-09-06. The values below are PUBLIC by design.

   🚨 THE PUBLISHABLE KEY IS MEANT TO BE IN THE BROWSER. It is not a secret and
   it grants nothing on its own -- every table has Row Level Security, so this
   key can only ever read and write rows the signed-in user is allowed to touch.
   That is why the schema enables RLS on all four tables before anything else.

   🚨 THE SECRET KEY (sb_secret_...) MUST NEVER APPEAR IN THIS FILE, or in any
   file this repo publishes. GitHub Pages serves everything here. The secret key
   bypasses RLS entirely: with it, anyone could read every customer's purchases
   or grant themselves any product. It belongs only in the Stripe webhook, on a
   server, in an environment variable.

   ⚠️ If the key is ever rotated in the dashboard, this file must be updated and
   the site rebuilt, or sign-in silently stops working.
   ============================================================================ */
window.NS_SUPABASE = {
  url: "https://ztoglvzrmkedwmzxxpsq.supabase.co",
  publishableKey: "sb_publishable_8MV9UVEKTUB48z3htbImAw_dyG2s7JP"
};
