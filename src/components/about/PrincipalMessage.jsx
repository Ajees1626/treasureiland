import { motion } from "framer-motion"
import { FaQuoteLeft } from "react-icons/fa"

export default function PrincipalMessage() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  }

  const fadeUp = {
    hidden: { opacity:0, y:60 },
    show: { opacity:1, y:0, transition:{ duration:.8 } }
  }

  const slideLeft = {
    hidden: { opacity:0, x:-80 },
    show: { opacity:1, x:0, transition:{ duration:.9 } }
  }

  const slideRight = {
    hidden: { opacity:0, x:80 },
    show: { opacity:1, x:0, transition:{ duration:.9 } }
  }

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#f4f8fc] to-white overflow-hidden">

      {/* Background Shapes */}
      <div className="absolute -left-40 top-20 w-[400px] h-[400px] bg-[#1B93D1]/10 rounded-full blur-[140px]"></div>
      <div className="absolute -right-40 bottom-0 w-[420px] h-[420px] bg-[#2457A7]/10 rounded-full blur-[140px]"></div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once:true }}
        className="relative max-w-7xl mx-auto px-6"
      >

        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2457A7]">
            Message from the Principal
          </h2>

          <div className="mx-auto mt-4 w-24 h-[4px] bg-[#1B93D1] rounded-full"></div>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Leadership that inspires excellence, nurtures values and prepares
            students to become confident global citizens.
          </p>
        </motion.div>


        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Section */}
          <motion.div
            variants={slideLeft}
            className="relative group"
          >

            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#1B93D1]/30 rounded-3xl"></div>

            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=900"
              alt="Principal"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover transition duration-700 group-hover:scale-105"
            />

          </motion.div>


          {/* Content */}
          <motion.div variants={slideRight}>

            <div className="relative bg-white shadow-xl rounded-3xl p-10">

              <FaQuoteLeft className="text-[#1B93D1] text-4xl mb-6"/>

              <p className="text-lg text-gray-700 leading-relaxed italic">
                Education is not only about academic success — it is about
                nurturing character, inspiring creativity, and empowering
                students to lead the future with confidence and integrity.
              </p>

              <p className="mt-6 text-gray-600 leading-relaxed">
                At our institution, every child is encouraged to explore their
                unique talents through innovative learning experiences,
                dedicated teachers, and a supportive environment. We strive to
                build responsible individuals who contribute positively to
                society.
              </p>

              <div className="mt-10 border-t pt-6">
                <p className="text-xl font-semibold text-[#2457A7]">
                  Dr. William Anderson
                </p>
                <p className="text-gray-500">
                  Principal & Academic Director
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </motion.div>

    </section>
  )
}