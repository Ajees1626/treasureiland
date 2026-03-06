import { useRef } from "react"
import Slider from "react-slick"
import { motion } from "framer-motion"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { viewportLite, transitionLite } from "../../utils/scrollMotion"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const activities = [
  {
    title: "Clubs & Societies",
    desc: "Students explore science clubs, robotics, debate and creative communities.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200",
  },
  {
    title: "Music & Arts",
    desc: "Creativity flourishes through music, painting, dance and theatre.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200",
  },
  {
    title: "Sports & Fitness",
    desc: "Football, athletics and fitness programs building teamwork.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200",
  },
  {
    title: "Leadership Programs",
    desc: "Programs that nurture confidence, leadership and responsibility.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200",
  },
]

export default function CurricularActivities() {

  const sliderRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <section className="relative py-12 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-[#f4f8ff]" aria-labelledby="curricular-heading">

      {/* Background Blur Effects - smaller on mobile */}
      <div className="absolute top-16 left-4 sm:top-20 sm:left-10 w-40 h-40 sm:w-72 sm:h-72 bg-[color:color-mix(in_srgb,var(--color-accent)_20%,transparent)] blur-[100px] sm:blur-[120px] rounded-full" aria-hidden="true"></div>
      <div className="absolute bottom-8 right-4 sm:bottom-10 sm:right-10 w-40 h-40 sm:w-72 sm:h-72 bg-[color:color-mix(in_srgb,var(--color-accent)_20%,transparent)] blur-[100px] sm:blur-[120px] rounded-full" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transitionLite}
          viewport={viewportLite}
          className="text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16"
        >
          <h2 id="curricular-heading" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gradient">
            Curricular Activities
          </h2>

          <div className="mx-auto mt-3 sm:mt-4 w-16 sm:w-20 h-[3px] sm:h-[4px] bg-[var(--color-gold)] rounded-full"></div>

          <p className="mt-3 sm:mt-4 md:mt-6 max-w-2xl mx-auto text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg px-1">
            Learning goes beyond classrooms. Our students participate in creative,
            athletic and leadership programs that shape their future.
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportLite}
          transition={{ ...transitionLite, delay: 0.08 }}
          className="relative"
        >

          {/* Arrows: hidden on mobile (use dots + swipe), visible from sm */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous slide"
            className="hidden sm:flex absolute left-0 sm:-left-2 md:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl p-2 md:p-3 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition touch-manipulation"
          >
            <HiChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next slide"
            className="hidden sm:flex absolute right-0 sm:-right-2 md:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl p-2 md:p-3 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition touch-manipulation"
          >
            <HiChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <Slider ref={sliderRef} {...settings}>

            {activities.map((item, i) => (

              <div key={i} className="px-2 sm:px-3 md:px-4">

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl cursor-pointer"
                >

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[220px] sm:h-[260px] md:h-[300px] lg:h-[340px] xl:h-[360px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" aria-hidden="true" />

                  {/* Glass Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 text-white backdrop-blur-md">

                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gradient mb-1 sm:mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {item.desc}
                    </p>

                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 border-2 border-[var(--color-gold)] rounded-2xl sm:rounded-3xl pointer-events-none" aria-hidden="true" />

                </motion.div>

              </div>

            ))}

          </Slider>
        </motion.div>
      </div>
    </section>
  )
}