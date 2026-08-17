'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, Star, CheckCircle2, Phone, MessageCircle, Linkedin, BadgeCheck } from 'lucide-react'
import { BUSINESS_INFO, FREE_TRIAL_WHATSAPP } from '@/lib/utils'

const trustBadges = [
  '1,200+ Students',
  'Ijazah-Certified Instructor',
  'Dr.-Level Teaching',
  'Male & Female Teachers',
]

const credentials = [
  'Ijazah – Hafs ʿan Asim',
  'Assistant Professor',
  'Arabic for Non-Native Speakers',
  'Teacher Trainer',
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const fadeRight = {
  initial: { opacity: 0, x: 40 },
  animate: { opacity: 1, x: 0 },
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
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
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
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4"
            >
              Learn the{' '}
              <span className="bg-clip-text text-transparent bg-gold-gradient">
                Holy Quran
              </span>
              <br />
              with an Ijazah‑Certified Dr.
            </motion.h1>

            {/* Hadith quote */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-white/5 backdrop-blur-sm border border-gold/30 rounded-2xl px-5 py-4 mb-6"
            >
              <span className="absolute left-0 top-4 bottom-4 w-1 bg-gold-gradient rounded-full" />
              <p
                className="font-arabic text-xl md:text-2xl text-gold leading-relaxed mb-2 text-right"
                lang="ar"
                dir="rtl"
              >
                خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
              </p>
              <p className="text-white/80 text-sm italic">
                &ldquo;The best of you are those who learn the Quran and teach it.&rdquo;
              </p>
              <p className="text-gold/70 text-xs mt-1">— Prophet Muhammad ﷺ · Sahih al-Bukhari</p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/75 text-lg leading-relaxed mb-8"
            >
              Join over <strong className="text-white">1,200+ students</strong> learning Quran, Tajweed, Hifz &amp; Islamic
              Studies online and in Manchester — taught by a verified Ijazah holder.
            </motion.p>

            {/* ── PRIMARY WhatsApp CTA ── */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-3 mb-8"
            >
              <a
                href={FREE_TRIAL_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.45)] hover:scale-105 transition-all duration-300 justify-center sm:justify-start w-full sm:w-auto"
              >
                <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                WhatsApp — Book FREE Trial Now
                <ArrowRight className="w-5 h-5 ml-auto sm:ml-0" />
              </a>
              <p className="text-white/45 text-xs text-center sm:text-left">
                ✓ Instant reply &nbsp;·&nbsp; ✓ No commitment &nbsp;·&nbsp; ✓ First class FREE
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-5 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all text-sm justify-center"
                >
                  <Phone className="w-4 h-4 text-primary-400" />
                  {BUSINESS_INFO.phone}
                </a>
                <Link
                  href="/courses"
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-5 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all text-sm justify-center"
                >
                  <Play className="w-4 h-4" />
                  Explore Courses
                </Link>
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full text-white text-xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400 shrink-0" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN — Instructor Card ── */}
          <motion.div
            variants={fadeRight}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow ring */}
              <div className="absolute -inset-1 bg-gold-gradient rounded-3xl blur opacity-30" />

              <div className="relative bg-white/10 backdrop-blur-md border border-gold/30 rounded-3xl overflow-hidden">
                {/* Photo */}
                <div className="relative h-72 sm:h-80 w-full bg-gradient-to-b from-primary-900/50 to-dark/80">
                  <Image
                    src="/dr-omaima-habiba.webp"
                    alt="Dr. Omaima Habiba — Ijazah-Certified Quran Instructor, Assistant Professor, Manchester"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 380px"
                    priority
                  />
                  {/* Gold overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark/90 to-transparent" />

                  {/* Ijazah badge — top right */}
                  <div className="absolute top-3 right-3 bg-gold text-dark text-xs font-bold px-3 py-1 rounded-full">
                    Ijazah Certified ✓
                  </div>
                </div>

                {/* Info panel */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h2 className="font-heading font-bold text-white text-lg leading-tight">
                        Dr. Omaima Habiba
                      </h2>
                      <p className="text-gold text-xs font-semibold mt-0.5">
                        Assistant Professor · Arabic Language Specialist
                      </p>
                    </div>
                    <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded-lg shrink-0">
                      <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                      <span className="text-white text-xs font-bold">5.0</span>
                    </div>
                  </div>

                  {/* Credentials */}
                  <ul className="space-y-1.5 mb-4">
                    {credentials.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-white/80 text-xs">
                        <BadgeCheck className="w-3.5 h-3.5 text-gold shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Assalamu%20Alaykum%20Dr.%20Omaima%2C%20I%20would%20like%20to%20book%20a%20FREE%20trial%20class.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20b858] text-white px-3 py-2.5 rounded-xl text-xs font-semibold transition-all hover:scale-105"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Book Trial
                    </a>
                    <a
                      href={BUSINESS_INFO.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 bg-[#0A66C2] hover:bg-[#0958a8] text-white px-3 py-2.5 rounded-xl text-xs font-semibold transition-all hover:scale-105"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Bottom — rating strip */}
                <div className="border-t border-white/10 px-5 py-3 flex items-center justify-between text-xs text-white/50">
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 text-gold fill-gold" />)}
                    </div>
                    <span className="text-white/70 ml-1">4.9/5 · 247 Reviews</span>
                  </div>
                  <span>Manchester, UK</span>
                </div>
              </div>
            </div>
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
