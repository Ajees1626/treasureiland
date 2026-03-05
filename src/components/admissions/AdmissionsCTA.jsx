import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function AdmissionsCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #2457A7 0%, #1B93D1 40%, #3CB5E5 100%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M20 0v40M0 20h40' stroke='rgba(255,255,255,0.08)' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute -left-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#94DCF2]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-[#94DCF2]"
        >
          Begin the Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Secure Your Child’s Future With Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-lg text-white/95"
        >
          Apply now or get in touch with our admission team for any queries.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#2457A7] shadow-xl transition hover:bg-[#94DCF2] hover:text-[#2457A7] hover:shadow-2xl"
          >
            Apply Now
            <span className="transition transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border-2 border-white/90 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Contact Admission Office
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
