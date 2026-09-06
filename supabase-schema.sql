-- ============================================================
-- Quran Center UK — Booking System Schema
-- Run this once in your Supabase SQL Editor
-- ============================================================

create table if not exists bookings (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),

  -- Student info
  name         text not null,
  email        text not null,
  phone        text not null,
  age_group    text not null check (age_group in ('child','teen','adult')),
  gender       text not null check (gender in ('male','female')),

  -- Course selection
  course       text not null,
  preferred_time text not null,
  preferred_days text[] not null default '{}',
  class_type   text not null check (class_type in ('online','in-person')),

  -- Extra
  message      text,
  how_heard    text,

  -- Admin fields
  status       text not null default 'new'
                 check (status in ('new','contacted','confirmed','cancelled')),
  admin_notes  text,
  trial_date   date
);

-- Index for fast admin queries
create index if not exists bookings_status_idx on bookings(status);
create index if not exists bookings_created_at_idx on bookings(created_at desc);

-- RLS: allow anyone to insert (public booking form)
alter table bookings enable row level security;

create policy "Public can insert bookings"
  on bookings for insert
  with check (true);

-- Admin reads via service role key (bypasses RLS) — no extra policy needed
-- ============================================================
