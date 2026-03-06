import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight, HiX } from "react-icons/hi";
import galleryData from "../data/galleryData.json";

const { categories, images: galleryImages } = galleryData;

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [index, setIndex] = useState(null);

  const filtered =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const next = () =>
    setIndex((prev) => (prev + 1) % galleryImages.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );

  return (
    <article aria-label="Photo gallery page">
      {/* HERO */}
      <section className="relative min-h-[280px] sm:h-[340px] md:h-[400px] lg:h-[420px] flex items-center justify-center text-center text-white" aria-label="Gallery banner">
        <img
          src="https://images.unsplash.com/photo-1580582932707-19a4b50308ab?q=80&w=1920"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-primary)_90%,black),color-mix(in_srgb,var(--color-accent)_70%,transparent),color-mix(in_srgb,var(--color-gold)_55%,transparent))]" aria-hidden="true" />
        <div className="relative z-10 max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-light">School Gallery</h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/90">
            Explore moments from campus life, learning activities and school events.
          </p>
        </div>

      </section>

      {/* FILTERS */}
      <section className="py-10 sm:py-14 md:py-16" aria-label="Gallery categories">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">

            {categories.map((cat) => (

              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
                  filter === cat
                    ? "bg-[var(--color-accent)] text-white shadow"
                    : "bg-gray-100 text-gray-700 hover:bg-[color:color-mix(in_srgb,var(--color-accent)_20%,white)]"
                }`}
              >
                {cat}
              </button>

            ))}

          </div>

          {/* GRID */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

            {filtered.map((img, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => setIndex(galleryImages.indexOf(img))}
              >

                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition"></div>

                {/* Title */}

                <div className="absolute bottom-4 left-4 right-4">

                  <span className="bg-[var(--color-accent)] text-white text-xs px-3 py-1 rounded-full">
                    {img.category}
                  </span>

                  <p className="text-white font-semibold mt-2 opacity-0 group-hover:opacity-100 transition">
                    {img.alt}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* LIGHTBOX */}

      <AnimatePresence>

        {index !== null && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          >

            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setIndex(null)}
            >
              <HiX />
            </button>

            <button
              className="absolute left-6 text-white text-4xl"
              onClick={prev}
            >
              <HiChevronLeft />
            </button>

            <img
              src={galleryImages[index].src}
              className="max-h-[85vh] max-w-[90%] rounded-xl shadow-2xl"
            />

            <button
              className="absolute right-6 text-white text-4xl"
              onClick={next}
            >
              <HiChevronRight />
            </button>

          </motion.div>

        )}

      </AnimatePresence>
    </article>
  );
}