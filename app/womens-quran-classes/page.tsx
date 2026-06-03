import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Shield, Star, Users, BookOpen, Clock } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { FAQSection } from '@/components/sections/FAQSection'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema, generateCourseSchema, generateFAQSchema } from '@/lib/schema'
import { BUSINESS_INFO, FREE_TRIAL_WHATSAPP } from '@/lib/utils'

export const metadata: Metadata = createMetadata({
  title: "Women's Quran Classes Near Me | Female Quran Teacher UK",
  description:
    "Quran classes for women and sisters across the UK — taught exclusively by qualified female teachers. Online & in-person Manchester. Quran reading, Tajweed, Hifz for ladies. Book FREE trial.",
  keywords: [
    "Women's Quran Classes Near Me",
    'Female Quran Teacher Near Me',
    "Women's Quran Classes",
    "Women's Islamic Classes Near Me",
    'Quran Classes for Ladies Near Me',
    'Quran Classes Near Me for Women',
    'Hifz Classes for Ladies',
    'Quran Hifz Classes Near Me for Ladies',
    'Hifz for Ladies',
    'Female Quran Teacher UK',
    'Sisters Quran Classes',
    'Women Quran Classes',
    'Online Quran Classes for Women UK',
    'Quran Classes for Sisters',
    'Muslim Women Quran Classes',
    'Islamic Classes for Women Near Me',
  ],
  path: '/womens-quran-classes',
})

const womensFaqs = [
  {
    question: 'Are all teachers for women female?',
    answer: 'Yes — 100%. Every sister who joins our women\'s programme is taught exclusively by a qualified female Quran teacher (Ustadha). We never assign male teachers to female students. This is a firm commitment, not just a preference.',
  },
  {
    question: 'Are online classes safe and private for sisters?',
    answer: 'Absolutely. All online sessions are one-to-one with a female teacher via a password-protected Zoom link. Sessions are not recorded without explicit consent. Many sisters prefer online classes precisely for the comfort, privacy, and convenience they provide.',
  },
  {
    question: 'Can women join the Hifz programme?',
    answer: "Yes — our sisters' Hifz programme is one of our most popular offerings. We have qualified female Hifz teachers with complete Ijazah who guide sisters through the full Quran memorisation journey at a pace that works for them.",
  },
  {
    question: 'What courses are available for women?',
    answer: "All our courses are available for sisters: Noorani Qaida, Quran Reading, Tajweed Classes, Hifz ul Quran, Islamic Studies, and one-to-one private sessions. We also offer Islamic Sisters' Study Circles (halaqah-style) on request.",
  },
  {
    question: 'Are there classes for mothers who want to learn alongside their children?',
    answer: "Yes. We have several mothers who learn at the same time as their children — sometimes in joint sessions, sometimes separately. Learning Quran as a family strengthens both the mother's connection and the children's motivation. We love facilitating this.",
  },
  {
    question: 'What are the session times for women?',
    answer: "We offer morning slots (after school drop-off), afternoon sessions, evening classes, and weekend times. Many of our sisters choose mid-morning slots while children are at school. We work entirely around your availability.",
  },
]

const features = [
  { icon: Shield, title: 'Female Teachers Only', desc: 'Every session for sisters is led by a qualified, experienced female Ustadha. No exceptions — your comfort and Islamic propriety are our priority.' },
  { icon: Heart, title: 'Warm & Nurturing Environment', desc: 'Our sisters\' classes are a safe space — encouraging, non-judgemental, and supportive. Many sisters say it is the most comfortable learning environment they have experienced.' },
  { icon: BookOpen, title: 'Full Course Range', desc: 'Noorani Qaida, Quran reading, Tajweed, full Hifz programme, Islamic Studies — every course available specifically for women, at every level.' },
  { icon: Star, title: 'Ijazah-Certified Ustadhas', desc: 'Our female teachers hold Ijazah in Quran recitation — a scholarly certification linking them through an unbroken chain to the Prophet Muhammad ﷺ.' },
  { icon: Clock, title: 'Flexible Times for Busy Sisters', desc: 'Morning, afternoon, evening and weekend slots. Our schedule is built around the reality of sisters\' lives — motherhood, work, and family responsibilities.' },
  { icon: Users, title: 'All Ages Welcome', desc: 'Young girls from age 4, teenagers, adults, and elderly sisters are all welcome. It is never too early — or too late — to connect with the Quran.' },
]

