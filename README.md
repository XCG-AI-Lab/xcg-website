# XCG Website

Revamped website for **X Consultancy Group (XCG)** — Your Partners In Growth®.

Built with **Next.js 15 (App Router) + Tailwind CSS v4 + Supabase**, deployed on **Vercel**.

## Features

- **Bilingual (EN/ZH)** with complete hreflang pairs and locale routing (`/en`, `/zh`)
- **SEO-first**: unique titles & meta descriptions per page, Open Graph + Twitter Cards, JSON-LD (Organization, LocalBusiness ×2, BreadcrumbList, Service, FAQPage, BlogPosting, AggregateRating), sitemap.xml, robots.txt
- **Journey-based IA**: Start / Run / Grow a Business navigation with 10 dedicated service pages
- **Resources hub**: 30 original articles in 3 topic clusters (Tax & Compliance, Company & Secretarial, Payroll & HR)
- **Lead-magnet tools**: E-Invoicing Readiness Checker, Compliance Deadline Calendar, Company Name Pre-Checker — advanced results gated behind email opt-in
- **Supabase**: contact submissions, tool leads and newsletter subscribers (service-role writes only, RLS enabled)
- **Local SEO**: Bukit Jalil HQ + Kepong branch NAP, Google Maps embeds, LocalBusiness schema per office

## Development

```bash
npm install
cp .env.example .env.local   # fill in Supabase credentials
npm run dev
```

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (no trailing slash) |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Service-role key (server-only; never exposed to the client) |

## Database

Run `supabase/migrations/0001_initial_schema.sql` against the Supabase project
(SQL Editor or `supabase db push`). Tables: `contact_submissions`, `leads`,
`newsletter_subscribers` — all RLS-enabled with no anon policies.

## Content

- Services: `lib/services.ts` · Articles: `content/articles-*.ts` · FAQ: `lib/faq.ts`
- Site config (NAP, socials, testimonials, awards): `lib/site.ts`
- UI strings (EN/ZH): `lib/i18n.ts`

> **Before publishing new rates/deadlines**: re-verify against the official
> portals (LHDN, MySST, SSM, KWSP, PERKESO) on the publish date.
