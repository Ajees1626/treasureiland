import { motion } from "framer-motion"

const faculty = [
  {
    name: "Dr. William Anderson",
    role: "Principal",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500",
  },
  {
    name: "Sarah Johnson",
    role: "Vice Principal",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500",
  },
  {
    name: "Michael Thomas",
    role: "Academic Coordinator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500",
  },
  {
    name: "Emily Davis",
    role: "Senior Faculty – Science",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500",
  },
]

export default function Faculty() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity:0, y:60 },
    show: { opacity:1, y:0, transition:{ duration:.7 } }
  }

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-[#f5f9ff] overflow-hidden">

      {/* Background Blur Shapes */}
      <div className="absolute -top-40 left-0 w-[400px] h-[400px] bg-[color:color-mix(in_srgb,var(--color-accent)_10%,transparent)] rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[color:color-mix(in_srgb,var(--color-accent)_10%,transparent)] rounded-full blur-[150px]"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once:true }}
        className="relative max-w-7xl mx-auto px-6"
      >

        {/* Heading */}
        <motion.div variants={item} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Our Leadership & Faculty
          </h2>

          <div className="mx-auto mt-4 w-24 h-[4px] bg-[var(--color-gold)] rounded-full"></div>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Our experienced educators and leaders guide students with passion,
            dedication and innovative teaching methodologies.
          </p>
        </motion.div>


        {/* Staff Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {faculty.map((person, i) => (

            <motion.div
              key={person.name}
              variants={item}
              className="group relative overflow-hidden rounded-3xl shadow-xl"
            >

              {/* Image */}
              <img
                src={person.image}
                alt={person.name}
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">

                <h3 className="text-xl font-semibold text-gradient">
                  {person.name}
                </h3>

                <p className="text-sm text-white/80">
                  {person.role}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </motion.div>
    </section>
  )
}