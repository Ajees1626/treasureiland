import { motion } from "framer-motion"
import { viewportLite, transitionLite } from "../../utils/scrollMotion"

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
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: transitionLite },
}

export default function Features() {
  return (
    <section className="relative py-14 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white to-[#f5f9ff] overflow-hidden" aria-labelledby="features-heading">

      {/* Background Blur Shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-[color:color-mix(in_srgb,var(--color-accent)_30%,transparent)] blur-[120px] rounded-full" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-[color:color-mix(in_srgb,var(--color-accent)_20%,transparent)] blur-[120px] rounded-full" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportLite}
          transition={transitionLite}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-[var(--color-gold)] font-semibold uppercase tracking-widest text-xs sm:text-sm">
            School Highlights
          </p>

          <h2 id="features-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mt-3">
            A Complete Learning Environment
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-20 bg-[var(--color-gold)] rounded-full"></div>

          <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base lg:text-lg">
            Our school combines academic excellence, technology and
            mentorship to create future leaders.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewportLite}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mt-10 sm:mt-14 md:mt-16"
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
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">

                <h3 className="text-lg sm:text-xl font-semibold text-gradient">
                  {itemData.title}
                </h3>

                <motion.p
                  initial={{ opacity:0, y:20 }}
                  whileHover={{ opacity:1, y:0 }}
                  className="text-sm mt-2 text-gray-200"
                >
                  {itemData.description}
                </motion.p>

                <div className="mt-4 h-[2px] w-10 bg-[var(--color-gold)] transition-all duration-500 group-hover:w-20"></div>

              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}