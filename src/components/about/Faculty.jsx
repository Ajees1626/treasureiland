import { motion } from 'framer-motion'

const faculty = [
  {
    name: 'Senior Faculty A',
    role: 'Mathematics',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400',
  },
  {
    name: 'Senior Faculty B',
    role: 'Science',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
  },
  {
    name: 'Senior Faculty C',
    role: 'Languages',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400',
  },
  {
    name: 'Senior Faculty D',
    role: 'Social Studies',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
  },
]

export default function Faculty() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-center text-3xl font-bold text-[#2457A7] sm:text-4xl">
          Our Staff
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600">
          Our teachers are qualified, experienced, and dedicated to student
          success. We invest in continuous training and professional development.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-4 font-semibold text-[#2457A7]">{person.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
