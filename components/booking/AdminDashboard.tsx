'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  Search, RefreshCw, Loader2, CheckCircle2, XCircle,
  Phone, Mail, MessageCircle, Calendar, BookOpen,
  ChevronDown, Trash2, Lock, LogOut
} from 'lucide-react'
import { Booking, BookingStatus } from '@/lib/supabase'

const STATUS_COLOURS: Record<BookingStatus, string> = {
  new:       'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  contacted: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
  confirmed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  cancelled: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
}

const STATUS_LABELS: Record<BookingStatus, string> = {
  new: '🆕 New', contacted: '📞 Contacted', confirmed: '✅ Confirmed', cancelled: '❌ Cancelled',
}

function LoginScreen({ onLogin }: { onLogin: (pwd: string) => void }) {
  const [pwd, setPwd] = useState('')
  const [err, setErr] = useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!pwd) return
    onLogin(pwd)
    setErr(true)
  }

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center p-4">
      <div className="bg-white dark:bg-dark/60 rounded-3xl border border-white/10 p-10 w-full max-w-sm text-center">
        <Lock className="w-10 h-10 text-primary-500 mx-auto mb-4" />
        <h1 className="font-heading text-2xl font-bold text-dark dark:text-white mb-2">Admin Login</h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">Quran Center UK — Bookings Dashboard</p>
        <form onSubmit={submit} className="space-y-3">
          <input
            type="password"
            value={pwd}
            onChange={e => { setPwd(e.target.value); setErr(false) }}
            placeholder="Enter admin password"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-dark dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          {err && <p className="text-red-500 text-xs">Incorrect password</p>}
          <button
            type="submit"
            className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

