import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiDocumentDownload, HiX } from 'react-icons/hi'

const disclosures = [
  { title: 'Recognition & Affiliation', desc: 'CBSE / State Board affiliation details.', type: 'pdf', url: '/documents/recognition-affiliation.pdf' },
  { title: 'School Management', desc: 'Management structure and contact.', type: 'pdf', url: '/documents/school-management.pdf' },
  { title: 'Fee Structure', desc: 'Academic year fee details.', type: 'pdf', url: '/documents/fee-structure.pdf' },
  { title: 'Faculty Details', desc: 'Qualifications and experience.', type: 'pdf', url: '/documents/faculty-details.pdf' },
  { title: 'Infrastructure', desc: 'Classrooms, labs, library, sports.', type: 'image', url: '/documents/infrastructure.jpg' },
  { title: 'Safety & Security', desc: 'Policies and measures.', type: 'pdf', url: '/documents/safety-security.pdf' },
  { title: 'Academic Results', desc: 'Board / annual results summary.', type: 'pdf', url: '/documents/academic-results.pdf' },
  { title: 'NOC & Approvals', desc: 'No Objection Certificate and regulatory approvals.', type: 'pdf', url: '/documents/noc-approvals.pdf' },
  { title: 'Curriculum & Syllabus', desc: 'Curriculum framework and syllabus details.', type: 'pdf', url: '/documents/curriculum-syllabus.pdf' },
  { title: 'Mandatory Public Disclosure', desc: 'Summary as per RTE / regulatory norms.', type: 'pdf', url: '/documents/mandatory-disclosure.pdf' },
]

export default function MandatoryDisclosures() {
  const [viewItem, setViewItem] = useState(null)

  const handleView = (item) => {
    setViewItem(item)
  }

  const handleClose = () => {
    setViewItem(null)
  }

  const handleDownload = (item) => {
    if (item?.url) {
      const link = document.createElement('a')
      link.href = item.url
      link.download = item.title.replace(/\s+/g, '-') + (item.type === 'pdf' ? '.pdf' : '.jpg')
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      link.click()
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] to-white py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-center text-3xl font-bold text-[#2457A7] sm:text-4xl">
          Mandatory Disclosures
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#1B93D1]" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-gray-600">
          As per regulatory requirements, we publish key information. Click on any item to view the original document (image or PDF).
        </p>
        <ul className="mt-10 space-y-3">
          {disclosures.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#94DCF2]/40 bg-white px-5 py-4 shadow-sm transition hover:shadow-md"
            >
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-[#2457A7]">{item.title}</p>
                <p className="mt-0.5 text-sm text-gray-500">{item.desc}</p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleView(item)}
                  className="rounded-lg bg-[#2457A7] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#1B93D1]"
                >
                  View
                </button>
                <button
                  type="button"
                  onClick={() => handleDownload(item)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2457A7]/10 text-[#2457A7] transition hover:bg-[#2457A7]/20"
                  aria-label={`Download ${item.title}`}
                >
                  <HiDocumentDownload className="h-5 w-5" />
                </button>
              </div>
            </motion.li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-gray-500">
          For physical copies or specific documents, please visit the school office or contact the administration.
        </p>
      </motion.div>

      {/* View modal – image or PDF */}
      <AnimatePresence>
        {viewItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={handleClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
                <h3 className="truncate text-lg font-semibold text-[#2457A7]">
                  {viewItem.title}
                </h3>
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  aria-label="Close"
                >
                  <HiX className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 overflow-auto p-4">
                {viewItem.type === 'image' ? (
                  <img
                    src={viewItem.url}
                    alt={viewItem.title}
                    className="mx-auto max-h-[70vh] w-auto max-w-full object-contain"
                    onError={(e) => {
                      e.target.onerror = null
                      e.target.src = 'https://via.placeholder.com/600x400?text=Image+not+found'
                      e.target.alt = 'Document image not available. Add file to public/documents/'
                    }}
                  />
                ) : (
                  <>
                    <iframe
                      title={viewItem.title}
                      src={viewItem.url}
                      className="h-[70vh] w-full rounded-lg border border-gray-200"
                    />
                    <p className="mt-2 text-center text-xs text-gray-500">
                      If the PDF does not appear, add the file to <code className="rounded bg-gray-100 px-1">public/documents/</code>
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
