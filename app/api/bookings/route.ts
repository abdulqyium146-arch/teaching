import { NextRequest, NextResponse } from 'next/server'
import { supabase, supabaseAdmin } from '@/lib/supabase'

// POST /api/bookings — public booking form submission
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { name, email, phone, age_group, gender, course,
            preferred_time, preferred_days, class_type, message, how_heard } = body

    if (!name || !email || !phone || !age_group || !gender || !course || !preferred_time || !class_type) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('bookings')
      .insert([{
        name, email, phone, age_group, gender, course,
        preferred_time, preferred_days: preferred_days ?? [],
        class_type, message: message || null, how_heard: how_heard || null,
      }])
      .select('id')
      .single()

    if (error) throw error

    return NextResponse.json({ success: true, id: data.id }, { status: 201 })
  } catch (err: unknown) {
    console.error('Booking error:', err)
    return NextResponse.json({ error: 'Failed to save booking' }, { status: 500 })
  }
}

// GET /api/bookings — admin list (requires admin password header)
export async function GET(req: NextRequest) {
  const pwd = req.headers.get('x-admin-password')
  if (pwd !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const status = searchParams.get('status')
  const search = searchParams.get('search')

  let query = supabaseAdmin
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false })

  if (status && status !== 'all') query = query.eq('status', status)
  if (search) query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,phone.ilike.%${search}%`)

  const { data, error } = await query

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
