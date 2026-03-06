import { motion } from "framer-motion"
import { HiShieldCheck, HiUser, HiUserGroup, HiHeart } from "react-icons/hi"
import { viewportLite, transitionLite } from "../../utils/scrollMotion"

const points = [
  {
    icon: HiShieldCheck,
    title: "Safe & Inclusive Environment",
    text: "Every student feels secure and respected in a nurturing classroom."
  },
  {
    icon: HiUser,
    title: "Individual Attention",
    text: "Teachers focus on each child's strengths and learning needs."
  },
  {
    icon: HiUserGroup,
    title: "Small Class Size",
    text: "Lower student-teacher ratio ensures better interaction."
  },
  {
    icon: HiHeart,
    title: "Positive Discipline",
    text: "We encourage responsibility, respect and positive behavior."
  }
]

export default function ClassroomEnvironment() {
  return (
    <section className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[color-mix(in_srgb,var(--color-accent)_12%,white)] to-white" aria-labelledby="classroom-env-heading">

      {/* Decorative background shapes */}
      <div className="absolute -top-32 -left-32 w-64 h-64 sm:w-96 sm:h-96 bg-[color-mix(in_srgb,var(--color-accent)_25%,white)] rounded-full blur-3xl opacity-40" aria-hidden="true"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 sm:w-96 sm:h-96 bg-[color-mix(in_srgb,var(--color-primary)_20%,white)] rounded-full blur-3xl opacity-40" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto relative">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportLite}
          transition={transitionLite}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 id="classroom-env-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
            Classroom Environment
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Our classrooms are designed to inspire curiosity, collaboration,
            and confidence so every student can learn and grow.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportLite}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center"
        >
          {/* Image with creative frame */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } }}
            transition={transitionLite}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[var(--color-accent)] rounded-3xl"></div>

            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1000"
              alt="Classroom"
              className="rounded-3xl shadow-xl relative z-10"
            />
          </motion.div>

          {/* Points */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 28 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { staggerChildren: 0.06, delayChildren: 0.04 },
              },
            }}
            transition={transitionLite}
            className="grid sm:grid-cols-2 gap-6"
          >
            {points.map((item, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={transitionLite}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-accent)_18%,white)] text-[var(--color-accent)] mb-4">
                  <item.icon className="w-6 h-6" />
                </div>

                <h3 className="font-semibold text-lg text-gradient mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}