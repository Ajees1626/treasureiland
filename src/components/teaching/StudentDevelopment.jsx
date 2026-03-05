import { motion } from 'framer-motion'
import { HiChat, HiAcademicCap, HiHeart, HiStar, HiColorSwatch } from 'react-icons/hi'

const traits = [
  { icon: HiChat, title: 'Communication Skills', desc: 'Confident expression and effective listening.' },
  { icon: HiAcademicCap, title: 'Leadership', desc: 'Taking initiative and guiding others with responsibility.' },
  { icon: HiHeart, title: 'Emotional Intelligence', desc: 'Self-awareness, empathy, and healthy relationships.' },
  { icon: HiStar, title: 'Moral Values', desc: 'Integrity, respect, and ethical decision-making.' },
  { icon: HiColorSwatch, title: 'Creativity', desc: 'Original thinking, arts, and problem-solving.' },
]

export default function StudentDevelopment() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f8fbff] to-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#2457A7] sm:text-4xl">
            Student Development Focus
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            We nurture the whole child—academics, character, and potential for life.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {traits.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-[#94DCF2]/40 bg-white p-6 shadow-sm transition hover:shadow-lg hover:border-[#2457A7]/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-[#2457A7] to-[#1B93D1] text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-[#2457A7]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-lg font-medium text-[#2457A7]"
        >
          Empowering students to become confident, caring, and capable leaders of tomorrow.
        </motion.p>
      </div>
    </section>
  )
}
