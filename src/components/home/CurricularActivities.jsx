import { useRef } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const activities = [
  {
    title: 'Clubs & Societies',
    desc: 'Students explore science clubs, debate societies, robotics and creative thinking communities.',
    image: '/images/activities/club.jpg',
  },
  {
    title: 'Music & Arts',
    desc: 'Encouraging creativity through music, painting, dance and theatre performances.',
    image: '/images/activities/music.jpg',
  },
  {
    title: 'Sports & Fitness',
    desc: 'Football, basketball, athletics and fitness programs that build teamwork and discipline.',
    image: '/images/activities/sports.jpg',
  },
  {
    title: 'Leadership Programs',
    desc: 'Programs that develop leadership, responsibility and confidence among students.',
    image: '/images/activities/leadership.jpg',
  },
]

export default function CurricularActivities() {
  const sliderRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
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
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f3f7fd] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold text-[#1f3c88] md:text-4xl">
            Curricular Activities
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-16 rounded-full bg-[#1B93D1]" />
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 md:text-base">
            Learning goes beyond classrooms. Our students participate in creative,
            athletic and leadership programs that build confidence and skills.
          </p>
        </motion.div>

        {/* Manual arrows + Slider */}
        <div className="relative">
          <button
            type="button"
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-2 rounded-full bg-[#2457A7] p-2.5 text-white shadow-lg transition hover:bg-[#1B93D1] sm:-translate-x-4 sm:p-3"
            aria-label="Previous slide"
          >
            <HiChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            type="button"
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-2 rounded-full bg-[#2457A7] p-2.5 text-white shadow-lg transition hover:bg-[#1B93D1] sm:translate-x-4 sm:p-3"
            aria-label="Next slide"
          >
            <HiChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <Slider ref={sliderRef} {...settings}>
          {activities.map((item, index) => (
            <div key={index} className="px-3">
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-200">{item.desc}</p>
                </div>
              </motion.div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
