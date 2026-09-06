import { Metadata } from 'next'
import { AdminDashboard } from '@/components/booking/AdminDashboard'

export const metadata: Metadata = {
  title: 'Admin — Bookings | Quran Center UK',
  robots: { index: false, follow: false },
}

export default function AdminPage() {
  return <AdminDashboard />
}
