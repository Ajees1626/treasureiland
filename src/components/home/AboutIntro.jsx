import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { viewportLite, transitionLite } from "../../utils/scrollMotion"

const images = [
  "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200",
]

export default function AboutIntro() {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4500)

    return () => clearInterval(timer)
  }, [])

  return (

    <section className="relative py-14 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white to-[#f6f9ff] overflow-hidden" aria-labelledby="about-intro-heading">

      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-[color:color-mix(in_srgb,var(--color-accent)_30%,transparent)] blur-[120px] rounded-full" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-[color:color-mix(in_srgb,var(--color-accent)_20%,transparent)] blur-[120px] rounded-full" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">

        {/* LEFT IMAGE SECTION */}

        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transitionLite}
          viewport={viewportLite}
          className="relative"
        >

          {/* Main Image */}
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity:0, scale:1.08 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:0.8 }}
            className="rounded-2xl sm:rounded-3xl shadow-2xl w-full h-[280px] sm:h-[360px] md:h-[400px] lg:h-[460px] object-cover"
          />

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ...transitionLite, delay: 0.2 }}
            viewport={viewportLite}
            className="absolute -bottom-8 left-6 bg-white shadow-xl rounded-xl p-6 w-56"
          >
              <p className="text-2xl sm:text-3xl font-bold text-gradient">15+</p>
            <p className="text-gray-600 text-sm">
              Years of Academic Excellence
            </p>
          </motion.div>

        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={transitionLite}
          viewport={viewportLite}
        >

          <p className="text-[var(--color-gold)] font-semibold uppercase tracking-widest text-sm">
            About Our School
          </p>

          <h2 id="about-intro-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mt-3 leading-tight">
            Treasure Island <br/>
            International School
          </h2>

          <div className="w-20 h-[4px] bg-[var(--color-gold)] mt-5 rounded-full"></div>

          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            Our school provides a nurturing environment where
            students grow academically, socially and emotionally.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With modern teaching methods and dedicated educators,
            we inspire curiosity, creativity and lifelong learning.
          </p>


          {/* STATS */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportLite}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
            }}
            className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-10"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={transitionLite}
              whileHover={{ y: -5 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold text-gradient">500+</p>
              <p className="text-sm text-gray-600 mt-1">
                Students
              </p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={transitionLite}
              whileHover={{ y: -5 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold text-gradient">40+</p>
              <p className="text-sm text-gray-600 mt-1">
                Teachers
              </p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={transitionLite}
              whileHover={{ y: -5 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold text-gradient">25+</p>
              <p className="text-sm text-gray-600 mt-1">
                Classrooms
              </p>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={transitionLite}
              whileHover={{ y: -5 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold text-gradient">100%</p>
              <p className="text-sm text-gray-600 mt-1">
                Success Rate
              </p>
            </motion.div>

          </motion.div>


          <Link
            to="/about"
            className="inline-block mt-10 px-8 py-3 bg-[var(--color-accent)] text-white rounded-full shadow-md hover:bg-[var(--color-primary)] transition"
          >
            Explore More
          </Link>

        </motion.div>

      </div>

    </section>

  )
}