import { Metadata } from 'next'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { FAQSection } from '@/components/sections/FAQSection'
import { faqs } from '@/data/faqs'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema, generateFAQSchema, generateCourseSchema } from '@/lib/schema'
import { BUSINESS_INFO, FREE_TRIAL_WHATSAPP } from '@/lib/utils'

export const metadata: Metadata = createMetadata({
  title: 'Tajweed Classes UK | Tajweed Course Near Me',
  description:
    'Learn Tajweed with certified UK teachers — online & in Manchester. Tajweed classes for beginners to advanced. Quran recitation classes covering all rules. Book FREE trial class!',
  keywords: [
    'Tajweed Classes UK',
    'Tajweed Classes Near Me',
    'Tajweed Course',
    'Online Tajweed Classes',
    'Learn Tajweed UK',
    'Quran Tajweed Course',
    'Quran Recitation Classes',
    'Tajweed Course Near Me',
    'Quran Tajweed UK',
    'Tajweed Teacher UK',
    'Tajweed Classes Manchester',
    'Tajweed for Kids',
    'Quran Recitation',
  ],
  path: '/tajweed-classes-uk',
})

const tajweedRules = [
  { rule: 'Noon Sakin & Tanween', desc: 'Izhar, Idgham, Iqlab, Ikhfa — the four rules governing Noon Sakin and Tanween.' },
  { rule: 'Meem Sakin Rules', desc: 'Ikhfa Shafawi, Idgham Shafawi, Izhar Shafawi with the three categories.' },
  { rule: 'Madd (Elongation)', desc: 'All types of Madd — Asli, Badal, Lazim, Muttasil, Munfasil and their counts.' },
  { rule: 'Qalqalah', desc: 'The echo effect on the five Qalqalah letters: ق ط ب ج د.' },
  { rule: 'Tafkheem & Tarqeeq', desc: 'Heavy and light pronunciation of letters — making recitation sound authentic.' },
  { rule: 'Waqf (Pausing Rules)', desc: 'Rules of stopping and pausing at the correct places during recitation.' },
  { rule: 'Lam Rules', desc: 'Rules governing the pronunciation of Lam — including the Lam of Allah.' },
  { rule: 'Hamzah Rules', desc: 'Connected and disconnected Hamzah and their correct pronunciation.' },
]

const tajweedFaqs = faqs.filter(f => ['Getting Started', 'Courses', 'Teachers'].includes(f.category || '')).slice(0, 5)

export default function TajweedClassesUKPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'Tajweed Classes UK', url: `${BUSINESS_INFO.website}/tajweed-classes-uk` },
  ])
  const courseSchema = generateCourseSchema({
    name: 'Tajweed Classes UK',
    description: 'Comprehensive online Tajweed course for UK students, taught by certified Qaris with Sanad.',
    provider: BUSINESS_INFO.name,
    url: `${BUSINESS_INFO.website}/tajweed-classes-uk`,
  })
  const faqSchema = generateFAQSchema(tajweedFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, courseSchema, faqSchema]) }}
      />

      <section className="pt-28 pb-16 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="container-custom relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm mb-6">
            <span>علم التجويد</span>
            <span>•</span>
            <span>The Science of Quran Recitation</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Tajweed Classes{' '}
            <span className="bg-clip-text text-transparent bg-gold-gradient">UK</span>
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-8">
            Master the rules of Quran recitation with certified Qaris who hold Ijazah and Sanad.
            Online Tajweed classes for beginners to advanced students across the UK.
          </p>
          <a
            href={FREE_TRIAL_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold-gradient text-dark px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all"
          >
            Book FREE Tajweed Trial
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold text-dark dark:text-white mb-6">
                Why Learn Tajweed?
              </h2>
              <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800 rounded-2xl p-6 mb-6">
                <p className="font-arabic text-right text-xl text-dark dark:text-white mb-2">
                  وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا
                </p>
                <p className="text-primary-600 dark:text-primary-400 text-sm">
                  &ldquo;And recite the Quran with measured recitation.&rdquo; — Surah Al-Muzzammil, 73:4
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Tajweed is the science of reciting the Holy Quran correctly, as it was revealed to the
                Prophet Muhammad ﷺ. Learning Tajweed is an obligation (Fard) for every Muslim who
                recites the Quran. Incorrect pronunciation can sometimes change the meaning of words —
                making proper Tajweed essential.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Our <strong>Tajweed classes UK</strong> are taught by certified Qaris holding Ijazah —
                a chain of transmission going back to the Prophet ﷺ himself. This ensures you learn
                Tajweed from a reliable and authentic source.
              </p>

              <div className="space-y-3">
                {[
                  'Certified Qaris with Ijazah & Sanad',
                  'Covers all major Tajweed rules',
                  'Live feedback on pronunciation',
                  'Suitable for all levels — beginner to advanced',
                  'Online Tajweed classes across the UK',
                  'One-to-one and small group options',
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 dark:text-primary-400 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-heading font-bold text-xl text-dark dark:text-white mb-5">
                Tajweed Rules We Cover
              </h3>
              <div className="space-y-3">
                {tajweedRules.map((r, i) => (
                  <div
                    key={r.rule}
                    className="flex gap-4 p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 text-xs font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark dark:text-white text-sm">{r.rule}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={tajweedFaqs} title="Tajweed Classes FAQ" />
      <CTASection
        title="Master Tajweed with Certified UK Teachers"
        subtitle="Book your FREE Tajweed trial class today and recite the Quran the way it was meant to be recited."
      />
    </>
  )
}
