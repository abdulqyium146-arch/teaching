import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Clock, Star, Users, CheckCircle2, Heart } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { FAQSection } from '@/components/sections/FAQSection'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema, generateCourseSchema, generateFAQSchema } from '@/lib/schema'
import { BUSINESS_INFO, FREE_TRIAL_WHATSAPP } from '@/lib/utils'

export const metadata: Metadata = createMetadata({
  title: 'Hifz Classes UK | Quran Memorization Near Me',
  description:
    'Join our Hifz ul Quran programme at Quran Center UK. Expert Hifz classes for kids, adults, and sisters near you — online across the UK and in-person in Manchester. Structured, certified, proven.',
  keywords: [
    'Hifz Classes',
    'Hifz Classes Near Me',
    'Quran Memorization',
    'Quran Hifz Classes Near Me',
    'Hifz Course UK',
    'Quran Memorization Center Near Me',
    'Hifz Programme UK',
    'Hifz Classes for Kids',
    'Hifz Classes for Ladies',
    'Hifz Classes for Adults',
    'Weekend Hifz Classes',
    'Hifz Program for Adults',
    'Quran Hifz Near Me',
    'Tahfeez ul Quran',
    'Quran Memorization Classes Near Me',
    'Hifz School Near Me',
    'Online Hifz Course UK',
    'Quran Memorization Near Me',
  ],
  path: '/hifz-classes',
})

const hifzFaqs = [
  {
    question: 'How long does it take to complete Hifz ul Quran?',
    answer: 'Most students complete the full Hifz in 3–5 years with regular attendance. Younger children who start early and attend 5 days a week can finish in 3 years. Adults with strong existing Quran reading skills may complete it in 4–6 years. We create a personalised plan for every student.',
  },
  {
    question: 'What age can children start Hifz classes?',
    answer: 'We recommend children begin Hifz from age 7 onwards, once they have completed Noorani Qaida and can read Quran fluently. However, every child is different — our teachers assess each student individually before starting the Hifz journey.',
  },
  {
    question: 'Do you offer Hifz classes for adults?',
    answer: 'Absolutely. Many adults successfully complete Hifz with us. Our adult Hifz programme is paced appropriately, respecting the responsibilities adults have alongside their studies. Weekend and evening slots are available specifically for working adults.',
  },
  {
    question: 'Are Hifz classes available for sisters and ladies?',
    answer: 'Yes. We have qualified female Quran teachers (Ustadhas) who specialise in the Hifz programme for sisters of all ages. Female students are always taught by female teachers, in a comfortable and supportive environment.',
  },
  {
    question: 'Can I do Hifz classes online?',
    answer: 'Yes — our online Hifz classes are just as effective as in-person. Students from across the UK join via Zoom with the same certified Hifz teachers. Regular revision sessions, progress tracking, and parental updates are all included.',
  },
  {
    question: 'Do you offer weekend Hifz classes?',
    answer: 'Yes. We offer weekend Hifz slots (Saturday and Sunday) for students who cannot attend on weekdays. These are ideal for school-age children and working adults who want to complete their Hifz without disrupting their regular schedule.',
  },
]

const features = [
  { icon: BookOpen, title: 'Ijazah-Certified Teachers', desc: 'Every Hifz teacher holds a chain of Ijazah — a certified transmission of the Quran passed directly from teacher to student going back to the Prophet ﷺ.' },
  { icon: Users, title: 'All Ages & Genders', desc: 'Dedicated programmes for children from age 7, adults, and sisters — with appropriate pacing, female teachers for ladies, and family discounts available.' },
  { icon: Clock, title: 'Flexible Scheduling', desc: 'Weekday, weekend, morning, evening and online slots. We work around your life — school hours, work commitments, and family routines.' },
  { icon: Star, title: 'Structured Revision System', desc: 'Our proven sabaq, sabqi, and manzil revision system ensures what is memorised stays memorised — permanently, not just temporarily.' },
  { icon: Heart, title: 'Supportive & Encouraging', desc: 'Hifz is a journey of the heart. Our teachers nurture students with patience, dua, and consistent motivation throughout every stage.' },
  { icon: CheckCircle2, title: 'Progress Reports', desc: 'Parents receive regular detailed progress reports. We track every juz, set targets, and celebrate every milestone with your child.' },
]

