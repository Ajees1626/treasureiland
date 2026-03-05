import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { HiMail, HiPhone, HiLocationMarker, HiX } from "react-icons/hi"
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa"

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About School" },
  { to: "/admissions", label: "Admissions" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "News & Events" },
  { to: "/contact", label: "Contact" }
]

const social = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaYoutube, href: "#" },
  { icon: FaTwitter, href: "#" },
  { icon: FaWhatsapp, href: "#" }
]

function Modal({ title, content, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl shadow-xl w-full max-w-xl overflow-hidden"
      >
        <div className="flex justify-between items-center px-6 py-4 bg-[#1e3a5f] text-white">
          <h3 className="font-semibold">{title}</h3>
          <button onClick={onClose}>
            <HiX />
          </button>
        </div>

        <div className="p-6 text-gray-600 text-sm whitespace-pre-line">
          {content}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Footer() {

  const [termsOpen, setTermsOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)

  return (
    <footer className="bg-[#0f2744] text-white mt-20">

      {/* Admission CTA */}
      <div className="bg-gradient-to-r from-[#2457A7] to-[#1B93D1] py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
              Admissions Open 2026
            </h2>
            <p className="text-white/80 text-sm mt-1">
              Join our CBSE school and give your child the best education.
            </p>
          </div>

          <Link
            to="/admissions"
            className="bg-white text-[#2457A7] font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition"
          >
            Apply Now
          </Link>

        </div>
      </div>


      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 grid gap-10 sm:gap-12 grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr]">

        {/* School Info - wider column */}
        <div className="max-w-md w-full">

          <div className="inline-block w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[380px]">
            <img
              src="/logo-new.png"
              alt="Treasure Island International School"
              className="h-14 w-full min-h-[56px] object-contain object-left bg-white/95 p-2 rounded-xl shadow-sm sm:h-16 sm:p-2.5 md:h-[4.5rem] md:p-3 lg:h-20"
            />
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mt-4 sm:mt-5">
            Treasure Island International School provides high quality CBSE
            education focusing on academic excellence, innovation and
            character development.
          </p>

          <p className="text-gray-400 text-sm mt-3">
            CBSE Affiliation No : 1931016
          </p>

        </div>


        {/* Navigation */}
        <div>

          <h3 className="text-lg font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="grid grid-cols-2 gap-y-3 text-gray-300 text-sm">

            {links.map(link => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="hover:text-[#3CB5E5] transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}

          </ul>

        </div>


        {/* Contact */}
        <div>

          <h3 className="text-lg font-semibold mb-6">
            Contact
          </h3>

          <div className="space-y-4 text-gray-300 text-sm">

            <div className="flex gap-3">
              <HiLocationMarker className="text-[#3CB5E5] text-lg mt-1" />
              <p>Ayanavaram, Chennai, Tamil Nadu</p>
            </div>

            <div className="flex gap-3">
              <HiPhone className="text-[#3CB5E5] text-lg mt-1" />
              <p>+91 8152 8152 81</p>
            </div>

            <div className="flex gap-3">
              <HiMail className="text-[#3CB5E5] text-lg mt-1" />
              <p>info@treasureilandcbseschool.com</p>
            </div>

          </div>


          {/* Social */}
          <div className="flex gap-3 mt-6">

            {social.map((item,i)=>(
              <a
                key={i}
                href={item.href}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[#2457A7] transition"
              >
                <item.icon/>
              </a>
            ))}

          </div>

        </div>

      </div>


      {/* Bottom Bar */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-gray-400 text-center md:text-left">

          <p>
            © {new Date().getFullYear()} Treasure Island International School
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">

            <button
              onClick={()=>setTermsOpen(true)}
              className="hover:text-[#3CB5E5]"
            >
              Terms
            </button>

            <button
              onClick={()=>setPrivacyOpen(true)}
              className="hover:text-[#3CB5E5]"
            >
              Privacy
            </button>

            <span>
              Developed by{" "}
              <a
                href="https://pixdotsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3CB5E5] hover:underline"
              >
                Pixdot
              </a>
            </span>

          </div>

        </div>

      </div>


      <AnimatePresence>

        {termsOpen && (
          <Modal
            title="Terms of Use"
            content="Terms content here..."
            onClose={()=>setTermsOpen(false)}
          />
        )}

        {privacyOpen && (
          <Modal
            title="Privacy Policy"
            content="Privacy content here..."
            onClose={()=>setPrivacyOpen(false)}
          />
        )}

      </AnimatePresence>

    </footer>
  )
}