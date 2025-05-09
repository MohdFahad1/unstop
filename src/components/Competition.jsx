"use client";

import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaUserAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const competitions = [
  {
    id: 1,
    banner: "/carousal1.png",
    mode: "online",
    cost: "Free",
    title: "Write to Rise – IELTS Blog Writing Challenge",
    org: "Ielts Leap",
    applied: 15,
  },
  {
    id: 2,
    banner: "/carousal2.png",
    mode: "Offline",
    cost: "Free",
    title: "Enable the Shakti – Pitch Competition",
    org: "Global Synergizers",
    applied: 16,
  },
  {
    id: 3,
    banner: "/carousal3.png",
    mode: "online",
    cost: "Free",
    title: "IIC B-Plan Pitch Competition",
    org: "National Institute of Technology (NIT), Durgapur",
    applied: 241,
  },
  {
    id: 4,
    banner: "/carousal3.png",
    mode: "online",
    cost: "Free",
    title: "Shadow Apocalypse CTF 2025",
    org: "SRM Institute of Science and Technology",
    applied: 171,
  },
];

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
    >
      <FaChevronLeft size={20} className="text-gray-600" />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
    >
      <FaChevronRight size={20} className="text-gray-600" />
    </button>
  );
}

const Competition = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-12 bg-white px-5 md:px-32">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Competitions</h2>
            <p className="text-gray-600">
              Explore the Competitions that are creating a buzz among your
              peers!
            </p>
          </div>
          <Link
            href="/competitions"
            className="text-blue-600 flex items-center hover:underline"
          >
            View all
            <FaArrowRightLong size={16} className="-rotate-45 ml-2" />
          </Link>
        </div>

        <div className="relative">
          <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
          <NextArrow onClick={() => sliderRef.current?.slickNext()} />

          <Slider ref={sliderRef} {...settings}>
            {competitions.map((c) => (
              <div key={c.id} className="px-2">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm h-[300px] flex flex-col hover:border-black border border-transparent cursor-pointer duration-300 group relative">
                  <div className="relative">
                    <Image
                      src={c.banner}
                      alt={c.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-40"
                    />
                    <div className="absolute top-3 left-3 flex space-x-1">
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {c.mode}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                        {c.cost}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-medium">{c.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{c.org}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <FaUserAlt size={12} />
                        <span>{c.applied} Applied</span>
                      </div>
                      <div className="group-hover:bg-blue-700 rounded-full size-10 flex items-center justify-center absolute top-[80%] right-5 duration-300">
                        <FaArrowRightLong
                          size={16}
                          className="text-gray-400 -rotate-45 group-hover:text-white duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Competition;
