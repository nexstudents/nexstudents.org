/* The Refund page copy.
   Lifted out of build-pages.js so it can be edited on its own. */
'use strict';
const refundBody = () => `<div class="band"><div class="wrap prose policy">

  <p>If something does not work out, we will do our best to make it right.</p>

  <h2 class="mid">30-Day Refund Window</h2>
  <p>Unless a product or service says otherwise, you may request a refund within 30 days of the original purchase date. Refund requests made after 30 days may not be eligible for a refund.</p>
  <p>To request a refund, contact us at <a href="mailto:contact@nexedgestudios.com">contact@nexedgestudios.com</a>. Please include enough information for us to identify the purchase, such as the email address used at checkout and the name of the item purchased.</p>

  <h2 class="mid">Digital Downloads, Not Physical Items</h2>
  <p>NexStudents does not sell or ship physical products. Our paid resources are digital downloads, so there is nothing to mail back and no shipping charges, return labels, or restocking fees involved in a refund.</p>
  <p>If you were expecting a printed or physical item, please contact us before purchasing so we can tell you exactly what you would be buying.</p>

  <h2 class="mid">Digital Products</h2>
  <p>Because many NexStudents products may be delivered digitally, we ask that refund requests be made in good faith. If you purchased the wrong item, were charged incorrectly, received a file that does not work, or believe there is a problem with your purchase, please contact us. We would rather help fix the problem than leave you with something you cannot use.</p>
  <p>We may deny a refund request if there is evidence of fraud, abuse, repeated refund activity, or an attempt to receive and keep paid materials without paying for them.</p>

  <h2 class="mid">Affiliate Links</h2>
  <p>Some pages on NexStudents, such as our <a href="/resources/">Resources</a> page, include affiliate links to books, supplies, and other materials sold by outside retailers. If you buy something through one of those links, you are purchasing from that retailer and not from NexStudents. We may earn a small commission at no additional cost to you.</p>
  <p>Because we never receive that payment, we cannot refund it. Returns, refunds, shipping, and order problems for those purchases are handled by the retailer under their own policies, so please contact them directly.</p>
  <p>If an affiliate link on our site is broken, points to the wrong item, or sends you somewhere unexpected, please tell us. That part is ours to fix.</p>

  <h2 class="mid">Duplicate Purchases</h2>
  <p>If you accidentally purchase the same item more than once, contact us. Once we confirm the duplicate charge, we will normally refund the duplicate purchase.</p>

  <h2 class="mid">Technical Problems</h2>
  <p>If a digital file is missing, corrupted, will not download, or otherwise does not work as intended, please contact us first. We may be able to replace the file or correct the problem immediately.</p>
  <p>If we cannot reasonably provide the product you purchased, we may issue a refund.</p>

  <h2 class="mid">Donations</h2>
  <p>Donations made to support NexStudents are voluntary and are not purchases of a product or service. Because of this, donations are generally non-refundable.</p>
  <p>If a donation was made accidentally, duplicated, or submitted in the wrong amount, please contact us as soon as possible. We will review the situation and may correct or refund the payment when appropriate.</p>

  <h2 class="mid">Subscriptions or Memberships</h2>
  <p>If NexStudents offers subscriptions or memberships in the future, cancellation will stop future renewals. Unless otherwise stated at the time of purchase, canceling a subscription does not automatically refund previous charges.</p>
  <p>A recent subscription charge may still be eligible for a refund if the request is made within our 30-day refund window.</p>

  <h2 class="mid">Refund Processing</h2>
  <p>Approved refunds will be returned to the original payment method whenever possible. After we issue a refund, your bank, card issuer, or payment provider may take additional time to show the credit on your account. NexStudents does not control those processing times.</p>

  <h2 class="mid">Discounts, Coupons, and Promotional Purchases</h2>
  <p>Refunds are based on the amount actually paid. If a discount or coupon was used, the refund will not exceed the amount charged for that purchase.</p>
  <p>Purchases made as part of a bundle may be refunded according to the amount paid for the bundle rather than the individual retail price of each item.</p>

  <h2 class="mid">Chargebacks and Payment Disputes</h2>
  <p>If you believe there is a problem with a purchase, please contact us before filing a chargeback or payment dispute. We are happy to review billing mistakes, duplicate charges, missing files, and other purchase problems.</p>
  <p>We reserve the right to restrict future purchases or access to paid services in cases involving fraudulent chargebacks, payment abuse, or repeated misuse of our refund policy.</p>

  <h2 class="mid">Changes to This Policy</h2>
  <p>We may update this Refund Policy as NexStudents adds new products or services. When we make changes, the &ldquo;Last updated&rdquo; date on this page will be updated.</p>

  <h2 class="mid">Questions About a Purchase</h2>
  <p>If you have a question about a purchase, refund, duplicate charge, or donation, please <a href="/contact/">contact us</a>.</p>

  <p class="muted" style="margin-top:34px">Last updated: September 2, 2026</p>

  <p class="muted">NexStudents<br>An educational resource by NexEdge Studios<br>
  <a href="mailto:contact@nexedgestudios.com">contact@nexedgestudios.com</a><br>
  &copy; 2026 NexEdge Studios. All rights reserved.</p>

</div></div>`;

/* ── THE CONTACT PAGE ──────────────────────────────────────────────────────
   🚨 THE TERMS DEPEND ON THIS PAGE WORKING. /terms/ tells people to contact
   us five times - to ask permission for a use outside the licence, and to
   report errors - and written permission is REQUIRED for anything the licence
   does not cover. Until 2026-09-02 this page said "an address will go here as
   soon as there is one worth publishing", so the mechanism the terms rely on
   did not exist. A licence that points at a dead end is not a licence.

   Address given by Paul, 2026-09-02: contact@nexedgestudios.com. It is the
   NexEdge Studios address, which matches who the terms name as owner.

   ⚠️ A PLAIN mailto FOR NOW, DELIBERATELY. A form needs a third-party
   backend on a static site, and an address that works forever beats a form
   that quietly breaks when a free tier changes. Web3Forms (250/month free) is
   the upgrade path if the address starts attracting spam; the address stays
   as the fallback either way.
   ⚠️ Paul is sending his own wording for this page. This is the honest
   minimum until it arrives, not the final copy. */
/* ── THE CONTACT PAGE ──────────────────────────────────────────────────────
   🚨 THIS TEXT IS PAUL'S, WORD FOR WORD, same as /terms/. He wrote the
   headings and all five items on 2026-09-02 after rejecting mine: "I also
   don't like that wording 'what we would like to hear about' it sounds
   different." His version is warmer and the question-led items read better
   than my flat noun phrases. Do not rewrite it.

   🚨 THE TERMS DEPEND ON THIS PAGE WORKING. /terms/ tells people to contact
   us five times, and written permission is REQUIRED for any use the licence
   does not cover. Until 2026-09-02 this page said an address would appear
   "as soon as there is one worth publishing", so the mechanism the terms rely
   on did not exist. A licence that points at a dead end is not a licence.

   ⚠️ A PLAIN mailto, DELIBERATELY. A form on a static site needs a
   third-party backend, and an address that works forever beats a form that
   breaks when a free tier changes. Web3Forms (250/month free, checked
   2026-09-02) is the upgrade path if spam ever forces it; the address stays
   as the fallback either way.

   ⚠️ THE HEADING BOX MUST BE CENTRED, NOT JUST ITS TEXT. .prose h2 carries a
   max-width for readable line length, so text-align:center alone centres the
   words inside a narrow left-aligned box - 200px off, and it looks fine in a
   screenshot. See .contactfoot in ns.css. */
module.exports = { refundBody };
