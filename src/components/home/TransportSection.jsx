import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { viewportLite, transitionLite } from "../../utils/scrollMotion"

const transportData = [
  {
    title: "School Bus Transport",
    subtitle: "Safe daily bus transportation",
    description:
      "Our fleet of modern school buses covers multiple routes ensuring safe and comfortable travel for students.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200",
    features: [
      "GPS enabled buses for live tracking",
      "Experienced drivers and attendants", 
      "Wide coverage across city routes",
      "Daily safety inspection",
    ],
  },
  {
    title: "School Van Service",
    subtitle: "Convenient transport for nearby areas",
    description:
      "Comfortable school vans designed for shorter routes ensuring quick and safe transport for students.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1200",
    features: [
      "Compact safe vans",
      "Ideal for nearby students",
      "Regular maintenance checks",
      "Friendly trained drivers",
    ],
  },
  {
    title: "Mini Van Transport",
    subtitle: "Small group safe travel",
    description:
      "Mini vans are available for selected areas ensuring students travel safely with smaller groups.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200",
    features: [
      "Small group transportation",
      "Extra supervision",
      "Flexible routes",
      "Safe and comfortable travel",
    ],
  },
]

export default function TransportSection() {
  const [index, setIndex] = useState(0)
  const data = transportData[index]

  return (
    <section className="relative py-14 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white to-[#f4f8ff] overflow-hidden" aria-labelledby="transport-heading">

      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[color:color-mix(in_srgb,var(--color-accent)_20%,transparent)] blur-[120px] rounded-full" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[color:color-mix(in_srgb,var(--color-accent)_20%,transparent)] blur-[120px] rounded-full" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportLite}
          transition={transitionLite}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 id="transport-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
            Student Transport
          </h2>

          <div className="mx-auto mt-4 w-20 h-[4px] bg-[var(--color-gold)] rounded-full"></div>

          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base lg:text-lg">
            Safe and reliable transportation services ensuring students reach
            school comfortably every day.
          </p>
        </motion.div>


        {/* Transport Selector */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 flex-wrap">
          {transportData.map((item, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
              ${
                index === i
                  ? "bg-[var(--color-accent)] text-white shadow-lg"
                  : "bg-white text-gray-600 shadow hover:bg-[var(--color-primary)] hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>


        {/* Content Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportLite}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center"
        >
          {/* Image */}
          <motion.div variants={{ hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } }} transition={transitionLite}>
            <AnimatePresence mode="wait">
              <motion.div
                key={data.image}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={transitionLite}
                className="relative rounded-3xl overflow-hidden shadow-2xl group"
              >

              <img
                src={data.image}
                alt={data.title}
                className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gradient">{data.title}</h3>
                <p className="text-sm text-gray-200 mt-1">{data.subtitle}</p>
              </div>

              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Content */}
          <motion.div variants={{ hidden: { opacity: 0, x: 28 }, visible: { opacity: 1, x: 0 } }} transition={transitionLite}>
            <AnimatePresence mode="wait">
              <motion.div
                key={data.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={transitionLite}
                className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl"
              >

              <h3 className="text-2xl font-semibold text-gradient mb-4">
                {data.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                {data.description}
              </p>

              <ul className="space-y-4">
                {data.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 mt-2 bg-[var(--color-gold)] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>

              </motion.div>
            </AnimatePresence>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}