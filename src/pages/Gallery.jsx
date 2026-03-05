import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800',
    alt: 'Annual Day Celebration',
    category: 'Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800',
    alt: 'School Assembly',
    category: 'Campus',
  },
  {
    src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800',
    alt: 'Classroom Activity',
    category: 'Learning',
  },
  {
    src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800',
    alt: 'Sports Day',
    category: 'Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800',
    alt: 'Students in Lab',
    category: 'Campus',
  },
  {
    src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800',
    alt: 'Cultural Program',
    category: 'Events',
  },
  {
    src: 'https://images.unsplash.com/photo-1580582932707-19a4b50308ab?q=80&w=800',
    alt: 'School Building',
    category: 'Campus',
  },
  {
    src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800',
    alt: 'Group Study',
    category: 'Learning',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800',
    alt: 'Achievement Ceremony',
    category: 'Events',
  },
]

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const categories = ['All', 'Events', 'Campus', 'Learning']
  const filtered =
    filter === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero */}
      <section className="relative min-h-[320px] overflow-hidden sm:min-h-[380px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1580582932707-19a4b50308ab?q=80&w=1920)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(36,87,167,0.8) 0%, rgba(0,0,0,0.45) 100%)',
          }}
        />
        <div className="relative z-10 flex min-h-[320px] flex-col justify-center px-4 py-12 sm:min-h-[380px] sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl"
            >
              Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-white/95"
            >
              Glimpses of life at Treasure Island — events, campus and learning in action.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-wrap justify-center gap-2 border-b border-[#94DCF2]/40 pb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                filter === cat
                  ? 'bg-[#2457A7] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-[#94DCF2]/30 hover:text-[#2457A7]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((img, i) => (
            <motion.div
              key={img.src + i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-[#94DCF2]/40 bg-white shadow-md transition hover:shadow-xl"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(galleryImages.indexOf(img))}
                className="block w-full text-left"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#2457A7]/0 transition group-hover:bg-[#2457A7]/20" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-[#2457A7] px-3 py-1 text-xs font-semibold text-white">
                    {img.category}
                  </span>
                </div>
                <p className="p-4 font-medium text-[#2457A7]">{img.alt}</p>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute right-4 top-4 rounded-full bg-white/20 p-2 text-white hover:bg-white/30"
              aria-label="Close"
            >
              ✕
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              src={galleryImages[lightboxIndex]?.src}
              alt={galleryImages[lightboxIndex]?.alt}
              className="max-h-[90vh] max-w-full rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
