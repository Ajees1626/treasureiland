import { motion } from "framer-motion";
import { HiAcademicCap, HiRefresh, HiHeart, HiTrendingUp } from "react-icons/hi";

const faculty = [
  {
    name: "Senior Faculty",
    role: "Mathematics",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800",
  },
  {
    name: "Senior Faculty",
    role: "Science",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800",
  },
  {
    name: "Senior Faculty",
    role: "Languages",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800",
  },
];

const points = [
  {
    icon: HiAcademicCap,
    text: "Qualified, experienced teachers with strong subject expertise.",
  },
  {
    icon: HiRefresh,
    text: "Continuous teacher training and modern teaching methods.",
  },
  {
    icon: HiHeart,
    text: "Deep understanding of child psychology and learning styles.",
  },
  {
    icon: HiTrendingUp,
    text: "Professional development and collaborative learning culture.",
  },
];

export default function FacultyExcellence() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] to-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gradient">
            Faculty Excellence
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[var(--color-gold)]" />
          <p className="mx-auto mt-6 max-w-2xl text-gray-600">
            Our teachers are the backbone of our methodology — qualified,
            experienced, and dedicated to nurturing every child.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-14">

          {/* LEFT SIDE */}
          <div className="grid gap-6">
            {points.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 rounded-2xl border border-[color:color-mix(in_srgb,var(--color-accent)_40%,transparent)] bg-white p-6 shadow-sm hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-white">
                  <item.icon className="h-6 w-6" />
                </div>

                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE MASONRY GRID */}
          <div className="grid grid-cols-2 gap-6 auto-rows-[220px]">

            {faculty.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`group relative overflow-hidden rounded-3xl shadow-lg 
                ${i === 0 ? "row-span-2" : ""}`}
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 opacity-0 transition group-hover:opacity-100">

                  <h3 className="text-gradient-light text-lg font-semibold">
                    {person.name}
                  </h3>

                  <p className="text-white/80 text-sm">
                    {person.role}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}