import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function TeachingHero() {
  return (
    <section className="relative min-h-[400px] overflow-hidden sm:min-h-[460px] lg:min-h-[500px]">
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
            'linear-gradient(135deg, rgba(36,87,167,0.82) 0%, rgba(0,0,0,0.45) 100%)',
        }}
      />
      <div className="relative z-10 flex min-h-[400px] flex-col justify-center px-4 py-14 sm:min-h-[460px] sm:px-6 lg:min-h-[500px] lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl"
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
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/about"
              className="rounded-full bg-white px-6 py-3.5 font-semibold text-[#2457A7] shadow-lg transition hover:bg-[#94DCF2] hover:shadow-xl"
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