function BookingCard({
  booking, adminPwd, onUpdate, onDelete,
}: {
  booking: Booking
  adminPwd: string
  onUpdate: () => void
  onDelete: (id: string) => void
}) {
  const [open, setOpen] = useState(false)
  const [status, setStatus] = useState<BookingStatus>(booking.status)
  const [notes, setNotes] = useState(booking.admin_notes ?? '')
  const [trialDate, setTrialDate] = useState(booking.trial_date ?? '')
  const [saving, setSaving] = useState(false)

  async function save() {
    setSaving(true)
    await fetch(`/api/bookings/${booking.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'x-admin-password': adminPwd },
      body: JSON.stringify({ status, admin_notes: notes, trial_date: trialDate || null }),
    })
    setSaving(false)
    onUpdate()
  }

  async function remove() {
    if (!confirm('Delete this booking? This cannot be undone.')) return
    await fetch(`/api/bookings/${booking.id}`, {
      method: 'DELETE',
      headers: { 'x-admin-password': adminPwd },
    })
    onDelete(booking.id)
  }

  const date = new Date(booking.created_at).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit',
  })

  return (
    <div className="bg-white dark:bg-dark/60 rounded-2xl border border-gray-100 dark:border-white/10 overflow-hidden">
      {/* Card header */}
      <button
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-sm shrink-0">
            {booking.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-dark dark:text-white text-sm">{booking.name}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs">{booking.course}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${STATUS_COLOURS[booking.status]}`}>
            {STATUS_LABELS[booking.status]}
          </span>
          <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
        </div>
      </button>

      {/* Expanded */}
      {open && (
        <div className="border-t border-gray-100 dark:border-white/10 p-5 space-y-5">
          {/* Contact info */}
          <div className="grid sm:grid-cols-3 gap-3">
            <a href={`tel:${booking.phone}`} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors">
              <Phone className="w-4 h-4 text-primary-500 shrink-0" />{booking.phone}
            </a>
            <a href={`mailto:${booking.email}`} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 transition-colors">
              <Mail className="w-4 h-4 text-primary-500 shrink-0" />{booking.email}
            </a>
            <a
              href={`https://wa.me/${booking.phone.replace(/\D/g, '')}?text=Assalamu%20Alaykum%20${encodeURIComponent(booking.name)}%2C%20we%20received%20your%20booking%20request%20at%20Quran%20Center%20UK.`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#25D366] hover:underline"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />WhatsApp
            </a>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            {[
              { label: 'Age Group', value: booking.age_group },
              { label: 'Gender', value: booking.gender },
              { label: 'Class Type', value: booking.class_type },
              { label: 'Preferred Time', value: booking.preferred_time },
            ].map(({ label, value }) => (
              <div key={label} className="bg-gray-50 dark:bg-white/5 rounded-xl p-3">
                <p className="text-gray-400 mb-0.5">{label}</p>
                <p className="font-semibold text-dark dark:text-white capitalize">{value}</p>
              </div>
            ))}
          </div>

          {booking.preferred_days?.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {booking.preferred_days.map(d => (
                <span key={d} className="px-2.5 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                  {d}
                </span>
              ))}
            </div>
          )}

          {booking.message && (
            <div className="bg-gray-50 dark:bg-white/5 rounded-xl p-3">
              <p className="text-gray-400 text-xs mb-1 flex items-center gap-1"><BookOpen className="w-3 h-3" /> Message</p>
              <p className="text-sm text-dark dark:text-white">{booking.message}</p>
            </div>
          )}

          <p className="text-xs text-gray-400 flex items-center gap-1">
            <Calendar className="w-3 h-3" /> Submitted {date}
            {booking.how_heard && <> · via {booking.how_heard}</>}
          </p>

          {/* Admin controls */}
          <div className="border-t border-gray-100 dark:border-white/10 pt-4 space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 block">Update Status</label>
                <select
                  value={status}
                  onChange={e => setStatus(e.target.value as BookingStatus)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-dark dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 block">Trial Date</label>
                <input
                  type="date"
                  value={trialDate}
                  onChange={e => setTrialDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-dark dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 block">Admin Notes</label>
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                rows={2}
                placeholder="Internal notes..."
                className="w-full px-3 py-2 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-dark dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={save}
                disabled={saving}
                className="flex items-center gap-1.5 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
              >
                {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                Save
              </button>
              <button
                onClick={remove}
                className="flex items-center gap-1.5 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 text-red-600 dark:text-red-400 px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" /> Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function AdminDashboard() {
  const [adminPwd, setAdminPwd] = useState('')
  const [authed, setAuthed] = useState(false)
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [authError, setAuthError] = useState(false)

  const fetchBookings = useCallback(async (pwd: string) => {
    setLoading(true)
    const params = new URLSearchParams()
    if (statusFilter !== 'all') params.set('status', statusFilter)
    if (search) params.set('search', search)

    const res = await fetch(`/api/bookings?${params}`, {
      headers: { 'x-admin-password': pwd },
    })

    if (res.status === 401) {
      setAuthError(true)
      setAuthed(false)
      setLoading(false)
      return
    }

    const data = await res.json()
    setBookings(Array.isArray(data) ? data : [])
    setLoading(false)
  }, [statusFilter, search])

  useEffect(() => {
    if (authed) fetchBookings(adminPwd)
  }, [authed, fetchBookings, adminPwd])

  function handleLogin(pwd: string) {
    setAdminPwd(pwd)
    setAuthError(false)
    setAuthed(true)
  }

  function logout() {
    setAdminPwd('')
    setAuthed(false)
    setBookings([])
  }

  function removeFromList(id: string) {
    setBookings(prev => prev.filter(b => b.id !== id))
  }

  if (!authed) return <LoginScreen onLogin={handleLogin} />

  const counts: Record<string, number> = {
    all: bookings.length,
    new: bookings.filter(b => b.status === 'new').length,
    contacted: bookings.filter(b => b.status === 'contacted').length,
    confirmed: bookings.filter(b => b.status === 'confirmed').length,
    cancelled: bookings.filter(b => b.status === 'cancelled').length,
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark pt-20">
      {/* Top bar */}
      <div className="bg-white dark:bg-dark/80 border-b border-gray-100 dark:border-white/10 px-6 py-4 sticky top-16 z-40">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div>
            <h1 className="font-heading font-bold text-dark dark:text-white text-lg">Bookings Dashboard</h1>
            <p className="text-gray-500 dark:text-gray-400 text-xs">Quran Center UK</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => fetchBookings(adminPwd)}
              className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button
              onClick={logout}
              className="flex items-center gap-1.5 text-sm text-red-500 hover:text-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-6">

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {(['all', 'new', 'contacted', 'confirmed', 'cancelled'] as const).map(s => (
            <button
              key={s}
              onClick={() => { setStatusFilter(s); fetchBookings(adminPwd) }}
              className={`p-4 rounded-2xl border text-left transition-all ${
                statusFilter === s
                  ? 'bg-primary-600 border-primary-600 text-white'
                  : 'bg-white dark:bg-dark/60 border-gray-100 dark:border-white/10 text-dark dark:text-white hover:border-primary-300'
              }`}
            >
              <div className="font-bold text-2xl">{counts[s] ?? 0}</div>
              <div className={`text-xs capitalize ${statusFilter === s ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'}`}>{s}</div>
            </button>
          ))}
        </div>

        {/* Search + filter */}
        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && fetchBookings(adminPwd)}
              placeholder="Search by name, email or phone…"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-dark dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <button
            onClick={() => fetchBookings(adminPwd)}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
          >
            Search
          </button>
        </div>

        {/* Bookings list */}
        {loading ? (
          <div className="flex items-center justify-center py-16 text-gray-400">
            <Loader2 className="w-8 h-8 animate-spin" />
          </div>
        ) : bookings.length === 0 ? (
          <div className="text-center py-16">
            <XCircle className="w-12 h-12 text-gray-300 dark:text-gray-700 mx-auto mb-3" />
            <p className="text-gray-500 dark:text-gray-400">No bookings found</p>
          </div>
        ) : (
          <div className="space-y-3">
            {bookings.map(b => (
              <BookingCard
                key={b.id}
                booking={b}
                adminPwd={adminPwd}
                onUpdate={() => fetchBookings(adminPwd)}
                onDelete={removeFromList}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
