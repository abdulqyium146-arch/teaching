import { Metadata } from 'next'
import Link from 'next/link'
import { CTASection } from '@/components/sections/CTASection'
import { TeachersSection } from '@/components/sections/TeachersSection'
import { teachers } from '@/data/teachers'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema, generateInstructorSchema } from '@/lib/schema'
import { BUSINESS_INFO } from '@/lib/utils'
import { CheckCircle2, Target, Eye, Heart } from 'lucide-react'
import { InstructorAbout } from '@/components/sections/InstructorAbout'

export const metadata: Metadata = createMetadata({
  title: 'About Quran Center UK',
  description:
    'Learn about Quran Center UK — our mission, vision, teaching methodology, and the qualified team dedicated to bringing quality Quranic education to Muslims across the UK.',
  keywords: [
    'About Quran Center UK',
    'Islamic Education UK',
    'Quran Academy Manchester',
    'Qualified Quran Teachers',
  ],
  path: '/about',
})

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To provide accessible, high-quality Quranic and Islamic education to every Muslim in the UK, fostering a deep connection with the Holy Quran and Islamic values for all generations.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the leading Islamic education centre in the UK, producing a generation of confident Quran readers, Huffaz, and practising Muslims who embody the beautiful teachings of Islam.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description:
      'We are guided by Taqwa (God-consciousness), Ihsan (excellence), Amanah (trustworthiness), and a deep love for the Quran and the Sunnah of the Prophet Muhammad ﷺ.',
  },
]

const methodology = [
  'Personalised learning plans for every student',
  'Traditional Ijazah-based teaching methods',
  'Regular progress assessments and feedback',
  'Small class sizes for maximum attention',
  'Safeguarding-compliant environment',
  'Integration of Islamic values throughout',
  'Parent communication and involvement',
  'Graduated curriculum from Qaida to Hifz',
]

export default function AboutPage() {
  const instructorSchema = generateInstructorSchema()
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'About Us', url: `${BUSINESS_INFO.website}/about` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(instructorSchema) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-white/60 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </nav>
          <p className="font-arabic text-gold text-2xl mb-4">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            About Quran Center UK
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto leading-relaxed">
            Dedicated to excellence in Islamic education for over 10 years — serving the Muslim
            community of Manchester and the UK with qualified teachers and proven results.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4">
                <span className="w-8 h-px bg-primary-600" />
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-6">
                A Decade of{' '}
                <span className="gradient-text">Quranic Excellence</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Quran Center UK was founded in 2014 in the heart of Levenshulme, Manchester, with a
                simple but powerful mission: to make quality Quranic education accessible to every
                Muslim family in the UK. What began as a small community class has grown into a
                thriving centre serving over 1,200 students.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Our founder, a qualified Hafiz and experienced educator, recognised the need for a
                modern, professional Islamic education centre that combined traditional teaching
                methods with the needs of today&apos;s Muslim families. A centre where children would
                enjoy learning, adults would feel welcome, and parents would trust the environment.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Today, Quran Center UK offers a comprehensive range of courses — from Noorani Qaida
                for beginners to complete Hifz programmes — delivered by a team of 20+ certified
                teachers both in-person and online across the United Kingdom.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: '2014', l: 'Founded' },
                  { n: '1,200+', l: 'Students' },
                  { n: '20+', l: 'Teachers' },
                  { n: '247', l: 'Reviews' },
                ].map(s => (
                  <div key={s.l} className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl text-center">
                    <div className="font-heading font-bold text-2xl text-primary-600 dark:text-primary-400">{s.n}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 p-5 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                    <v.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-dark dark:text-white mb-2">{v.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="section-padding bg-gray-50 dark:bg-dark/40">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
              Our Teaching Methodology
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We combine time-honoured Islamic educational traditions with modern, evidence-based
              teaching practices to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {methodology.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 bg-white dark:bg-dark/60 rounded-xl border border-gray-100 dark:border-white/10"
              >
                <CheckCircle2 className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>

          {/* Quran verse */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-2xl p-8 max-w-2xl">
              <p className="font-arabic text-2xl text-dark dark:text-white mb-3">
                اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
              </p>
              <p className="text-primary-600 dark:text-primary-400 font-medium">
                &ldquo;Read in the name of your Lord who created.&rdquo;
              </p>
              <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">Surah Al-Alaq, 96:1</p>
            </div>
          </div>
        </div>
      </section>

      <InstructorAbout />
      <TeachersSection teachers={teachers} />
      <CTASection
        title="Join the Quran Center UK Family"
        subtitle="Begin your Quranic journey with a FREE trial class. No commitment required."
      />
    </>
  )
}
