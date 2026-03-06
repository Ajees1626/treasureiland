import { motion } from "framer-motion";
import {
  HiClipboardList,
  HiDocumentText,
  HiChat,
  HiIdentification,
  HiCurrencyRupee,
} from "react-icons/hi";

const steps = [
  {
    icon: HiClipboardList,
    title: "Submit Enquiry Form",
    desc: "Fill the enquiry form online or at the school office. Our admission team will contact you.",
  },
  {
    icon: HiDocumentText,
    title: "Collect Application Form",
    desc: "Collect the application form from the school office or download it from the website.",
  },
  {
    icon: HiChat,
    title: "Entrance Test / Interaction",
    desc: "Students may attend a small assessment or interaction depending on the grade level.",
  },
  {
    icon: HiIdentification,
    title: "Document Verification",
    desc: "Submit required documents for verification at the school admission office.",
  },
  {
    icon: HiCurrencyRupee,
    title: "Fee Payment & Confirmation",
    desc: "Complete the admission fee payment to confirm your child's seat.",
  },
];

export default function AdmissionProcess() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] to-white py-24">

      <div className="mx-auto max-w-5xl px-6">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gradient">
            Admission Process
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[var(--color-gold)]" />

          <p className="mt-6 text-gray-600">
            Follow these simple steps to complete your child's admission.
          </p>
        </motion.div>

        {/* timeline */}
        <div className="relative mt-16">

          {/* center line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-[color:color-mix(in_srgb,var(--color-accent)_40%,transparent)]"></div>

          <div className="space-y-10">

            {steps.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6"
              >

                {/* step circle */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-lg">
                  <span className="text-lg font-bold">{i + 1}</span>
                </div>

                {/* card */}
                <div className="flex-1 rounded-2xl border border-[color:color-mix(in_srgb,var(--color-accent)_40%,transparent)] bg-white p-6 shadow-sm transition hover:shadow-xl">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:color-mix(in_srgb,var(--color-accent)_12%,white)] text-[var(--color-primary)]">
                      <item.icon className="h-6 w-6" />
                    </div>

                    <h3 className="text-lg font-semibold text-gradient">
                      {item.title}
                    </h3>

                  </div>

                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] px-10 py-4 text-white font-semibold shadow-lg transition hover:scale-105">
            Start Admission Enquiry
          </button>
        </motion.div>

      </div>
    </section>
  );
}