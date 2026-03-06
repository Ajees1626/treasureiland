import { motion } from 'framer-motion'

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.078993!2d80.2296!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTMnNDYuNiJF!5e0!3m2!1sen!2sin!4v1'

export default function MapSection() {
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
            Find Our Campus
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[var(--color-gold)]" />
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Visit us at our campus in Vishwanathapuram, Shencottai. Replace the embed URL below with your school&apos;s Google Map link.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-2xl border border-[color:color-mix(in_srgb,var(--color-accent)_40%,transparent)] bg-white shadow-xl"
        >
          <div className="aspect-video w-full">
            <iframe
              title="School location map"
              src={MAP_EMBED_URL}
              className="h-full w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
