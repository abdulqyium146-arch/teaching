import { Metadata } from 'next'
import { Monitor, ArrowRight, Clock, Globe, Shield, Users, Star } from 'lucide-react'
import Link from 'next/link'
import { CTASection } from '@/components/sections/CTASection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { testimonials } from '@/data/testimonials'
import { faqs } from '@/data/faqs'
import { createMetadata } from '@/lib/metadata'
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'
import { BUSINESS_INFO, FREE_TRIAL_WHATSAPP } from '@/lib/utils'

export const metadata: Metadata = createMetadata({
  title: 'Online Quran Classes UK | Online Quran Center',
  description:
    'Best online Quran classes in the UK. Learn Quran, Tajweed, Hifz & Islamic Studies from certified teachers via Zoom — for kids, adults and sisters. Book FREE trial class!',
  keywords: [
    'Online Quran Classes UK',
    'Online Quran Center',
    'Online Quran UK',
    'Learn Quran Online',
    'Online Quran Classes for Kids UK',
    'Online Quran Classes for Children',
    'Online Quran Teacher UK',
    'Online Quran Classes Near Me',
    'Online Hifz Course UK',
    'Online Quran Memorization Classes UK',
    'UK Quran',
    'Learn Quran UK',
    'Quran UK',
    'Online Tajweed Classes',
    'Online Hifz Classes',
    'Online Islamic Studies UK',
    'Best Online Quran Classes for Kids',
    'Online Mosque Classes UK',
  ],
  path: '/online-quran-classes',
})

const benefits = [
  { icon: Globe, title: 'Study from Anywhere', desc: 'Access world-class Quran education from the comfort of your home — anywhere in the UK or worldwide.' },
  { icon: Clock, title: 'Flexible Schedules', desc: 'Choose from morning, afternoon, evening, and weekend time slots that fit your lifestyle.' },
  { icon: Shield, title: 'Safe & Supervised', desc: 'All online sessions are supervised and DBS-checked teachers ensure a safe learning environment.' },
  { icon: Users, title: 'Qualified Teachers', desc: 'The same certified teachers from our Manchester centre — including both male and female tutors.' },
  { icon: Monitor, title: 'Interactive Sessions', desc: 'Live one-to-one and small group classes via Zoom with digital Quran tools and resources.' },
  { icon: Star, title: 'Proven Results', desc: '95% of our online students achieve their Quran learning goals — with measurable progress every month.' },
]

const onlineFaqs = faqs.filter((f) =>
  ['Online Learning', 'Getting Started'].includes(f.category || '')
)

export default function OnlineQuranClassesPage() {
  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'Online Quran Classes', url: `${BUSINESS_INFO.website}/online-quran-classes` },
  ])
  const faqSchema = generateFAQSchema(onlineFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, faqSchema]) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-white/60 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Online Quran Classes</span>
            </nav>
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Now Enrolling — Online Classes UK
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Online Quran Classes{' '}
              <span className="bg-clip-text text-transparent bg-gold-gradient">UK</span>
            </h1>
            <p className="text-white/75 text-lg md:text-xl leading-relaxed mb-10">
              Learn the Holy Quran from certified teachers in the comfort of your home.
              Live interactive sessions, personalised attention, flexible schedules — available
              across the UK and worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={FREE_TRIAL_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gold-gradient text-dark px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all w-full sm:w-auto justify-center"
              >
                Book FREE Online Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/courses"
                className="flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all w-full sm:w-auto justify-center"
              >
                View Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
              Why Choose Online Quran Classes?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our online platform delivers the same quality as in-person tuition — with added flexibility and convenience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 bg-gray-50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 card-hover">
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-heading font-semibold text-dark dark:text-white mb-2">{b.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-gray-50 dark:bg-dark/40">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
              How Our Online Classes Work
            </h2>
          </div>
          <div className="space-y-4">
            {[
              { step: '01', title: 'Book Your Free Trial', desc: 'Contact us via WhatsApp or our contact form. We schedule your FREE trial class within 24 hours.' },
              { step: '02', title: 'Meet Your Teacher', desc: 'We match you with the ideal certified teacher — male or female — based on your needs and goals.' },
              { step: '03', title: 'Start Learning', desc: 'Join your live Zoom session. Your teacher uses an interactive whiteboard, digital Quran, and tailored resources.' },
              { step: '04', title: 'Track Your Progress', desc: 'Receive regular progress reports. We keep parents informed and adjust the curriculum as you advance.' },
            ].map((s) => (
              <div key={s.step} className="flex gap-5 p-5 bg-white dark:bg-dark/60 rounded-2xl border border-gray-100 dark:border-white/10">
                <div className="w-12 h-12 rounded-xl bg-teal-gradient flex items-center justify-center text-white font-bold font-heading shrink-0">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-dark dark:text-white mb-1">{s.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO content block */}
      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="font-heading text-2xl font-bold text-dark dark:text-white mb-4">
              Online Quran Classes UK — Learn from Anywhere
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Quran Center UK offers premium <strong>online Quran classes</strong> for students across the
              United Kingdom and beyond. Whether you are in <Link href="/quran-classes-manchester" className="text-primary-600 dark:text-primary-400 underline">Manchester</Link>,{' '}
              <Link href="/quran-classes-birmingham" className="text-primary-600 dark:text-primary-400 underline">Birmingham</Link>,{' '}
              <Link href="/online-quran-classes-london" className="text-primary-600 dark:text-primary-400 underline">London</Link>, or anywhere in the UK,
              our live interactive sessions bring expert Quranic education directly to you.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Our <strong>online Quran teachers</strong> are fully certified, holding Ijazah and Sanad
              in Tajweed from reputable Islamic institutions. We offer one-to-one and small group
              sessions covering <strong>Noorani Qaida</strong>, <strong>Quran Reading</strong>,{' '}
              <strong>Tajweed</strong>, <strong>Hifz ul Quran</strong>, <strong>Islamic Studies</strong>,
              and more — for children from age 4 and adults of all ages.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              With flexible morning, afternoon, and evening slots available seven days a week,
              we make it easy to fit quality Islamic education into any schedule. Our online
              platform uses Zoom, digital Quran tools, and interactive whiteboards to create
              an engaging and effective learning environment. Start your Quran journey today with
              a <strong>FREE trial online class</strong>.
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials.slice(0, 3)} />
      <FAQSection faqs={onlineFaqs.slice(0, 5)} title="Online Classes FAQ" />
      <CTASection
        title="Start Your Online Quran Journey Today"
        subtitle="Join hundreds of UK students learning Quran from home. Book your FREE trial class — no commitment."
      />
    </>
  )
}
