import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiCalendar, HiArrowLeft, HiNewspaper } from 'react-icons/hi'
import blogData from '../data/blogData.json'

export default function NewsDetail() {
  const { id } = useParams()
  const item = blogData.news.find((n) => n.id === id)

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <p className="text-gray-600">News not found.</p>
        <Link to="/blog" className="text-[var(--color-accent)] font-medium hover:underline inline-flex items-center gap-2">
          Back to News & Events
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white"
    >
      {/* Hero image */}
      <section className="relative h-64 sm:h-80 overflow-hidden bg-gray-100">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="max-w-4xl mx-auto flex items-center gap-2 text-white/90 text-sm">
            <HiNewspaper className="w-5 h-5 shrink-0" />
            <span>News</span>
            <span className="flex items-center gap-1.5">
              <HiCalendar className="w-4 h-4" />
              {item.date}
            </span>
          </div>
          <h1 className="max-w-4xl mx-auto mt-2 text-2xl sm:text-3xl font-bold text-gradient">
            {item.title}
          </h1>
        </div>
      </section>

      {/* Back link */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:underline"
        >
          <HiArrowLeft className="w-5 h-5" />
          Back to News & Events
        </Link>
      </div>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10 pb-16">
        <p className="text-lg text-gray-600 leading-relaxed">
          {item.description}
        </p>
        {item.details && (
          <p className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line">
            {item.details}
          </p>
        )}
      </section>
    </motion.div>
  )
}
