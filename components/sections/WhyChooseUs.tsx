'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Shield, Clock, Users, Globe, Award, Heart } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Ijazah-Certified Head Instructor',
    description:
      'Led by Dr. Omaima Habiba — Assistant Professor, Ijazah holder (Hafs ʿan Asim), and specialist in teaching Arabic to non-native speakers. An unbroken chain back to the Prophet ﷺ.',
    color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
  },
  {
    icon: Users,
    title: 'Male & Female Teachers',
    description:
      'We have both male and female Quran teachers available, ensuring every student learns in a comfortable and appropriate Islamic environment.',
    color: 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400',
  },
  {
    icon: Globe,
    title: 'Online & In-Person Classes',
    description:
      'Study from anywhere in the UK or worldwide via our professional online platform, or attend our Manchester centre in person.',
    color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description:
      'Morning, afternoon, evening and weekend slots available. We work around your lifestyle so Quran education fits your schedule.',
    color: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
  },
  {
    icon: Shield,
    title: 'Safe & Trusted Environment',
    description:
      'All teachers are DBS-checked and vetted. Our safeguarding policies ensure every child and adult learns in a safe, trusted environment.',
    color: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
  },
  {
    icon: Heart,
    title: 'Personalised Attention',
    description:
      'Small class sizes and one-to-one options ensure every student receives personalised feedback and progresses at their own pace.',
    color: 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400',
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="section-padding bg-white dark:bg-dark" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4">
                <span className="w-8 h-px bg-primary-600" />
                Why Choose Us
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-6">
                The UK&apos;s Most Trusted{' '}
                <span className="gradient-text">Quran Learning Centre</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                At Quran Center UK, we combine traditional Islamic teaching methods with modern
                pedagogy to provide an unparalleled Quran education experience for students of
                all ages and backgrounds.
              </p>

              {/* Arabic verse */}
              <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-2xl p-6 mb-8">
                <p className="font-arabic text-right text-xl text-dark dark:text-white mb-2">
                  خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                </p>
                <p className="text-primary-600 dark:text-primary-400 text-sm">
                  &ldquo;The best of you are those who learn the Quran and teach it.&rdquo;
                  <br />
                  <span className="text-gray-500 dark:text-gray-500">— Prophet Muhammad ﷺ (Bukhari)</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '1,200+', label: 'Happy Students' },
                  { number: '247', label: '5-Star Reviews' },
                  { number: '20+', label: 'Qualified Teachers' },
                  { number: '95%', label: 'Student Retention' },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 bg-gray-50 dark:bg-white/5 rounded-xl">
                    <div className="font-heading font-bold text-2xl text-primary-600 dark:text-primary-400">
                      {s.number}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-gray-50 dark:bg-white/5 rounded-2xl p-5 border border-gray-100 dark:border-white/10 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${feature.color}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-dark dark:text-white text-sm mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
