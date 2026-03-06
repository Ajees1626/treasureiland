import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { HiCalendar, HiNewspaper, HiPhotograph, HiArrowRight } from "react-icons/hi"
import BlogHero from "../components/blog/BlogHero"
import blogData from "../data/blogData.json"

const TAB_NEWS = "news"
const TAB_EVENTS = "events"

export default function Blog() {
  const [tab, setTab] = useState(TAB_NEWS)
  const { news, events } = blogData

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      aria-label="News and Events page"
    >
      <BlogHero />

      <section className="bg-gradient-to-b from-[#f3f8ff] to-white py-10 sm:py-14 md:py-16" aria-labelledby="blog-intro-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="blog-intro-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
            School News & Events
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Stay updated with the latest school news, achievements,
            celebrations and memorable events from our campus.
          </p>
          <div className="mx-auto mt-5 h-1 w-24 bg-[var(--color-gold)] rounded-full" />
        </div>
      </section>

      <section className="bg-white sticky top-0 z-30 border-b border-gray-200" role="tablist" aria-label="News and Events tabs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 md:py-6 flex justify-center">
          <div className="flex bg-[#f1f5ff] p-1.5 rounded-full shadow-inner">
            <button
              onClick={() => setTab(TAB_NEWS)}
              className={`inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm font-semibold transition ${
                tab === TAB_NEWS
                  ? "bg-[var(--color-accent)] text-white shadow-md"
                  : "text-gray-600 hover:text-[var(--color-accent)]"
              }`}
            >
              <HiNewspaper className="w-5 h-5" />
              Latest News
            </button>
            <button
              onClick={() => setTab(TAB_EVENTS)}
              className={`inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm font-semibold transition ${
                tab === TAB_EVENTS
                  ? "bg-[var(--color-accent)] text-white shadow-md"
                  : "text-gray-600 hover:text-[var(--color-accent)]"
              }`}
            >
              <HiPhotograph className="w-5 h-5" />
              School Events
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {tab === TAB_NEWS && (
          <motion.section
            key="news"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
          >
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/news/${item.id}`}
                  className="group block rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-[var(--color-accent)] text-white text-xs px-3 py-1.5 rounded-full">
                      <HiNewspaper className="w-3.5 h-3.5" />
                      News
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <p className="flex items-center gap-2 text-sm text-gray-500">
                      <HiCalendar className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      {item.date}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-gradient group-hover:opacity-90 transition line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold text-[var(--color-accent)]">
                      Read More
                      <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {tab === TAB_EVENTS && (
          <motion.section
            key="events"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
          >
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((item) => (
                <Link
                  key={item.id}
                  to={`/blog/events/${item.id}`}
                  className="group block rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:ring-offset-2"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                      <HiPhotograph className="w-5 h-5 shrink-0" />
                      <span className="text-xs uppercase tracking-wide opacity-90">School Event</span>
                    </div>
                    <div className="absolute bottom-4 right-4 text-white">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium">
                        View Gallery
                        <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </span>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 bg-white">
                    <p className="flex items-center gap-2 text-sm text-gray-500">
                      <HiCalendar className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      {item.date}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-gradient group-hover:opacity-90 transition line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
