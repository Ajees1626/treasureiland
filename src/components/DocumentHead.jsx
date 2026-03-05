import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'Treasure Iland International School'
const BASE_TITLE = `${SITE_NAME} | CBSE School Shencottai – treasureilandcbseschool.com`

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

export default function DocumentHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = routeTitles[pathname] || BASE_TITLE
  }, [pathname])

  return null
}
