'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Users, BadgeCheck, MessageCircle } from 'lucide-react'
import { Teacher } from '@/types'

interface TeachersSectionProps {
  teachers: Teacher[]
}

export function TeachersSection({ teachers }: TeachersSectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const featured = teachers.find((t) => t.featured)
  const rest = teachers.filter((t) => !t.featured)

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark/40" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4">
            <span className="w-8 h-px bg-primary-600" />
            Our Teachers
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            Learn from{' '}
            <span className="gradient-text">Certified Scholars</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our qualified teachers bring decades of experience in Quranic education, combining
            traditional Islamic scholarship with modern teaching methods.
          </p>
        </motion.div>

        {/* Featured instructor — Dr. Omaima */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8 rounded-3xl overflow-hidden border-2 border-gold/40 bg-gradient-to-br from-dark via-primary-900 to-dark shadow-glow-gold"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left — avatar + stats */}
              <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-teal-gradient relative">
                {/* Gold badge */}
                <span className="absolute top-4 left-4 bg-gold text-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Head Instructor
                </span>

                <div className="w-32 h-32 rounded-full bg-white/20 border-4 border-gold/60 flex items-center justify-center text-white font-bold text-4xl font-heading mb-4">
                  OH
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-1 text-center">
                  {featured.name}
                </h3>
                <p className="text-gold text-sm font-semibold text-center mb-4">
                  {featured.title}
                </p>

                <div className="flex items-center gap-6 mb-6">
                  <div className="text-center">
                    <div className="flex items-center gap-1 justify-center mb-1">
                      <Star className="w-4 h-4 text-gold fill-gold" />
                      <span className="text-white font-bold">{featured.rating}</span>
                    </div>
                    <p className="text-white/60 text-xs">Rating</p>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <div className="flex items-center gap-1 justify-center mb-1">
                      <Users className="w-4 h-4 text-primary-300" />
                      <span className="text-white font-bold">{featured.students}+</span>
                    </div>
                    <p className="text-white/60 text-xs">Students</p>
                  </div>
                  <div className="w-px h-8 bg-white/20" />
                  <div className="text-center">
                    <div className="text-white font-bold mb-1">{featured.experience}</div>
                    <p className="text-white/60 text-xs">Experience</p>
                  </div>
                </div>

                {featured.whatsapp && (
                  <a
                    href={`https://wa.me/${featured.whatsapp}?text=Assalamu%20Alaykum%20Dr.%20Omaima%2C%20I%20would%20like%20to%20enquire%20about%20Quran%20classes%20at%20Quran%20Center%20UK.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Dr. Omaima
                  </a>
                )}
              </div>

              {/* Right — credentials */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-2">
                  Why learn with her?
                </p>
                <h4 className="font-heading text-white text-2xl font-bold mb-2">
                  The Rarest Credential in UK Quran Teaching
                </h4>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  An <strong className="text-gold">Ijazah – Hafs ʿan Asim</strong> is an unbroken chain of
                  certified Quran transmission going back to the Prophet Muhammad ﷺ himself. Only a
                  handful of scholars in the UK hold this honour. Combined with her doctorate and
                  specialisation in teaching Arabic to non-native speakers, Dr. Omaima brings
                  academic rigour and authentic Islamic tradition together in every lesson.
                </p>

                {featured.credentials && (
                  <ul className="space-y-2">
                    {featured.credentials.map((c) => (
                      <li key={c} className="flex items-center gap-3 text-white/90 text-sm">
                        <BadgeCheck className="w-4 h-4 text-gold shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-6 pt-6 border-t border-white/10 text-white/50 text-xs">
                  Manchester, England, United Kingdom
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Rest of the team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((teacher, i) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-dark/60 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 card-hover"
            >
              <div className="h-48 bg-teal-gradient flex items-center justify-center relative overflow-hidden">
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-3xl font-heading">
                  {teacher.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-medium">
                  {teacher.gender === 'Female' ? '👩‍🏫' : '👨‍🏫'} {teacher.gender}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-heading font-bold text-dark dark:text-white text-base mb-1">
                  {teacher.name}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 text-xs font-medium mb-2">
                  {teacher.title}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-4">
                  {teacher.education}
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-white/10">
                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                    <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                    {teacher.rating}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                    <Users className="w-3.5 h-3.5 text-primary-500" />
                    {teacher.students}+ students
                  </div>
                  <div className="ml-auto text-xs text-gray-500 dark:text-gray-500">
                    {teacher.experience}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
