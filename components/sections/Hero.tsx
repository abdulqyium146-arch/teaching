'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Play, Star, CheckCircle2, Phone } from 'lucide-react'
import { BUSINESS_INFO, FREE_TRIAL_WHATSAPP } from '@/lib/utils'

const trustBadges = [
  '1,200+ Students',
  '20+ Certified Teachers',
  '10+ Years Experience',
  'Male & Female Teachers',
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />

      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3Cpath d='M40 10L70 40L40 70L10 40Z' fill='none' stroke='%23D4AF37' stroke-width='0.5'/%3E%3Cpath d='M40 20L60 40L40 60L20 40Z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

      <div className="relative z-10 container-custom pt-28 pb-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="font-arabic text-gold text-base">بِسْمِ اللَّهِ</span>
            <span>— Now Enrolling for 2025</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Learn the{' '}
            <span className="bg-clip-text text-transparent bg-gold-gradient">
              Holy Quran
            </span>
            <br />
            with Expert Teachers
          </motion.h1>

          {/* Hadith quote */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative inline-block max-w-2xl mx-auto mb-8 w-full"
          >
            <div className="relative bg-white/5 backdrop-blur-sm border border-gold/30 rounded-2xl px-6 py-5">
              {/* decorative left bar */}
              <span className="absolute left-0 top-4 bottom-4 w-1 bg-gold-gradient rounded-full" />
              <p
                className="font-arabic text-2xl md:text-3xl text-gold leading-relaxed mb-3 text-right"
                lang="ar"
                dir="rtl"
              >
                خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
              </p>
              <p className="text-white/85 text-sm md:text-base italic leading-relaxed mb-1">
                &ldquo;The best of you are those who learn the Quran and teach it.&rdquo;
              </p>
              <p className="text-gold/70 text-xs font-medium tracking-wide">
                — Prophet Muhammad ﷺ &nbsp;·&nbsp; Sahih al-Bukhari
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Join over <strong className="text-white">1,200+ students</strong> learning Quran, Tajweed, Hifz & Islamic
            Studies online and in Manchester. Certified teachers, flexible schedules, all ages welcome.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href={FREE_TRIAL_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold-gradient text-dark px-8 py-4 rounded-2xl font-bold text-lg shadow-glow-gold hover:scale-105 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Book FREE Trial Class
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/courses"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Play className="w-5 h-5" />
              Explore Courses
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                {badge}
              </div>
            ))}
          </motion.div>

          {/* Rating row */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              <span className="text-white font-semibold">4.9/5</span>
              <span className="text-white/60 text-sm">(247 Reviews)</span>
            </div>
            <div className="w-px h-6 bg-white/20 hidden sm:block" />
            <a
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
            >
              <Phone className="w-4 h-4 text-primary-400" />
              Call us: {BUSINESS_INFO.phone}
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
