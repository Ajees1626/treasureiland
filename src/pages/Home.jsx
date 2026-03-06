import { motion } from 'framer-motion'
import Hero from '../components/home/Hero'
import AboutIntro from '../components/home/AboutIntro'
import Features from '../components/home/Features'
import Facilities from '../components/home/Facilities'
import CurricularActivities from '../components/home/CurricularActivities'
import TransportSection from '../components/home/TransportSection'
import Testimonials from '../components/home/Testimonials'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      aria-label="Home page"
    >
      <Hero />
      <AboutIntro />
      <Features />
      <Facilities />
      <CurricularActivities />
      <TransportSection />
      <Testimonials />
    </motion.div>
  )
}
