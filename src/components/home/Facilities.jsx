import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { viewportLite, transitionLite } from "../../utils/scrollMotion"
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
    <section className="py-14 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-[#f8fbff] to-white" aria-labelledby="facilities-heading">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportLite}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
        }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center"
      >
        {/* LEFT SIDE */}
        <motion.div variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } }} transition={transitionLite}>
          <AnimatePresence mode="wait">
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={transitionLite}
            >
            {/* Small Image */}
            <img
              src={item.smallImage}
              alt={item.title}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover rounded-xl sm:rounded-2xl shadow-lg mb-4 sm:mb-6"
            />

            {/* Icon */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[color:color-mix(in_srgb,var(--color-accent)_12%,white)]">
                <item.icon className="text-[var(--color-accent)] w-7 h-7" />
              </div>
              <h2 id="facilities-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient">
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
                  <span className="w-2 h-2 bg-[var(--color-gold)] rounded-full mt-2"></span>
                  {point}
                </li>
              ))}
            </ul>

            {/* Quote */}
            <div className="italic text-[var(--color-primary)] border-l-4 border-[var(--color-gold)] pl-4">
              "{item.quote}"
            </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div variants={{ hidden: { opacity: 0, x: 24 }, visible: { opacity: 1, x: 0 } }} transition={transitionLite} className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.image}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={transitionLite}
              className="relative"
            >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] object-cover rounded-2xl sm:rounded-3xl shadow-2xl"
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-[color:color-mix(in_srgb,var(--color-accent)_30%,transparent)] to-transparent rounded-3xl"></div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </motion.div>
    </section>
  )
}