export default function HifzClassesPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'Hifz Classes', url: `${BUSINESS_INFO.website}/hifz-classes` },
  ])
  const courseSchema = generateCourseSchema({
    name: 'Hifz ul Quran Programme',
    description: 'A structured Quran memorisation programme for children, adults and sisters. Taught by Ijazah-certified teachers online and in-person in Manchester.',
    provider: BUSINESS_INFO.name,
    url: `${BUSINESS_INFO.website}/hifz-classes`,
    level: 'Intermediate to Advanced',
  })
  const faqSchema = generateFAQSchema(hifzFaqs)

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
              <span className="text-white">Hifz Classes</span>
            </nav>
            <p className="font-arabic text-2xl text-gold/90 mb-4" lang="ar" dir="rtl">إِنَّ الَّذِينَ يَتْلُونَ كِتَابَ اللَّهِ</p>
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Now Enrolling — Hifz Programme 2025
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hifz Classes &{' '}
              <span className="bg-clip-text text-transparent bg-gold-gradient">Quran Memorisation</span>
            </h1>
            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-4">
              Become a Hafiz of the Holy Quran with our structured, certified Hifz programme. Available for <strong className="text-white">children, adults, and sisters</strong> — online across the UK and in-person in Manchester.
            </p>
            <p className="text-white/60 text-base mb-10">
              Hifz classes near you · Weekend Hifz · Online Hifz UK · Hifz for ladies · Hifz for adults
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={FREE_TRIAL_WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gold-gradient text-dark px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all w-full sm:w-auto justify-center">
                Start Your Hifz Journey <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="/courses" className="flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto justify-center">
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-primary-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { value: '200+', label: 'Hifz Students Enrolled' },
              { value: '3–5', label: 'Years Average Completion' },
              { value: '100%', label: 'Ijazah-Certified Teachers' },
              { value: '24/7', label: 'WhatsApp Enrolment Support' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-heading font-bold text-2xl text-gold">{s.value}</div>
                <div className="text-sm text-white/80 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
              Why Choose Our Hifz Programme?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Memorising the Quran is the greatest achievement a Muslim can attain. We make the journey structured, supported, and achievable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Programme types */}
      <section className="section-padding bg-gray-50 dark:bg-dark/40">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">Hifz Programmes for Everyone</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Children's Hifz Programme",
                age: 'Ages 7–16',
                desc: 'Our most popular programme. Children learn through engaging, age-appropriate sessions that build strong foundations before tackling the full Hifz. We work closely with parents to maintain home revision.',
                link: '/quran-classes-for-kids',
                linkText: 'Kids Classes →',
              },
              {
                title: "Adults' Hifz Programme",
                age: 'Ages 17+',
                desc: 'Never too late to become a Hafiz. Our adult programme is paced thoughtfully around work and family life, with evening and weekend slots. Many of our adult students have surprised themselves with what they can achieve.',
                link: '/quran-classes-for-adults',
                linkText: 'Adult Classes →',
              },
              {
                title: "Sisters' Hifz Programme",
                age: 'All Ages',
                desc: 'Taught exclusively by qualified female teachers (Ustadhas) in a comfortable, private online environment. Many of our sisters have completed full Hifz with us — a life-changing achievement.',
                link: '/womens-quran-classes',
                linkText: "Women's Classes →",
              },
            ].map((p) => (
              <div key={p.title} className="bg-white dark:bg-dark/60 rounded-2xl p-6 border border-gray-100 dark:border-white/10">
                <span className="text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full font-medium">{p.age}</span>
                <h3 className="font-heading font-bold text-dark dark:text-white text-xl mt-3 mb-3">{p.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <Link href={p.link} className="text-primary-600 dark:text-primary-400 text-sm font-semibold hover:underline">{p.linkText}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-5">
            Hifz Classes Near You — Manchester & Online UK
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
            <p>
              Quran Center UK offers structured <strong className="text-dark dark:text-white">Hifz classes</strong> for students across the United Kingdom.
              Whether you are searching for <strong>Hifz classes near me</strong>, a <strong>Hifz course UK</strong>, or an <strong>online Hifz programme</strong>,
              our certified teachers are ready to guide you. Our main Hifz centre is based at{' '}
              <Link href="/quran-classes-manchester" className="text-primary-600 dark:text-primary-400 underline">41 Hemmons Rd, Levenshulme, Manchester</Link>,
              with online sessions available to students anywhere in the UK — including{' '}
              <Link href="/online-quran-classes-london" className="text-primary-600 dark:text-primary-400 underline">London</Link>,{' '}
              <Link href="/quran-classes-birmingham" className="text-primary-600 dark:text-primary-400 underline">Birmingham</Link>, Leeds, Bradford, and beyond.
            </p>
            <p>
              Our <strong>Quran memorisation programme</strong> uses the time-tested <em>sabaq, sabqi, manzil</em> revision system used in traditional madrasahs worldwide,
              adapted for the UK learning environment with modern tracking and parental involvement.
              Every student receives a personalised Hifz plan, regular progress assessments, and dedicated revision sessions.
            </p>
            <p>
              We offer <strong>Hifz classes for kids</strong> from age 7, <strong>adult Hifz classes</strong> with flexible evening and weekend slots,
              and a dedicated <strong>sisters' Hifz programme</strong> taught by female Ustadhas.
              All our Hifz teachers hold Ijazah — a scholarly chain of transmission linking them directly to the Prophet Muhammad ﷺ.
              Book your free trial and begin the most rewarding journey of your life.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
            {[
              { label: 'Hifz Classes for Kids', href: '/quran-classes-for-kids' },
              { label: 'Hifz Classes for Adults', href: '/quran-classes-for-adults' },
              { label: "Women's Hifz Classes", href: '/womens-quran-classes' },
              { label: 'Online Quran Classes UK', href: '/online-quran-classes' },
              { label: 'Tajweed Classes UK', href: '/tajweed-classes-uk' },
              { label: 'All Quran Courses', href: '/courses' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-medium">
                <ArrowRight className="w-4 h-4 shrink-0" />{l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={hifzFaqs} title="Hifz Classes — Frequently Asked Questions" />
      <CTASection
        title="Begin Your Hifz Journey Today"
        subtitle="Book a FREE trial Hifz class — no commitment. WhatsApp us 24/7 to get started."
      />
    </>
  )
}
