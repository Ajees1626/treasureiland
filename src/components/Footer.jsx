import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiX,
  HiArrowRight,
} from "react-icons/hi"
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa"

const quickLinksCol1 = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/mandatory-disclosure", label: "Mandatory Disclosure" },
  { to: "/teaching-methodology", label: "Teaching Methodology" },
]

const quickLinksCol2 = [
  { to: "/admissions", label: "Admissions" },
  { to: "/blog", label: "News & Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
]

const social = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
]

function Modal({ title, content, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 12, opacity: 0 }}
        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
      >
        <div className="flex justify-between items-center px-6 py-4 bg-[var(--color-primary)] text-white">
          <h3 id="modal-title" className="font-semibold text-lg text-gradient-light">
            {title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/20 transition"
            aria-label="Close"
          >
            <HiX className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 text-gray-600 text-sm leading-relaxed whitespace-pre-line max-h-[70vh] overflow-y-auto">
          {content}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Footer() {
  const [termsOpen, setTermsOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-16 sm:mt-20" role="contentinfo">
      {/* CTA bar - compact pill style */}
      <div className="bg-white border-y border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-gold)] p-6 sm:p-8">
            <div className="text-center sm:text-left">
              <p className="text-white/95 font-semibold text-lg sm:text-xl">
                Admissions Open 2026–27
              </p>
              <p className="text-white/80 text-sm mt-0.5">
                Join our CBSE school. Limited seats.
              </p>
            </div>
            <Link
              to="/admissions"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[var(--color-primary)] font-semibold px-6 py-3 rounded-xl hover:bg-gray-50 hover:shadow-md transition"
            >
              Apply Now
              <HiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer - dark */}
      <div className="bg-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <Link
                to="/"
                className="inline-block focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-[var(--color-primary)] rounded-xl"
              >
                <img
                  src="/logo-new.png"
                  alt="Treasure Iland International School"
                  className="h-16 sm:h-20 w-auto bg-white p-2.5 rounded-xl object-contain"
                />
              </Link>
              <p className="text-white/80 text-sm leading-relaxed mt-5 max-w-sm">
                Quality CBSE education with focus on academic excellence, innovation and character development.
              </p>
              <p className="text-white/60 text-xs mt-3">CBSE Affiliation No: 1931016</p>
              {/* Social on brand column - mobile */}
              <div className="flex gap-2 mt-6 lg:mt-8">
                {social.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 text-white/80 hover:bg-[var(--color-gold)] hover:text-[var(--color-primary)] transition"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick links - 2 cols */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8 lg:gap-12">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">
                  Explore
                </h3>
                <ul className="space-y-2.5">
                  {quickLinksCol1.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-white/85 text-sm hover:text-[var(--color-gold)] transition"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">
                  More
                </h3>
                <ul className="space-y-2.5">
                  {quickLinksCol2.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-white/85 text-sm hover:text-[var(--color-gold)] transition"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">
                Get in touch
              </h3>
              <div className="space-y-4">
                <a
                  href="https://maps.google.com/?q=Vishwanathapuram+Shencottai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 items-start text-white/85 hover:text-[var(--color-gold)] transition group"
                >
                  <HiLocationMarker className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                  <span className="text-sm">Vishwanathapuram, Shencottai, Tamil Nadu</span>
                </a>
                <a
                  href="tel:+918152815281"
                  className="flex gap-3 items-center text-white/85 hover:text-[var(--color-gold)] transition"
                >
                  <HiPhone className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                  <span className="text-sm">+91 8152 8152 81</span>
                </a>
                <a
                  href="mailto:info@treasureilandcbseschool.com"
                  className="flex gap-3 items-center text-white/85 hover:text-[var(--color-gold)] transition break-all"
                >
                  <HiMail className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                  <span className="text-sm">info@treasureilandcbseschool.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/60">
              <p>© {currentYear} Treasure Iland International School</p>
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setTermsOpen(true)}
                  className="hover:text-[var(--color-gold)] transition"
                >
                  Terms of Use
                </button>
                <span className="hidden sm:inline" aria-hidden>·</span>
                <button
                  type="button"
                  onClick={() => setPrivacyOpen(true)}
                  className="hover:text-[var(--color-gold)] transition"
                >
                  Privacy Policy
                </button>
                <span className="hidden sm:inline" aria-hidden>·</span>
                <span>
                  By{" "}
                  <a
                    href="https://pixdotsolutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-gold)] hover:underline"
                  >
                    Pixdot
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {termsOpen && (
          <Modal
            key="terms"
            title="Terms of Use"
            content="Terms content here..."
            onClose={() => setTermsOpen(false)}
          />
        )}
        {privacyOpen && (
          <Modal
            key="privacy"
            title="Privacy Policy"
            content="Privacy content here..."
            onClose={() => setPrivacyOpen(false)}
          />
        )}
      </AnimatePresence>
    </footer>
  )
}
