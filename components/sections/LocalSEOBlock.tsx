'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

const locations = [
  {
    city: 'Manchester',
    description: 'In-person & online classes serving Levenshulme, Gorton, Didsbury, Fallowfield and all Manchester areas.',
    href: '/quran-classes-manchester',
    badge: 'Main Centre',
  },
  {
    city: 'Birmingham',
    description: 'Online Quran classes available for students across Birmingham and the West Midlands.',
    href: '/quran-classes-birmingham',
    badge: 'Online',
  },
  {
    city: 'London',
    description: 'Join hundreds of London-based students learning Quran online with our expert teachers.',
    href: '/online-quran-classes-london',
    badge: 'Online',
  },
  {
    city: 'UK Wide',
    description: 'No matter where you are in the UK — our online platform brings quality Quran education to your home.',
    href: '/online-quran-classes',
    badge: 'Nationwide',
  },
]

export function LocalSEOBlock() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-white dark:bg-dark" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4">
            <span className="w-8 h-px bg-primary-600" />
            Serving Students Across the UK
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            Quran Classes Near You
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Whether you&apos;re in Manchester, Birmingham, London or anywhere in the UK —
            Quran Center UK is here to serve you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={loc.href}
                className="block h-full bg-gray-50 dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/10 card-hover group"
              >
                <div className="flex items-center justify-between mb-3">
                  <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-2 py-0.5 rounded-full font-medium">
                    {loc.badge}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-dark dark:text-white text-lg mb-2">
                  {loc.city}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {loc.description}
                </p>
                <span className="flex items-center gap-1 text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:gap-2 transition-all">
                  View Classes <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* SEO content block */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 grid md:grid-cols-2 gap-6"
        >
          <div className="p-6 bg-primary-50 dark:bg-primary-900/20 rounded-2xl border border-primary-100 dark:border-primary-800">
            <h3 className="font-heading font-semibold text-dark dark:text-white mb-3 text-lg">
              Quran Classes in Manchester — Your Local Centre
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Based at <strong>41 Hemmons Rd, Levenshulme, Manchester M12 5TA</strong>, Quran Center UK
              has served the Muslim community of Greater Manchester since 2014. We offer in-person{' '}
              <Link href="/quran-classes-manchester" className="text-primary-600 dark:text-primary-400 underline hover:text-primary-700">
                Quran classes in Manchester
              </Link>{' '}
              for children and adults across Levenshulme, Gorton, Longsight, Fallowfield, Didsbury and Rusholme.
              Our{' '}
              <Link href="/tajweed-classes-uk" className="text-primary-600 dark:text-primary-400 underline hover:text-primary-700">
                Tajweed classes
              </Link>{' '}
              and{' '}
              <Link href="/courses#hifz-ul-quran" className="text-primary-600 dark:text-primary-400 underline hover:text-primary-700">
                Hifz programme
              </Link>{' '}
              are taught by certified, Ijazah-holding teachers.
            </p>
          </div>

          <div className="p-6 bg-gold/10 dark:bg-gold-dark/10 rounded-2xl border border-gold/20 dark:border-gold-dark/20">
            <h3 className="font-heading font-semibold text-dark dark:text-white mb-3 text-lg">
              Online Quran Classes — UK-Wide, 24/7 Enrolment
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              Wherever you are in the UK, our{' '}
              <Link href="/online-quran-classes" className="text-primary-600 dark:text-primary-400 underline hover:text-primary-700">
                online Quran classes
              </Link>{' '}
              bring expert Islamic education to your home. Students in{' '}
              <Link href="/online-quran-classes-london" className="text-primary-600 dark:text-primary-400 underline hover:text-primary-700">
                London
              </Link>
              ,{' '}
              <Link href="/quran-classes-birmingham" className="text-primary-600 dark:text-primary-400 underline hover:text-primary-700">
                Birmingham
              </Link>
              , Leeds, Bradford and beyond join live sessions with our qualified teachers.
              WhatsApp us <strong>24/7</strong> to enrol or book your{' '}
              <Link href="/contact" className="text-primary-600 dark:text-primary-400 underline hover:text-primary-700">
                free trial class
              </Link>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
