import { motion } from 'framer-motion'
import ContactHero from '../components/contact/ContactHero'
import ContactInfoCards from '../components/contact/ContactInfoCards'
import ContactForm from '../components/contact/ContactForm'
import MapSection from '../components/contact/MapSection'
import SocialMediaSection from '../components/contact/SocialMediaSection'
import QuickContactCards from '../components/contact/QuickContactCards'

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-white"
      aria-label="Contact page"
    >
      <ContactHero />
      <ContactInfoCards />
      <section id="form" className="scroll-mt-24">
        <ContactForm />
      </section>
      <MapSection />
      <QuickContactCards />
      <SocialMediaSection />
    </motion.div>
  )
}
