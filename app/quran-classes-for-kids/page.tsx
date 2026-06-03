import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Star, Heart, Shield, Smile, BookOpen, Users } from 'lucide-react'
import { CTASection } from '@/components/sections/CTASection'
import { FAQSection } from '@/components/sections/FAQSection'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema, generateCourseSchema, generateFAQSchema } from '@/lib/schema'
import { BUSINESS_INFO, FREE_TRIAL_WHATSAPP } from '@/lib/utils'

export const metadata: Metadata = createMetadata({
  title: 'Quran Classes for Kids Near Me | Children\'s Quran Lessons UK',
  description:
    'Fun, engaging Quran classes for children aged 4–16 at Quran Center UK. Online and in-person in Manchester. Certified teachers, kids Quran reading, Noorani Qaida, Hifz & Islamic Studies. Book FREE trial!',
  keywords: [
    'Quran Classes for Kids',
    'Quran Classes for Kids Near Me',
    'Kids Quran Classes',
    'Kids Quran Classes Near Me',
    'Teaching Quran to Kids',
    'Quran Learning for Kids',
    'Quran School for Kids Near Me',
    'Quran Class for Kids Near Me',
    'Best Online Quran Classes for Kids',
    'Online Quran Classes for Kids UK',
    'Online Quran Classes for Kids Near Me',
    'Quran Hifz Classes Near Me for Kids',
    'Quran Learning for Kids Near Me',
    'Arabic Classes Kids',
    'Quran Lessons for Kids',
    'Kids Islamic Classes Near Me',
    'Kids Quran Reading',
    'Arabic School for Kids',
    'Quran Classes for Children',
  ],
  path: '/quran-classes-for-kids',
})

const kidsFaqs = [
  {
    question: 'What age can my child start Quran classes?',
    answer: "We welcome children from as young as 4 years old. We begin with the Arabic alphabet through our Noorani Qaida programme, using fun, visual, age-appropriate methods that young children love. There's no 'too young' — early start means stronger foundations.",
  },
  {
    question: 'How do online Quran classes work for young children?',
    answer: 'Our teachers are experienced at engaging young learners online. Sessions use colourful digital resources, interactive games, and Quran apps on screen. We recommend a parent or guardian sits nearby for the first few sessions until children are comfortable.',
  },
  {
    question: 'Are there female teachers for girls?',
    answer: "Yes — we have qualified female Quran teachers (Ustadhas) who teach girls exclusively. Many parents specifically request this, and we ensure all girls are taught by sisters in a safe, nurturing environment.",
  },
  {
    question: 'How long are children\'s Quran sessions?',
    answer: "Sessions for young children (ages 4–7) are typically 30 minutes to avoid fatigue. Older children (8+) usually have 45-minute to 1-hour sessions. We adapt session length to each child's concentration and learning pace.",
  },
  {
    question: 'Can my child do Hifz classes too?',
    answer: "Yes! Once a child can read the Quran fluently (usually after completing Noorani Qaida and basic Quran reading), we can enrol them in our Hifz programme. Most children start Hifz from age 7–8. Many of our young Huffaz began their journey with us from age 4.",
  },
  {
    question: 'Do you offer classes on weekends for children?',
    answer: "Absolutely. Weekend slots (Saturday and Sunday mornings and afternoons) are available and very popular for school-age children. We also offer after-school weekday slots from 4pm onwards to fit around the school day.",
  },
]

const features = [
  { icon: Smile, title: 'Fun & Engaging Learning', desc: 'We make Quran learning enjoyable for children using interactive tools, digital resources, stories, and games — so kids look forward to every class.' },
  { icon: Shield, title: 'DBS-Checked Teachers', desc: 'All teachers working with children are DBS-checked and safeguarding-trained. Your child\'s safety is our absolute priority, online and in-person.' },
  { icon: Heart, title: 'Patient & Nurturing', desc: 'Our teachers are specialists in teaching children. They use gentle encouragement, patience, and Islamic stories to keep children motivated and confident.' },
  { icon: Users, title: 'Male & Female Teachers', desc: 'We match children with the right teacher — female Ustadhas available for girls, experienced male teachers for boys. Parents choose.' },
  { icon: BookOpen, title: 'Full Curriculum', desc: 'From first Arabic letters through Noorani Qaida, Quran reading, Tajweed rules, Hifz, and Islamic Studies — a complete journey in one centre.' },
  { icon: Star, title: 'Parent Progress Updates', desc: 'We keep parents fully informed with regular progress reports, monthly updates, and direct access to the teacher via WhatsApp.' },
]

const ageGroups = [
  { age: 'Ages 4–6', title: 'Little Learners', desc: 'Arabic alphabet, basic dua, Islamic manners. Short fun sessions with lots of visual learning and encouragement.', course: 'Noorani Qaida' },
  { age: 'Ages 7–10', title: 'Quran Readers', desc: 'Complete Noorani Qaida, begin Quran reading with correct makharij and basic Tajweed rules. Strong foundations for life.', course: 'Quran Reading + Tajweed' },
  { age: 'Ages 11–13', title: 'Quran Students', desc: 'Fluent Quran reading, applied Tajweed, introduction to Hifz and Islamic Studies. Building knowledge and identity.', course: 'Tajweed + Hifz' },
  { age: 'Ages 14–16', title: 'Young Huffaz', desc: 'Serious Hifz programme with structured revision, Islamic Studies, and Arabic language. Preparing for life as a Hafiz.', course: 'Advanced Hifz + Studies' },
]

