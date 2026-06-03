import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, CheckCircle2, ArrowRight, Phone } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { testimonials } from '@/data/testimonials'
import { faqs } from '@/data/faqs'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema, generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema'
import { BUSINESS_INFO, FREE_TRIAL_WHATSAPP } from '@/lib/utils'

export const metadata: Metadata = createMetadata({
  title: 'Quran Classes Manchester | Quran School Near Me',
  description:
    'Expert in-person & online Quran classes in Manchester. Quran Center UK — rated 4.9/5. Tajweed, Hifz, Noorani Qaida for all ages in Levenshulme, Gorton, Longsight & UK-wide. FREE trial class.',
  keywords: [
    'Quran Classes Manchester',
    'Quran Classes Near Me',
    'Manchester Quran',
    'Quran Teacher Manchester',
    'Quran School Near Me',
    'Adult Quran Classes Manchester',
    'Quran Academy Manchester',
    'Quran Classes Levenshulme',
    'Quran Classes Gorton',
    'Quran Classes Longsight',
    'Islamic Courses Manchester',
    'Islamic Education Manchester',
    'Hifz Classes Manchester',
    'Tajweed Classes Manchester',
    'Quran Tutor Near Me',
    'Quran Teacher Near Me',
    'Face to Face Quran Classes',
    'In Person Quran Classes Near Me',
    'Quran Centre Near Me',
  ],
  path: '/quran-classes-manchester',
})

const manchesterAreas = [
  'Levenshulme', 'Gorton', 'Longsight', 'Fallowfield', 'Rusholme',
  'Didsbury', 'Stockport', 'Moss Side', 'Ardwick', 'Hulme',
  'Whalley Range', 'Withington', 'Burnage', 'Heaton Moor',
]

const manchesterFaqs = faqs.slice(0, 6)

export default function ManchesterPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'Quran Classes Manchester', url: `${BUSINESS_INFO.website}/quran-classes-manchester` },
  ])
  const localBusiness = generateLocalBusinessSchema()
  const faqSchema = generateFAQSchema(manchesterFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, localBusiness, faqSchema]) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 text-gold" />
            <span className="text-gold font-medium">Manchester, United Kingdom</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Quran Classes in{' '}
            <span className="bg-clip-text text-transparent bg-gold-gradient">Manchester</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8">
            Manchester&apos;s most trusted Quran academy — offering in-person classes at our
            Levenshulme centre and online classes for students across Greater Manchester.
            Certified teachers, all ages welcome.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={FREE_TRIAL_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold-gradient text-dark px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all w-full sm:w-auto justify-center"
            >
              Book FREE Trial in Manchester
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneFormatted}`}
              className="flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold text-dark dark:text-white mb-6">
                Quran Classes in Manchester — In-Person & Online
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Quran Center UK is Manchester&apos;s premier Islamic education centre, based at{' '}
                <strong className="text-dark dark:text-white">41 Hemmons Rd, Levenshulme, Manchester M12 5TA</strong>.
                We provide expert Quran and Islamic education for children, teens, and adults across Greater Manchester.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Our <strong>Quran classes in Manchester</strong> cover a comprehensive range of subjects
                including Noorani Qaida, Quran Reading, Tajweed, Hifz ul Quran, and Islamic Studies.
                All classes are taught by fully qualified and DBS-checked teachers — both male and female
                tutors available.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Whether you are looking for <strong>Quran classes near me in Manchester</strong>, or
                you prefer the convenience of online learning, Quran Center UK offers flexible
                solutions to suit every family. Students from Levenshulme, Gorton, Longsight,
                Rusholme, Fallowfield, Didsbury and across Greater Manchester regularly attend
                our in-person sessions.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'In-person classes at Levenshulme centre',
                  'Online classes for all of Greater Manchester',
                  'DBS-checked, certified teachers',
                  'Male & female tutors available',
                  'Classes for children from age 4+',
                  'Adults Quran classes — all levels welcome',
                  'Flexible morning, afternoon & evening slots',
                  'FREE trial class — no commitment required',
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/courses"
                className="inline-flex items-center gap-2 bg-teal-gradient text-white px-6 py-3 rounded-xl font-semibold hover:shadow-glow transition-all"
              >
                View All Courses
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-6">
              {/* Location card */}
              <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/10">
                <div className="flex items-start gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-semibold text-dark dark:text-white mb-1">
                      Our Manchester Centre
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {BUSINESS_INFO.address.full}
                    </p>
                  </div>
                </div>
                <div className="h-36 bg-gray-200 dark:bg-white/10 rounded-xl flex items-center justify-center">
                  <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
                    <MapPin className="w-6 h-6 mx-auto mb-1 text-primary-500" />
                    <a
                      href="https://maps.google.com/?q=41+Hemmons+Rd+Levenshulme+Manchester"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 underline text-xs"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Areas served */}
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6 border border-primary-100 dark:border-primary-800">
                <h3 className="font-heading font-semibold text-dark dark:text-white mb-4">
                  Areas We Serve in Manchester
                </h3>
                <div className="flex flex-wrap gap-2">
                  {manchesterAreas.map((area) => (
                    <span
                      key={area}
                      className="bg-white dark:bg-white/10 text-primary-700 dark:text-primary-400 text-xs font-medium px-3 py-1.5 rounded-full border border-primary-200 dark:border-primary-700"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials.filter(t => t.location.includes('Manchester'))} />
      <FAQSection faqs={manchesterFaqs} title="Manchester Quran Classes FAQ" />
      <CTASection
        title="Book Your Quran Class in Manchester"
        subtitle="Join hundreds of Manchester students learning Quran with certified teachers. FREE trial available."
      />
    </>
  )
}
