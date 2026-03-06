import { motion } from "framer-motion";
import { HiAcademicCap, HiUserGroup, HiCurrencyDollar } from "react-icons/hi";

const supports = [
  {
    icon: HiAcademicCap,
    title: "Merit Scholarships",
    description:
      "Merit-based fee concessions for students who excel in entrance tests or previous academics. Criteria and amount are announced each year.",
  },
  {
    icon: HiUserGroup,
    title: "Sibling Discount",
    description:
      "Fee discount for the second and subsequent siblings studying in the same school. Details available at the accounts office.",
  },
  {
    icon: HiCurrencyDollar,
    title: "Financial Assistance",
    description:
      "Limited need-based support may be available. Parents can enquire with the admission office and submit required documents.",
  },
];

export default function ScholarshipSupport() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] to-white py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gradient">
            Scholarship & Special Support
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            We believe every talented student deserves access to quality
            education. Explore scholarships and financial support options
            available for deserving families.
          </p>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[var(--color-gold)]" />
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {supports.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-[color:color-mix(in_srgb,var(--color-accent)_30%,transparent)] bg-white p-8 shadow-md transition hover:shadow-2xl"
            >

              {/* background hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-0 transition duration-300 group-hover:opacity-10"></div>

              {/* icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-md transition group-hover:scale-110">
                <item.icon className="h-7 w-7" />
              </div>

              {/* title */}
              <h3 className="mt-6 text-lg font-semibold text-gradient">
                {item.title}
              </h3>

              {/* text */}
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>

              {/* bottom accent */}
              <div className="mt-6 h-[3px] w-12 rounded-full bg-[var(--color-gold)] transition-all duration-300 group-hover:w-24"></div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}