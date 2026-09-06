'use client'

import { useState } from 'react'
import { MessageCircle, CheckCircle2, Loader2, AlertCircle } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/utils'

const courses = [
  'Noorani Qaida (Beginners)',
  'Quran Reading (Nazra)',
  'Tajweed Classes',
  'Hifz ul Quran (Memorisation)',
  'Islamic Studies',
  'Arabic Language',
  'Quran for Kids',
  'Quran for Adults',
  'One-to-One Classes',
]

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const times = [
  'Morning (9am – 12pm)',
  'Afternoon (12pm – 4pm)',
  'Evening (4pm – 9pm)',
  'Flexible / Any time',
]

type State = 'idle' | 'loading' | 'success' | 'error'

export function BookingForm() {
  const [state, setState] = useState<State>('idle')
  const [error, setError] = useState('')
  const [selectedDays, setSelectedDays] = useState<string[]>([])

  function toggleDay(day: string) {
    setSelectedDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('loading')
    setError('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    if (selectedDays.length === 0) {
      setError('Please select at least one preferred day.')
      setState('idle')
      return
    }

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, preferred_days: selectedDays }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Something went wrong')
      setState('success')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="bg-white dark:bg-dark/60 rounded-3xl p-10 text-center border border-green-200 dark:border-green-800 shadow-lg">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-3">
          Booking Received! JazakAllahu Khayran
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We've received your booking request. Our team will contact you via WhatsApp or phone within a few hours to confirm your FREE trial slot.
        </p>
        <a
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Assalamu%20Alaykum%2C%20I%20just%20submitted%20a%20booking%20request%20for%20a%20FREE%20trial%20class.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          Message us on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-dark/60 rounded-3xl border border-gray-100 dark:border-white/10 shadow-lg overflow-hidden"
    >
      {/* Form header */}
      <div className="bg-primary-600 px-8 py-5">
        <h2 className="font-heading font-bold text-white text-xl">Your Details</h2>
        <p className="text-primary-200 text-sm mt-0.5">All fields marked * are required</p>
      </div>

      <div className="p-8 space-y-6">

        {/* Name + Email */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-dark dark:text-white mb-1.5">
              Full Name *
            </label>
            <input
              name="name"
              required
              placeholder="e.g. Fatima Ahmed"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-dark dark:text-white mb-1.5">
              Email Address *
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold text-dark dark:text-white mb-1.5">
            WhatsApp / Phone Number *
          </label>
          <input
            name="phone"
            required
            placeholder="+44 7700 000000"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          />
        </div>

        {/* Age group + Gender */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-dark dark:text-white mb-1.5">
              Age Group *
            </label>
            <select
              name="age_group"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            >
              <option value="">Select age group</option>
              <option value="child">Child (under 12)</option>
              <option value="teen">Teen (12–17)</option>
              <option value="adult">Adult (18+)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-dark dark:text-white mb-1.5">
              Gender *
            </label>
            <select
              name="gender"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        {/* Course */}
        <div>
          <label className="block text-sm font-semibold text-dark dark:text-white mb-1.5">
            Course Interested In *
          </label>
          <select
            name="course"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          >
            <option value="">Select a course</option>
            {courses.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {/* Class type */}
        <div>
          <label className="block text-sm font-semibold text-dark dark:text-white mb-2">
            Class Type *
          </label>
          <div className="flex gap-3">
            {['online', 'in-person'].map(type => (
              <label
                key={type}
                className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 cursor-pointer hover:border-primary-400 transition-colors"
              >
                <input type="radio" name="class_type" value={type} required className="accent-primary-600" />
                <span className="text-sm font-medium text-dark dark:text-white capitalize">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Preferred days */}
        <div>
          <label className="block text-sm font-semibold text-dark dark:text-white mb-2">
            Preferred Days *
          </label>
          <div className="flex flex-wrap gap-2">
            {days.map(day => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                  selectedDays.includes(day)
                    ? 'bg-primary-600 text-white border-primary-600'
                    : 'bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:border-primary-400'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Preferred time */}
        <div>
          <label className="block text-sm font-semibold text-dark dark:text-white mb-1.5">
            Preferred Time *
          </label>
          <select
            name="preferred_time"
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          >
            <option value="">Select preferred time</option>
            {times.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-dark dark:text-white mb-1.5">
            Additional Message (optional)
          </label>
          <textarea
            name="message"
            rows={3}
            placeholder="Any additional information, questions, or special requirements..."
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-dark dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm resize-none"
          />
        </div>

        {/* How did you hear */}
        <div>
          <label className="block text-sm font-semibold text-dark dark:text-white mb-1.5">
            How did you hear about us?
          </label>
          <select
            name="how_heard"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-dark dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          >
            <option value="">Select an option</option>
            <option value="google">Google Search</option>
            <option value="facebook">Facebook</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="friend">Friend / Family</option>
            <option value="linkedin">LinkedIn</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Error */}
        {state === 'error' && (
          <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 px-4 py-3 rounded-xl text-sm">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={state === 'loading'}
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] disabled:opacity-60 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 disabled:scale-100 shadow-lg"
        >
          {state === 'loading' ? (
            <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
          ) : (
            <><MessageCircle className="w-5 h-5" /> Book My FREE Trial Class</>
          )}
        </button>

        <p className="text-center text-xs text-gray-400">
          By submitting, you agree to be contacted via WhatsApp or phone to confirm your booking.
        </p>
      </div>
    </form>
  )
}
