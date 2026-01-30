'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const handleDisabledClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <footer className="bg-warm-900 text-warm-200 py-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-warm-700 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta-700 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 font-display">
              Pizzeria Cosimo & Anna
            </h3>
            <p className="text-warm-300 text-lg leading-relaxed">
              Ihre Pizzeria in Winterthur Wülflingen
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-6 font-display">Kontakt</h4>
            <p className="text-warm-300 mb-3 text-lg">
              Lindenplatz 3<br />
              8408 Winterthur
            </p>
            <span
              onClick={handleDisabledClick}
              className="text-warm-200/50 text-lg font-medium opacity-50 cursor-not-allowed pointer-events-none"
            >
              079 337 82 59
            </span>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-6 font-display">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '#speisekarte', label: 'Speisekarte' },
                { href: '#galerie', label: 'Galerie' },
                { href: '#lageplan', label: 'Lageplan' },
                { href: '#kontakt', label: 'Kontakt' },
              ].map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <span
                    onClick={handleDisabledClick}
                    className="text-warm-300/50 text-lg opacity-50 cursor-not-allowed pointer-events-none"
                  >
                    {item.label}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-warm-800 pt-8 text-center text-warm-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg">
            &copy; {new Date().getFullYear()} Pizzeria Cosimo & Anna. Alle Rechte vorbehalten.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
