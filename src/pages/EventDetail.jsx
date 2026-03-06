import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiCalendar, HiArrowLeft, HiPhotograph, HiPlay } from 'react-icons/hi'
import blogData from '../data/blogData.json'

export default function EventDetail() {
  const { id } = useParams()
  const item = blogData.events.find((e) => e.id === id)

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
        <p className="text-gray-600">Event not found.</p>
        <Link to="/blog" className="text-[var(--color-accent)] font-medium hover:underline">
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
      {/* Hero */}
      <section className="relative h-72 sm:h-96 overflow-hidden bg-gray-100">
        <img
          src={item.thumbnail || item.images?.[0]}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="max-w-4xl mx-auto flex items-center gap-2 text-white/90 text-sm">
            <HiPhotograph className="w-5 h-5 shrink-0" />
            <span>Event</span>
            <span className="flex items-center gap-1.5">
              <HiCalendar className="w-4 h-4" />
              {item.date}
            </span>
          </div>
          <h1 className="max-w-4xl mx-auto mt-2 text-2xl sm:text-4xl font-bold text-gradient">
            {item.title}
          </h1>
        </div>
      </section>

      {/* Back link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium hover:underline"
        >
          <HiArrowLeft className="w-5 h-5" />
          Back to News & Events
        </Link>
      </div>

      {/* Details text */}
      {item.details && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <p className="text-gray-700 leading-relaxed">{item.details}</p>
        </section>
      )}

      {/* Images gallery */}
      {item.images && item.images.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          <h2 className="flex items-center gap-2 text-xl font-bold text-gradient mb-6">
            <HiPhotograph className="w-6 h-6" />
            Photo Gallery
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {item.images.map((src, i) => (
              <motion.img
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                src={src}
                alt={`${item.title} ${i + 1}`}
                className="w-full rounded-xl shadow-md object-cover aspect-video"
              />
            ))}
          </div>
        </section>
      )}

      {/* Videos */}
      {item.videos && item.videos.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 pb-16">
          <h2 className="flex items-center gap-2 text-xl font-bold text-gradient mb-6">
            <HiPlay className="w-6 h-6" />
            Videos
          </h2>
          <div className="space-y-6">
            {item.videos.map((url, i) => (
              <div
                key={i}
                className="aspect-video w-full rounded-xl overflow-hidden bg-black"
              >
                <iframe
                  title={`${item.title} video ${i + 1}`}
                  src={url}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {(!item.details && (!item.images || item.images.length === 0) && (!item.videos || item.videos.length === 0)) && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 pb-16">
          <p className="text-gray-600">No additional content for this event.</p>
        </section>
      )}
    </motion.div>
  )
}
