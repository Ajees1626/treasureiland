import { motion } from "framer-motion"
import { HiLightBulb, HiUserGroup, HiAcademicCap, HiSparkles } from "react-icons/hi"

const philosophySteps = [
  {
    icon: HiUserGroup,
    title: "Student-Centered Learning",
    desc: "Every learner is unique. We nurture individual strengths and curiosity."
  },
  {
    icon: HiAcademicCap,
    title: "Concept-Based Education",
    desc: "Deep conceptual understanding rather than rote memorization."
  },
  {
    icon: HiLightBulb,
    title: "Experiential Learning",
    desc: "Hands-on activities, projects, and real-life applications."
  },
  {
    icon: HiSparkles,
    title: "Value-Based Education",
    desc: "Building character, responsibility, and leadership."
  }
]

export default function TeachingPhilosophy() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#f8fbff] to-white overflow-hidden">

      {/* Decorative blur shapes */}

      <div className="absolute -top-20 left-0 w-[300px] h-[300px] bg-blue-200/40 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-sky-200/40 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl font-bold text-gradient">
            Our Teaching Philosophy
          </h2>

          <div className="w-16 h-1 bg-[var(--color-gold)] mt-4 rounded"></div>

          <p className="text-gray-600 mt-8 leading-relaxed text-lg">
            We believe education should inspire curiosity, creativity, and
            confidence. Our learning environment encourages students to think
            independently, explore ideas, and develop strong moral values.
          </p>

          <p className="text-gray-600 mt-6 leading-relaxed">
            By combining academic excellence with experiential learning and
            character development, we prepare students to become responsible
            global citizens ready to succeed in a rapidly changing world.
          </p>

          {/* Quote box */}

          <div className="mt-10 bg-[var(--color-primary)] text-white p-6 rounded-xl shadow-lg">

            <p className="italic text-lg">
              “Education is not the filling of a pail, but the lighting of a fire.”
            </p>

          </div>

        </motion.div>

        {/* RIGHT SIDE - TIMELINE */}

        <div className="relative">

          {/* vertical line */}

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-blue-200"></div>

          <div className="space-y-10">

            {philosophySteps.map((item, i) => {

              const Icon = item.icon

              return (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >

                  {/* Icon */}

                  <div className="bg-white shadow-md border w-12 h-12 flex items-center justify-center rounded-full relative z-10">

                    <Icon className="text-[var(--color-accent)]" size={22} />

                  </div>

                  {/* Card */}

                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">

                    <h3 className="font-semibold text-lg text-gradient">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm mt-2">
                      {item.desc}
                    </p>

                  </div>

                </motion.div>

              )
            })}

          </div>

        </div>

      </div>

    </section>
  )
}