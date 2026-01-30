'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Lighter parallax - less aggressive transforms
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.1])
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

  const handleDisabledClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Fullscreen background image with lighter parallax */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
          alt="Fresh pizza from stone oven"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="relative z-30 h-full flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white mb-6 md:mb-8 font-display leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block">Cosimo</span>
              <motion.span
                className="block text-warm-400"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                & Anna
              </motion.span>
            </motion.h1>
            
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 mb-8 md:mb-12 max-w-4xl mx-auto font-light leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Authentische italienische Küche
              <br />
              <span className="text-warm-300 font-medium">aus dem Steinofen</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                onClick={handleDisabledClick}
                className="bg-warm-600/50 text-white/50 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full font-semibold text-lg sm:text-xl transition-colors duration-300 shadow-2xl opacity-50 cursor-not-allowed pointer-events-none"
              >
                Jetzt reservieren
              </span>
              <span
                onClick={handleDisabledClick}
                className="bg-white/5 backdrop-blur-md text-white/50 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full font-semibold text-lg sm:text-xl transition-colors duration-300 border-2 border-white/15 opacity-50 cursor-not-allowed pointer-events-none"
              >
                Speisekarte entdecken
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-white/80"
        >
          <span className="text-xs sm:text-sm mb-2 font-light">Scroll</span>
          <svg
            className="w-5 h-8 sm:w-6 sm:h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
