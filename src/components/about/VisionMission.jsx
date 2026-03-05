import { motion } from 'framer-motion'
import { HiLightBulb, HiFlag } from 'react-icons/hi'

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h60v60H0z\' fill=\'none\'/%3E%3Cpath d=\'M30 0v60M0 30h60\' stroke=\'%232457A7\' stroke-opacity=\'0.04\' stroke-width=\'0.5\' fill=\'none\'/%3E%3C/svg%3E')]" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-center text-3xl font-bold text-[#2457A7] sm:text-4xl">
          Mission & Vision
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-[#94DCF2]/40 bg-[#f8fbff] p-8 shadow-sm"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-[#2457A7] to-[#1B93D1] text-white">
              <HiLightBulb className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#2457A7]">
              Our Vision
            </h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              To be a leading institution that nurtures confident, creative,
              and responsible global citizens through excellence in education,
              innovation, and values.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-[#94DCF2]/40 bg-[#f8fbff] p-8 shadow-sm"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-[#2457A7] to-[#1B93D1] text-white">
              <HiFlag className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-[#2457A7]">
              Our Mission
            </h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              To provide a safe, inclusive, and stimulating learning environment
              where every student achieves their potential through quality
              teaching, modern infrastructure, and strong partnerships with
              parents and the community.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
