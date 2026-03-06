import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { HiDocumentText, HiDownload, HiEye, HiX } from "react-icons/hi"

const disclosures = [
  { title: "Recognition & Affiliation", desc: "CBSE / State Board affiliation details.", type: "pdf", url: "/documents/recognition-affiliation.pdf" },
  { title: "School Management", desc: "Management structure and contact.", type: "pdf", url: "/documents/school-management.pdf" },
  { title: "Fee Structure", desc: "Academic year fee details.", type: "pdf", url: "/documents/fee-structure.pdf" },
  { title: "Faculty Details", desc: "Qualifications and experience.", type: "pdf", url: "/documents/faculty-details.pdf" },
  { title: "Infrastructure", desc: "Classrooms, labs, library, sports.", type: "image", url: "/documents/infrastructure.jpg" },
  { title: "Safety & Security", desc: "Policies and measures.", type: "pdf", url: "/documents/safety-security.pdf" },
  { title: "Academic Results", desc: "Board / annual results summary.", type: "pdf", url: "/documents/academic-results.pdf" },
  { title: "NOC & Approvals", desc: "Government approvals.", type: "pdf", url: "/documents/noc-approvals.pdf" },
]

export default function MandatoryDisclosures() {

  const [selected, setSelected] = useState(null)

  const downloadFile = (item) => {
    const link = document.createElement("a")
    link.href = item.url
    link.download = item.title
    link.click()
  }

  return (
    <section className="bg-gradient-to-b from-[#f8fbff] to-white py-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gradient">
            Mandatory Public Disclosure
          </h2>

          <div className="w-20 h-1 bg-[var(--color-gold)] mx-auto mt-4 rounded"></div>

          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            As per CBSE guidelines, the following documents are made available
            for public access.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {disclosures.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
            >

              <div className="flex items-start gap-4">

                <div className="bg-blue-50 p-3 rounded-xl">
                  <HiDocumentText size={28} className="text-[var(--color-accent)]" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gradient">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-2">
                    {item.desc}
                  </p>
                </div>

              </div>

              <div className="flex gap-3 mt-6">

                <button
                  onClick={() => setSelected(item)}
                  className="flex items-center gap-2 bg-[var(--color-accent)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-primary)] transition"
                >
                  <HiEye />
                  View
                </button>

                <button
                  onClick={() => downloadFile(item)}
                  className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <HiDownload />
                  Download
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Popup Viewer */}

      <AnimatePresence>

        {selected && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6"
          >

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-3xl w-full max-w-6xl shadow-2xl overflow-hidden"
            >

              {/* Header */}

              <div className="flex justify-between items-center px-6 py-4 border-b">

                <h3 className="text-xl font-semibold text-gradient">
                  {selected.title}
                </h3>

                <button
                  onClick={() => setSelected(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <HiX size={22} />
                </button>

              </div>

              {/* Viewer */}

              <div className="p-6">

                {selected.type === "image" ? (

                  <img
                    src={selected.url}
                    className="w-full max-h-[75vh] object-contain"
                  />

                ) : (

                  <iframe
                    src={selected.url}
                    className="w-full h-[75vh] rounded-lg"
                  />

                )}

              </div>

              {/* Footer */}

              <div className="flex justify-end p-4 border-t">

                <button
                  onClick={() => downloadFile(selected)}
                  className="flex items-center gap-2 bg-[var(--color-accent)] text-white px-5 py-2 rounded-lg hover:bg-[var(--color-primary)]"
                >
                  <HiDownload />
                  Download Document
                </button>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  )
}