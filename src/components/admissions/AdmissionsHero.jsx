import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function AdmissionsHero() {
  return (
    <section className="relative min-h-[340px] sm:min-h-[420px] md:min-h-[480px] lg:min-h-[520px] overflow-hidden" aria-label="Admissions banner">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1920)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(49,50,111,0.78) 0%, rgba(0,0,0,0.45) 100%)',
        }}
      />
      <div className="relative z-10 flex min-h-[340px] sm:min-h-[420px] md:min-h-[480px] flex-col justify-center px-4 py-12 sm:py-14 md:py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-tight text-gradient-light drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Admissions Open 2026–27
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/95 sm:text-xl"
          >
            Join a nurturing environment that inspires academic excellence and character development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-[var(--color-primary)] shadow-lg transition hover:bg-[var(--color-gold)] hover:shadow-xl"
            >
              Apply Now
              <span className="transition transform group-hover:translate-x-1">→</span>
            </Link>
            <a
              href="#"
              className="rounded-full border-2 border-white bg-white/10 px-6 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Download Prospectus
            </a>
            <Link
              to="/contact"
              className="rounded-full border-2 border-white px-6 py-3.5 font-semibold text-white transition hover:bg-white/20"
            >
              Enquire Today
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
