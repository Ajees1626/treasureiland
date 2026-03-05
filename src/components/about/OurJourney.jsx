import { motion } from "framer-motion"
import { HiAcademicCap } from "react-icons/hi"

const milestones = [
  {
    year: "2012",
    title: "School Founded",
    text: "Our institution was established with a vision to provide value-based education and nurture future leaders.",
  },
  {
    year: "2016",
    title: "Campus Expansion",
    text: "New academic blocks, laboratories and activity centers were introduced to support holistic learning.",
  },
  {
    year: "2020",
    title: "Digital Learning",
    text: "Smart classrooms and modern teaching technologies were implemented for advanced learning experiences.",
  },
  {
    year: "Today",
    title: "Excellence in Education",
    text: "Today our school stands as a hub for academic excellence, innovation and character development.",
  },
]

export default function OurJourney() {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25
      }
    }
  }

  const item = {
    hidden: { opacity:0, y:60 },
    show: { opacity:1, y:0, transition:{ duration:.7 } }
  }

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-[#f5f9ff] overflow-hidden">

      {/* Background Blurs */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#1B93D1]/10 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#2457A7]/10 rounded-full blur-[140px]"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2457A7]">
            Our Journey
          </h2>

          <div className="mx-auto mt-4 w-24 h-[4px] bg-[#1B93D1] rounded-full"></div>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Our journey reflects years of dedication to nurturing young minds,
            inspiring innovation and building a strong educational community.
          </p>
        </motion.div>


        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true }}
          className="relative"
        >

          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-[#1B93D1]/30"></div>

          <div className="space-y-20">

            {milestones.map((itemData, index) => {

              const isLeft = index % 2 === 0

              return (

                <motion.div
                  key={index}
                  variants={item}
                  className="relative grid grid-cols-1 md:grid-cols-2 items-center"
                >

                  {/* LEFT CARD */}
                  {isLeft && (
                    <div className="md:pr-16">
                      <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#1B93D1]/10">
                        <span className="text-sm font-semibold text-[#1B93D1]">
                          {itemData.year}
                        </span>

                        <h3 className="text-2xl font-bold text-[#2457A7] mt-2">
                          {itemData.title}
                        </h3>

                        <p className="text-gray-600 mt-4 leading-relaxed">
                          {itemData.text}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ICON */}
                  <div className="hidden md:flex justify-center">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#2457A7] text-white shadow-lg">
                      <HiAcademicCap size={26}/>
                    </div>
                  </div>

                  {/* RIGHT CARD */}
                  {!isLeft && (
                    <div className="md:pl-16">
                      <div className="bg-white rounded-3xl shadow-xl p-8 border border-[#1B93D1]/10">
                        <span className="text-sm font-semibold text-[#1B93D1]">
                          {itemData.year}
                        </span>

                        <h3 className="text-2xl font-bold text-[#2457A7] mt-2">
                          {itemData.title}
                        </h3>

                        <p className="text-gray-600 mt-4 leading-relaxed">
                          {itemData.text}
                        </p>
                      </div>
                    </div>
                  )}

                </motion.div>

              )
            })}

          </div>
        </motion.div>

      </div>
    </section>
  )
}