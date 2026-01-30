'use client'

import { motion } from 'framer-motion'

export default function Menu() {
  const menuCategories = [
    {
      title: 'Pizzen',
      subtitle: 'Aus dem Steinofen',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2069&auto=format&fit=crop',
      items: [
        'Margherita',
        'Prosciutto',
        'Funghi',
        'Quattro Stagioni',
        'Capricciosa',
        'Diavola',
      ],
      color: 'from-red-600 to-orange-600',
    },
    {
      title: 'Pasta',
      subtitle: 'Hausgemacht',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2080&auto=format&fit=crop',
      items: [
        'Spaghetti Carbonara',
        'Penne all\'Arrabbiata',
        'Tagliatelle al Ragù',
        'Lasagne',
        'Gnocchi al Gorgonzola',
        'Risotto ai Funghi',
      ],
      color: 'from-yellow-600 to-orange-500',
    },
    {
      title: 'Antipasti',
      subtitle: 'Frisch & Leicht',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2080&auto=format&fit=crop',
      items: [
        'Bruschetta',
        'Caprese',
        'Antipasto Misto',
        'Carpaccio',
      ],
      color: 'from-green-600 to-emerald-500',
    },
  ]

  const handleDisabledClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <section
      id="speisekarte"
      className="relative py-24 lg:py-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-display">
            Speisekarte
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-warm-300 max-w-3xl mx-auto">
            Von delikaten Weinen über frische Pizza und Pasta
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {menuCategories.map((category, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            >
              <div
                className="relative min-h-[500px] rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${category.color} opacity-80`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 min-h-[500px] flex flex-col justify-between p-6 lg:p-8">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                      {category.title}
                    </h3>
                    <p className="text-lg md:text-xl text-warm-200 mb-8">
                      {category.subtitle}
                    </p>
                  </div>

                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="text-white text-lg md:text-xl flex items-center group/item"
                      >
                        <span className="w-2 h-2 bg-warm-400 rounded-full mr-4 flex-shrink-0" />
                        <span className="transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.span
            onClick={handleDisabledClick}
            className="inline-block bg-warm-600 text-white px-8 md:px-12 py-5 md:py-6 rounded-full font-semibold text-lg md:text-xl hover:bg-warm-700 transition-colors duration-300 shadow-2xl pointer-events-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Vollständige Speisekarte anfragen
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
