'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, MessageCircle, CalendarCheck } from 'lucide-react'
import { FREE_TRIAL_WHATSAPP } from '@/lib/utils'

interface CTASectionProps {
  title?: string
  subtitle?: string
  variant?: 'primary' | 'dark' | 'light'
}

export function CTASection({
  title = 'Ready to Begin Your Quran Journey?',
  subtitle = 'Book a FREE trial class today — no commitment required. Join 1,200+ students learning with certified teachers.',
  variant = 'primary',
}: CTASectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  const bgClass =
    variant === 'primary'
      ? 'bg-teal-gradient'
      : variant === 'dark'
      ? 'bg-dark'
      : 'bg-white dark:bg-dark/60'

  const textClass = variant === 'light' ? 'text-dark dark:text-white' : 'text-white'

  return (
    <section className={`py-16 md:py-20 relative overflow-hidden ${bgClass}`} ref={ref}>
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='white' stroke-width='0.8'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-arabic text-2xl text-white/60 mb-4">
            وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ
          </p>

          <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold ${textClass} mb-6 max-w-3xl mx-auto`}>
            {title}
          </h2>
          <p className={`text-lg mb-10 max-w-2xl mx-auto ${variant === 'light' ? 'text-gray-600 dark:text-gray-400' : 'text-white/80'}`}>
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary — booking form */}
            <Link
              href="/book"
              className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 w-full sm:w-auto justify-center shadow-lg ${
                variant === 'primary' || variant === 'dark'
                  ? 'bg-white text-primary-700 hover:bg-gold hover:text-dark'
                  : 'bg-teal-gradient text-white hover:shadow-glow'
              }`}
            >
              <CalendarCheck className="w-5 h-5" />
              Book FREE Trial Online
              <ArrowRight className="w-5 h-5" />
            </Link>
            {/* Secondary — WhatsApp instant */}
            <a
              href={FREE_TRIAL_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-lg border transition-all w-full sm:w-auto justify-center ${
                variant === 'primary' || variant === 'dark'
                  ? 'border-white/30 text-white hover:bg-white/10'
                  : 'border-primary-200 text-primary-700 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
