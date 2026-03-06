import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop'
import DocumentHead from './components/DocumentHead'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import MandatoryDisclosure from './pages/MandatoryDisclosure'
import TeachingMethodology from './pages/TeachingMethodology'
import Admissions from './pages/Admissions'
import Blog from './pages/Blog'
import NewsDetail from './pages/NewsDetail'
import EventDetail from './pages/EventDetail'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white overflow-x-hidden">
      <ScrollToTop />
      <DocumentHead />
      <Navbar />
      <main className="flex-1 w-full pt-16 sm:pt-[4.5rem]" role="main">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mandatory-disclosure" element={<MandatoryDisclosure />} />
            <Route path="/teaching-methodology" element={<TeachingMethodology />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/news/:id" element={<NewsDetail />} />
            <Route path="/blog/events/:id" element={<EventDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
