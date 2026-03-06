import { motion } from 'framer-motion'
import MandatoryDisclosures from '../components/about/MandatoryDisclosures'

export default function MandatoryDisclosure() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      aria-label="Mandatory Disclosure page"
    >
      {/* Hero */}
      <section className="relative min-h-[260px] sm:min-h-[280px] md:min-h-[320px] overflow-hidden" aria-label="Mandatory Disclosure banner">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1920)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(49,50,111,0.85) 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />
        <div className="relative z-10 flex min-h-[260px] sm:min-h-[280px] md:min-h-[320px] flex-col justify-center px-4 py-10 sm:py-12 md:py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold leading-tight text-gradient-light drop-shadow-lg sm:text-4xl md:text-5xl"
            >
              Mandatory Disclosure
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-white/95"
            >
              Key information published as per regulatory requirements.
            </motion.p>
          </div>
        </div>
      </section>

      <MandatoryDisclosures />
    </motion.div>
  )
}
