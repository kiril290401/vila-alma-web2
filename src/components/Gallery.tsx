"use client";
import { images } from "@/lib/gallery/data";
import { useState, useEffect, useCallback } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const toPreload = [
      current,
      (current + 1) % images.length,
      (current - 1 + images.length) % images.length,
    ];
    toPreload.forEach((i) => {
      if (!loaded[i]) {
        const img = new window.Image();
        img.src = images[i];
        img.onload = () => setLoaded((prev) => ({ ...prev, [i]: true }));
      }
    });
  }, [current]);

  const navigate = useCallback(
    (dir: "next" | "prev") => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent((prev) =>
          dir === "next"
            ? (prev + 1) % images.length
            : (prev - 1 + images.length) % images.length
        );
        setIsTransitioning(false);
      }, 200);
    },
    [isTransitioning]
  );

  const goToSlide = (index: number) => {
    if (index === current || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section
      id="галерия"
      className="bg-fixed bg-cover bg-center min-h-screen py-16 flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/gallery/bg-gallery.webp')", backgroundColor: "#D8C7B6" }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center gap-8">

        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-white text-4xl md:text-5xl font-semibold">Галерия</h2>
          <p className="text-white max-w-xl mx-auto leading-relaxed">
            Потопете се в атмосферата на „Алма" чрез нашата галерия от снимки...
          </p>
        </div>

        {/* ── GRID — visible only on md+ ── */}
        <div className="hidden md:grid w-full grid-cols-2 lg:grid-cols-3 gap-3">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full overflow-hidden rounded-xl shadow-lg bg-black group"
              style={{ paddingBottom: "75%" /* 4:3 ratio */ }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Стая в къща за гости Алма Сопот ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover
                           transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* ── CAROUSEL — visible only on mobile ── */}
        <div className="w-full md:hidden">
          <div
            className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black"
            style={{ paddingBottom: "100%" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={current}
              src={images[current]}
              alt={`Стая в къща за гости Алма Сопот ${current + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              style={{ opacity: isTransitioning ? 0 : 1 }}
            />

            {!loaded[current] && (
              <div className="absolute inset-0 bg-gray-700 animate-pulse" />
            )}

            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/30 to-transparent pointer-events-none" />

            <button
              onClick={() => navigate("prev")}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20
                         bg-black/40 hover:bg-black/70 active:scale-95
                         text-white p-2.5 rounded-full backdrop-blur-sm transition-all duration-150"
              aria-label="Previous image"
            >
              <IoIosArrowBack size={22} />
            </button>

            <button
              onClick={() => navigate("next")}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20
                         bg-black/40 hover:bg-black/70 active:scale-95
                         text-white p-2.5 rounded-full backdrop-blur-sm transition-all duration-150"
              aria-label="Next image"
            >
              <IoIosArrowForward size={22} />
            </button>

            <div className="absolute bottom-3 left-3 bg-black/60 text-white
                            px-3 py-1 rounded-full text-xs font-medium z-20 backdrop-blur-sm">
              {current + 1} / {images.length}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 flex-wrap mt-5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-[#8B7355] w-8"
                    : "bg-white/50 hover:bg-white/80 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Gallery;