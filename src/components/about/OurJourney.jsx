import { motion } from 'framer-motion'
import { HiAcademicCap } from 'react-icons/hi'

const milestones = [
  { year: 'Founded', text: 'Our school began with a vision to provide quality education in a caring environment.' },
  { year: 'Growth', text: 'We expanded our campus and programs to serve more families and students.' },
  { year: 'Today', text: 'We continue to innovate with modern teaching and holistic development for every child.' },
]

export default function OurJourney() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] to-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#2457A7] sm:text-4xl">
            Our Journey
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            From our beginnings to where we are today — a story of commitment to education and community.
          </p>
        </motion.div>
        <div className="mt-14 space-y-8">
          {milestones.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#2457A7] text-white">
                <HiAcademicCap className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-[#2457A7]">{item.year}</h3>
                <p className="mt-2 text-gray-600">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
