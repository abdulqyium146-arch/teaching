import type { Metadata } from 'next'
import { Inter, Outfit, Amiri } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { StickyMobileCTA } from '@/components/sections/StickyMobileCTA'
import { generateLocalBusinessSchema, generateWebSiteSchema } from '@/lib/schema'
import { BUSINESS_INFO } from '@/lib/utils'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-amiri',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.website),
  title: {
    default: 'Quran Center UK | Premium Quran Classes Manchester & Online',
    template: '%s | Quran Center UK',
  },
  description:
    'Learn Quran online or in Manchester with certified teachers. Tajweed, Hifz, Noorani Qaida, Islamic Studies for all ages. Book your FREE trial class today!',
  keywords: [
    'Quran Classes Manchester',
    'Online Quran Classes UK',
    'Quran Academy UK',
    'Learn Quran Online',
    'Tajweed Classes Online',
    'Hifz Classes Manchester',
    'Female Quran Teacher UK',
    'Quran Tutor Manchester',
    'Islamic Education UK',
    'Quran Center UK',
  ],
  authors: [{ name: 'Quran Center UK', url: BUSINESS_INFO.website }],
  creator: 'Quran Center UK',
  publisher: 'Quran Center UK',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BUSINESS_INFO.website,
    siteName: 'Quran Center UK',
    title: 'Quran Center UK | Premium Quran Classes Manchester & Online',
    description:
      'Learn Quran online or in Manchester with certified teachers. Tajweed, Hifz, Noorani Qaida, Islamic Studies for all ages.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Quran Center UK — Premium Islamic Education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quran Center UK | Premium Quran Classes Manchester & Online',
    description: 'Learn Quran online or in Manchester with certified teachers.',
    images: ['/images/og-image.jpg'],
    creator: '@qurancenteruk',
  },
  robots: {
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
  alternates: {
    canonical: BUSINESS_INFO.website,
    languages: {
      'en-GB': BUSINESS_INFO.website,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo.png', sizes: 'any', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/logo.png', color: '#0F766E' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const orgSchema = generateLocalBusinessSchema()
  const websiteSchema = generateWebSiteSchema()

  return (
    <html
      lang="en-GB"
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable} ${amiri.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <meta name="theme-color" content="#0F766E" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" />
        <meta name="geo.region" content="GB-MAN" />
        <meta name="geo.placename" content="Manchester" />
        <meta name="geo.position" content="53.4555;-2.1901" />
        <meta name="ICBM" content="53.4555, -2.1901" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="3 days" />
        <meta name="language" content="en-GB" />
      </head>
      <body className={`font-body antialiased bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
          <StickyMobileCTA />
        </ThemeProvider>
      </body>
    </html>
  )
}
