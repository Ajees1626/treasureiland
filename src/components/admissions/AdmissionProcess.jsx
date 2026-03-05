import { motion } from 'framer-motion'
import { HiClipboardList, HiDocumentText, HiChat, HiIdentification, HiCurrencyRupee } from 'react-icons/hi'

const steps = [
  { icon: HiClipboardList, title: 'Submit Enquiry Form', desc: 'Fill the online or offline enquiry form with basic details. Our team will get in touch.' },
  { icon: HiDocumentText, title: 'Collect Application Form', desc: 'Collect the application form from the school office or download from the website.' },
  { icon: HiChat, title: 'Entrance Test / Interaction', desc: 'Child may be assessed or invited for an interaction as per grade and policy.' },
  { icon: HiIdentification, title: 'Document Verification', desc: 'Submit and verify required documents at the school office.' },
  { icon: HiCurrencyRupee, title: 'Fee Payment & Confirmation', desc: 'Pay admission and first-term fees to confirm the seat. Receive admission confirmation.' },
]

export default function AdmissionProcess() {
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
            Admission Process
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
          <p className="mt-6 text-gray-600">
            A clear, step-by-step path from enquiry to confirmation.
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
              className="relative flex gap-5 rounded-2xl border border-[#94DCF2]/40 bg-white p-5 pl-14 shadow-sm sm:p-6 sm:pl-16"
            >
              <div className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#2457A7] text-white shadow sm:left-6">
                <span className="text-sm font-bold">{i + 1}</span>
              </div>
              <div className="flex flex-1 items-center gap-4">
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2457A7]/10 text-[#2457A7]">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2457A7]">Step {i + 1}: {item.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
