# Agrolink 2.0 — Independent Startup Implementation Plan

Status: planning / migration branch. This document does **not** assert that production commerce or payments are live.

## Product goal
Launch an original, Bangladesh-focused farmer-to-buyer marketplace where genuine farmers can list crops, buyers can submit enquiries/orders, admins can moderate content, and optional paid business services can support operations. The core farmer listing and buyer discovery flow remains free during validation.

## Current repository audit (2026-11-15)
- React 18, TypeScript, Vite, React Router, Tailwind CSS and shadcn/ui are already present. **Keep this existing frontend; a Next.js rewrite is not required.**
- `src/contexts/AuthContext.tsx` already uses Supabase Auth and looks up profiles. Verify signup, profile creation, role authorization and Supabase project settings end-to-end before claiming auth works.
- `src/pages/Marketplace.tsx`, `src/pages/FarmerDashboard.tsx`, and `src/pages/BuyerDashboard.tsx` import `src/data/mockData`; these experiences are not yet based on real market records.
- `src/integrations/supabase/client.ts` accepts `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`.
- `vite.config.ts` uses `lovable-tagger` in development. This tool is not essential to the independently deployed app; remove cleanly with lockfile update and tests.
- Existing UI can be retained and self-hosted. Do not claim live farmers, real orders, actual savings, or customers from seeded/demo records.

## MVP scope, in build order

### 0. Baseline and vendor-independent build
- Keep `main` stable and implement through reviewed feature branches.
- Check `npm ci`, `npm run build`, `npm run lint`, `npm run test` and browser flows.
- Remove `lovable-tagger` from `vite.config.ts` and dependencies, regenerate/commit the lockfile.
- Add `.env.example` with public keys only; keep secrets out of Git.
- Configure independent hosting with proper client-side route fallback.

### 1. Real farmers and listings
- Verify authenticated roles and farmer profile creation with server-side and RLS protections.
- Add `listings` CRUD with title, crop category, BDT price/unit, quantity, district, availability, farmer ownership and photo references.
- Replace mock marketplace data with paginated database queries, loading/empty/error states and filters.
- Farmer may update only their own listings; visitors see only approved/published listings.
- Allow public demo only on an explicitly labelled demo environment.

### 2. Real buyer enquiry and order workflow
- Buyer sends a confirmed enquiry/request; farmer can accept/reject, specify fulfilment method and update status.
- Keep a status history and prevent unauthorized updates, duplicate submissions and overselling assumptions.
- No claim of escrow, delivery, or integrated payments before these functions exist.
- Provide a manual/off-platform fulfilment pilot with clear user disclosures.

### 3. Trust and operations
- Admin moderation for listings and complaints; auditable actions.
- Farmer verification workflow with limited collection of personal information and clear consent.
- Rate limiting, abuse reporting, safe image uploads, notifications and customer support.
- Use secure Supabase Row Level Security for every exposed table; never rely solely on frontend role checks.
- Never expose a Supabase service-role or payment-gateway secret key in browser code.

### 4. Subscription pilot — after the free core is tested
- Proposed segments (not final prices): Farmer Free; optional Farmer Pro tools; Buyer Free; Wholesale Business plan.
- Tables/objects to design: `plans`, `subscriptions`, `payment_attempts`, `invoices`, `entitlements`, `webhook_events`.
- Activate/renew subscription **only after trusted server-side payment verification**; verify webhook authenticity and idempotency.
- Distinguish trial, active, past_due, cancelled and expired entitlement states; no client-editable premium flag.
- Price-test with real farmers and buyers before locking prices. Confirm local payment-provider and legal/age requirements before accepting paid users.

### 5. Pilot and contest submission
- Recruit a small local pilot group with permission; document interviews and actual usage.
- Measure real metrics: verified farmers, approved listings, buyer enquiries, accepted orders, repeat usage and willingness to pay.
- Report pilot results separately from any demonstration/mock data.
- Prepare one-page problem/solution, customer segment, revenue model, working MVP demo, pilot evidence and 3-minute pitch.
- Apply to the EATL contest in the segment matching verified startup traction and the official eligibility rules.

## Suggested first implementation PR
**Title:** Replace marketplace mock-data with secure real listing reads.

**Acceptance criteria**
1. Frontend retrieves public approved listings from a connected database.
2. Listing filters and product details use stable listing IDs.
3. Loading, error, zero-results and pagination states are visible.
4. No secrets included in frontend bundle.
5. Farmer ownership and public-read policies are verified, not just documented.
6. Tests and preview build pass before merging.

## Architecture decision for now
Retain React/Vite and existing Supabase integration to avoid rebuilding tested UI. Add a separate Node/NestJS backend **only if** fulfilment, security or payment orchestration needs justify it. Payment processing and secret-bearing operations must run on trusted server-side infrastructure. This decision can be revisited after a security and live-environment review.

## Explicit non-goals for v1
No unsupported AI claims, no forced paid plans for basic farmer participation, no invented customer traction, no automatic live billing, no guaranteed market prices, and no unsupported claim that the marketplace is production-ready.
