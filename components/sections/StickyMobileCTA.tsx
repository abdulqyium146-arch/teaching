'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { MessageCircle, CalendarCheck, X } from 'lucide-react'
import { FREE_TRIAL_WHATSAPP } from '@/lib/utils'

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !dismissed) {
        setVisible(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  if (dismissed) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white dark:bg-dark border-t border-gray-200 dark:border-white/10 shadow-2xl px-4 py-3"
        >
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-2 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 text-center">
            🌙 Join 1,200+ students — No commitment required
          </p>
          <div className="flex gap-2">
            <Link
              href="/book"
              className="flex-1 flex items-center justify-center gap-1.5 bg-teal-gradient text-white py-3 rounded-xl font-bold text-sm"
            >
              <CalendarCheck className="w-4 h-4" />
              Book FREE Trial
            </Link>
            <a
              href={FREE_TRIAL_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-3 rounded-xl font-bold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
