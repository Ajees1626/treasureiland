import { motion } from 'framer-motion'
import {
  HiLocationMarker,
  HiChip,
  HiBeaker,
  HiUserGroup,
  HiAcademicCap,
} from 'react-icons/hi'
import { HiTrophy } from 'react-icons/hi2'

const items = [
  { icon: HiLocationMarker, title: 'Field Trips', desc: 'Educational visits to museums, nature, and workplaces.' },
  { icon: HiChip, title: 'Workshops', desc: 'Hands-on sessions in science, arts, and life skills.' },
  { icon: HiTrophy, title: 'Competitions', desc: 'Academic, sports, and cultural events at various levels.' },
  { icon: HiBeaker, title: 'Labs & Practical Sessions', desc: 'Regular lab work and experiments for applied learning.' },
  { icon: HiUserGroup, title: 'Group Projects', desc: 'Collaborative tasks that build teamwork and communication.' },
  { icon: HiAcademicCap, title: 'Leadership Programs', desc: 'Student councils, clubs, and leadership initiatives.' },
]

export default function LearningBeyond() {
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
            Learning Beyond the Classroom
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Experiences that build confidence, curiosity, and character.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-start gap-4 rounded-2xl border border-[#94DCF2]/40 bg-white p-5 shadow-sm transition hover:border-[#2457A7]/30 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-[#2457A7] to-[#1B93D1] text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2457A7]">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
