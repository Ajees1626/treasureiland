import { motion } from 'framer-motion'

export default function CorrespondentMessage() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-[#2457A7]/5 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-center text-3xl font-bold text-[#2457A7] sm:text-4xl">
          Meet the Correspondent
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-lg italic leading-relaxed text-gray-700">
              &ldquo;As Correspondent, I ensure that our institution stays true to
              its mission while adapting to the changing needs of education and
              society.&rdquo;
            </p>
            <p className="mt-6 leading-relaxed text-gray-600">
              We work closely with the management, principal, and faculty to
              maintain high standards and transparency. Parent partnership and
              community trust are at the heart of everything we do.
            </p>
            <div className="mt-8">
              <p className="font-semibold text-[#2457A7]">Correspondent Name</p>
              <p className="text-sm text-gray-500">
                Correspondent, Treasure Island School
              </p>
            </div>
          </div>
          <div className="relative order-1 overflow-hidden rounded-2xl lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
              alt="Correspondent"
              className="h-[400px] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
