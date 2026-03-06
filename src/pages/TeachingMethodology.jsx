import { motion } from 'framer-motion'
import TeachingHero from '../components/teaching/TeachingHero'
import TeachingPhilosophy from '../components/teaching/TeachingPhilosophy'
import TeachingApproach from '../components/teaching/TeachingApproach'
import ClassroomEnvironment from '../components/teaching/ClassroomEnvironment'
import LearningBeyond from '../components/teaching/LearningBeyond'
import AssessmentEvaluation from '../components/teaching/AssessmentEvaluation'
import TechnologyIntegration from '../components/teaching/TechnologyIntegration'
import FacultyExcellence from '../components/teaching/FacultyExcellence'
import StudentDevelopment from '../components/teaching/StudentDevelopment'
import TeachingCTA from '../components/teaching/TeachingCTA'

export default function TeachingMethodology() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      aria-label="Teaching Methodology page"
    >
      <TeachingHero />
      <TeachingPhilosophy />
      <TeachingApproach />
      <ClassroomEnvironment />
      <LearningBeyond />
      <AssessmentEvaluation />
      <TechnologyIntegration />
      <FacultyExcellence />
      <StudentDevelopment />
      <TeachingCTA />
    </motion.div>
  )
}
