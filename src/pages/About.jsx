import { motion } from 'framer-motion'
import AboutHero from '../components/about/AboutHero'
import VisionMission from '../components/about/VisionMission'
import CorrespondentMessage from '../components/about/CorrespondentMessage'
import PrincipalMessage from '../components/about/PrincipalMessage'
import Faculty from '../components/about/Faculty'
import OurJourney from '../components/about/OurJourney'
import CountSection from '../components/about/CountSection'

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      aria-label="About Us page"
    >
      <AboutHero />
      <VisionMission />
      <CorrespondentMessage />
      <PrincipalMessage />
      <Faculty />
      <OurJourney />
      <CountSection />
    </motion.div>
  )
}
