import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Users, BookOpen, Star, CheckCircle2, Globe } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { FAQSection } from '@/components/sections/FAQSection'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema, generateCourseSchema, generateFAQSchema } from '@/lib/schema'
import { BUSINESS_INFO, FREE_TRIAL_WHATSAPP } from '@/lib/utils'

export const metadata: Metadata = createMetadata({
  title: 'Quran Classes for Adults | Adult Quran Learning UK',
  description:
    'It\'s never too late to learn the Quran. Quran Center UK offers adult Quran classes online and in Manchester — beginner to advanced, flexible evenings & weekends. Tajweed, Hifz, and Islamic Studies for adults.',
  keywords: [
    'Quran Classes for Adults',
    'Adult Quran Classes',
    'Adult Quran Classes Manchester',
    'Learn Quran for Adults',
    'Learning Quran for Adults',
    'Quran Lessons for Adults',
    'Quran Classes for Adults Near Me',
    'Quran Teacher Near Me',
    'Online Quran Class for Adults',
    'Quran Study for Beginners',
    'Adult Quran Classes Near Me',
    'Face to Face Quran Classes',
    'Quran Home Tutor',
    'Hifz Program for Adults',
    'Hifz Classes for Adults',
    'Learning Quran Academy',
    'Learn Quran Near Me',
    'Quran Tutor Near Me',
    'Quran Lessons Near Me',
  ],
  path: '/quran-classes-for-adults',
})

const adultFaqs = [
  {
    question: 'Is it too late to start learning the Quran as an adult?',
    answer: "Absolutely not. Many of our most dedicated and successful students are adults who started from scratch in their 30s, 40s, 50s, and beyond. The Prophet ﷺ said the best of people are those who learn and teach the Quran — there is no age limit. Our teachers are experienced at teaching adults and understand your specific challenges.",
  },
  {
    question: 'I am a complete beginner — can I still join?',
    answer: "Yes, we welcome complete beginners warmly. We start from the very basics: Arabic alphabet recognition through Noorani Qaida, then progress to Quran reading, Tajweed, and whatever else you wish to achieve. Many adults are surprised at how quickly they progress with the right teacher.",
  },
  {
    question: 'What time slots are available for working adults?',
    answer: "We offer early morning (before work), evening (from 6pm), and full weekend slots specifically for working adults. Our online classes mean you can learn from home or anywhere — no commuting required. Slots are flexible and can be adjusted as your schedule changes.",
  },
  {
    question: 'Can I learn Quran online as an adult?',
    answer: "Yes — and most of our adult students prefer online classes. You learn from home via Zoom with a qualified teacher in a one-to-one session. It is private, convenient, and just as effective as in-person. No need to travel to a mosque or centre.",
  },
  {
    question: 'Can adults also memorise the Quran (Hifz)?',
    answer: "Absolutely. We have a dedicated adult Hifz programme. It takes longer than for children, but with consistency and the right teacher it is entirely achievable. Several of our adult students have completed partial or full Hifz with us. We create a realistic personalised plan that respects your work and family commitments.",
  },
  {
    question: 'Do you offer face-to-face Quran classes for adults in Manchester?',
    answer: "Yes. In-person one-to-one and small group adult classes are available at our centre at 41 Hemmons Rd, Levenshulme, Manchester M12 5TA — by appointment. Contact us via WhatsApp to arrange a convenient time.",
  },
]

const features = [
  { icon: Clock, title: 'Flexible Evening & Weekend Slots', desc: 'Classes at times that work around your job and family — early mornings, evenings from 6pm, and full weekend availability.' },
  { icon: Globe, title: 'Online — Learn from Home', desc: 'Join live one-to-one sessions via Zoom from your home, office, or anywhere. No commute, no disruption to your day.' },
  { icon: Users, title: 'Male & Female Teachers', desc: 'Choose your preferred teacher — qualified male teachers for brothers, experienced female Ustadhas for sisters. All one-to-one.' },
  { icon: BookOpen, title: 'Beginner to Advanced', desc: 'Starting from Arabic letters or continuing from where you left off — we meet you exactly where you are, no judgement.' },
  { icon: Star, title: 'Certified, Patient Teachers', desc: 'Our adult teachers understand how adults learn. They are patient, professional, and inspiring — never making you feel behind.' },
  { icon: CheckCircle2, title: 'Measurable Progress', desc: 'Clear monthly milestones, regular feedback, and a personalised curriculum that keeps you motivated and moving forward.' },
]

