import { motion } from 'framer-motion'
import { HiDesktopComputer, HiChip, HiGlobeAlt, HiLightningBolt } from 'react-icons/hi'

const items = [
  {
    icon: HiDesktopComputer,
    title: 'Smart Boards',
    description: 'Interactive whiteboards and digital displays in classrooms for dynamic, visual lessons.',
  },
  {
    icon: HiChip,
    title: 'Digital Learning Tools',
    description: 'Tablets, apps, and educational software that support personalized and collaborative learning.',
  },
  {
    icon: HiGlobeAlt,
    title: 'Online Homework Portal',
    description: 'A secure portal for assignments, submissions, and progress tracking for students and parents.',
  },
  {
    icon: HiLightningBolt,
    title: 'AI-Assisted Learning',
    description: 'Where applicable, we use technology to support practice, revision, and adaptive learning.',
  },
]

export default function TechnologyIntegration() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#2457A7] to-[#1B93D1] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Technology Integration
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#94DCF2]" />
          <p className="mx-auto mt-6 max-w-2xl text-white/90">
            Modern tools that make learning effective, engaging, and future-ready.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/90">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
