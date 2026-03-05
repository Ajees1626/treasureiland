import { motion } from 'framer-motion'
import { HiCalendar, HiDocumentText, HiAcademicCap } from 'react-icons/hi'

const ageCriteria = [
  { class: 'Nursery', age: '3+ years as on 1st June' },
  { class: 'LKG', age: '4+ years' },
  { class: 'UKG', age: '5+ years' },
  { class: 'Class I', age: '6+ years' },
  { class: 'Class II – X', age: 'As per previous class completion' },
]

export default function EligibilityCriteria() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#2457A7] sm:text-4xl">
            Eligibility Criteria
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
          <p className="mt-6 text-gray-600">
            Age, documents, and assessment requirements at a glance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 rounded-2xl border border-[#94DCF2]/40 bg-[#f8fbff] p-6 sm:p-8"
        >
          <h3 className="flex items-center gap-2 text-lg font-semibold text-[#2457A7]">
            <HiCalendar className="h-5 w-5" /> Age criteria (as on 1st June of academic year)
          </h3>
          <ul className="mt-4 space-y-2">
            {ageCriteria.map((row) => (
              <li key={row.class} className="flex justify-between gap-4 rounded-lg bg-white px-4 py-3 text-sm">
                <span className="font-medium text-gray-800">{row.class}</span>
                <span className="text-gray-600">{row.age}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid gap-6 sm:grid-cols-2"
        >
          <div className="rounded-xl border border-[#94DCF2]/40 bg-white p-5">
            <h3 className="flex items-center gap-2 font-semibold text-[#2457A7]">
              <HiDocumentText className="h-5 w-5" /> Required documents
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Birth certificate, previous school records (if applicable), and identity proof. Transfer certificate required for Class II onwards when shifting from another school.
            </p>
          </div>
          <div className="rounded-xl border border-[#94DCF2]/40 bg-white p-5">
            <h3 className="flex items-center gap-2 font-semibold text-[#2457A7]">
              <HiAcademicCap className="h-5 w-5" /> Entrance test / interaction
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              For certain grades, an entrance test or child interaction may be conducted. Details are shared at the time of application.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
