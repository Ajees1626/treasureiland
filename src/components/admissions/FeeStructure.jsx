import { motion } from "framer-motion"
import { HiCurrencyRupee, HiCalendar, HiDocumentText } from "react-icons/hi"

const feeItems = [
  {
    icon: HiCurrencyRupee,
    title: "Admission Fee",
    desc: "One-time fee payable during admission. This confirms the student's seat and is non-refundable."
  },
  {
    icon: HiCurrencyRupee,
    title: "Tuition Fee",
    desc: "Paid term-wise or annually. Covers academic learning, classrooms and regular school facilities."
  },
  {
    icon: HiCurrencyRupee,
    title: "Transport Fee",
    desc: "Optional transport service depending on route and distance from the school."
  },
  {
    icon: HiCalendar,
    title: "Payment Schedule",
    desc: "Fees are usually paid term-wise with due dates communicated during admission."
  },
  {
    icon: HiDocumentText,
    title: "Installment Options",
    desc: "Flexible installment plans may be available. Please contact the accounts office."
  }
]

export default function FeeStructure() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#f3f8ff] to-white">

      {/* decorative shapes */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-sky-200 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Fee Structure
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our fee system is transparent and designed to support quality
            education while remaining convenient for parents.
          </p>

          <div className="mx-auto mt-4 h-1 w-20 bg-[var(--color-gold)] rounded-full"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {feeItems.map((item,index)=>(
            <motion.div
              key={index}
              initial={{ opacity:0,y:40 }}
              whileInView={{ opacity:1,y:0 }}
              transition={{ delay:index*0.08 }}
              whileHover={{ y:-8 }}
              className="group bg-white p-7 rounded-2xl shadow-md hover:shadow-xl transition"
            >

              {/* icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[color:color-mix(in_srgb,var(--color-accent)_12%,white)] text-[var(--color-primary)] group-hover:bg-[var(--color-accent)] group-hover:text-white transition">
                <item.icon className="w-7 h-7"/>
              </div>

              {/* title */}
              <h3 className="mt-5 text-lg font-semibold text-gradient">
                {item.title}
              </h3>

              {/* desc */}
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500 mt-12 max-w-xl mx-auto">
          Exact fee amounts and complete fee circular will be provided at the
          time of admission. Parents may also contact the school office for
          detailed information.
        </p>

      </div>
    </section>
  )
}