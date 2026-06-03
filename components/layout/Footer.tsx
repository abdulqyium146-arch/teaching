import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react'
import { BUSINESS_INFO, FREE_TRIAL_WHATSAPP } from '@/lib/utils'

const footerLinks = {
  courses: [
    { name: 'Noorani Qaida', href: '/courses#noorani-qaida' },
    { name: 'Quran Reading', href: '/courses#quran-reading' },
    { name: 'Tajweed Classes', href: '/tajweed-classes-uk' },
    { name: 'Hifz ul Quran', href: '/hifz-classes' },
    { name: 'Islamic Studies', href: '/courses#islamic-studies' },
    { name: 'Kids Quran Classes', href: '/quran-classes-for-kids' },
    { name: "Women's Quran Classes", href: '/womens-quran-classes' },
    { name: 'Adult Quran Classes', href: '/quran-classes-for-adults' },
  ],
  quickLinks: [
    { name: 'About Us', href: '/about' },
    { name: 'Quran Classes for Kids', href: '/quran-classes-for-kids' },
    { name: 'Quran Classes for Adults', href: '/quran-classes-for-adults' },
    { name: "Women's Quran Classes", href: '/womens-quran-classes' },
    { name: 'Hifz Classes', href: '/hifz-classes' },
    { name: 'Online Classes UK', href: '/online-quran-classes' },
    { name: 'Blog & Articles', href: '/blog' },
    { name: 'Book Free Trial', href: '/contact' },
  ],
  locations: [
    { name: 'Manchester', href: '/quran-classes-manchester' },
    { name: 'Birmingham', href: '/quran-classes-birmingham' },
    { name: 'London', href: '/online-quran-classes-london' },
    { name: 'UK Wide Online', href: '/online-quran-classes' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-dark text-white geometric-bg" role="contentinfo">
      {/* Newsletter CTA strip */}
      <div className="bg-teal-gradient">
        <div className="container-custom py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-xl font-bold text-white">
              Start Your Quran Journey Today
            </h3>
            <p className="text-white/80 mt-1 text-sm">
              Join 1,200+ students — Book your FREE trial class now
            </p>
          </div>
          <a
            href={FREE_TRIAL_WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-xl font-semibold hover:bg-gold hover:text-dark transition-all whitespace-nowrap"
          >
            Book Free Trial
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/logo.png"
                alt="Quran Center UK logo"
                width={56}
                height={56}
                className="h-14 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Providing world-class Quran and Islamic education for all ages since 2014.
              Online & in-person classes across the UK.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Our Courses</h4>
            <ul className="space-y-2.5">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-primary-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-primary-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="flex items-start gap-3 text-gray-400 text-sm hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 text-primary-500 shrink-0" />
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="flex items-start gap-3 text-gray-400 text-sm hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 text-primary-500 shrink-0" />
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary-500 shrink-0" />
                  <span>{BUSINESS_INFO.address.full}</span>
                </div>
              </li>
            </ul>

            <div className="mt-5 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs font-semibold text-primary-400 mb-2">Opening Hours</p>
              <p className="text-xs text-gray-400">Mon–Fri: {BUSINESS_INFO.hours.weekdays}</p>
              <p className="text-xs text-gray-400">Saturday: {BUSINESS_INFO.hours.saturday}</p>
              <p className="text-xs text-gray-400">Sunday: {BUSINESS_INFO.hours.sunday}</p>
              <div className="mt-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <p className="text-xs text-green-400 font-medium">WhatsApp: 24/7 Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Quran Center UK. All rights reserved.
          </p>
          <p className="text-gray-600">
            Powered by{' '}
            <a
              href="https://smallbusinessmarketingprofessional.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-400 transition-colors underline underline-offset-2"
            >
              Small Business Marketing Professional
            </a>
          </p>
          <div className="flex items-center gap-1">
            <span className="text-primary-500 font-arabic text-sm">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-primary-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
