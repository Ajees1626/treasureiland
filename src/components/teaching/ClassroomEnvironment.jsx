import { motion } from 'framer-motion'
import { HiShieldCheck, HiUser, HiUserGroup, HiHeart } from 'react-icons/hi'

const points = [
  {
    icon: HiShieldCheck,
    title: 'Safe & Inclusive Environment',
    text: 'Every student feels secure and respected. We foster a culture free from bullying and discrimination.',
  },
  {
    icon: HiUser,
    title: 'Individual Attention',
    text: 'Teachers know each child’s strengths and needs, enabling personalized support and growth.',
  },
  {
    icon: HiUserGroup,
    title: 'Low Student–Teacher Ratio',
    text: 'Smaller class sizes so each student gets adequate attention and participation time.',
  },
  {
    icon: HiHeart,
    title: 'Positive Discipline',
    text: 'Clear expectations and constructive discipline that build responsibility and self-regulation.',
  },
]

export default function ClassroomEnvironment() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800"
              alt="Classroom environment"
              className="h-[380px] w-full object-cover sm:h-[420px]"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#2457A7] sm:text-4xl">
              Classroom Environment
            </h2>
            <div className="mt-3 h-1 w-20 rounded-full bg-[#1B93D1]" />
            <p className="mt-6 leading-relaxed text-gray-600">
              Our classrooms are designed to support focus, collaboration, and
              well-being. We combine structure with warmth so that learning
              happens in a space where every child can thrive.
            </p>
            <ul className="mt-8 space-y-6">
              {points.map((item, i) => (
                <li key={item.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2457A7]/10 text-[#2457A7]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#2457A7]">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
