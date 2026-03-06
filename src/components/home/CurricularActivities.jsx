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
    <section className="relative py-14 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-[#f4f8ff]" aria-labelledby="curricular-heading">

      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-[color:color-mix(in_srgb,var(--color-accent)_20%,transparent)] blur-[120px] rounded-full" aria-hidden="true"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-[color:color-mix(in_srgb,var(--color-accent)_20%,transparent)] blur-[120px] rounded-full" aria-hidden="true"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transitionLite}
          viewport={viewportLite}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 id="curricular-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
            Curricular Activities
          </h2>

          <div className="mx-auto mt-4 w-20 h-[4px] bg-[var(--color-gold)] rounded-full"></div>

          <p className="mt-4 sm:mt-6 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base lg:text-lg">
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

          {/* Left Arrow - hidden on small screens, slider dots used instead */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            aria-label="Previous slide"
            className="absolute left-0 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl p-2 sm:p-3 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition"
          >
            <HiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            aria-label="Next slide"
            className="absolute right-0 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl p-2 sm:p-3 rounded-full hover:bg-[var(--color-primary)] hover:text-white transition"
          >
            <HiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <Slider ref={sliderRef} {...settings}>

            {activities.map((item, i) => (

              <div key={i} className="px-4">

                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative rounded-3xl overflow-hidden shadow-xl cursor-pointer"
                >

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[260px] sm:h-[300px] md:h-[340px] lg:h-[360px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Glass Card Content */}
                  <div className="absolute bottom-0 p-6 text-white backdrop-blur-md">

                    <h3 className="text-2xl font-semibold text-gradient mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-200 leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 border-2 border-[var(--color-gold)] rounded-3xl"></div>

                </motion.div>

              </div>

            ))}

          </Slider>
        </motion.div>
      </div>
    </section>
  )
}