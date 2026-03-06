import { motion } from "framer-motion";
import {
  HiChat,
  HiAcademicCap,
  HiHeart,
  HiStar,
  HiColorSwatch,
} from "react-icons/hi";

const traits = [
  {
    icon: HiChat,
    title: "Communication Skills",
    desc: "Confident expression and effective listening.",
  },
  {
    icon: HiAcademicCap,
    title: "Leadership",
    desc: "Taking initiative and guiding others.",
  },
  {
    icon: HiHeart,
    title: "Emotional Intelligence",
    desc: "Empathy and strong relationships.",
  },
  {
    icon: HiStar,
    title: "Moral Values",
    desc: "Integrity and ethical thinking.",
  },
  {
    icon: HiColorSwatch,
    title: "Creativity",
    desc: "Original thinking and innovation.",
  },
];

export default function StudentDevelopment() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* RIGHT IMAGE */}
      <div className="absolute right-0 top-0 h-full w-[55%] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400"
          className="h-full w-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gradient leading-tight">
              Student Development
              <span className="block text-[var(--color-accent)]">Beyond Academics</span>
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              We focus on nurturing confident, responsible and creative
              individuals through a holistic learning approach that balances
              academic excellence with personal growth.
            </p>
          </motion.div>

          {/* RIGHT CARDS */}
          <div className="relative grid grid-cols-2 gap-6">

            {traits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-2xl bg-white/80 backdrop-blur border border-gray-200 p-6 shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="mt-4 font-semibold text-gradient">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}