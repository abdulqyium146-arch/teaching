import { Metadata } from 'next'
import { BUSINESS_INFO } from './utils'

const defaultOG = {
  siteName: BUSINESS_INFO.name,
  images: [
    {
      url: `${BUSINESS_INFO.website}/images/og-image.jpg`,
      width: 1200,
      height: 630,
      alt: 'Quran Center UK — Premium Islamic Education',
    },
  ],
}

export function createMetadata({
  title,
  description,
  keywords,
  path = '',
  noIndex = false,
  ogImage,
}: {
  title: string
  description: string
  keywords?: string[]
  path?: string
  noIndex?: boolean
  ogImage?: string
}): Metadata {
  const url = `${BUSINESS_INFO.website}${path}`
  const fullTitle = title.includes('Quran Center UK')
    ? title
    : `${title} | Quran Center UK`

  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(', '),
    metadataBase: new URL(BUSINESS_INFO.website),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      ...defaultOG,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }]
        : defaultOG.images,
      type: 'website',
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ogImage ? [ogImage] : defaultOG.images.map((i) => i.url),
      creator: '@qurancenteruk',
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    authors: [{ name: BUSINESS_INFO.name, url: BUSINESS_INFO.website }],
    creator: BUSINESS_INFO.name,
    publisher: BUSINESS_INFO.name,
  }
}
