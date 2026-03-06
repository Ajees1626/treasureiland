import { motion } from "framer-motion";
import { HiCalendar, HiDocumentText, HiAcademicCap } from "react-icons/hi";

const ageCriteria = [
  { class: "Nursery", age: "3+ years as on 1st June" },
  { class: "LKG", age: "4+ years" },
  { class: "UKG", age: "5+ years" },
  { class: "Class I", age: "6+ years" },
  { class: "Class II – X", age: "As per previous class completion" },
];

export default function EligibilityCriteria() {
  return (
    <section
      className="relative py-24 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2070')",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[var(--color-primary)] bg-white p-10 rounded-3xl"
        >
          <h2 className="text-4xl font-bold text-gradient">Eligibility Criteria</h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[var(--color-gold)]" />

          <p className="mx-auto mt-6 max-w-2xl text-black/90">
            Admission eligibility guidelines including age criteria,
            documents required, and student interaction process.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Age Criteria */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/90 backdrop-blur-lg p-8 shadow-2xl"
          >
            <h3 className="flex items-center gap-3 text-xl font-semibold text-gradient">
              <HiCalendar className="h-6 w-6 text-[var(--color-accent)]" />
              Age Criteria
            </h3>

            <div className="mt-6 space-y-4">

              {ageCriteria.map((row, i) => (
                <motion.div
                  key={row.class}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between rounded-xl border border-[color:color-mix(in_srgb,var(--color-accent)_40%,transparent)] px-5 py-4 bg-white hover:shadow-md transition"
                >
                  <span className="font-semibold text-gradient">
                    {row.class}
                  </span>

                  <span className="text-gray-600">{row.age}</span>
                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* Right Side */}
          <div className="space-y-8">

            {/* Documents */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/90 backdrop-blur-lg p-8 shadow-2xl"
            >
              <h3 className="flex items-center gap-3 text-xl font-semibold text-gradient">
                <HiDocumentText className="h-6 w-6 text-[var(--color-accent)]" />
                Required Documents
              </h3>

              <ul className="mt-5 space-y-3 text-gray-700 text-sm">

                <li>✓ Birth Certificate</li>
                <li>✓ Previous School Records (if applicable)</li>
                <li>✓ Transfer Certificate for Class II onwards</li>
                <li>✓ Parent / Student Identity Proof</li>

              </ul>
            </motion.div>

            {/* Interaction */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/90 backdrop-blur-lg p-8 shadow-2xl"
            >
              <h3 className="flex items-center gap-3 text-xl font-semibold text-gradient">
                <HiAcademicCap className="h-6 w-6 text-[var(--color-accent)]" />
                Entrance Test / Interaction
              </h3>

              <p className="mt-4 text-sm text-gray-700 leading-relaxed">
                Depending on the grade level, students may be invited for a
                short entrance assessment or interaction session. This helps us
                understand the child’s learning level and ensure a smooth
                academic transition.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}