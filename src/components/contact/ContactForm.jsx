import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi'

const SUBJECT_OPTIONS = [
  'Admissions',
  'Transport',
  'General Enquiry',
  'Careers',
]

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}
const initialErrors = { fullName: '', email: '', phone: '', subject: '', message: '' }

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone) {
  return /^[\d\s+-]{10,}$/.test(phone.replace(/\s/g, ''))
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = { ...initialErrors }
    if (!form.fullName.trim()) newErrors.fullName = 'Full name is required.'
    if (!form.email.trim()) newErrors.email = 'Email is required.'
    else if (!validateEmail(form.email)) newErrors.email = 'Enter a valid email.'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required.'
    else if (!validatePhone(form.phone)) newErrors.phone = 'Enter a valid phone number.'
    if (!form.subject) newErrors.subject = 'Please select a subject.'
    if (!form.message.trim()) newErrors.message = 'Message is required.'

    setErrors(newErrors)
    if (Object.values(newErrors).some(Boolean)) return

    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left – Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#94DCF2]/40 bg-[#f8fbff] p-6 shadow-lg sm:p-8"
          >
            <h2 className="text-2xl font-bold text-[#2457A7] sm:text-3xl">
              Send us a Message
            </h2>
            <p className="mt-2 text-gray-600">
              Fill in the form and we will get back to you shortly.
            </p>
            {submitted ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 rounded-xl bg-[#2457A7]/10 p-4 text-[#2457A7] font-medium"
              >
                Thank you! Your message has been sent. We will contact you soon.
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={form.fullName}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-xl border px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#2457A7] focus:ring-offset-1 ${
                      errors.fullName ? 'border-red-400' : 'border-gray-300'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-xl border px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#2457A7] focus:ring-offset-1 ${
                      errors.email ? 'border-red-400' : 'border-gray-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-xl border px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#2457A7] focus:ring-offset-1 ${
                      errors.phone ? 'border-red-400' : 'border-gray-300'
                    }`}
                    placeholder="+91 98765 43210"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-xl border px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#2457A7] focus:ring-offset-1 ${
                      errors.subject ? 'border-red-400' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select subject</option>
                    {SUBJECT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`mt-1 w-full rounded-xl border px-4 py-3 transition focus:outline-none focus:ring-2 focus:ring-[#2457A7] focus:ring-offset-1 ${
                      errors.message ? 'border-red-400' : 'border-gray-300'
                    }`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#2457A7] px-6 py-4 font-semibold text-white shadow-md transition hover:bg-[#1B93D1] focus:outline-none focus:ring-2 focus:ring-[#2457A7] focus:ring-offset-2"
                >
                  Submit
                </button>
              </form>
            )}
          </motion.div>

          {/* Right – School contact details + map preview */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#94DCF2]/40 bg-[#f8fbff] p-6 shadow-lg sm:p-8"
          >
            <h3 className="text-xl font-bold text-[#2457A7]">School Contact Details</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex gap-3">
                <HiLocationMarker className="h-6 w-6 shrink-0 text-[#2457A7]" />
                <div>
                  <p className="font-medium text-gray-800">Address</p>
                  <p className="text-gray-600">
                    Vishwanathapuram, Shencottai – Tamil Nadu
                    <br />
                    <span className="text-sm">(Contact office for full address)</span>
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <HiPhone className="h-6 w-6 shrink-0 text-[#2457A7]" />
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <p className="text-gray-600">+91 8152 8152 81</p>
                </div>
              </li>
              <li className="flex gap-3">
                <HiMail className="h-6 w-6 shrink-0 text-[#2457A7]" />
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">info@treasureilandcbseschool.com</p>
                </div>
              </li>
              <li className="flex gap-3">
                <HiClock className="h-6 w-6 shrink-0 text-[#2457A7]" />
                <div>
                  <p className="font-medium text-gray-800">Office Hours</p>
                  <p className="text-gray-600">
                    Mon – Fri: 8:00 AM – 4:00 PM
                    <br />
                    Sat: 8:00 AM – 12:00 PM
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-8 overflow-hidden rounded-xl border border-[#94DCF2]/40 bg-gray-100 shadow-inner">
              <p className="bg-[#2457A7]/10 px-4 py-2 text-center text-sm font-medium text-[#2457A7]">
                Map preview – see full map below
              </p>
              <div className="flex h-40 items-center justify-center text-gray-400">
                <HiLocationMarker className="h-12 w-12" />
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}
