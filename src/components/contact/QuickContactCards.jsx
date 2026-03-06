import { motion } from 'framer-motion'
import { HiPhone, HiMail, HiCalendar } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

const quickOptions = [
  {
    icon: HiPhone,
    title: 'Call the Office',
    desc: 'Reach us on phone',
    href: 'tel:+918152815281',
  },
  {
    icon: FaWhatsapp,
    title: 'Send WhatsApp Message',
    desc: 'Quick chat with us',
    href: 'https://wa.me/918152815281',
  },
  {
    icon: HiMail,
    title: 'Email Admissions',
    desc: 'admissions@treasureilandcbseschool.com',
    href: 'mailto:info@treasureilandcbseschool.com',
  },
  {
    icon: HiCalendar,
    title: 'Book School Visit',
    desc: 'Schedule a campus tour',
    href: '/contact#form',
  },
]

export default function QuickContactCards() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] to-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gradient sm:text-4xl">
            Quick Contact Options
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[var(--color-gold)]" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Choose the most convenient way to get in touch.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {quickOptions.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith('http') || item.href.startsWith('mailto') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center rounded-2xl border border-[color:color-mix(in_srgb,var(--color-accent)_40%,transparent)] bg-white p-6 text-center shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[color:color-mix(in_srgb,var(--color-accent)_12%,white)] text-[var(--color-accent)]">
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-semibold text-gradient">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
