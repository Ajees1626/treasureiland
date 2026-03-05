import { motion } from "framer-motion"

const features = [
  {
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800",
    title: "Academic Excellence",
    description:
      "Structured curriculum designed to nurture leadership, discipline and intellectual growth.",
  },
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
    title: "Performance Analytics",
    description:
      "Continuous evaluation system with measurable student development tracking.",
  },
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800",
    title: "Smart Classrooms",
    description:
      "Digitally enabled classrooms integrating modern learning technologies.",
  },
  {
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800",
    title: "Personal Mentorship",
    description:
      "Dedicated faculty guidance ensuring holistic academic growth.",
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function Features() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-[#f5f9ff] overflow-hidden">

      {/* Background Blur Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#94DCF2]/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#3CB5E5]/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[#1B93D1] font-semibold uppercase tracking-widest text-sm">
            School Highlights
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#2457A7] mt-3">
            A Complete Learning Environment
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-20 bg-[#1B93D1] rounded-full"></div>

          <p className="mt-6 text-gray-600 text-lg">
            Our school combines academic excellence, technology and
            mentorship to create future leaders.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          whileHover={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16"
        >
          {features.map((itemData, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative overflow-hidden rounded-2xl shadow-xl"
            >

              {/* Image */}
              <img
                src={itemData.image}
                alt={itemData.title}
                className="w-full h-80 object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">

                <h3 className="text-xl font-semibold">
                  {itemData.title}
                </h3>

                <motion.p
                  initial={{ opacity:0, y:20 }}
                  whileHover={{ opacity:1, y:0 }}
                  className="text-sm mt-2 text-gray-200"
                >
                  {itemData.description}
                </motion.p>

                <div className="mt-4 h-[2px] w-10 bg-[#3CB5E5] transition-all duration-500 group-hover:w-20"></div>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}