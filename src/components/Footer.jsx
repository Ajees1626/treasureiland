import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiX,
  HiAcademicCap,
  HiArrowRight,
} from "react-icons/hi"
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa"

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/mandatory-disclosure", label: "Mandatory Disclosure" },
  { to: "/teaching-methodology", label: "Teaching Methodology" },
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
    <footer className="bg-[var(--color-primary)] text-white mt-16 sm:mt-20" role="contentinfo">
      {/* CTA Strip */}
      <div className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-gold)] py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm items-center justify-center shrink-0">
                <HiAcademicCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gradient-light">
                  Admissions Open 2026–27
                </h2>
                <p className="text-white/90 text-sm sm:text-base mt-1">
                  Give your child the best CBSE education and future opportunities.
                </p>
              </div>
            </div>
            <Link
              to="/admissions"
              className="group inline-flex items-center gap-2 bg-white text-[var(--color-primary)] font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition whitespace-nowrap"
            >
              Apply for Admission
              <HiArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* School info - spans 5 cols on lg */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[var(--color-primary)] rounded-lg">
              <img
                src="/logo-new.png"
                alt="Treasure Iland International School"
                className="h-20 sm:h-24 w-auto bg-white p-3 rounded-xl shadow-lg object-contain"
              />
            </Link>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed mt-6 max-w-md">
              Treasure Iland International School provides quality CBSE education with focus on
              academic excellence, innovation and character development.
            </p>
            <p className="text-white/70 text-xs sm:text-sm mt-4 font-medium">
              CBSE Affiliation No: 1931016
            </p>
          </div>

          {/* Quick links - 4 cols */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group/link inline-flex items-center gap-2 text-white/90 text-sm hover:text-[var(--color-gold)] transition py-1 rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] focus:ring-offset-2 focus:ring-offset-[var(--color-primary)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] opacity-0 group-hover/link:opacity-100 transition shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - 3 cols */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-5">
              Contact
            </h3>
            <div className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 sm:p-6 space-y-4">
              <a
                href="https://maps.google.com/?q=Vishwanathapuram+Shencottai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 items-start text-white/90 hover:text-[var(--color-gold)] transition"
              >
                <HiLocationMarker className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                <span className="text-sm">
                  Vishwanathapuram, Shencottai, Tamil Nadu
                </span>
              </a>
              <a
                href="tel:+918152815281"
                className="flex gap-3 items-center text-white/90 hover:text-[var(--color-gold)] transition"
              >
                <HiPhone className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span className="text-sm">+91 8152 8152 81</span>
              </a>
              <a
                href="mailto:info@treasureilandcbseschool.com"
                className="flex gap-3 items-center text-white/90 hover:text-[var(--color-gold)] transition break-all"
              >
                <HiMail className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                <span className="text-sm">info@treasureilandcbseschool.com</span>
              </a>
              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                {social.map((item, i) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 text-white/90 hover:bg-[var(--color-gold)] hover:text-[var(--color-primary)] transition"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-white/70 order-2 sm:order-1">
              © {currentYear} Treasure Iland International School. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6 order-1 sm:order-2">
              <button
                type="button"
                onClick={() => setTermsOpen(true)}
                className="text-white/80 hover:text-[var(--color-gold)] transition underline-offset-2 hover:underline"
              >
                Terms of Use
              </button>
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="text-white/80 hover:text-[var(--color-gold)] transition underline-offset-2 hover:underline"
              >
                Privacy Policy
              </button>
              <span className="text-white/60">
                Developed by{" "}
                <a
                  href="https://pixdotsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-gold)] hover:underline font-medium"
                >
                  Pixdot
                </a>
              </span>
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