export default function QuranClassesForKidsPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'Quran Classes for Kids', url: `${BUSINESS_INFO.website}/quran-classes-for-kids` },
  ])
  const courseSchema = generateCourseSchema({
    name: "Children's Quran Classes",
    description: 'Age-appropriate Quran education for children aged 4–16. Noorani Qaida, Quran reading, Tajweed, Hifz and Islamic Studies — online and in-person in Manchester.',
    provider: BUSINESS_INFO.name,
    url: `${BUSINESS_INFO.website}/quran-classes-for-kids`,
    level: 'Beginner to Advanced',
  })
  const faqSchema = generateFAQSchema(kidsFaqs)

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
              <span className="text-white">Quran Classes for Kids</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 text-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              Ages 4–16 · Online & Manchester
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Quran Classes{' '}
              <span className="bg-clip-text text-transparent bg-gold-gradient">for Kids</span>
            </h1>
            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-4">
              Fun, structured, and caring Quran education for children aged 4–16. Our specialist children's teachers make learning the Quran an exciting journey your child will love.
            </p>
            <p className="text-white/60 text-sm mb-10">
              Quran classes for kids near me · Online Quran classes for children · Kids Hifz classes · Arabic classes for kids
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={FREE_TRIAL_WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gold-gradient text-dark px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all w-full sm:w-auto justify-center">
                Book Free Trial for Your Child <ArrowRight className="w-5 h-5" />
              </a>
              <Link href="/courses" className="flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto justify-center">
                View Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Age groups */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
              Tailored Learning for Every Age
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Each age group has its own curriculum, teaching style, and pace — because a 4-year-old and a 14-year-old learn very differently.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ageGroups.map((g) => (
              <div key={g.age} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 border border-gray-100 dark:border-white/10 card-hover">
                <span className="text-xs bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full font-medium">{g.age}</span>
                <h3 className="font-heading font-bold text-dark dark:text-white text-lg mt-3 mb-2">{g.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3">{g.desc}</p>
                <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold">{g.course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50 dark:bg-dark/40">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">Why Parents Choose Us for Their Children</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 bg-white dark:bg-dark/60 rounded-2xl border border-gray-100 dark:border-white/10 card-hover">
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

      {/* SEO content */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-5">
            Quran Classes for Kids Near You — Online & Manchester
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
            <p>
              Quran Center UK provides specialist <strong className="text-dark dark:text-white">Quran classes for children</strong> aged 4 to 16 — both online across the UK and in-person at our centre in{' '}
              <Link href="/quran-classes-manchester" className="text-primary-600 dark:text-primary-400 underline">Levenshulme, Manchester</Link>.
              Whether you are looking for <strong>Quran classes for kids near me</strong>, <strong>online Quran classes for children</strong>, or the <strong>best Quran school for kids near you</strong>, our experienced children's teachers are here to help.
            </p>
            <p>
              Every child's journey begins with <Link href="/courses#noorani-qaida" className="text-primary-600 dark:text-primary-400 underline">Noorani Qaida</Link> — the foundation of Arabic letter recognition and pronunciation. From there, children progress to fluent <Link href="/courses#quran-reading" className="text-primary-600 dark:text-primary-400 underline">Quran reading</Link>, correct <Link href="/tajweed-classes-uk" className="text-primary-600 dark:text-primary-400 underline">Tajweed</Link>, and — for those ready — our popular <Link href="/hifz-classes" className="text-primary-600 dark:text-primary-400 underline">Hifz programme</Link>.
            </p>
            <p>
              Our children's classes are available after school (from 4pm), weekends, and mornings. <strong>Teaching Quran to kids</strong> requires patience, creativity, and a deep understanding of how children learn — qualities every one of our teachers brings to every session. Book a FREE trial class today — there is no obligation, and your child will love it.
            </p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
            {[
              { label: 'Hifz Classes for Kids', href: '/hifz-classes' },
              { label: 'Tajweed Classes UK', href: '/tajweed-classes-uk' },
              { label: 'Online Classes UK', href: '/online-quran-classes' },
              { label: 'All Courses', href: '/courses' },
              { label: 'Manchester Classes', href: '/quran-classes-manchester' },
              { label: 'Contact & Free Trial', href: '/contact' },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:underline font-medium">
                <ArrowRight className="w-4 h-4 shrink-0" />{l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={kidsFaqs} title="Kids Quran Classes — Frequently Asked Questions" />
      <CTASection
        title="Give Your Child the Gift of the Quran"
        subtitle="Book a FREE trial class for your child today — no commitment, no pressure. WhatsApp us 24/7."
      />
    </>
  )
}
