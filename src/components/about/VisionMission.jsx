import { motion } from "framer-motion"
import { HiLightBulb, HiFlag } from "react-icons/hi"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export default function VisionMission() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-[#f2f7ff] overflow-hidden">

      {/* background shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1B93D1]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2457A7]/10 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f3c88]">
            Vision & Mission
          </h2>

          <div className="mx-auto mt-4 w-20 h-[4px] bg-[#1B93D1] rounded-full"></div>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Our guiding philosophy shapes how we educate, inspire and empower
            every student to reach their fullest potential.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true }}
          className="grid lg:grid-cols-2 gap-14"
        >

          {/* Vision */}
          <motion.div
            variants={item}
            className="group relative overflow-hidden rounded-3xl shadow-xl"
          >

            {/* image */}
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200"
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-[#1B93D1]/40"></div>

            <div className="relative p-12">

              {/* floating icon */}
              <motion.div
                animate={{ y:[0,-8,0] }}
                transition={{ repeat:Infinity, duration:3 }}
                className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#2457A7] text-white shadow-lg"
              >
                <HiLightBulb className="w-8 h-8"/>
              </motion.div>

              <h3 className="mt-6 text-3xl font-bold text-[#2457A7]">
                Our Vision
              </h3>

              <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                To be a leading institution that nurtures confident,
                creative and responsible global citizens through
                excellence in education, innovation and strong values.
              </p>

            </div>

          </motion.div>


          {/* Mission */}
          <motion.div
            variants={item}
            className="group relative overflow-hidden rounded-3xl shadow-xl"
          >

            {/* image */}
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200"
              className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-[#2457A7]/40"></div>

            <div className="relative p-12">

              <motion.div
                animate={{ y:[0,-8,0] }}
                transition={{ repeat:Infinity, duration:3 }}
                className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#1B93D1] text-white shadow-lg"
              >
                <HiFlag className="w-8 h-8"/>
              </motion.div>

              <h3 className="mt-6 text-3xl font-bold text-[#2457A7]">
                Our Mission
              </h3>

              <p className="mt-4 text-gray-700 leading-relaxed text-lg">
                To provide a safe, inclusive and stimulating learning
                environment where students grow academically, socially
                and morally through quality teaching, modern facilities
                and strong partnerships with parents.
              </p>

            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}