import { motion } from "framer-motion";
import {
  HiDesktopComputer,
  HiChip,
  HiGlobeAlt,
  HiLightningBolt,
} from "react-icons/hi";

const items = [
  {
    icon: HiDesktopComputer,
    title: "Smart Boards",
    description:
      "Interactive whiteboards and digital displays in classrooms for dynamic, visual lessons.",
  },
  {
    icon: HiChip,
    title: "Digital Learning Tools",
    description:
      "Tablets, apps, and educational software that support personalized and collaborative learning.",
  },
  {
    icon: HiGlobeAlt,
    title: "Online Homework Portal",
    description:
      "A secure portal for assignments, submissions, and progress tracking for students and parents.",
  },
  {
    icon: HiLightningBolt,
    title: "AI-Assisted Learning",
    description:
      "Technology that supports adaptive learning, revision, and smart practice.",
  },
];

export default function TechnologyIntegration() {
  return (
    <section
      className="relative py-24 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-gradient-light">
            Technology Integration
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[var(--color-gold)]" />

          <p className="mx-auto mt-6 max-w-2xl text-white/90 text-lg">
            Modern digital tools that transform classrooms into interactive
            learning environments.
          </p>
        </motion.div>

        {/* cards */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative rounded-3xl bg-white/95 p-8 shadow-xl transition hover:shadow-2xl"
            >
              {/* icon */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-lg transition group-hover:scale-110">
                <item.icon className="h-8 w-8" />
              </div>

              {/* title */}
              <h3 className="mt-6 text-lg font-semibold text-gradient">
                {item.title}
              </h3>

              {/* desc */}
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>

              {/* accent */}
              <div className="mt-5 h-1 w-10 rounded-full bg-[var(--color-gold)] transition-all group-hover:w-16"></div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}