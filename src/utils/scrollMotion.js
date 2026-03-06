/**
 * Lite scroll-triggered animation config for Framer Motion.
 * Mobile-friendly: triggers when ~20% visible, subtle movement, once only.
 */

export const viewportLite = {
  once: true,
  amount: 0.18,
  margin: '0px 0px -30px 0px',
}

export const viewportLiteStrict = {
  once: true,
  amount: 0.25,
}

export const transitionLite = {
  duration: 0.5,
  ease: [0.25, 0.46, 0.45, 0.94],
}

export const transitionLiteSlow = {
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94],
}

/** Fade up - small Y for mobile */
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

/** Fade up a bit more for section headings */
export const fadeUpHeading = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
}

/** Fade from left */
export const fadeLeft = {
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0 },
}

/** Fade from right */
export const fadeRight = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
}

/** Fade in only */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

/** Stagger container for children */
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const staggerContainerSlow = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}
