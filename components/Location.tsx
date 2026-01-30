'use client'

import { motion } from 'framer-motion'

export default function Location() {
  return (
    <section
      id="lageplan"
      className="relative py-24 lg:py-32 bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90 z-0" />
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-display">
            Lageplan
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-warm-200 leading-relaxed">
            Berechnen Sie den Weg zu unserer Pizzeria in Winterthur Wülflingen
            am Lindenplatz
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-display">
              So finden Sie uns
            </h3>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Unsere Pizzeria befindet sich im Herzen von Winterthur Wülflingen
              am Lindenplatz 3.
            </p>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20">
              <h4 className="font-semibold text-white mb-4 text-lg md:text-xl">Adresse</h4>
              <p className="text-white/90 mb-6 text-base md:text-lg">
                Lindenplatz 3<br />
                8408 Winterthur
              </p>
              <motion.a
                href="https://maps.app.goo.gl/sVyWCTZeBGyhyKQKA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-warm-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-warm-700 transition-colors duration-300 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Route berechnen
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <iframe
                src="https://www.google.com/maps/embed/v1/view?key=AIzaSyAkQRmqicOPMryQRkO6Ijca-xwYaOULNxw&center=47.5109363,8.693718600000011&zoom=14&maptype=roadmap&language=de"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
