import { motion } from 'framer-motion'
import { HiAcademicCap, HiUserGroup, HiCurrencyDollar } from 'react-icons/hi'

const supports = [
  {
    icon: HiAcademicCap,
    title: 'Merit Scholarships',
    description: 'Merit-based fee concessions for students who excel in entrance tests or previous academics. Criteria and amount are announced each year.',
  },
  {
    icon: HiUserGroup,
    title: 'Sibling Discount',
    description: 'Fee discount for the second and subsequent siblings studying in the same school. Details available at the accounts office.',
  },
  {
    icon: HiCurrencyDollar,
    title: 'Financial Assistance',
    description: 'Limited need-based support may be available. Parents can enquire with the admission office and submit required documents for consideration.',
  },
]

export default function ScholarshipSupport() {
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
            Scholarship & Special Support
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
          <p className="mt-6 text-gray-600">
            We believe in making quality education accessible. Enquire about eligibility.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {supports.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-[#94DCF2]/40 bg-[#f8fbff] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2457A7]/10 text-[#2457A7]">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-[#2457A7]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
