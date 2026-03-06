import { motion } from "framer-motion"
import { HiOutlineChatAlt2 } from "react-icons/hi"

export default function CorrespondentMessage() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-[#f7fbff] to-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[color:color-mix(in_srgb,var(--color-accent)_10%,transparent)] blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[color:color-mix(in_srgb,var(--color-accent)_10%,transparent)] blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Message from the Correspondent
          </h2>

          <div className="mx-auto mt-4 w-20 h-[4px] bg-[var(--color-gold)] rounded-full"></div>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
            Leadership and guidance that shape the vision and direction of our institution.
          </p>
        </motion.div>


        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity:0, x:-60 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
            className="relative group"
          >

            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] opacity-20 blur-xl"></div>

            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
              alt="Correspondent"
              className="relative w-full h-[460px] object-cover rounded-3xl shadow-xl transition duration-700 group-hover:scale-105"
            />

          </motion.div>


          {/* Message Side */}
          <motion.div
            initial={{ opacity:0, x:60 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
            className="relative"
          >

            {/* Quote Icon */}
            <motion.div
              animate={{ y:[0,-8,0] }}
              transition={{ repeat:Infinity, duration:3 }}
              className="w-16 h-16 flex items-center justify-center rounded-xl bg-[var(--color-primary)] text-white shadow-lg mb-6"
            >
              <HiOutlineChatAlt2 className="w-8 h-8"/>
            </motion.div>


            <blockquote className="text-2xl italic text-gradient font-medium leading-relaxed">
              “As Correspondent, I ensure that our institution stays true to
              its mission while adapting to the evolving needs of modern
              education and society.”
            </blockquote>

            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              We work closely with the management, principal, and faculty
              to maintain excellence in academics, discipline, and
              transparency. Our strong partnership with parents and the
              community plays a vital role in shaping the future of our
              students.
            </p>

            {/* Signature */}
            <div className="mt-10 border-t pt-6">

              <p className="text-xl font-semibold text-gradient">
                Correspondent Name
              </p>

              <p className="text-gray-500">
                Correspondent  
                <br />
                Treasure Iland International School
              </p>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}