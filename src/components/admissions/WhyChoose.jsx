import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiUserGroup,
  HiHome,
  HiDesktopComputer,
  HiOfficeBuilding,
  HiLightBulb,
  HiX,
} from 'react-icons/hi'
import { HiTrophy } from 'react-icons/hi2'
import whyChooseData from '../../data/whyChoose.json'

const iconMap = {
  HiTrophy,
  HiUserGroup,
  HiHome,
  HiDesktopComputer,
  HiOfficeBuilding,
  HiLightBulb,
}

export default function WhyChoose() {
  const [selected, setSelected] = useState(null)
  const highlights = whyChooseData.map((item) => ({
    ...item,
    Icon: iconMap[item.icon] || HiLightBulb,
  }))

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#2457A7] sm:text-4xl">
            Why Choose Our School?
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            A place where excellence meets care and every child is prepared for tomorrow.
            Click any card to view full details.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(item)}
              onKeyDown={(e) => e.key === 'Enter' && setSelected(item)}
              className="cursor-pointer overflow-hidden rounded-2xl border border-[#94DCF2]/40 bg-white shadow-md transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2457A7]"
            >
              <div className="relative h-40 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2457A7]/60 to-transparent" />
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#2457A7]">
                  <item.Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-[#2457A7]">{item.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail modal – big image + full details */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-gray-700 shadow-md transition hover:bg-white"
                aria-label="Close"
              >
                <HiX className="h-6 w-6" />
              </button>
              <div className="max-h-[90vh] overflow-y-auto">
                <div className="relative h-64 sm:h-80">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#2457A7]">
                      <selected.Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold sm:text-3xl">{selected.title}</h3>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-gray-600">{selected.description}</p>
                  {selected.details && (
                    <p className="mt-4 leading-relaxed text-gray-700">{selected.details}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
