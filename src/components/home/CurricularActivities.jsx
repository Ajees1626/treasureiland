import { useRef } from "react"
import Slider from "react-slick"
import { motion } from "framer-motion"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

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
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-[#f4f8ff]">

      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#3CB5E5]/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#2457A7]/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f3c88]">
            Curricular Activities
          </h2>

          <div className="mx-auto mt-4 w-20 h-[4px] bg-[#1B93D1] rounded-full"></div>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
            Learning goes beyond classrooms. Our students participate in creative,
            athletic and leadership programs that shape their future.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl p-3 rounded-full hover:bg-[#2457A7] hover:text-white transition"
          >
            <HiChevronLeft size={24}/>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white shadow-xl p-3 rounded-full hover:bg-[#2457A7] hover:text-white transition"
          >
            <HiChevronRight size={24}/>
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
                    className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  {/* Glass Card Content */}
                  <div className="absolute bottom-0 p-6 text-white backdrop-blur-md">

                    <h3 className="text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-200 leading-relaxed">
                      {item.desc}
                    </p>

                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 border-2 border-[#1B93D1] rounded-3xl"></div>

                </motion.div>

              </div>

            ))}

          </Slider>
        </div>
      </div>
    </section>
  )
}