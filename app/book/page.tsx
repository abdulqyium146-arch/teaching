import { Metadata } from 'next'
import { BookingForm } from '@/components/booking/BookingForm'
import { BUSINESS_INFO } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Book a FREE Trial Class | Quran Center UK',
  description:
    'Book your FREE trial Quran class with Hafiz Raza — certified Hafiz & Tajweed teacher. Affordable prices. Male & female teachers. Online & Manchester.',
  alternates: { canonical: `${BUSINESS_INFO.website}/book` },
}

export default function BookPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-dark pt-24 pb-16">
      {/* Header */}
      <section className="bg-dark relative overflow-hidden py-16 mb-12">
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z' fill='none' stroke='%23D4AF37' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className="container-custom relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-gold/30 text-gold px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            ✓ First Class Always FREE — No Commitment
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Book Your FREE Trial Class
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Fill in the form below and we'll confirm your slot via WhatsApp within a few hours.
          </p>
        </div>
      </section>

      <div className="container-custom max-w-2xl">
        <BookingForm />
      </div>
    </main>
  )
}
