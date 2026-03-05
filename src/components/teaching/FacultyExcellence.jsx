import { motion } from 'framer-motion'
import { HiAcademicCap, HiRefresh, HiHeart, HiTrendingUp } from 'react-icons/hi'

const faculty = [
  {
    name: 'Senior Faculty',
    role: 'Mathematics',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400',
  },
  {
    name: 'Senior Faculty',
    role: 'Science',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
  },
  {
    name: 'Senior Faculty',
    role: 'Languages',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400',
  },
]

const points = [
  { icon: HiAcademicCap, text: 'Qualified, experienced teachers with strong subject and pedagogical knowledge.' },
  { icon: HiRefresh, text: 'Regular training and workshops to stay updated with best practices.' },
  { icon: HiHeart, text: 'Understanding of child psychology and age-appropriate teaching methods.' },
  { icon: HiTrendingUp, text: 'Continuous professional development and peer learning.' },
]

export default function FacultyExcellence() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#2457A7] sm:text-4xl">
            Faculty Excellence
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Our teachers are the backbone of our methodology—qualified, trained, and committed to every child.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-3 rounded-xl border border-[#94DCF2]/40 bg-[#f8fbff] p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2457A7]/10 text-[#2457A7]">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-sm text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {faculty.map((person, i) => (
            <motion.div
              key={person.role}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-2 border-[#2457A7]/20 sm:h-28 sm:w-28">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 font-semibold text-[#2457A7]">{person.name}</p>
              <p className="text-sm text-gray-500">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
