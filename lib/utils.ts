import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const BUSINESS_INFO = {
  name: 'Quran Center UK',
  tagline: 'Premier Islamic Education Centre in Manchester',
  description:
    'Quran Center UK is a certified Islamic education centre based in Levenshulme, Manchester, offering expert Quran tuition, Tajweed, Hifz, and Islamic Studies for children and adults — online across the UK and in-person in Manchester since 2014.',
  shortDescription:
    'Learn Quran online or in Manchester with certified teachers. Tajweed, Hifz, Noorani Qaida & Islamic Studies for all ages.',
  address: {
    street: '41 Hemmons Rd',
    area: 'Levenshulme',
    city: 'Manchester',
    postcode: 'M12 5TA',
    country: 'United Kingdom',
    full: '41 Hemmons Rd, Levenshulme, Manchester M12 5TA, United Kingdom',
  },
  phone: '+92 332 3253276',
  phoneFormatted: '+923323253276',
  whatsapp: '+923323253276',
  email: 'info@qurancenter.uk',
  website: 'https://qurancenter.uk',
  founded: '2014',
  geo: {
    lat: 53.4555,
    lng: -2.1901,
  },
  hours: {
    weekdays: '9:00 AM – 9:00 PM',
    saturday: '9:00 AM – 6:00 PM',
    sunday: '10:00 AM – 4:00 PM',
    whatsapp: '24/7',
    online: 'Flexible — morning, afternoon & evening slots available 7 days a week',
  },
  social: {
    facebook: 'https://facebook.com/qurancenteruk',
    instagram: 'https://instagram.com/qurancenteruk',
    youtube: 'https://youtube.com/@qurancenteruk',
    twitter: 'https://twitter.com/qurancenteruk',
  },
  stats: {
    students: '1,200+',
    teachers: '20+',
    yearsExperience: '10+',
    rating: '4.9',
    reviewCount: '247',
    courses: '8+',
  },
  courses: [
    { name: 'Noorani Qaida', slug: 'noorani-qaida', href: '/courses#noorani-qaida' },
    { name: 'Quran Reading', slug: 'quran-reading', href: '/courses#quran-reading' },
    { name: 'Tajweed Classes', slug: 'tajweed-classes', href: '/courses#tajweed-classes' },
    { name: 'Hifz ul Quran', slug: 'hifz-ul-quran', href: '/courses#hifz-ul-quran' },
    { name: 'Islamic Studies', slug: 'islamic-studies', href: '/courses#islamic-studies' },
    { name: 'Kids Quran Classes', slug: 'kids-quran-classes', href: '/courses#kids-quran-classes' },
    { name: 'Adults Quran Classes', slug: 'adults-quran-classes', href: '/courses#adults-quran-classes' },
    { name: 'One-to-One Classes', slug: 'one-to-one-classes', href: '/courses#one-to-one-classes' },
  ],
}

export const WHATSAPP_URL = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=Assalamu%20Alaykum%2C%20I%20am%20interested%20in%20Quran%20classes%20at%20Quran%20Center%20UK.%20Could%20you%20please%20provide%20more%20information%3F`

export const FREE_TRIAL_WHATSAPP = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=Assalamu%20Alaykum%2C%20I%20would%20like%20to%20book%20a%20FREE%20trial%20class%20at%20Quran%20Center%20UK.`
