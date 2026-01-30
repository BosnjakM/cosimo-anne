'use client'

import { motion } from 'framer-motion'

export default function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
      title: 'Frische Pizzen',
    },
    {
      url: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2067&auto=format&fit=crop',
      title: 'Italienische Atmosphäre',
    },
    {
      url: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2080&auto=format&fit=crop',
      title: 'Hausgemachte Pasta',
    },
    {
      url: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop',
      title: 'Steinofen',
    },
    {
      url: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2070&auto=format&fit=crop',
      title: 'Tradition',
    },
  ]

  return (
    <section
      id="galerie"
      className="relative py-24 lg:py-32 bg-black"
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
            Galerie
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-warm-300">
            Einblicke in unsere Pizzeria
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -8 }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg md:text-xl font-semibold">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
