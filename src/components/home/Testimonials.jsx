import { motion, AnimatePresence } from 'framer-motion'
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    quote: 'Treasure Iland International School has been a great choice. Professional and nurturing environment.',
    author: 'Client A',
    role: 'Marketing Head',
    initial: 'A',
  },
  {
    quote: 'Great team, clear communication, and campaigns that actually convert.',
    author: 'Client B',
    role: 'Founder',
    initial: 'B',
  },
  {
    quote: 'Their digital strategy transformed our brand visibility.',
    author: 'Client C',
    role: 'CEO',
    initial: 'C',
  },
  {
    quote: 'Highly reliable team with strong technical expertise.',
    author: 'Client D',
    role: 'Operations Director',
    initial: 'D',
  },
  {
    quote: 'Creative campaigns that delivered measurable ROI.',
    author: 'Client E',
    role: 'Brand Manager',
    initial: 'E',
  },
  {
    quote: 'Outstanding support and long-term partnership mindset.',
    author: 'Client F',
    role: 'Entrepreneur',
    initial: 'F',
  },
]

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 80 : -80,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -80 : 80,
  }),
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goTo = (newIndex) => {
    setDirection(newIndex > index ? 1 : -1)
    setIndex(newIndex)
  }

  const goPrev = () => {
    setDirection(-1)
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goNext = () => {
    setDirection(1)
    setIndex((prev) => (prev + 1) % testimonials.length)
  }

  const current = testimonials[index]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f4f8fc] py-24">
      {/* Soft accent */}
      <div className="absolute -right-20 top-1/2 w-80 h-80 bg-[#94DCF2]/20 blur-[100px] rounded-full -translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm font-semibold tracking-wider text-[#1B93D1] uppercase"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-4xl font-bold text-[#2457A7] lg:text-5xl"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="mx-auto mt-4 h-1 w-16 bg-[#3CB5E5] rounded-full origin-center"
          />
        </div>

        {/* Card */}
        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                opacity: { duration: 0.35 },
                x: { type: 'spring', stiffness: 300, damping: 30 },
              }}
              className="absolute inset-0 rounded-3xl border border-[#94DCF2]/50 bg-white p-8 shadow-xl shadow-[#2457A7]/10 md:p-10"
            >
              {/* Quote mark */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl font-serif text-[#3CB5E5]/40 leading-none"
              >
                “
              </motion.div>

              {/* Stars */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="flex gap-0.5 mt-2"
              >
                {[...Array(5)].map((_, j) => (
                  <motion.span
                    key={j}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + j * 0.05 }}
                  >
                    <HiStar className="h-6 w-6 text-[#3CB5E5] fill-[#3CB5E5]" />
                  </motion.span>
                ))}
              </motion.div>

              {/* Quote text */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                &ldquo;{current.quote}&rdquo;
              </motion.p>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-8 flex items-center gap-4"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#2457A7] to-[#1B93D1] text-lg font-bold text-white shadow-lg">
                  {current.initial}
                </div>
                <div>
                  <p className="font-semibold text-[#2457A7]">{current.author}</p>
                  <p className="text-sm text-gray-500">{current.role}</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#94DCF2] text-[#2457A7] shadow-md transition hover:bg-[#2457A7] hover:text-white hover:border-[#2457A7]"
          >
            <HiChevronLeft className="h-6 w-6" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-8 bg-[#2457A7]'
                    : 'w-2.5 bg-[#94DCF2] hover:bg-[#3CB5E5]'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-[#94DCF2] text-[#2457A7] shadow-md transition hover:bg-[#2457A7] hover:text-white hover:border-[#2457A7]"
          >
            <HiChevronRight className="h-6 w-6" />
          </button>
        </div>
      </motion.div>
    </section>
  )
}
