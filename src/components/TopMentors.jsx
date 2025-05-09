"use client";

import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import {
  FaChevronLeft,
  FaChevronRight,
  FaBolt,
  FaTrophy,
} from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRightLong } from "react-icons/fa6";

const mentors = [
  {
    id: 1,
    name: "Vedansh Dubey",
    photo: "/man1.png",
    creds: "Senior Executive HR @Wipro | MBA @XIMB | Ex-TCS, Nestlé…",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Yash Patel",
    photo: "/man2.png",
    creds: "Strategy Manager @Parag Milk Foods | 300k+ Impressions…",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Shiri Agarwal",
    photo: "/woman.png",
    creds: "Product @Telstra | MBA @MDI Gurgaon ’24 | 34 Case Comps…",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Rutwik Borkar",
    photo: "/man3.png",
    creds: "Flipkart | Bain & Co. | Gold Medalist IIT Madras…",
    rating: 4.9,
  },
];

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
    >
      <FaChevronLeft className="text-gray-600" size={20} />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
    >
      <FaChevronRight className="text-gray-600" size={20} />
    </button>
  );
}

const TopMentorsSection = () => {
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
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Top Mentors</h2>
          <p className="text-gray-600 mt-1">
            In search of excellence? Explore the highest-rated mentors as
            recognized by the learner community.
          </p>
        </div>
        <Link
          href="/mentors"
          className="text-blue-600 hover:underline flex items-center"
        >
          View all
          <FaArrowRightLong className="-rotate-45 ml-2" />
        </Link>
      </div>

      <div className="relative">
        <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current?.slickNext()} />

        <Slider ref={sliderRef} {...settings}>
          {mentors.map((m) => (
            <div key={m.id} className="px-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm h-[340px] group relative">
                <div className="bg-purple-100 h-16 relative">
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-white px-2 py-1 rounded-full text-xs font-medium">
                    <FaBolt className="text-purple-600" /> Available
                  </div>
                  <FaTrophy className="absolute top-3 right-3 text-yellow-500" />
                </div>

                <div className="flex justify-center -mt-8">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    width={96}
                    height={96}
                    className="rounded-full border-4 border-white z-10"
                  />
                </div>

                <div className="p-4 text-center space-y-2">
                  <div className="flex justify-center items-center gap-1">
                    <h3 className="font-medium text-lg">{m.name}</h3>
                    <AiFillStar className="text-yellow-500" />
                    <span className="text-yellow-500">{m.rating}</span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {m.creds}
                  </p>
                  <button className="mt-2 px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TopMentorsSection;
