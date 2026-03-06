import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function TeachingHero() {
  return (
    <section className="relative min-h-[320px] sm:min-h-[400px] md:min-h-[460px] lg:min-h-[500px] overflow-hidden" aria-label="Teaching Methodology banner">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1920)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(49,50,111,0.82) 0%, rgba(0,0,0,0.45) 100%)',
        }}
      />
      <div className="relative z-10 flex min-h-[320px] sm:min-h-[400px] md:min-h-[460px] flex-col justify-center px-4 py-12 sm:py-14 md:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-tight text-gradient-light drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Our Teaching Methodology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-white/95 sm:text-xl"
          >
            Nurturing young minds through innovation, discipline, and holistic learning.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            <Link
              to="/about"
              className="rounded-full bg-white px-6 py-3.5 font-semibold text-[var(--color-primary)] shadow-lg transition hover:bg-[color:color-mix(in_srgb,var(--color-accent)_18%,white)] hover:shadow-xl"
            >
              Explore Curriculum
            </Link>
            <Link
              to="/contact"
              className="rounded-full border-2 border-white bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Enquire Now
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
