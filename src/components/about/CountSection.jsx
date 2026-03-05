import { motion } from "framer-motion"
import { HiAcademicCap, HiUsers, HiUserGroup, HiSparkles } from "react-icons/hi"
import { useEffect, useState } from "react"

const stats = [
  {
    value: 25,
    suffix: "+",
    label: "Years of Excellence",
    icon: HiAcademicCap
  },
  {
    value: 5000,
    suffix: "+",
    label: "Students",
    icon: HiUsers
  },
  {
    value: 150,
    suffix: "+",
    label: "Staff & Faculty",
    icon: HiUserGroup
  },
  {
    value: 50,
    suffix: "+",
    label: "Activities & Clubs",
    icon: HiSparkles
  }
]

function Counter({ value, suffix }) {

  const [count, setCount] = useState(0)

  useEffect(() => {

    let start = 0
    const duration = 2000
    const increment = value / (duration / 16)

    const timer = setInterval(() => {

      start += increment

      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }

    }, 16)

    return () => clearInterval(timer)

  }, [value])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export default function CountSection() {

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#2457A7] to-[#1B93D1] overflow-hidden">

      {/* background glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-white/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-white/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Achievements
          </h2>

          <div className="mx-auto mt-4 w-20 h-[4px] bg-white/70 rounded-full"></div>

          <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg">
            Our institution has grown through dedication, innovation and
            commitment to academic excellence.
          </p>

        </motion.div>


        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {stats.map((item, index) => {

            const Icon = item.icon

            return (

              <motion.div
                key={index}
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:index * .15 }}
                whileHover={{ y:-8 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 text-center shadow-xl"
              >

                {/* Icon */}
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-white/20 text-white mb-6">
                  <Icon size={28}/>
                </div>

                {/* Counter */}
                <p className="text-4xl md:text-5xl font-bold text-white">
                  <Counter value={item.value} suffix={item.suffix}/>
                </p>

                {/* Label */}
                <p className="mt-3 text-white/80 text-sm tracking-wide">
                  {item.label}
                </p>

              </motion.div>

            )
          })}

        </div>

      </div>

    </section>
  )
}