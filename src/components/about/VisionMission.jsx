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
    <section className="relative py-14 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-b from-white to-[#f2f7ff] overflow-hidden" aria-labelledby="vision-mission-heading">

      {/* background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-[color:color-mix(in_srgb,var(--color-accent)_10%,transparent)] blur-[120px] rounded-full" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-[color:color-mix(in_srgb,var(--color-accent)_10%,transparent)] blur-[120px] rounded-full" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 id="vision-mission-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
            Vision & Mission
          </h2>

          <div className="mx-auto mt-4 w-20 h-[4px] bg-[var(--color-gold)] rounded-full"></div>

          <p className="mt-4 sm:mt-6 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
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
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-[color:color-mix(in_srgb,var(--color-accent)_40%,transparent)]"></div>

            <div className="relative p-12">

              {/* floating icon */}
              <motion.div
                animate={{ y:[0,-8,0] }}
                transition={{ repeat:Infinity, duration:3 }}
                className="w-16 h-16 flex items-center justify-center rounded-xl bg-[var(--color-primary)] text-white shadow-lg"
              >
                <HiLightBulb className="w-8 h-8"/>
              </motion.div>

              <h3 className="mt-6 text-3xl font-bold text-gradient">
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
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/70 to-[color:color-mix(in_srgb,var(--color-accent)_40%,transparent)]"></div>

            <div className="relative p-12">

              <motion.div
                animate={{ y:[0,-8,0] }}
                transition={{ repeat:Infinity, duration:3 }}
                className="w-16 h-16 flex items-center justify-center rounded-xl bg-[var(--color-accent)] text-white shadow-lg"
              >
                <HiFlag className="w-8 h-8"/>
              </motion.div>

              <h3 className="mt-6 text-3xl font-bold text-gradient">
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