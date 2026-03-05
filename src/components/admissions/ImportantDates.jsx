import { motion } from 'framer-motion'
import { HiCalendar } from 'react-icons/hi'

const dates = [
  { label: 'Application Start Date', value: 'January 2026', desc: 'Forms available online and at office' },
  { label: 'Entrance Test Date', value: 'February – March 2026', desc: 'As per slot allotted' },
  { label: 'Result Announcement', value: 'Within 2 weeks of test', desc: 'Communication via email/phone' },
  { label: 'Academic Year Start Date', value: 'June 2026', desc: 'New session begins' },
]

export default function ImportantDates() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f8fbff] to-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#2457A7] sm:text-4xl">
            Important Dates
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
          <p className="mt-6 text-gray-600">
            Key milestones for 2026–27 admissions. Dates are indicative; confirm with the office.
          </p>
        </motion.div>
        <div className="mt-10 space-y-4">
          {dates.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col gap-2 rounded-2xl border border-[#94DCF2]/40 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2457A7]/10 text-[#2457A7]">
                  <HiCalendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-[#2457A7]">{item.label}</p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
              <p className="font-bold text-[#2457A7] sm:text-right">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
