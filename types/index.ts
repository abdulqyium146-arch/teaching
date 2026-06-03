export interface Course {
  id: string
  title: string
  arabicTitle?: string
  description: string
  longDescription: string
  icon: string
  duration: string
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  ageGroup: string
  features: string[]
  price?: string
  popular?: boolean
  slug: string
}

export interface Teacher {
  id: string
  name: string
  title: string
  specialization: string
  experience: string
  education: string
  image: string
  students: number
  rating: number
  gender: 'Male' | 'Female'
}

export interface Testimonial {
  id: string
  name: string
  role: string
  location: string
  content: string
  rating: number
  avatar?: string
  course?: string
}

export interface FAQ {
  id?: string
  question: string
  answer: string
  category?: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  authorAvatar?: string
  publishedAt: string
  readingTime: string
  category: string
  tags: string[]
  featuredImage: string
  featured?: boolean
}

export interface Stat {
  value: string
  label: string
  icon: string
}

export interface LocalPage {
  city: string
  slug: string
  title: string
  description: string
  keywords: string[]
}
