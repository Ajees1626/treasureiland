import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="relative min-h-[300px] sm:min-h-[380px] md:min-h-[420px] overflow-hidden" aria-label="Contact banner">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1580582932707-19a4b50308ab?q=80&w=1920)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(49,50,111,0.88) 0%, rgba(0,0,0,0.5) 100%)',
        }}
      />
      <div className="relative z-10 flex min-h-[300px] sm:min-h-[380px] md:min-h-[420px] flex-col justify-center px-4 py-12 sm:py-16 md:py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-tight text-gradient-light drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Contact Our School
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-white/95"
          >
            We would love to hear from you. Reach out for admissions, queries, or support.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
