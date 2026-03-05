import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

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
    <section className="relative py-24 bg-gradient-to-b from-white to-[#f4f8ff] overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#3CB5E5]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#2457A7]/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f3c88]">
            Student Transport
          </h2>

          <div className="mx-auto mt-4 w-20 h-[4px] bg-[#1B93D1] rounded-full"></div>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
            Safe and reliable transportation services ensuring students reach
            school comfortably every day.
          </p>
        </motion.div>


        {/* Transport Selector */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {transportData.map((item, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition
              ${
                index === i
                  ? "bg-[#2457A7] text-white shadow-lg"
                  : "bg-white text-gray-600 shadow hover:bg-[#2457A7] hover:text-white"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>


        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={data.image}
              initial={{ opacity:0, x:-60 }}
              animate={{ opacity:1, x:0 }}
              exit={{ opacity:0, x:-60 }}
              transition={{ duration:.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group"
            >

              <img
                src={data.image}
                alt={data.title}
                className="w-full h-[480px] object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-200 mt-1">{data.subtitle}</p>
              </div>

            </motion.div>
          </AnimatePresence>


          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={data.title}
              initial={{ opacity:0, x:60 }}
              animate={{ opacity:1, x:0 }}
              exit={{ opacity:0, x:60 }}
              transition={{ duration:.7 }}
              className="bg-white p-10 rounded-3xl shadow-xl"
            >

              <h3 className="text-2xl font-semibold text-[#2457A7] mb-4">
                {data.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                {data.description}
              </p>

              <ul className="space-y-4">
                {data.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 mt-2 bg-[#1B93D1] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  )
}