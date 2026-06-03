'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Sun, Moon, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { cn, BUSINESS_INFO, FREE_TRIAL_WHATSAPP } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Classes',
    href: '/courses',
    children: [
      { name: 'Quran Classes for Kids', href: '/quran-classes-for-kids' },
      { name: 'Quran Classes for Adults', href: '/quran-classes-for-adults' },
      { name: "Women's Quran Classes", href: '/womens-quran-classes' },
      { name: 'Hifz Classes', href: '/hifz-classes' },
      { name: 'Tajweed Classes', href: '/tajweed-classes-uk' },
      { name: 'Online Classes UK', href: '/online-quran-classes' },
      { name: 'All Courses', href: '/courses' },
    ],
  },
  {
    name: 'Locations',
    href: '/quran-classes-manchester',
    children: [
      { name: 'Manchester', href: '/quran-classes-manchester' },
      { name: 'Birmingham', href: '/quran-classes-birmingham' },
      { name: 'London Online', href: '/online-quran-classes-london' },
      { name: 'UK Wide Online', href: '/online-quran-classes' },
    ],
  },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 dark:bg-dark/95 backdrop-blur-md shadow-card border-b border-gray-100 dark:border-gray-800'
          : 'bg-transparent'
      )}
    >
      {/* Top bar */}
      <div className="bg-primary-700 dark:bg-primary-900 text-white text-xs py-1.5 hidden md:block">
        <div className="container-custom flex justify-between items-center">
          <span>🌙 Online & In-Person Quran Classes — Manchester & UK Wide</span>
          <a
            href={`tel:${BUSINESS_INFO.phoneFormatted}`}
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <Phone className="w-3 h-3" />
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>

      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Quran Center UK logo"
              width={48}
              height={48}
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    pathname === item.href
                      ? 'text-primary-700 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary-700 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  )}
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 transition-transform',
                        activeDropdown === item.name && 'rotate-180'
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-52 glass rounded-xl shadow-card-hover border border-gray-100 dark:border-gray-700 overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hidden md:flex"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>

            <a
              href={FREE_TRIAL_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-teal-gradient text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-glow hover:shadow-glow-gold hover:scale-105 transition-all duration-300"
            >
              Book Free Trial
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-dark border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="container-custom py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                      pathname === item.href
                        ? 'text-primary-700 bg-primary-50 dark:bg-primary-900/30 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:text-primary-700 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                <a
                  href={FREE_TRIAL_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-teal-gradient text-white px-5 py-3 rounded-xl text-sm font-semibold"
                >
                  Book Free Trial Class
                </a>
              </div>
              <div className="flex items-center justify-between px-4 py-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneFormatted}`}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <Phone className="w-4 h-4" />
                  {BUSINESS_INFO.phone}
                </a>
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
