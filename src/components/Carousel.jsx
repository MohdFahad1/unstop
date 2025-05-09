"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      src: "/carousal1.png",
      alt: "Slide 1",
    },
    {
      id: 2,
      src: "/carousal2.png",
      alt: "Slide 2",
    },
    {
      id: 3,
      src: "/carousal3.png",
      alt: "Slide 3",
    },
    {
      id: 4,
      src: "/carousal4.png",
      alt: "Slide 4",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + length) % length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % length);

  return (
    <div className="py-10 px-5 md:px-32">
      <div className="relative w-full overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full">
              <Image
                src={slide.src}
                alt={slide.alt}
                width={1200}
                height={400}
                className="object-cover w-full h-64 sm:h-80 md:h-96"
              />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow cursor-pointer hover:bg-gray-100"
        >
          <FaChevronLeft size={24} color="gray" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer"
        >
          <FaChevronRight size={24} color="gray" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`
              w-2 h-2 rounded-full
              ${idx === current ? "bg-blue-600" : "bg-gray-400"}
              transition-colors cursor-pointer
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
