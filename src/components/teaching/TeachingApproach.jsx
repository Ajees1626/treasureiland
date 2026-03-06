import { motion } from "framer-motion"
import { FaUserGraduate, FaChalkboardTeacher, FaSchool, FaTrophy } from "react-icons/fa"

const highlights = [
  {
    icon: <FaUserGraduate />,
    title: "5000+ Students",
    desc: "A vibrant community of learners growing academically and personally."
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "150+ Faculty",
    desc: "Experienced educators dedicated to nurturing future leaders."
  },
  {
    icon: <FaSchool />,
    title: "Modern Campus",
    desc: "World-class infrastructure designed for effective learning."
  },
  {
    icon: <FaTrophy />,
    title: "Top Achievements",
    desc: "Recognized excellence in academics, sports and innovation."
  }
]

export default function Highlights() {
  return (
    <section
      className="relative py-28 px-6 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b')"
      }}
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our School Highlights
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover what makes our institution a leading center for
            education, innovation and student success.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl text-center hover:bg-white/20 transition"
            >

              <div className="text-4xl text-yellow-400 mb-4 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-gradient-light mb-2">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  )
}