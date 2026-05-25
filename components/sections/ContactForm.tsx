'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import { BUSINESS_INFO, WHATSAPP_URL, FREE_TRIAL_WHATSAPP } from '@/lib/utils'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark/40">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-dark/60 rounded-2xl p-8 border border-gray-100 dark:border-white/10 shadow-card"
          >
            <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              We respond within 24 hours, usually much faster.
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-heading font-bold text-xl text-dark dark:text-white mb-2">
                  Message Sent! JazakAllah Khair
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We&apos;ll get back to you within 24 hours. In the meantime, feel free to WhatsApp us.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold"
                >
                  Chat on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-dark dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-dark dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-dark dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors text-sm"
                      placeholder="+44 7700 000000"
                    />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Course Interested In
                    </label>
                    <select
                      id="course"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-dark dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors text-sm"
                    >
                      <option value="">Select a course</option>
                      <option>Noorani Qaida</option>
                      <option>Quran Reading</option>
                      <option>Tajweed Classes</option>
                      <option>Hifz ul Quran</option>
                      <option>Islamic Studies</option>
                      <option>Kids Quran Classes</option>
                      <option>Adults Quran Classes</option>
                      <option>One-to-One Classes</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-dark dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors text-sm resize-none"
                    placeholder="Tell us about yourself, your age/child's age, experience level, and any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-teal-gradient text-white px-6 py-4 rounded-xl font-semibold hover:shadow-glow transition-all"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                <p className="text-xs text-gray-500 dark:text-gray-500 text-center">
                  Or reach us instantly on{' '}
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 underline">
                    WhatsApp
                  </a>
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-dark/60 rounded-2xl p-6 border border-gray-100 dark:border-white/10">
              <h3 className="font-heading font-bold text-dark dark:text-white mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <a
                  href={FREE_TRIAL_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-100 dark:border-green-800 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-[#25D366] rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark dark:text-white text-sm">WhatsApp Us</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Fastest response — usually within minutes</div>
                  </div>
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="flex items-center gap-4 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-100 dark:border-primary-800 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-teal-gradient rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark dark:text-white text-sm">{BUSINESS_INFO.phone}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Call us during opening hours</div>
                  </div>
                </a>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-center gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-dark dark:text-white text-sm">{BUSINESS_INFO.email}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">We reply within 24 hours</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-dark/60 rounded-2xl p-6 border border-gray-100 dark:border-white/10">
              <h3 className="font-heading font-bold text-dark dark:text-white mb-4">Visit Our Centre</h3>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                <p className="text-gray-700 dark:text-gray-300 text-sm">{BUSINESS_INFO.address.full}</p>
              </div>
              <div className="border-t border-gray-100 dark:border-white/10 pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                  <span className="font-medium text-dark dark:text-white text-sm">Opening Hours</span>
                </div>
                <div className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span>{BUSINESS_INFO.hours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>{BUSINESS_INFO.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>{BUSINESS_INFO.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38926439.301144265!2d-76.01551160000004!3d53.452708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x29859e5fe0e4daf9%3A0xe094b717e68bc3ee!2sQuran%20Center%20UK!5e0!3m2!1sen!2s!4v1779698451909!5m2!1sen!2s"
                width="100%"
                height="280"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Quran Center UK location — 41 Hemmons Rd, Levenshulme, Manchester M12 5TA"
              />
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-4 border border-green-100 dark:border-green-800">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-semibold text-green-800 dark:text-green-300 text-sm">WhatsApp — Available 24/7</span>
              </div>
              <p className="text-green-700 dark:text-green-400 text-xs">
                Message us any time of day or night. Our teachers and support team respond around the clock for enrolment, course queries, and trial bookings.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
