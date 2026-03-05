import { motion } from 'framer-motion'
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi'

const cards = [
  {
    icon: HiLocationMarker,
    title: 'School Address',
    description: 'Vishwanathapuram, Shencottai – Tamil Nadu. (Contact office for full address)',
  },
  {
    icon: HiPhone,
    title: 'Phone Numbers',
    description: '+91 8152 8152 81 · Office & Admissions',
  },
  {
    icon: HiMail,
    title: 'Email Address',
    description: 'info@treasureilandcbseschool.com',
  },
  {
    icon: HiClock,
    title: 'Office Working Hours',
    description: 'Mon – Fri: 8:00 AM – 4:00 PM · Sat: 8:00 AM – 12:00 PM',
  },
]

export default function ContactInfoCards() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f8fbff] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-[#94DCF2]/40 bg-white p-6 shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#2457A7]/10 text-[#2457A7]">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#2457A7]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
