'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  const handleDisabledClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <section
      id="kontakt"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-black via-warm-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-display">
            Kontakt
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-warm-200">
            Reservieren Sie jetzt einen Tisch oder bestellen Sie Take Away
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          <motion.div
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 font-display">
              Pizzeria Cosimo & Anna
            </h3>
            <div className="space-y-5 md:space-y-6">
              {[
                { label: 'Adresse', value: 'Lindenplatz 3\n8408 Winterthur', link: null },
                { label: 'Telefon', value: '052 544 45 49', link: 'tel:0525444549' },
                { label: 'Mobile', value: '079 337 82 59', link: 'tel:0793378259', highlight: true },
                { label: 'E-Mail', value: 'pastapizza@bluewin.ch', link: 'mailto:pastapizza@bluewin.ch' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: 'easeOut' }}
                >
                  <p className="text-xs md:text-sm font-semibold text-warm-300 uppercase tracking-wide mb-2">
                    {item.label}
                  </p>
                  {item.link ? (
                    <span
                      onClick={handleDisabledClick}
                      className={`text-lg md:text-xl hover:text-warm-300 transition-colors pointer-events-auto ${
                        item.highlight ? 'text-warm-400 font-semibold' : 'text-white'
                      }`}
                    >
                      {item.value.split('\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < item.value.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </span>
                  ) : (
                    <p className="text-lg md:text-xl text-white whitespace-pre-line">
                      {item.value}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 md:mt-10 p-5 md:p-6 bg-warm-500/20 border-l-4 border-warm-400 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
            >
              <p className="text-sm text-white leading-relaxed">
                <strong className="text-warm-300">Hinweis:</strong> Bitte keine Tischreservationen per
                E-Mail. Vielen Dank für Ihr Verständnis!
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-warm-600 to-terracotta-600 rounded-3xl p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.01 }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
              <motion.h3
                className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 font-display"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                Jetzt reservieren
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 text-warm-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              >
                Rufen Sie uns an und reservieren Sie Ihren Tisch oder bestellen
                Sie Ihr Take Away.
              </motion.p>
              <motion.span
                onClick={handleDisabledClick}
                className="bg-white text-warm-600 px-8 md:px-12 py-5 md:py-6 rounded-full font-bold text-lg md:text-xl lg:text-2xl hover:bg-cream-50 transition-colors duration-300 text-center shadow-2xl relative overflow-hidden group block pointer-events-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                079 337 82 59 anrufen
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
