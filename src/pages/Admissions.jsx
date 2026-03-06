import { motion } from 'framer-motion'
import AdmissionsHero from '../components/admissions/AdmissionsHero'
import WhyChoose from '../components/admissions/WhyChoose'
import AdmissionProcess from '../components/admissions/AdmissionProcess'
import EligibilityCriteria from '../components/admissions/EligibilityCriteria'
import DocumentsRequired from '../components/admissions/DocumentsRequired'
import FeeStructure from '../components/admissions/FeeStructure'
import ImportantDates from '../components/admissions/ImportantDates'
import ScholarshipSupport from '../components/admissions/ScholarshipSupport'
import CampusVisit from '../components/admissions/CampusVisit'
import AdmissionsCTA from '../components/admissions/AdmissionsCTA'

export default function Admissions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      aria-label="Admissions page"
    >
      <AdmissionsHero />
      <WhyChoose />
      <AdmissionProcess />
      <EligibilityCriteria />
      <DocumentsRequired />
      <FeeStructure />
      <ImportantDates />
      <ScholarshipSupport />
      <CampusVisit />
      <AdmissionsCTA />
    </motion.div>
  )
}
