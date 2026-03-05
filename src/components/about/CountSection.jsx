import { motion } from 'framer-motion'

const stats = [
  { value: '25+', label: 'Years of Excellence' },
  { value: '5000+', label: 'Students' },
  { value: '150+', label: 'Staff & Faculty' },
  { value: '50+', label: 'Activities & Clubs' },
]

export default function CountSection() {
  return (
    <section className="relative overflow-hidden bg-[#2457A7] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-white sm:text-5xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-white/90 sm:text-base">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