export default function QuranClassesForAdultsPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'Quran Classes for Adults', url: `${BUSINESS_INFO.website}/quran-classes-for-adults` },
  ])
  const courseSchema = generateCourseSchema({
    name: 'Adult Quran Classes',
    description: 'Flexible Quran tuition for adults — beginner to advanced. Online and in-person in Manchester. Tajweed, Hifz, and Islamic Studies with patient, certified teachers.',
    provider: BUSINESS_INFO.name,
    url: `${BUSINESS_INFO.website}/quran-classes-for-adults`,
    level: 'Beginner to Advanced',
  })
  const faqSchema = generateFAQSchema(adultFaqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, courseSchema, faqSchema]) }} />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3C/svg%3E")`, backgroundSize: '80px 80px' }} />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-white/60 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Quran Classes for Adults</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Evening & Weekend Slots Available
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Quran Classes{' '}
              <span className="bg-clip-text text-transparent bg-gold-gradient">for Adults</span>
            </h1>
            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-4">
              It is <em>never</em> too late to connect with the Quran. Whether you are a complete beginner or returning after years away — our patient, certified teachers will meet you exactly where you are.
            </p>
            <p className="text-white/60 text-sm mb-10">
              Adult Quran classes · Quran teacher near me · Hifz for adults · Face to face &amp; online
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={FREE_TRIAL_WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gold-gradient text-dark px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all w-full sm:w-auto justify-center">
                Book FREE Adult Trial Class <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="/courses" className="flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto justify-center">
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">Adult Quran Learning — Built Around Your Life</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">We understand adult learners have jobs, families, and commitments. Our adult programme is designed to fit around your real life — not the other way around.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 card-hover">
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-heading font-semibold text-dark dark:text-white mb-2">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses for adults */}
      <section className="section-padding bg-gray-50 dark:bg-dark/40">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-dark dark:text-white mb-3">What Adults Learn at Quran Center UK</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: 'Noorani Qaida for Adults', desc: 'Complete beginners start here — Arabic alphabet, letter sounds, and joining letters into words. Most adults master this in 2–3 months.', href: '/courses#noorani-qaida' },
              { title: 'Quran Reading (Nazra)', desc: 'Fluent Quran recitation with correct pronunciation. Build the skill to read independently and never have to guess a word again.', href: '/courses#quran-reading' },
              { title: 'Tajweed Classes', desc: 'Learn the rules of correct Quranic recitation — makharij, sifaat, ghunna, madd, and more. Recite the way the Prophet ﷺ recited.', href: '/tajweed-classes-uk' },
              { title: 'Hifz ul Quran', desc: "Memorise the Holy Quran at your own pace. Our adult Hifz programme is structured, patient, and absolutely achievable — whatever your age.", href: '/hifz-classes' },
              { title: 'Islamic Studies', desc: 'Deepen your knowledge of fiqh, hadith, seerah, and Islamic history. Learn your deen properly, not just surface-level understanding.', href: '/courses#islamic-studies' },
              { title: 'One-to-One Classes', desc: "Private, completely personalised sessions with your own dedicated teacher. The fastest, most effective way to learn as an adult.", href: '/courses#one-to-one-classes' },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="block p-5 bg-white dark:bg-dark/60 rounded-2xl border border-gray-100 dark:border-white/10 hover:border-primary-200 dark:hover:border-primary-700 transition-colors group">
                <h3 className="font-heading font-semibold text-dark dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">{c.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-5">Adult Quran Classes — Manchester & Online UK</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
            <p>
              Quran Center UK offers dedicated <strong className="text-dark dark:text-white">Quran classes for adults</strong> — online across the UK and in-person in <Link href="/quran-classes-manchester" className="text-primary-600 dark:text-primary-400 underline">Manchester</Link>.
              Whether you are searching for a <strong>Quran teacher near me</strong>, <strong>adult Quran classes in Manchester</strong>, or <strong>online Quran lessons for adults</strong>, we have a programme and a time slot that works for you.
            </p>
            <p>
              Our adult students come from every background — born Muslims who never formally learned, reverts discovering the Quran for the first time, parents who want to learn alongside their children, and professionals who finally have time to commit. We welcome all of them with patience, respect, and expert guidance.
            </p>
            <p>
              From beginner <Link href="/courses#noorani-qaida" className="text-primary-600 dark:text-primary-400 underline">Noorani Qaida</Link> to advanced <Link href="/tajweed-classes-uk" className="text-primary-600 dark:text-primary-400 underline">Tajweed</Link> and even <Link href="/hifz-classes" className="text-primary-600 dark:text-primary-400 underline">Hifz ul Quran</Link> — every goal is achievable.
              WhatsApp us any time to book your <Link href="/contact" className="text-primary-600 dark:text-primary-400 underline">free trial class</Link> and start your Quran journey today.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={adultFaqs} title="Adult Quran Classes — Frequently Asked Questions" />
      <CTASection
        title="Start Your Quran Journey — Whatever Your Age"
        subtitle="Book a FREE adult trial class today. Online or Manchester in-person. WhatsApp us 24/7."
      />
    </>
  )
}
