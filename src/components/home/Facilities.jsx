import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  HiOfficeBuilding,
  HiLightningBolt,
  HiWifi,
  HiShieldCheck,
  HiHeart,
  HiHome,
} from "react-icons/hi"

const facilities = [
  {
    icon: HiOfficeBuilding,
    title: "Modern Classrooms",
    description:
      "Spacious, well-ventilated smart classrooms designed for interactive learning.",
    points: [
      "Interactive smart boards",
      "Ergonomic seating",
      "Natural lighting",
    ],
    quote: "Learning begins in an inspiring environment.",
    smallImage:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=400",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200",
  },
  {
    icon: HiLightningBolt,
    title: "Science Laboratories",
    description:
      "Fully equipped Physics, Chemistry & Biology labs for practical excellence.",
    points: [
      "Advanced lab equipment",
      "Safety protocols",
      "Hands-on experiments",
    ],
    quote: "Discovery happens through experimentation.",
    smallImage:
      "https://images.unsplash.com/photo-1581092919535-7146ff1a5906?q=80&w=400",
    image:
      "https://images.unsplash.com/photo-1581092919535-7146ff1a5906?q=80&w=1200",
  },
  {
    icon: HiWifi,
    title: "Digital Campus",
    description:
      "High-speed internet enabled campus with smart learning infrastructure.",
    points: [
      "WiFi-enabled campus",
      "E-learning systems",
      "Smart digital tools",
    ],
    quote: "Technology empowers modern education.",
    smallImage:
      "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?q=80&w=400",
    image:
      "https://images.unsplash.com/photo-1584697964358-3e14ca57658b?q=80&w=1200",
  },
]

export default function Facilities() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % facilities.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const item = facilities[active]

  return (
    <section className="py-28 bg-gradient-to-b from-[#f8fbff] to-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.6 }}
          >
            {/* Small Image */}
            <img
              src={item.smallImage}
              alt={item.title}
              className="w-28 h-28 object-cover rounded-2xl shadow-lg mb-6"
            />

            {/* Icon */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#2457A7]/10">
                <item.icon className="text-[#2457A7] w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-[#2457A7]">
                {item.title}
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {item.description}
            </p>

            {/* Points */}
            <ul className="space-y-3 mb-6">
              {item.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="w-2 h-2 bg-[#1B93D1] rounded-full mt-2"></span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Quote */}
            <div className="italic text-[#1B93D1] border-l-4 border-[#1B93D1] pl-4">
              "{item.quote}"
            </div>
          </motion.div>
        </AnimatePresence>

        {/* RIGHT SIDE IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={item.image}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-[#2457A7]/30 to-transparent rounded-3xl"></div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}