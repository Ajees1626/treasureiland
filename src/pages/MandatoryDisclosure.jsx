import { motion } from 'framer-motion'
import MandatoryDisclosures from '../components/about/MandatoryDisclosures'

export default function MandatoryDisclosure() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section className="relative min-h-[280px] overflow-hidden sm:min-h-[320px]">
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
              'linear-gradient(135deg, rgba(36,87,167,0.85) 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />
        <div className="relative z-10 flex min-h-[280px] flex-col justify-center px-4 py-12 sm:min-h-[320px] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl"
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
