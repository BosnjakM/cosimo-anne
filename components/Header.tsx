'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '#speisekarte', label: 'Speisekarte' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#lageplan', label: 'Lageplan' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  const handleDisabledClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              onClick={handleDisabledClick}
              className={`text-2xl font-bold font-display transition-colors pointer-events-auto ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              Cosimo & Anna
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <span
                  onClick={handleDisabledClick}
                  className={`transition-colors duration-200 font-medium text-lg relative group pointer-events-auto ${
                    isScrolled ? 'text-white/90 hover:text-warm-400' : 'text-white/90 hover:text-warm-300'
                  }`}
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-warm-400 group-hover:w-full transition-all duration-300"
                    initial={false}
                  />
                </span>
              </motion.div>
            ))}
          </div>

          {/* Phone Number */}
          <motion.div
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              onClick={handleDisabledClick}
              className={`text-xl font-semibold transition-colors pointer-events-auto ${
                isScrolled ? 'text-warm-400 hover:text-warm-300' : 'text-white hover:text-warm-300'
              }`}
            >
              079 337 82 59
            </span>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-white' : 'text-white'
            }`}
            onClick={handleDisabledClick}
            aria-label="Menu"
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </motion.svg>
          </button>
        </div>
      </nav>
    </motion.header>
  )
}
