import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { StatsSection } from '@/components/sections/StatsSection'
import { CoursesGrid } from '@/components/sections/CoursesGrid'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { TeachersSection } from '@/components/sections/TeachersSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { LocalSEOBlock } from '@/components/sections/LocalSEOBlock'
import { CTASection } from '@/components/sections/CTASection'
import { courses } from '@/data/courses'
import { teachers } from '@/data/teachers'
import { testimonials } from '@/data/testimonials'
import { homeFaqs } from '@/data/faqs'
import { generateFAQSchema } from '@/lib/schema'
import { BUSINESS_INFO } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Quran Center UK | Best Quran Academy Manchester & Online',
  description:
    'Quran Center UK — the best Quran academy in the UK. Learn Quran online or in Manchester with certified teachers. Tajweed, Hifz, Noorani Qaida & Islamic Studies for all ages. Book FREE trial!',
  keywords: [
    'Quran Center UK',
    'Quran Centre UK',
    'Best Quran Academy in UK',
    'Quran Classes Manchester',
    'Quran Classes Near Me',
    'Online Quran Classes UK',
    'Quran Academy UK',
    'Quran School UK',
    'Learn Quran Centre',
    'Quran Teacher Manchester',
    'Quran Teacher Near Me',
    'Tajweed Classes Online',
    'Hifz Classes Manchester',
    'Hifz Classes Near Me',
    'Quran Classes for Kids',
    'Quran Classes for Adults',
    'Islamic Studies UK',
    'Online Quran Center',
    'Quranic Center',
    'Islamic Learning Center',
    'Al Quran Center',
    'Quran Academy Near Me',
    'Best Quran Classes UK',
    'Quran School Near Me',
    'UK Quran Academy',
  ],
  alternates: {
    canonical: BUSINESS_INFO.website,
  },
}

export default function HomePage() {
  const faqSchema = generateFAQSchema(homeFaqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <StatsSection />
      <CoursesGrid
        courses={courses}
        title="Our Islamic Education Courses"
        subtitle="Choose from our comprehensive range of Quran and Islamic Studies courses — designed for all ages and experience levels."
      />
      <WhyChooseUs />
      <TeachersSection teachers={teachers} />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection faqs={homeFaqs} />
      <LocalSEOBlock />
      <CTASection />
    </>
  )
}
