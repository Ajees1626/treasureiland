import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiCalendar, HiPhotograph } from 'react-icons/hi'
import BlogHero from '../components/blog/BlogHero'
import blogData from '../data/blogData.json'

const TAB_NEWS = 'news'
const TAB_EVENTS = 'events'

export default function Blog() {
  const [tab, setTab] = useState(TAB_NEWS)
  const [newsPopup, setNewsPopup] = useState(null)
  const [eventModal, setEventModal] = useState(null)

  const { news, events } = blogData

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <BlogHero />

      {/* News / Events buttons */}
      <section className="border-b border-[#94DCF2]/40 bg-white">
        <div className="mx-auto flex max-w-7xl justify-center gap-2 px-4 py-6 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => setTab(TAB_NEWS)}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
              tab === TAB_NEWS
                ? 'bg-[#2457A7] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-[#94DCF2]/30 hover:text-[#2457A7]'
            }`}
          >
            News
          </button>
          <button
            type="button"
            onClick={() => setTab(TAB_EVENTS)}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
              tab === TAB_EVENTS
                ? 'bg-[#2457A7] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-[#94DCF2]/30 hover:text-[#2457A7]'
            }`}
          >
            Events
          </button>
        </div>
      </section>

      {/* News section – many posts, click = popup */}
      <AnimatePresence mode="wait">
        {tab === TAB_NEWS && (
          <motion.section
            key="news"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((item) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="button"
                  tabIndex={0}
                  onClick={() => setNewsPopup(item)}
                  onKeyDown={(e) => e.key === 'Enter' && setNewsPopup(item)}
                  className="cursor-pointer overflow-hidden rounded-2xl border border-[#94DCF2]/40 bg-white shadow-md transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#2457A7]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <p className="flex items-center gap-1.5 text-sm text-gray-500">
                      <HiCalendar className="h-4 w-4 text-[#2457A7]" />
                      {item.date}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-[#2457A7] line-clamp-2">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        )}

        {/* Events section – thumbnails, click = big modal (images, videos, details) */}
        {tab === TAB_EVENTS && (
          <motion.section
            key="events"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((item) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="button"
                  tabIndex={0}
                  onClick={() => setEventModal(item)}
                  onKeyDown={(e) => e.key === 'Enter' && setEventModal(item)}
                  className="cursor-pointer overflow-hidden rounded-2xl border border-[#94DCF2]/40 bg-white shadow-md transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#2457A7]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                      <HiPhotograph className="h-5 w-5" />
                      <span className="text-sm font-medium">Event</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="flex items-center gap-1.5 text-sm text-gray-500">
                      <HiCalendar className="h-4 w-4 text-[#2457A7]" />
                      {item.date}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-[#2457A7] line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* News popup – image + details (optional) */}
      <AnimatePresence>
        {newsPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setNewsPopup(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setNewsPopup(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 shadow-md hover:bg-white"
                aria-label="Close"
              >
                <HiX className="h-6 w-6 text-gray-700" />
              </button>
              <div className="max-h-[90vh] overflow-y-auto">
                <img
                  src={newsPopup.image}
                  alt={newsPopup.title}
                  className="h-64 w-full object-cover sm:h-80"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500">{newsPopup.date}</p>
                  <h3 className="mt-2 text-2xl font-bold text-[#2457A7]">
                    {newsPopup.title}
                  </h3>
                  {newsPopup.description && (
                    <p className="mt-3 text-gray-600">{newsPopup.description}</p>
                  )}
                  {newsPopup.details && (
                    <p className="mt-4 leading-relaxed text-gray-700">
                      {newsPopup.details}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Event modal – big size: images gallery, videos, details */}
      <AnimatePresence>
        {eventModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setEventModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[95vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setEventModal(null)}
                className="absolute right-3 top-3 z-20 rounded-full bg-white/90 p-2 shadow-md hover:bg-white"
                aria-label="Close"
              >
                <HiX className="h-6 w-6 text-gray-700" />
              </button>
              <div className="max-h-[95vh] overflow-y-auto">
                <div className="p-6 pb-2">
                  <p className="text-sm text-gray-500">{eventModal.date}</p>
                  <h3 className="mt-1 text-2xl font-bold text-[#2457A7] sm:text-3xl">
                    {eventModal.title}
                  </h3>
                </div>
                {/* Images – big size */}
                {eventModal.images && eventModal.images.length > 0 && (
                  <div className="space-y-4 px-6 py-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      Photos
                    </h4>
                    <div className="space-y-6">
                      {eventModal.images.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`${eventModal.title} ${i + 1}`}
                          className="w-full rounded-xl object-cover shadow-md"
                        />
                      ))}
                    </div>
                  </div>
                )}
                {/* Videos */}
                {eventModal.videos && eventModal.videos.length > 0 && (
                  <div className="space-y-4 px-6 py-4">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      Videos
                    </h4>
                    <div className="space-y-4">
                      {eventModal.videos.map((url, i) => (
                        <div
                          key={i}
                          className="aspect-video w-full overflow-hidden rounded-xl bg-black"
                        >
                          <iframe
                            title={`${eventModal.title} video ${i + 1}`}
                            src={url}
                            className="h-full w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {/* Details */}
                {eventModal.details && (
                  <div className="border-t border-gray-200 px-6 py-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                      Details
                    </h4>
                    <p className="mt-3 leading-relaxed text-gray-700">
                      {eventModal.details}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
