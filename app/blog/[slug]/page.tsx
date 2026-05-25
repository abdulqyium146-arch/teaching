import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, ArrowLeft, Tag, User } from 'lucide-react'
import { blogPosts, getPostBySlug, getRelatedPosts } from '@/data/blog-posts'
import { createMetadata } from '@/lib/metadata'
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { BUSINESS_INFO, formatDate } from '@/lib/utils'
import { CTASection } from '@/components/sections/CTASection'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    path: `/blog/${post.slug}`,
  })
}

const blogContent: Record<string, string> = {
  'importance-of-tajweed-in-quran-recitation': `
Tajweed (تجويد) is the science and art of reciting the Holy Quran correctly, as it was revealed to the Prophet Muhammad ﷺ through the Angel Jibreel. The word "Tajweed" comes from the Arabic root "j-w-d" meaning to make better, to improve, or to do well.

## Why is Tajweed Important?

Allah ﷻ commands us in the Quran: **"وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا"** — "And recite the Quran with measured recitation." (Al-Muzzammil, 73:4).

Reciting the Quran with Tajweed is an obligation (fard) upon every Muslim. Deliberately mispronouncing Arabic letters can change the meaning of words, which could alter the meaning of Allah's words.

## The Major Rules of Tajweed

**1. Makharij al-Huroof (Points of Articulation)**
Each Arabic letter has a specific point in the mouth or throat where it originates. Learning the correct Makhraj for each letter is the foundation of Tajweed.

**2. Sifaat al-Huroof (Characteristics of Letters)**
Arabic letters have inherent qualities — some are heavy (Tafkheem), some light (Tarqeeq), some nasal (Ghunna). Mastering these characteristics gives recitation its distinctive beauty.

**3. Noon Sakin and Tanween Rules**
When a Noon with sukoon or Tanween appears before certain letters, specific rules apply — Idgham, Iqlab, Ikhfa, or Izhar.

**4. Madd (Elongation)**
Vowels can be elongated for two, four, or six counts depending on specific conditions, adding rhythm and melody to recitation.

**5. Qalqalah**
Certain letters produce a vibrating echo sound when they appear with a sukoon. These are: ق، ط، ب، ج، د

## How to Learn Tajweed

The best way to learn Tajweed is through a qualified teacher who can provide live feedback on your pronunciation. At Quran Center UK, our Tajweed teachers hold Ijazah (chains of transmission going back to the Prophet ﷺ) and provide personalised correction in every lesson.

Start your Tajweed journey today with a FREE trial class.
  `,
  'how-to-help-your-child-memorise-quran': `
Helping your child memorise the Holy Quran is one of the greatest gifts you can give them in this life and the next. The Prophet Muhammad ﷺ said: **"The one who reads the Quran and memorises it — he will be with the noble righteous scribes [in Paradise]."** (Bukhari)

## 10 Practical Tips for Supporting Your Child's Hifz Journey

**1. Create a Consistent Routine**
Choose a specific time each day for Quran memorisation — ideally after Fajr when the mind is fresh. Consistency is the key to long-term retention.

**2. Start with Small Portions**
Begin with 3-5 lines per day. It's better to memorise a small amount solidly than a large amount poorly. Quality over quantity always.

**3. Listen to Recitation**
Play Quran recitation in your home regularly. Children who grow up hearing the Quran find memorisation much easier. Sheikhs like Mishary Rashid Al-Afasy are excellent for children.

**4. Make Revision a Priority**
In Hifz, revision (Muraja'ah) is as important as new memorisation. A common ratio is: learn 1 new page, revise 5 old pages.

**5. Reward and Motivate**
Celebrate milestones with your child. When they complete a Juz, celebrate! This motivates continued effort.

**6. Create an Islamic Environment**
Display the names of Allah and verses in your home. Reduce screen time during the Hifz period and replace it with beneficial Islamic content.

**7. Make Du'a Together**
Du'a is the weapon of the believer. Make du'a with your child for Allah ﷻ to make the Quran easy for them and to bless their memory.

**8. Choose the Right Teacher**
A qualified, patient Hifz teacher makes an enormous difference. At Quran Center UK, our Hifz supervisors have guided hundreds of children to completion.

**9. Be Patient**
Hifz takes time — typically 3-5 years. There will be difficult days. Encouragement and patience from parents is crucial to keeping children motivated.

**10. Connect the Quran to Daily Life**
Teach your child the meaning of what they're memorising. When they understand the words of Allah, memorisation becomes a deeply meaningful spiritual experience.
  `,
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, post.category)
  const content = blogContent[slug] || post.excerpt

  const breadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_INFO.website },
    { name: 'Blog', url: `${BUSINESS_INFO.website}/blog` },
    { name: post.title, url: `${BUSINESS_INFO.website}/blog/${slug}` },
  ])

  const articleSchema = generateArticleSchema({
    title: post.title,
    excerpt: post.excerpt,
    author: post.author,
    publishedAt: post.publishedAt,
    url: `${BUSINESS_INFO.website}/blog/${slug}`,
    image: post.featuredImage,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumb, articleSchema]) }}
      />

      {/* Hero */}
      <section className="pt-28 pb-12 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div className="container-custom relative z-10 max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-white/60 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-white line-clamp-1">{post.title}</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-5">
            <span className="bg-primary-500/30 text-primary-300 text-sm font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
            {post.tags.map((tag) => (
              <span key={tag} className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white dark:bg-dark">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,280px] gap-12">
            {/* Content */}
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div
                className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: content
                    .replace(/^## (.+)$/gm, '<h2 class="font-heading font-bold text-xl text-dark dark:text-white mt-8 mb-3">$1</h2>')
                    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-dark dark:text-white">$1</strong>')
                }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100 dark:border-white/10">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 text-xs px-3 py-1.5 rounded-full"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 mt-6 text-primary-600 dark:text-primary-400 font-medium hover:gap-3 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA box */}
              <div className="bg-teal-gradient rounded-2xl p-6 text-white">
                <h3 className="font-heading font-bold text-lg mb-2">Ready to Start?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Book your FREE trial class today and begin your Quran journey.
                </p>
                <a
                  href="https://wa.me/923474825228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-primary-700 px-4 py-3 rounded-xl font-semibold text-sm hover:bg-gold hover:text-dark transition-all"
                >
                  Book Free Trial
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Author */}
              <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-5 border border-gray-100 dark:border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-teal-gradient flex items-center justify-center text-white font-bold text-sm">
                    {post.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-dark dark:text-white text-sm">{post.author}</div>
                    <div className="text-xs text-gray-500">Quran Center UK</div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Certified Quran & Islamic Studies educator with extensive experience teaching students of all ages.
                </p>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <h4 className="font-heading font-semibold text-dark dark:text-white mb-4">Related Articles</h4>
                  <div className="space-y-3">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`}>
                        <div className="p-3 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/10 hover:shadow-md transition-all group">
                          <p className="text-sm font-medium text-dark dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2 mb-1">
                            {r.title}
                          </p>
                          <p className="text-xs text-gray-500">{r.readingTime}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CTASection
        title="Enjoyed This Article?"
        subtitle="Take the next step and book a FREE trial Quran class today."
        variant="primary"
      />
    </>
  )
}