export default function WomensQuranClassesPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: "Women's Quran Classes", url: `${BUSINESS_INFO.website}/womens-quran-classes` },
  ])
  const courseSchema = generateCourseSchema({
    name: "Women's Quran Classes",
    description: 'Quran education for women taught exclusively by qualified female teachers (Ustadhas). Online across the UK and in-person in Manchester. All levels and ages welcome.',
    provider: BUSINESS_INFO.name,
    url: `${BUSINESS_INFO.website}/womens-quran-classes`,
    level: 'Beginner to Advanced',
  })
  const faqSchema = generateFAQSchema(womensFaqs)

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
              <span className="text-white">Women&apos;s Quran Classes</span>
            </nav>
            <p className="font-arabic text-2xl text-gold/90 mb-4" lang="ar" dir="rtl">وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا</p>
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Female Teachers Only · Sisters Welcome
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Women&apos;s Quran Classes{' '}
              <span className="bg-clip-text text-transparent bg-gold-gradient">Near You</span>
            </h1>
            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-4">
              A safe, private, and nurturing environment for sisters to learn and connect with the Quran. Taught <strong className="text-white">exclusively by qualified female Ustadhas</strong> — online across the UK and in-person in Manchester.
            </p>
            <p className="text-white/60 text-sm mb-10">
              Female Quran teacher · Hifz for ladies · Women's Islamic classes · Sisters' Quran programme
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={FREE_TRIAL_WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gold-gradient text-dark px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all w-full sm:w-auto justify-center">
                Book FREE Trial Class <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="/contact" className="flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto justify-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Promise banner */}
      <div className="bg-primary-700 py-4">
        <div className="container-custom text-center text-white">
          <p className="font-semibold text-sm md:text-base">
            Our Promise: Every sister is taught <strong>exclusively by a female teacher</strong> — always, without exception.
          </p>
        </div>
      </div>

      {/* Features */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">A Quran Programme Designed for Sisters</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Every aspect of our women's programme is built with sisters' needs, comfort, and Islamic values at its heart.</p>
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

      {/* Courses */}
      <section className="section-padding bg-gray-50 dark:bg-dark/40">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold text-dark dark:text-white mb-3">Courses Available for Sisters</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: 'Noorani Qaida', desc: 'Start from the very beginning — Arabic alphabet and pronunciation. Perfect for complete beginners.', href: '/courses#noorani-qaida' },
              { title: 'Quran Reading', desc: 'Learn to read the Quran fluently and independently with correct makharij.', href: '/courses#quran-reading' },
              { title: 'Tajweed Classes', desc: 'Master the rules of beautiful Quranic recitation — from basic to advanced levels.', href: '/tajweed-classes-uk' },
              { title: "Hifz for Sisters", desc: 'Memorise the Holy Quran with a dedicated female Hifz teacher. Structured, achievable, life-changing.', href: '/hifz-classes' },
              { title: 'Islamic Studies', desc: 'Fiqh, hadith, seerah, and Islamic history — deepen your knowledge of your beautiful deen.', href: '/courses#islamic-studies' },
              { title: 'One-to-One Private Classes', desc: 'Fully private sessions with your own dedicated female teacher — the most effective way to learn.', href: '/courses#one-to-one-classes' },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="block p-5 bg-white dark:bg-dark/60 rounded-2xl border border-gray-100 dark:border-white/10 hover:border-primary-200 dark:hover:border-primary-700 transition-colors group">
                <h3 className="font-heading font-semibold text-dark dark:text-white mb-1.5 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">{c.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-5">Women&apos;s Quran Classes Near You — Online & Manchester</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
            <p>
              Quran Center UK offers dedicated <strong className="text-dark dark:text-white">Quran classes for women and sisters</strong> across the United Kingdom.
              If you are searching for <strong>women's Quran classes near me</strong>, a <strong>female Quran teacher near me</strong>, or <strong>Hifz classes for ladies</strong>,
              our qualified female Ustadhas are here for you — online or in-person at our{' '}
              <Link href="/quran-classes-manchester" className="text-primary-600 dark:text-primary-400 underline">Manchester centre</Link>.
            </p>
            <p>
              Sisters from <Link href="/online-quran-classes-london" className="text-primary-600 dark:text-primary-400 underline">London</Link>,{' '}
              <Link href="/quran-classes-birmingham" className="text-primary-600 dark:text-primary-400 underline">Birmingham</Link>, Leeds, Bradford and across the UK join our online sessions from the comfort and privacy of their own homes.
              Our <strong>women's Islamic classes</strong> cover everything from beginner <Link href="/courses#noorani-qaida" className="text-primary-600 dark:text-primary-400 underline">Noorani Qaida</Link> to advanced <Link href="/tajweed-classes-uk" className="text-primary-600 dark:text-primary-400 underline">Tajweed</Link> and full <Link href="/hifz-classes" className="text-primary-600 dark:text-primary-400 underline">Hifz ul Quran</Link>.
            </p>
            <p>
              We understand that many sisters have not had the opportunity to formally learn the Quran and feel shy or embarrassed to start. Our teachers are gentle, encouraging, and experienced with adult female learners. There is no judgement here — only support. WhatsApp us 24/7 to book your <Link href="/contact" className="text-primary-600 dark:text-primary-400 underline">free trial class</Link> today.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={womensFaqs} title="Women's Quran Classes — Frequently Asked Questions" />
      <CTASection
        title="Sisters — Your Quran Journey Starts Here"
        subtitle="Book a FREE trial class with a qualified female Ustadha. Private, online, and comfortable. WhatsApp us 24/7."
      />
    </>
  )
}
