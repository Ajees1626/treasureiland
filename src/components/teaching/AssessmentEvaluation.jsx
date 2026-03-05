import { motion } from 'framer-motion'
import { HiClipboardList, HiDocumentReport, HiChat, HiUserGroup, HiChartBar } from 'react-icons/hi'

const steps = [
  {
    icon: HiClipboardList,
    title: 'Formative Assessment',
    desc: 'Ongoing quizzes, class tasks, and observations to guide teaching and learning in real time.',
  },
  {
    icon: HiDocumentReport,
    title: 'Summative Exams',
    desc: 'Term-end and annual examinations to evaluate overall understanding and readiness.',
  },
  {
    icon: HiChat,
    title: 'Regular Feedback',
    desc: 'Timely, constructive feedback to students so they know their progress and areas to improve.',
  },
  {
    icon: HiUserGroup,
    title: 'Parent–Teacher Meetings',
    desc: 'Scheduled PTMs and open communication so parents stay informed and involved.',
  },
  {
    icon: HiChartBar,
    title: 'Progress Reports',
    desc: 'Detailed reports and grade cards that reflect academic and holistic development.',
  },
]

export default function AssessmentEvaluation() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#2457A7] sm:text-4xl">
            Assessment & Evaluation System
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Transparent, consistent assessment that supports growth and keeps families informed.
          </p>
        </motion.div>
        <div className="mt-12 space-y-6">
          {steps.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative flex gap-5 rounded-2xl border border-[#94DCF2]/40 bg-[#f8fbff] p-5 pl-14 sm:p-6 sm:pl-16"
            >
              <div className="absolute left-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#1B93D1] text-white shadow sm:left-6">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-[#2457A7]">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </div>
              <span className="hidden shrink-0 text-2xl font-bold text-[#94DCF2]/60 sm:block">
                {String(i + 1).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
