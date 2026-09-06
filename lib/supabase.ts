import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://placeholder.supabase.co'
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? 'placeholder'
const service = process.env.SUPABASE_SERVICE_ROLE_KEY ?? 'placeholder'

// Public client — used in browser / booking form
export const supabase = createClient(url, anon)

// Server-only admin client — bypasses RLS
export const supabaseAdmin = createClient(url, service)

export type BookingStatus = 'new' | 'contacted' | 'confirmed' | 'cancelled'

export interface Booking {
  id: string
  created_at: string
  name: string
  email: string
  phone: string
  age_group: 'child' | 'teen' | 'adult'
  gender: 'male' | 'female'
  course: string
  preferred_time: string
  preferred_days: string[]
  class_type: 'online' | 'in-person'
  message: string | null
  how_heard: string | null
  status: BookingStatus
  admin_notes: string | null
  trial_date: string | null
}
