-- XCG Website — initial schema
-- Tables are written to exclusively by the service-role key from Next.js API
-- routes. RLS is enabled with no anon policies, so the public API surface
-- cannot read or write these tables directly.

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  company text,
  service text,
  message text not null,
  locale text not null default 'en',
  handled boolean not null default false
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text,
  email text not null,
  tool text not null,
  payload jsonb not null default '{}'::jsonb,
  locale text not null default 'en',
  contacted boolean not null default false
);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique,
  locale text not null default 'en',
  source text not null default 'footer',
  unsubscribed boolean not null default false
);

alter table public.contact_submissions enable row level security;
alter table public.leads enable row level security;
alter table public.newsletter_subscribers enable row level security;

create index if not exists contact_submissions_created_idx on public.contact_submissions (created_at desc);
create index if not exists leads_created_idx on public.leads (created_at desc);
create index if not exists leads_tool_idx on public.leads (tool);
