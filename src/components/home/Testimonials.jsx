import { motion, AnimatePresence } from 'framer-motion'
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { useEffect, useState } from 'react'
import { viewportLite, transitionLite } from '../../utils/scrollMotion'

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
    x: direction > 0 ? 48 : -48,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -48 : 48,
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
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f4f8fc] py-12 sm:py-20 md:py-24 lg:py-28" aria-labelledby="testimonials-heading">
      {/* Soft accent - smaller on mobile */}
      <div className="absolute -right-16 sm:-right-20 top-1/2 w-48 h-48 sm:w-80 sm:h-80 bg-[color:color-mix(in_srgb,var(--color-accent)_20%,transparent)] blur-[80px] sm:blur-[100px] rounded-full -translate-y-1/2" aria-hidden="true" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportLite}
        transition={transitionLite}
        className="relative mx-auto max-w-4xl px-3 sm:px-6 lg:px-8"
      >
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm font-semibold tracking-wider text-[var(--color-gold)] uppercase"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            id="testimonials-heading"
            className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gradient"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="mx-auto mt-4 h-1 w-16 bg-[var(--color-gold)] rounded-full origin-center"
          />
        </div>

        {/* Card */}
        <div className="relative min-h-[260px] sm:min-h-[280px] md:min-h-[320px]">
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
              className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-[color:color-mix(in_srgb,var(--color-accent)_50%,transparent)] bg-white p-5 sm:p-6 md:p-8 lg:p-10 shadow-xl shadow-[color:color-mix(in_srgb,var(--color-accent)_18%,transparent)]"
            >
              {/* Quote mark */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl font-serif text-[color:color-mix(in_srgb,var(--color-accent)_40%,transparent)] leading-none"
              >
                “
              </motion.div>

              {/* Stars */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="flex gap-0.5 mt-1.5 sm:mt-2"
              >
                {[...Array(5)].map((_, j) => (
                  <motion.span
                    key={j}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + j * 0.05 }}
                  >
                    <HiStar className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--color-gold)] fill-[var(--color-gold)]" />
                  </motion.span>
                ))}
              </motion.div>

              {/* Quote text */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
              >
                &ldquo;{current.quote}&rdquo;
              </motion.p>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4"
              >
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-base sm:text-lg font-bold text-white shadow-lg">
                  {current.initial}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gradient text-sm sm:text-base truncate">{current.author}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{current.role}</p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white border border-[var(--color-accent)] text-[var(--color-accent)] shadow-md transition hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] touch-manipulation"
          >
            <HiChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 touch-manipulation ${
                  i === index
                    ? 'w-6 sm:w-8 bg-[var(--color-gold)]'
                    : 'w-2 sm:w-2.5 bg-[color:color-mix(in_srgb,var(--color-accent)_35%,transparent)] hover:bg-[var(--color-gold)]'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white border border-[var(--color-accent)] text-[var(--color-accent)] shadow-md transition hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)] touch-manipulation"
          >
            <HiChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </motion.div>
    </section>
  )
}
