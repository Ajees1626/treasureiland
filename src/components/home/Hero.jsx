import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiLocationMarker } from 'react-icons/hi'

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80',
  'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80',
  'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&q=80',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80',
]

const SLIDE_INTERVAL_MS = 5500

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length)
    }, SLIDE_INTERVAL_MS)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative flex min-h-[560px] flex-col justify-center overflow-hidden sm:min-h-[620px] lg:min-h-[700px]"
    >
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {HERO_IMAGES.map((src, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        {/* Black overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.4) 100%)',
          }}
        />
      </div>

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 text-left sm:px-6 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#94DCF2]" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/95">
              A Senior Secondary CBSE School
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            <span className="block">Discover Your</span>
            <span className="mt-1 block bg-linear-to-r from-white to-[#94DCF2] bg-clip-text text-transparent">
              Treasure Iland
            </span>
          </h1>
          <p className="mt-4 text-lg font-medium tracking-wide text-white/90 sm:text-xl">
            International School · Built for Tomorrow
          </p>

          {/* Accent line */}
          <div
            className="mt-6 h-0.5 w-20 rounded-full"
            style={{ background: 'linear-gradient(90deg, #94DCF2, transparent)' }}
          />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-lg border border-white/40 bg-white/95 px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-[#2457A7] shadow-lg">
              Admissions Open
            </span>
            <span className="rounded-lg bg-[#1B93D1] px-4 py-2.5 text-sm font-semibold text-white shadow-lg">
              2026–2027
            </span>
          </div>

          <div className="mt-8 flex items-center gap-2.5 text-white/90">
            <HiLocationMarker className="h-5 w-5 shrink-0 text-[#94DCF2]" />
            <span className="font-medium tracking-wide">Vishwanathapuram, Shencottai</span>
          </div>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2.5 sm:bottom-8">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'h-2 w-8 bg-[#94DCF2]'
                : 'h-2 w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </motion.section>
  )
}
