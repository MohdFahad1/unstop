"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  FaChevronLeft,
  FaChevronRight,
  FaRegHeart,
  FaUserAlt,
  FaClock,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const opportunities = [
  {
    id: 1,
    banner: "/carousal1.png",
    org: "Jyesta Corporate Entity",
    mode: "In Office",
    cost: "Free",
    title: "Operation Internship",
    registered: 423,
    timeLeft: "15 hours left",
    proLabel: null,
  },
  {
    id: 2,
    banner: "/carousal2.png",
    org: "Unstop",
    mode: "In Office",
    cost: "Free",
    title: "Unstop Campus Ambassador Program",
    registered: 1713,
    timeLeft: "22 days left",
    proLabel: null,
  },
  {
    id: 3,
    banner: "/carousal3.png",
    org: "Unstop Pro",
    mode: null,
    cost: null,
    title: "Unstop Pro – Fast track to your dream job!",
    registered: null,
    timeLeft: null,
    proLabel: "Unstop Pro",
    cta: "Go Pro Now",
  },
  {
    id: 4,
    banner: "/carousal4.png",
    org: "Nestlé Genesis League",
    mode: "Online",
    cost: "Free",
    title: "Grab PPIs & Scholarships worth upto INR 5 Lakhs",
    registered: 3560,
    timeLeft: "9 days left",
    proLabel: null,
  },
];

const FeaturedOpportunities = () => {
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
    <section className="py-12 bg-gray-50 px-5 md:px-32">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-end gap-2">
            <div>
              <div className="flex items-end gap-3">
                <h2 className="text-3xl font-semibold mb-3">
                  Featured Opportunities
                </h2>
                <Image
                  src="/featured.png"
                  alt="mascots"
                  width={102}
                  height={102}
                />
              </div>
              <p>
                Check out the curated opportunities handpicked for you from top
                organizations.
              </p>
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="bg-white p-2 rounded-full shadow hover:bg-blue-800 group  duration-300 cursor-pointer"
            >
              <FaChevronLeft
                size={20}
                className="group-hover:text-white duration-300"
              />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="bg-white p-2 rounded-full shadow hover:bg-blue-800  duration-300 cursor-pointer group"
            >
              <FaChevronRight
                size={20}
                className="group-hover:text-white duration-300"
              />
            </button>
          </div>
        </div>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {opportunities.map((opp) => (
              <div key={opp.id} className="px-2 cursor-pointer group h-full">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm h-[370px]">
                  <div className="relative">
                    <Image
                      src={opp.banner}
                      alt={opp.title}
                      width={400}
                      height={200}
                      className="object-cover w-full h-48"
                    />
                    <FaRegHeart
                      className="absolute top-[110%] right-3 text-slate-400"
                      size={20}
                    />
                    <div className="absolute right-3 top-[155%] group-hover:bg-blue-700 duration-300 rounded-full size-10 ">
                      <div className="flex items-center justify-center w-full h-full">
                        <FaArrowRightLong
                          className=" text-slate-400 group-hover:text-white duration-300 -rotate-45"
                          size={20}
                        />
                      </div>
                    </div>
                    {opp.proLabel && (
                      <span className="absolute top-3 left-3 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        {opp.proLabel}
                      </span>
                    )}
                  </div>

                  <div className="p-4 space-y-2">
                    {opp.org && (
                      <div className="text-sm text-gray-500">{opp.org}</div>
                    )}
                    <h3 className="font-semibold text-lg group-hover:text-blue-700 transition">
                      {opp.title}
                    </h3>
                    {opp.mode && (
                      <div className="flex items-center text-sm text-gray-600 gap-2">
                        <span>{opp.mode}</span>
                        <span>·</span>
                        <span>{opp.cost}</span>
                      </div>
                    )}
                    <div className="flex items-center text-sm text-gray-600 gap-4 mt-2">
                      {opp.registered != null && (
                        <div className="flex items-center gap-1">
                          <FaUserAlt size={14} />
                          <span>
                            {opp.registered.toLocaleString()} Registered
                          </span>
                        </div>
                      )}
                      {opp.timeLeft && (
                        <div className="flex items-center gap-1">
                          <FaClock size={14} />
                          <span>{opp.timeLeft}</span>
                        </div>
                      )}
                    </div>
                    {opp.cta && (
                      <button className="mt-3 inline-block text-blue-500 rounded-lg text-sm hover:bg-blue-700">
                        {opp.cta}
                      </button>
                    )}
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

export default FeaturedOpportunities;
