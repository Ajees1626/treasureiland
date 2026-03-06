import { motion } from "framer-motion";
import {
  HiLocationMarker,
  HiChip,
  HiBeaker,
  HiUserGroup,
  HiAcademicCap,
} from "react-icons/hi";
import { HiTrophy } from "react-icons/hi2";

const items = [
  {
    icon: HiLocationMarker,
    title: "Field Trips",
    desc: "Educational visits to museums, nature, and workplaces.",
  },
  {
    icon: HiChip,
    title: "Workshops",
    desc: "Hands-on sessions in science, arts, and life skills.",
  },
  {
    icon: HiTrophy,
    title: "Competitions",
    desc: "Academic, sports, and cultural events at various levels.",
  },
  {
    icon: HiBeaker,
    title: "Labs & Practical Sessions",
    desc: "Regular lab work and experiments for applied learning.",
  },
  {
    icon: HiUserGroup,
    title: "Group Projects",
    desc: "Collaborative tasks that build teamwork and communication.",
  },
  {
    icon: HiAcademicCap,
    title: "Leadership Programs",
    desc: "Student councils, clubs, and leadership initiatives.",
  },
];

export default function LearningBeyond() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f9ff] to-white py-20">

      {/* background decoration */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[color:color-mix(in_srgb,var(--color-accent)_30%,transparent)] blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[color:color-mix(in_srgb,var(--color-accent)_20%,transparent)] blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gradient">
            Learning Beyond the Classroom
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-gold)]" />

          <p className="mx-auto mt-6 max-w-2xl text-gray-600 text-lg">
            Experiences that inspire curiosity, creativity, and leadership
            beyond traditional learning.
          </p>
        </motion.div>

        {/* cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-3xl border border-[#e6f1ff] bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              {/* hover glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[color:color-mix(in_srgb,var(--color-primary)_0%,transparent)] via-[color:color-mix(in_srgb,var(--color-accent)_0%,transparent)] to-[color:color-mix(in_srgb,var(--color-gold)_0%,transparent)] opacity-0 blur-xl transition group-hover:opacity-40"></div>

              {/* icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-lg group-hover:scale-110 transition">
                <item.icon className="h-7 w-7" />
              </div>

              {/* text */}
              <h3 className="text-lg font-semibold text-gradient">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* bottom accent */}
              <div className="mt-6 h-1 w-10 rounded-full bg-[var(--color-gold)] transition-all group-hover:w-16"></div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}