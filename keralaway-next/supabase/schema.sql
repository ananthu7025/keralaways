-- Keralaway Tours — packages schema
-- Run this in the Supabase SQL editor (Project > SQL Editor > New query).

create table if not exists packages (
  id               uuid primary key default gen_random_uuid(),
  slug             text unique not null,
  title            text not null,
  subtitle         text,
  hero_image_url   text,
  overview_heading text,
  overview_body    text,
  duration_label   text,
  hotel_category   text,
  tour_style       text,
  visa_info        text,
  best_season      text,
  inclusions       jsonb not null default '[]',
  exclusions       jsonb not null default '[]',
  currency         text not null default 'INR',
  price_amount     numeric,
  price_usd        numeric,
  price_tiers      jsonb not null default '[]',
  featured_order   integer,
  is_published     boolean not null default false,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

create table if not exists itinerary_days (
  id             uuid primary key default gen_random_uuid(),
  package_id     uuid not null references packages(id) on delete cascade,
  day_number     integer not null,
  title          text not null,
  description    text,
  highlights     jsonb not null default '[]',
  overnight_note text,
  unique (package_id, day_number)
);

alter table packages enable row level security;
alter table itinerary_days enable row level security;

-- Public (anon) can read only published packages.
create policy "Public can read published packages"
  on packages for select
  using (is_published = true);

-- Public (anon) can read itinerary days belonging to a published package.
create policy "Public can read itinerary days of published packages"
  on itinerary_days for select
  using (
    exists (
      select 1 from packages
      where packages.id = itinerary_days.package_id
      and packages.is_published = true
    )
  );

-- No insert/update/delete policies for anon — all writes happen through the
-- service-role key from server-side admin code, which bypasses RLS entirely.
