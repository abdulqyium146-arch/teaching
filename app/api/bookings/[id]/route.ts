import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

function checkAdmin(req: NextRequest) {
  return req.headers.get('x-admin-password') === process.env.ADMIN_PASSWORD
}

// PATCH /api/bookings/[id] — update status / notes / trial date
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!checkAdmin(req)) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })

  const { id } = await params
  const body = await req.json()
  const { status, admin_notes, trial_date } = body

  const { error } = await supabaseAdmin
    .from('bookings')
    .update({ status, admin_notes, trial_date })
    .eq('id', id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}

// DELETE /api/bookings/[id]
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!checkAdmin(req)) return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })

  const { id } = await params
  const { error } = await supabaseAdmin.from('bookings').delete().eq('id', id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true })
}
