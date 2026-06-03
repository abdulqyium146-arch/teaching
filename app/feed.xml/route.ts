import { blogPosts } from '@/data/blog-posts'
import { BUSINESS_INFO } from '@/lib/utils'

export const dynamic = 'force-static'
export const revalidate = 3600

export function GET() {
  const items = blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${BUSINESS_INFO.website}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BUSINESS_INFO.website}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <author>${BUSINESS_INFO.email} (${BUSINESS_INFO.name})</author>
    </item>`
    )
    .join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${BUSINESS_INFO.name} — Islamic Education Blog</title>
    <description>${BUSINESS_INFO.shortDescription}</description>
    <link>${BUSINESS_INFO.website}</link>
    <atom:link href="${BUSINESS_INFO.website}/feed.xml" rel="self" type="application/rss+xml"/>
    <language>en-GB</language>
    <managingEditor>${BUSINESS_INFO.email} (${BUSINESS_INFO.name})</managingEditor>
    <webMaster>${BUSINESS_INFO.email} (${BUSINESS_INFO.name})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <ttl>60</ttl>
    <image>
      <url>${BUSINESS_INFO.website}/logo.png</url>
      <title>${BUSINESS_INFO.name}</title>
      <link>${BUSINESS_INFO.website}</link>
    </image>
    ${items}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  })
}
