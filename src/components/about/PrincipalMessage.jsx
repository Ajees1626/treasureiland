import { motion } from 'framer-motion'

export default function PrincipalMessage() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f4f8fc] to-white py-16 sm:py-20">
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-[#1B93D1]/10 blur-[100px]" />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-center text-3xl font-bold text-[#2457A7] sm:text-4xl">
          Meet the Principal
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800"
              alt="Principal"
              className="h-[450px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-lg italic leading-relaxed text-gray-700">
              &ldquo;Education is not just about academic excellence; it is
              about nurturing character, inspiring confidence, and preparing
              students to lead with integrity and compassion.&rdquo;
            </p>
            <p className="mt-6 leading-relaxed text-gray-600">
              At our institution, we believe every child possesses unique
              potential. Our mission is to cultivate that potential through
              disciplined learning, innovative teaching, and a supportive
              environment.
            </p>
            <div className="mt-8">
              <p className="font-semibold text-[#2457A7]">Dr. William Anderson</p>
              <p className="text-sm text-gray-500">
                Principal & Academic Director
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
