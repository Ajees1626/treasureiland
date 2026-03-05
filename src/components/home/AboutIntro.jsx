import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

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

    <section className="relative py-24 bg-gradient-to-b from-white to-[#f6f9ff] overflow-hidden">

      {/* Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#94DCF2]/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#1B93D1]/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE SECTION */}

        <motion.div
          initial={{ opacity:0, x:-60 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
          className="relative"
        >

          {/* Main Image */}
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity:0, scale:1.08 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:0.8 }}
            className="rounded-3xl shadow-2xl w-full h-[460px] object-cover"
          />

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity:0, y:30 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ delay:.4 }}
            className="absolute -bottom-8 left-6 bg-white shadow-xl rounded-xl p-6 w-56"
          >
            <p className="text-3xl font-bold text-[#2457A7]">15+</p>
            <p className="text-gray-600 text-sm">
              Years of Academic Excellence
            </p>
          </motion.div>

        </motion.div>

        {/* RIGHT CONTENT */}

        <motion.div
          initial={{ opacity:0, x:60 }}
          whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.8 }}
          viewport={{ once:true }}
        >

          <p className="text-[#1B93D1] font-semibold uppercase tracking-widest text-sm">
            About Our School
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#2457A7] mt-3 leading-tight">
            Treasure Island <br/>
            International School
          </h2>

          <div className="w-20 h-[4px] bg-[#1B93D1] mt-5 rounded-full"></div>

          <p className="mt-6 text-gray-600 leading-relaxed text-lg">
            Our school provides a nurturing environment where
            students grow academically, socially and emotionally.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With modern teaching methods and dedicated educators,
            we inspire curiosity, creativity and lifelong learning.
          </p>


          {/* STATS */}

          <div className="grid grid-cols-2 gap-8 mt-10">

            <motion.div
              whileHover={{ y:-5 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-[#2457A7]">500+</p>
              <p className="text-sm text-gray-600 mt-1">
                Students
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y:-5 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-[#2457A7]">40+</p>
              <p className="text-sm text-gray-600 mt-1">
                Teachers
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y:-5 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-[#2457A7]">25+</p>
              <p className="text-sm text-gray-600 mt-1">
                Classrooms
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y:-5 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center"
            >
              <p className="text-3xl font-bold text-[#2457A7]">100%</p>
              <p className="text-sm text-gray-600 mt-1">
                Success Rate
              </p>
            </motion.div>

          </div>


          <Link
            to="/about"
            className="inline-block mt-10 px-8 py-3 bg-[#2457A7] text-white rounded-full shadow-md hover:bg-[#1B93D1] transition"
          >
            Explore More
          </Link>

        </motion.div>

      </div>

    </section>

  )
}