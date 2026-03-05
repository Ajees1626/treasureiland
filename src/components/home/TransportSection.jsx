import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const transportData = [
  {
    title: "School Bus Transport",
    subtitle: "Safe daily bus transportation",
    description:
      "Our fleet of modern school buses covers multiple routes ensuring safe and comfortable travel for students.",
    image: "/images/transport/bus.jpg",
    features: [
      "GPS enabled buses for live tracking",
      "Experienced drivers and attendants",
      "Wide coverage across city routes",
      "Daily safety inspection"
    ]
  },
  {
    title: "School Van Service",
    subtitle: "Convenient transport for nearby areas",
    description:
      "Comfortable school vans designed for shorter routes ensuring quick and safe transport for students.",
    image: "/images/transport/van.jpg",
    features: [
      "Compact safe vans",
      "Ideal for nearby students",
      "Regular maintenance checks",
      "Friendly trained drivers"
    ]
  },
  {
    title: "Mini Van Transport",
    subtitle: "Small group safe travel",
    description:
      "Mini vans are available for selected areas ensuring students travel safely with smaller groups.",
    image: "/images/transport/minivan.jpg",
    features: [
      "Small group transportation",
      "Extra supervision",
      "Flexible routes",
      "Safe and comfortable travel"
    ]
  }
]

export default function TransportSection() {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % transportData.length)
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  const data = transportData[index]

  return (
    <section className="py-20 bg-[#f5f9ff] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <AnimatePresence mode="wait">

          <motion.div
            key={data.image}
            initial={{ opacity:0, x:-40 }}
            animate={{ opacity:1, x:0 }}
            exit={{ opacity:0, x:-40 }}
            transition={{ duration:0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-xl group"
          >

            <img
              src={data.image}
              alt={data.title}
              className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-semibold">
                {data.title}
              </h3>
              <p className="text-sm text-gray-200 mt-1">
                {data.subtitle}
              </p>
            </div>

          </motion.div>

        </AnimatePresence>


        {/* Right Content */}
        <AnimatePresence mode="wait">

          <motion.div
            key={data.title}
            initial={{ opacity:0, x:40 }}
            animate={{ opacity:1, x:0 }}
            exit={{ opacity:0, x:40 }}
            transition={{ duration:0.8 }}
          >

            <h2 className="text-3xl font-bold text-[#2457A7]">
              {data.title}
            </h2>

            <div className="w-14 h-[3px] bg-[#1B93D1] mt-3 mb-6 rounded-full"></div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {data.description}
            </p>

            <ul className="space-y-4 text-gray-700 text-sm">
              {data.features.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-[#2457A7] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>

          </motion.div>

        </AnimatePresence>

      </div>

    </section>
  )
}