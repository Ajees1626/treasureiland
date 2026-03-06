import { motion } from "framer-motion";
import {
  HiClipboardList,
  HiDocumentReport,
  HiChat,
  HiUserGroup,
  HiChartBar,
} from "react-icons/hi";

const steps = [
  {
    icon: HiClipboardList,
    title: "Formative Assessment",
    desc: "Ongoing quizzes, class tasks, and observations to guide teaching and learning in real time.",
  },
  {
    icon: HiDocumentReport,
    title: "Summative Exams",
    desc: "Term-end and annual examinations to evaluate overall understanding and readiness.",
  },
  {
    icon: HiChat,
    title: "Regular Feedback",
    desc: "Timely, constructive feedback to students so they know their progress and areas to improve.",
  },
  {
    icon: HiUserGroup,
    title: "Parent–Teacher Meetings",
    desc: "Scheduled PTMs and open communication so parents stay informed and involved.",
  },
  {
    icon: HiChartBar,
    title: "Progress Reports",
    desc: "Detailed reports and grade cards that reflect academic and holistic development.",
  },
];

export default function AssessmentEvaluation() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f4f9ff] py-20">

      {/* background glow */}
      <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-[color:color-mix(in_srgb,var(--color-accent)_30%,transparent)] blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[color:color-mix(in_srgb,var(--color-accent)_20%,transparent)] blur-3xl"></div>

      <div className="mx-auto max-w-6xl px-6">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gradient">
            Assessment & Evaluation System
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-gold)]" />

          <p className="mx-auto mt-6 max-w-2xl text-gray-600 text-lg">
            Transparent and structured evaluation that helps students grow
            academically while keeping parents informed.
          </p>
        </motion.div>

        {/* timeline */}
        <div className="relative mt-16">

          {/* vertical line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-accent)] rounded-full"></div>

          <div className="space-y-10">

            {steps.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative flex items-start gap-6"
              >

                {/* icon circle */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-lg">
                  <item.icon className="h-6 w-6" />
                </div>

                {/* card */}
                <div className="group flex-1 rounded-3xl border border-[#e6f1ff] bg-white p-6 shadow-md transition hover:shadow-xl">

                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gradient">
                      {item.title}
                    </h3>

                    <span className="text-sm font-bold text-[color:color-mix(in_srgb,var(--color-accent)_60%,transparent)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>

                  <div className="mt-4 h-1 w-10 rounded-full bg-[var(--color-gold)] transition-all group-hover:w-16"></div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}