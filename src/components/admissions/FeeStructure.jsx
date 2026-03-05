import { motion } from 'framer-motion'
import { HiCurrencyRupee, HiCalendar, HiDocumentText } from 'react-icons/hi'

const feeItems = [
  { icon: HiCurrencyRupee, title: 'Admission Fee', desc: 'One-time fee at the time of admission. Non-refundable.' },
  { icon: HiCurrencyRupee, title: 'Tuition Fee', desc: 'Term-wise or annual. Covers academic program and basic facilities.' },
  { icon: HiCurrencyRupee, title: 'Transport Fee', desc: 'Optional. Based on route and distance. Billed separately.' },
  { icon: HiCalendar, title: 'Payment Schedule', desc: 'Due dates communicated at admission. Typically term-wise (e.g. June, October, February).' },
  { icon: HiDocumentText, title: 'Installment Options', desc: 'Installment plans may be available. Please confirm with the accounts office.' },
]

export default function FeeStructure() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#2457A7] sm:text-4xl">
            Fee Structure
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
          <p className="mt-6 text-gray-600">
            Transparent and simple. Exact amounts are provided at the time of admission.
          </p>
        </motion.div>
        <div className="mt-10 space-y-4">
          {feeItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 rounded-xl border border-[#94DCF2]/40 bg-[#f8fbff] p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2457A7]/10 text-[#2457A7]">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2457A7]">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          For the current year’s fee breakdown, please collect the fee circular from the school office or contact admissions.
        </p>
      </div>
    </section>
  )
}
