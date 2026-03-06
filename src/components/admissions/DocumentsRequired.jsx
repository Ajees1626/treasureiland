import { motion } from "framer-motion";
import { HiDocumentText } from "react-icons/hi";

const documents = [
  {
    title: "Birth Certificate",
    image:
      "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=800"
  },
  {
    title: "Aadhaar Copy (Student & Parent)",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800"
  },
  {
    title: "Passport Size Photographs",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800"
  },
  {
    title: "Previous Report Card",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800"
  },
  {
    title: "Transfer Certificate",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800"
  }
];

export default function DocumentsRequired() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#f0f7ff] to-white">

      {/* Decorative shapes */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-sky-200 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Documents Required
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Please keep the following documents ready while submitting the
            admission application.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {documents.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >

              {/* Image */}
              <img
                src={doc.image}
                alt={doc.title}
                className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur rounded-lg">
                    <HiDocumentText className="text-white text-xl" />
                  </div>

                  <span className="text-sm font-medium opacity-80">
                    Document {index + 1}
                  </span>

                </div>

                <h3 className="mt-3 text-xl font-semibold text-gradient leading-snug">
                  {doc.title}
                </h3>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}