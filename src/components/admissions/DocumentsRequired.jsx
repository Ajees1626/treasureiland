import { motion } from 'framer-motion'
import { HiDocument } from 'react-icons/hi'

const documents = [
  'Birth Certificate',
  'Aadhaar Copy (student & parent)',
  'Passport Size Photos',
  'Previous Report Card / School records',
  'Transfer Certificate (if applicable)',
]

export default function DocumentsRequired() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-[#f8fbff] to-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-[#2457A7] sm:text-4xl">
            Documents Required
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
          <p className="mt-6 text-gray-600">
            Keep these ready for a smooth admission process.
          </p>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 space-y-3"
        >
          {documents.map((doc, i) => (
            <motion.li
              key={doc}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 rounded-xl border border-[#94DCF2]/40 bg-white px-5 py-4 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2457A7]/10 text-[#2457A7]">
                <HiDocument className="h-5 w-5" />
              </div>
              <span className="font-medium text-gray-800">{doc}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
