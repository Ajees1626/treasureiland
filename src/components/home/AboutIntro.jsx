import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const images = [
  'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200',
]

const AUTO_CHANGE_MS = 4000

export default function AboutIntro() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, AUTO_CHANGE_MS)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index) => {
    setCurrentIndex((index + images.length) % images.length)
  }

  const goPrev = () => goTo(currentIndex - 1)
  const goNext = () => goTo(currentIndex + 1)

  return (
    <section className="relative bg-gradient-to-b from-white to-[#f4f8fc] py-20 overflow-hidden">

      {/* Soft background bubble */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#94DCF2]/30 blur-[100px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#2457A7]">
              About Treasure Island School
            </h2>

            <div className="mt-4 h-1 w-20 bg-[#1B93D1] rounded-full"></div>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              A joyful and inspiring place where young minds grow with
              curiosity, creativity, and confidence.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We provide a nurturing environment that blends academic
              excellence with character building and playful learning.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-block rounded-full bg-[#2457A7] px-6 py-3 text-white font-medium shadow-md transition hover:bg-[#1B93D1] hover:shadow-lg"
            >
              Discover More
            </Link>
          </div>

          {/* Right: Image carousel (auto + manual) */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 aspect-[4/3] w-full max-w-lg mx-auto bg-gray-100">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img
                    src={images[currentIndex]}
                    alt={`School activity ${currentIndex + 1}`}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Manual: Prev / Next */}
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:translate-x-0 w-10 h-10 rounded-full bg-[#2457A7] text-white shadow-lg hover:bg-[#1B93D1] transition z-10"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-0 w-10 h-10 rounded-full bg-[#2457A7] text-white shadow-lg hover:bg-[#1B93D1] transition z-10"
            >
              →
            </button>

            {/* Manual: Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to image ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-[#2457A7]'
                      : 'w-2 bg-[#94DCF2] hover:bg-[#3CB5E5]'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 rounded-3xl bg-[#94DCF2]/30 border border-[#3CB5E5]/40 p-10 text-center shadow-lg"
        >
          <p className="text-xl font-semibold text-[#2457A7] italic">
            “Every child is a different kind of flower,
            and together they make this world a beautiful garden.”
          </p>
        </motion.div>

      </motion.div>
    </section>
  )
}