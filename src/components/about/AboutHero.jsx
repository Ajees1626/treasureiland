import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="relative min-h-[300px] sm:min-h-[380px] md:min-h-[420px] lg:min-h-[460px] overflow-hidden" aria-label="About Us banner">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(49,50,111,0.85) 0%, rgba(0,0,0,0.45) 100%)',
        }}
      />
      <div className="relative z-10 flex min-h-[300px] sm:min-h-[380px] md:min-h-[420px] flex-col justify-center px-4 py-12 sm:py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-tight text-gradient-light drop-shadow-lg sm:text-4xl md:text-5xl lg:text-5xl"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-white/95"
          >
            Nurturing minds and building character at Treasure Iland International School.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
