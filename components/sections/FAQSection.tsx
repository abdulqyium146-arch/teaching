'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQ } from '@/types'

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
}

export function FAQSection({ faqs, title = 'Frequently Asked Questions' }: FAQSectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [openId, setOpenId] = useState<string | null>('1')

  return (
    <section className="section-padding bg-white dark:bg-dark" ref={ref}>
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-4">
            <span className="w-8 h-px bg-primary-600" />
            FAQs
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Everything you need to know about learning Quran with us
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const key = faq.id ?? faq.question
            return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.06 }}
              className="border border-gray-100 dark:border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === key ? null : key)}
                className="w-full flex items-center justify-between p-5 text-left bg-white dark:bg-dark/60 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                aria-expanded={openId === key}
              >
                <span className="font-heading font-semibold text-dark dark:text-white pr-4">
                  {faq.question}
                </span>
                <div className="shrink-0 w-6 h-6 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                  {openId === key ? (
                    <Minus className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openId === key && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed text-sm bg-white dark:bg-dark/60 border-t border-gray-50 dark:border-white/5">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
