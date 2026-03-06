import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiClock, HiPhone, HiLocationMarker } from 'react-icons/hi'

export default function CampusVisit() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f8fbff] to-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800"
              alt="School campus"
              className="h-[320px] w-full object-cover sm:h-[380px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[color:color-mix(in_srgb,var(--color-primary)_40%,transparent)] to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gradient sm:text-4xl">
              Visit Our Campus
            </h2>
            <div className="mt-3 h-1 w-20 rounded-full bg-[var(--color-gold)]" />
            <p className="mt-6 leading-relaxed text-gray-600">
              See the classrooms, labs, and facilities yourself. We welcome parents and students to book a campus tour and meet our team.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <HiClock className="h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                <span><strong>Visiting hours:</strong> Mon – Sat, 9:00 AM – 4:00 PM (prior appointment preferred)</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <HiPhone className="h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                <a href="tel:+918152815281" className="hover:underline">+91 8152 8152 81</a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <HiLocationMarker className="h-5 w-5 shrink-0 text-[var(--color-accent)]" />
                <span>Vishwanathapuram, Shencottai – Contact office for exact address</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-[var(--color-primary)]"
            >
              Book Campus Tour
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
