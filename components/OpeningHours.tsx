'use client'

import { motion } from 'framer-motion'

export default function OpeningHours() {
  const hours = [
    { day: 'Montag', hours: 'Geschlossen' },
    { day: 'Dienstag - Freitag', hours: '11.00 - 14.00 | 18.00 - 22.00' },
    { day: 'Samstag', hours: '18.00 - 22.00' },
    { day: 'Sonntag', hours: '18.00 - 22.00' },
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-warm-900 to-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-display">
            Öffnungszeiten
          </h2>
        </motion.div>

        <motion.div
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="space-y-4 md:space-y-6">
            {hours.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 py-4 md:py-6 border-b border-white/10 last:border-b-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
              >
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-white font-display">
                  {item.day}
                </span>
                <span className="text-lg md:text-xl lg:text-2xl text-warm-200 font-medium break-words">
                  {item.hours}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <p className="text-center text-warm-200 italic text-base md:text-lg lg:text-xl">
              Natürlich haben wir auf Wunsch am Freitag und Samstag auch länger
              offen!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
