import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'Treasure Iland International School'
const BASE_TITLE = `${SITE_NAME} | CBSE School Shencottai – treasureilandcbseschool.com`
const BASE_URL = 'https://treasureilandcbseschool.com'

const routeTitles = {
  '/': `Home | ${BASE_TITLE}`,
  '/about': `About Us | ${BASE_TITLE}`,
  '/mandatory-disclosure': `Mandatory Disclosure | ${BASE_TITLE}`,
  '/teaching-methodology': `Teaching Methodology | ${BASE_TITLE}`,
  '/admissions': `Admissions | ${BASE_TITLE}`,
  '/blog': `News & Events | ${BASE_TITLE}`,
  '/gallery': `Gallery | ${BASE_TITLE}`,
  '/contact': `Contact Us | ${BASE_TITLE}`,
}

const routeMeta = {
  '/': {
    description: 'Treasure Iland International School – A Senior Secondary CBSE School in Vishwanathapuram, Shencottai. Admissions open, academics, facilities, and holistic education.',
    ogTitle: `${SITE_NAME} | CBSE School Shencottai`,
  },
  '/about': {
    description: 'Learn about Treasure Iland International School – our mission, vision, correspondent, principal, faculty, and journey as a CBSE school in Shencottai.',
    ogTitle: `About Us | ${SITE_NAME}`,
  },
  '/mandatory-disclosure': {
    description: 'Mandatory disclosures and official information for Treasure Iland International School, CBSE Shencottai.',
    ogTitle: `Mandatory Disclosure | ${SITE_NAME}`,
  },
  '/teaching-methodology': {
    description: 'Our teaching methodology, classroom environment, and student development approach at Treasure Iland International School.',
    ogTitle: `Teaching Methodology | ${SITE_NAME}`,
  },
  '/admissions': {
    description: 'Admissions open for 2026–2027. Eligibility, process, fee structure, and important dates for Treasure Iland International School.',
    ogTitle: `Admissions | ${SITE_NAME}`,
  },
  '/blog': {
    description: 'Latest news and events at Treasure Iland International School – CBSE Shencottai.',
    ogTitle: `News & Events | ${SITE_NAME}`,
  },
  '/gallery': {
    description: 'Photo gallery – campus, events, and learning at Treasure Iland International School.',
    ogTitle: `Gallery | ${SITE_NAME}`,
  },
  '/contact': {
    description: 'Contact Treasure Iland International School – address, phone, email, and visit us in Vishwanathapuram, Shencottai.',
    ogTitle: `Contact Us | ${SITE_NAME}`,
  },
}

const defaultMeta = {
  description: 'Treasure Iland International School – A Senior Secondary CBSE School in Vishwanathapuram, Shencottai. Quality education, admissions, and holistic development.',
  ogTitle: `${SITE_NAME} | CBSE School Shencottai`,
}

function setMeta(name, content) {
  const el = document.querySelector(`meta[name="${name}"]`)
  if (el) el.setAttribute('content', content || '')
}

function setOg(property, content) {
  const el = document.querySelector(`meta[property="${property}"]`)
  if (el) el.setAttribute('content', content || '')
}

export default function DocumentHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Title
    if (pathname.startsWith('/blog/news/')) {
      document.title = `News | ${BASE_TITLE}`
    } else if (pathname.startsWith('/blog/events/')) {
      document.title = `Event | ${BASE_TITLE}`
    } else {
      document.title = routeTitles[pathname] || BASE_TITLE
    }

    // Meta description and OG (per-route when available)
    const meta = routeMeta[pathname] || defaultMeta
    const desc = meta.description
    const ogTitle = meta.ogTitle
    const url = `${BASE_URL}${pathname}`

    setMeta('description', desc)
    setOg('og:title', ogTitle)
    setOg('og:description', desc)
    setOg('og:url', url)
  }, [pathname])

  return null
}
