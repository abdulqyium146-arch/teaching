import { BUSINESS_INFO } from './utils'

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': `${BUSINESS_INFO.website}/#organization`,
    name: BUSINESS_INFO.name,
    alternateName: ['Quran Centre UK', 'Quran Center Manchester', 'QCU'],
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.website,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    foundingDate: BUSINESS_INFO.founded,
    image: `${BUSINESS_INFO.website}/images/og-image.jpg`,
    logo: {
      '@type': 'ImageObject',
      url: `${BUSINESS_INFO.website}/images/logo.png`,
      width: 200,
      height: 200,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: 'Greater Manchester',
      postalCode: BUSINESS_INFO.address.postcode,
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.lat,
      longitude: BUSINESS_INFO.geo.lng,
    },
    hasMap: 'https://maps.google.com/?q=Quran+Center+UK+41+Hemmons+Rd+Manchester',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.phone,
        contactType: 'customer service',
        availableLanguage: ['English', 'Urdu', 'Arabic'],
        contactOption: 'TollFree',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
      {
        '@type': 'ContactPoint',
        contactType: 'enrolment',
        url: `https://wa.me/${BUSINESS_INFO.whatsapp}`,
        availableLanguage: ['English', 'Urdu', 'Arabic'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Quran & Islamic Education Courses',
      itemListElement: BUSINESS_INFO.courses.map((c) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Course',
          name: c.name,
          url: `${BUSINESS_INFO.website}${c.href}`,
          provider: {
            '@type': 'EducationalOrganization',
            name: BUSINESS_INFO.name,
          },
        },
      })),
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_INFO.stats.rating,
      reviewCount: BUSINESS_INFO.stats.reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.youtube,
      BUSINESS_INFO.social.twitter,
    ],
    areaServed: [
      { '@type': 'City', name: 'Manchester' },
      { '@type': 'City', name: 'Birmingham' },
      { '@type': 'City', name: 'London' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    knowsAbout: [
      'Quran Education',
      'Tajweed',
      'Hifz ul Quran',
      'Noorani Qaida',
      'Islamic Studies',
      'Arabic Language',
      'Online Islamic Education',
    ],
    keywords:
      'Quran Classes Manchester, Online Quran Classes UK, Tajweed Classes, Hifz Programme, Islamic Education, Quran Tutor UK, Quran Academy Manchester',
    priceRange: '££',
  }
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BUSINESS_INFO.website}/#website`,
    url: BUSINESS_INFO.website,
    name: BUSINESS_INFO.name,
    description: BUSINESS_INFO.shortDescription,
    publisher: {
      '@id': `${BUSINESS_INFO.website}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BUSINESS_INFO.website}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-GB',
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function generateCourseSchema(course: {
  name: string
  description: string
  provider: string
  url: string
  level?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    educationalLevel: course.level ?? 'Beginner to Advanced',
    provider: {
      '@type': 'EducationalOrganization',
      name: course.provider,
      url: BUSINESS_INFO.website,
    },
    url: course.url,
    inLanguage: ['en-GB', 'ur', 'ar'],
    availableLanguage: ['English', 'Urdu', 'Arabic'],
    offers: {
      '@type': 'Offer',
      category: 'Islamic Education',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'GBP',
      },
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['online', 'onsite'],
      location: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Manchester',
          addressCountry: 'GB',
        },
      },
    },
  }
}

export function generateArticleSchema(post: {
  title: string
  excerpt: string
  author: string
  publishedAt: string
  url: string
  image: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${BUSINESS_INFO.website}/images/logo.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: `${BUSINESS_INFO.website}${post.image}`,
    url: post.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      xPath: ['//article/h1', '//article/p[1]'],
    },
    inLanguage: 'en-GB',
    about: {
      '@type': 'Thing',
      name: 'Quran Education',
    },
  }
}
