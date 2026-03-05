import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi'
const navLinks = [
  { to: '/teaching-methodology', label: 'Teaching Methodology' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/blog', label: 'Blog' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact Us' },
]

const aboutDropdown = [
  { to: '/about', label: 'About Us' },
  { to: '/mandatory-disclosure', label: 'Mandatory Disclosure' },
]


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const location = useLocation()
  const isAboutActive = aboutDropdown.some((item) => location.pathname === item.to)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#94DCF2]/50 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2.5 sm:px-6 sm:py-3 lg:px-8" aria-label="Main navigation">
        <NavLink to="/" className="flex items-center shrink-0">
          <img
            src="/logo-new.png"
            alt="Treasure Iland International School"
            className="h-12 w-auto object-contain sm:h-14"
          />
        </NavLink>

        <div className="hidden items-center gap-0.5 lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? 'bg-[#94DCF2]/30 text-[#2457A7]'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-[#1B93D1]'
              }`
            }
          >
            Home
          </NavLink>
          {/* About dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <span
              className={`flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition ${
                isAboutActive
                  ? 'bg-[#94DCF2]/30 text-[#2457A7]'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-[#1B93D1]'
              }`}
            >
              About
              <HiChevronDown
                className={`h-4 w-4 transition-transform ${aboutOpen ? 'rotate-180' : ''}`}
              />
            </span>
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full z-50 mt-1 min-w-[200px] rounded-xl border border-[#94DCF2]/40 bg-white py-2 shadow-lg"
                >
                  {aboutDropdown.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-sm font-medium transition ${
                          isActive
                            ? 'bg-[#94DCF2]/20 text-[#2457A7]'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#1B93D1]'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {navLinks.map((link) => {
            const isContact = link.to === '/contact'
            return (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isContact
                    ? 'ml-1 rounded-lg bg-[#2457A7] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1B93D1]'
                    : `rounded-lg px-3 py-2 text-sm font-medium transition ${
                        isActive
                          ? 'bg-[#94DCF2]/30 text-[#2457A7]'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-[#1B93D1]'
                      }`
                }
              >
                {link.label}
              </NavLink>
            )
          })}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="relative z-50 overflow-hidden border-t border-[#94DCF2]/50 bg-white lg:hidden"
            >
            <div className="flex flex-col gap-0.5 px-4 py-4">
              <NavLink
                to="/"
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 font-medium ${
                    isActive ? 'bg-[#94DCF2]/20 text-[#2457A7]' : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                Home
              </NavLink>
              {aboutDropdown.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 font-medium ${
                      isActive ? 'bg-[#94DCF2]/20 text-[#2457A7]' : 'text-gray-700 hover:bg-gray-100'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              {navLinks.map((link) => {
                const isContact = link.to === '/contact'
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      isContact
                        ? 'rounded-lg bg-[#2457A7] px-4 py-3 font-semibold text-white hover:bg-[#1B93D1]'
                        : `rounded-lg px-4 py-3 font-medium ${
                            isActive ? 'bg-[#94DCF2]/20 text-[#2457A7]' : 'text-gray-700 hover:bg-gray-100'
                          }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              })}
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
