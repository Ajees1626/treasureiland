import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const socialLinks = [
  { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com', color: 'hover:bg-[#1877F2]' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com', color: 'hover:bg-gradient-to-br hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]' },
  { icon: FaYoutube, label: 'YouTube', href: 'https://youtube.com', color: 'hover:bg-[#FF0000]' },
  { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com', color: 'hover:bg-[#1DA1F2]' },
  { icon: FaWhatsapp, label: 'WhatsApp', href: 'https://wa.me/918152815281', color: 'hover:bg-[#25D366]' },
]

export default function SocialMediaSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gradient sm:text-4xl">
            Connect With Us
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[var(--color-gold)]" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Follow our social media for updates, events and school life.
          </p>
        </motion.div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {socialLinks.map((item, i) => (
            <motion.a
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-[color:color-mix(in_srgb,var(--color-accent)_40%,transparent)] bg-[#f8fbff] text-[var(--color-accent)] shadow-md transition hover:scale-110 hover:border-transparent hover:text-white hover:shadow-lg ${item.color}`}
              aria-label={item.label}
            >
              <item.icon className="h-6 w-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
