import { motion } from 'framer-motion'
import {
  HiBookOpen,
  HiLightBulb,
  HiUserGroup,
  HiDesktopComputer,
  HiColorSwatch,
  HiChartBar,
} from 'react-icons/hi'

const approaches = [
  {
    icon: HiBookOpen,
    title: 'Concept-Based Learning',
    description:
      'We build understanding through concepts rather than rote learning, so students can apply knowledge across subjects and real-life situations.',
  },
  {
    icon: HiLightBulb,
    title: 'Critical Thinking Development',
    description:
      'Structured activities and discussions that develop analysis, reasoning, and problem-solving skills from an early age.',
  },
  {
    icon: HiUserGroup,
    title: 'Interactive Classroom Sessions',
    description:
      'Dialogue, group work, and hands-on activities keep every child engaged and participating in the learning process.',
  },
  {
    icon: HiDesktopComputer,
    title: 'Smart Class Technology',
    description:
      'Digital boards, multimedia content, and tech tools that make lessons vivid, accessible, and aligned with modern pedagogy.',
  },
  {
    icon: HiColorSwatch,
    title: 'Activity-Based Learning',
    description:
      'Projects, experiments, and creative tasks that reinforce concepts and develop practical and collaborative skills.',
  },
  {
    icon: HiChartBar,
    title: 'Continuous Assessment System',
    description:
      'Regular, varied assessments and feedback so progress is tracked and learning gaps are addressed in time.',
  },
]

export default function TeachingApproach() {
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
            Core Teaching Approach
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            A balanced blend of tradition and innovation for lasting learning.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {approaches.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-[#94DCF2]/40 bg-white p-6 shadow-sm transition hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2457A7]/10 text-[#2457A7]">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#2457A7]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
