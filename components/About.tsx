'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative py-24 lg:py-32 bg-black">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 z-0" />
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2067&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 font-display">
            Willkommen in unserem
            <span className="block text-warm-400">Familienunternehmen</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-6 leading-relaxed">
            Geniessen Sie einen lauen Sommertag in unserer Gartenwirtschaft oder
            lassen Sie sich unsere italienischen Spezialitäten nach Hause liefern.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
            Für unsere Gäste, die es eilig haben, empfehlen wir unseren Take Away.
            Ihre Menü-Auswahl können Sie jederzeit telefonisch vorbestellen.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
