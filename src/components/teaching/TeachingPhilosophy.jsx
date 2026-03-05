import { motion } from 'framer-motion'

export default function TeachingPhilosophy() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none text-gray-700"
        >
          <h2 className="text-3xl font-bold text-[#2457A7] sm:text-4xl">
            Educational Philosophy
          </h2>
          <div className="mt-4 h-1 w-20 rounded-full bg-[#1B93D1]" />
          <p className="mt-8 leading-relaxed">
            We believe in student-centered learning where every child is at the
            heart of the educational process. Our approach combines
            concept-based teaching with experiential learning so that knowledge
            is understood, not just memorized. We integrate moral and value
            education into daily practice to shape responsible, empathetic
            citizens.
          </p>
          <p className="mt-6 leading-relaxed">
            Our philosophy rests on four pillars: putting the student first,
            building strong conceptual foundations, learning by doing, and
            embedding values in every lesson. This creates a culture of curiosity,
            discipline, and holistic growth that prepares students for life
            beyond the classroom.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
