import { motion } from 'framer-motion'

const features = [
  {
    image:
      'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800',
    title: 'Academic Excellence',
    description:
      'Structured curriculum designed to nurture leadership, discipline, and intellectual growth.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800',
    title: 'Performance Analytics',
    description:
      'Continuous evaluation system with measurable student development tracking.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800',
    title: 'Smart Classrooms',
    description:
      'Digitally enabled classrooms integrating modern learning technologies.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800',
    title: 'Personal Mentorship',
    description:
      'Dedicated faculty guidance ensuring holistic academic and character growth.',
  },
]

export default function Features() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#f4f8fc] py-20">

      {/* Background Soft Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3CB5E5]/10 blur-[120px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl px-6 lg:px-8"
      >
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2457A7] tracking-tight">
            Highlights
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[#1B93D1] rounded-full"></div>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            A refined educational ecosystem that blends tradition, innovation,
            and excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#2457A7]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Accent Line */}
                <div className="mt-5 h-[2px] w-10 bg-[#3CB5E5] transition-all duration-500 group-hover:w-20"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}