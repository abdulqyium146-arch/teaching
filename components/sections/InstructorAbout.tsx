'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { BadgeCheck, MessageCircle, Linkedin, GraduationCap, Globe, BookOpen } from 'lucide-react'
import { BUSINESS_INFO } from '@/lib/utils'

const expertise = [
  'Curriculum Development',
  'Curriculum Design',
  'Higher Education Teaching',
  'Teacher Education & Professional Development',
  'Educational Leadership',
  'Arabic Language Teaching',
  'Teaching Arabic as a Foreign Language (TAFL)',
  'Islamic Studies',
  'Quran & Tajweed',
  'Educational Research',
  'Instructional Design',
  'Assessment & Quality Assurance',
  'Online & Blended Learning',
  'Educational Consulting',
  'Classroom Management',
  'Adult Education',
  'EAL Support',
]

const highlights = [
  { icon: GraduationCap, label: 'PhD — Curriculum & Instruction (TAFL)', color: 'text-gold' },
  { icon: BadgeCheck, label: 'Ijazah – Hafs ʿan Asim (Chain to Prophet ﷺ)', color: 'text-green-400' },
  { icon: Globe, label: '20+ Years International Higher Education', color: 'text-blue-400' },
  { icon: BookOpen, label: 'Arabic for Non-Native Speakers Specialist', color: 'text-purple-400' },
]

export function InstructorAbout() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="section-padding bg-white dark:bg-dark"
      ref={ref}
      id="about-instructor"
      aria-label="About Dr. Omaima Habiba"
    >
      <div className="container-custom">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4">
            <span className="w-8 h-px bg-primary-600" />
            Meet Your Lead Instructor
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            Learn from a{' '}
            <span className="gradient-text">Verified Ijazah Holder & PhD</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            With over 20 years of international experience, Dr. Omaima Habiba brings academic
            excellence and authentic Islamic scholarship to every student.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 xl:gap-16 items-start">

          {/* LEFT — Photo + quick stats (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
          >
            {/* Photo card */}
            <div className="relative w-full max-w-xs">
              <div className="absolute -inset-1 bg-gold-gradient rounded-3xl blur opacity-20" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold/30">
                <div className="relative h-80 w-full">
                  <Image
                    src="/dr-omaima-habiba.webp"
                    alt="Dr. Omaima Habiba — PhD, Ijazah-Certified Quran Instructor, Assistant Professor, Manchester"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 320px, 280px"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-dark/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-heading font-bold text-lg leading-tight">Dr. Omaima Habiba</p>
                    <p className="text-gold text-xs font-medium">PhD · Assistant Professor · Ijazah Holder</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-3 w-full max-w-xs">
              {highlights.map((h) => (
                <li key={h.label} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10">
                  <h.icon className={`w-4 h-4 shrink-0 mt-0.5 ${h.color}`} />
                  <span className="text-sm text-gray-700 dark:text-gray-300 leading-snug">{h.label}</span>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex gap-3 w-full max-w-xs">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Assalamu%20Alaykum%20Dr.%20Omaima%2C%20I%20would%20like%20to%20book%20a%20FREE%20trial%20class.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                Book Trial
              </a>
              <a
                href={BUSINESS_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#0958a8] text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 shadow-md"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>

            {/* Location pill */}
            <p className="text-xs text-gray-400 dark:text-gray-500 text-center lg:text-left">
              📍 Manchester, England, United Kingdom · Full right to work in UK
            </p>
          </motion.div>

          {/* RIGHT — Bio + expertise (3 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {/* Bio */}
            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Dr. Omaima Habiba is an experienced Educational Leader, Assistant Professor, Curriculum
                Development Specialist, and Teacher Trainer with over <strong>20 years of international
                experience</strong> in higher education, Arabic language education, Islamic Studies,
                curriculum development, and teacher professional development.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                She holds a <strong>PhD in Curriculum and Instruction</strong> with a specialisation in
                Teaching Arabic to Speakers of Other Languages (TAFL). Throughout her academic career,
                she has taught undergraduate and postgraduate students, supervised research, designed
                university curricula, developed educational programmes, and delivered professional
                development for teachers across schools, universities, and educational organisations.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                She has extensive experience teaching children, adults, university students, and
                non-native Arabic speakers using <strong>learner-centred, interactive, and
                research-informed</strong> teaching approaches. Her Ijazah in Hafs ʿan Asim represents
                an unbroken chain of Quranic transmission going back to the Prophet Muhammad ﷺ — one of
                the rarest and most respected credentials in Islamic education.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Dr. Omaima is passionate about improving educational quality, empowering teachers,
                supporting student success, and developing innovative curricula that meet international
                academic standards. She works in multicultural environments and collaborates with
                educational institutions to enhance teaching excellence and learner achievement.
              </p>
            </div>

            {/* Areas of Expertise */}
            <div>
              <h3 className="font-heading font-bold text-dark dark:text-white text-lg mb-4 flex items-center gap-2">
                <span className="w-6 h-0.5 bg-primary-600 inline-block" />
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-100 dark:border-primary-800 px-3 py-1.5 rounded-full text-xs font-medium"
                  >
                    <BadgeCheck className="w-3 h-3 shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Seeking roles note */}
            <div className="mt-8 p-5 bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-2xl">
              <p className="text-primary-800 dark:text-primary-300 text-sm font-semibold mb-2">
                Currently based in Manchester, UK — Seeking collaboration with:
              </p>
              <p className="text-primary-700 dark:text-primary-400 text-sm leading-relaxed">
                Universities · Colleges · Schools · Islamic educational institutions · Training providers
                — across the UK and internationally.
              </p>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Assalamu%20Alaykum%20Dr.%20Omaima%2C%20I%20would%20like%20to%20enquire%20about%20collaboration%20or%20enrolment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4" />
                Enquire on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
