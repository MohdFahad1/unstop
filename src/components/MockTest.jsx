"use client";

import { useState, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CATEGORIES = ["Tech", "Management", "General"];

const TESTS = [
  // Tech
  {
    id: 1,
    category: "Tech",
    banner: "/tech.png",
    title: "Frontend Developer",
    desc: "Creates engaging, responsive web interfaces.",
  },
  {
    id: 2,
    category: "Tech",
    banner: "/tech2.png",
    title: "UX Designer",
    desc: "Designs user-friendly, engaging digital experiences.",
  },
  {
    id: 3,
    category: "Tech",
    banner: "/tech3.png",
    title: "Machine Learning Engineer",
    desc: "Builds and optimizes AI-driven learning models.",
  },
  {
    id: 4,
    category: "Tech",
    banner: "/tech4.png",
    title: "QA Engineer",
    desc: "Ensures software quality through testing and debugging.",
  },
  {
    id: 5,
    category: "Tech",
    banner: "/tech5.png",
    title: "Backend Developer",
    desc: "Implements server-side logic, databases, and APIs.",
  },

  // Management
  {
    id: 6,
    category: "Management",
    banner: "/tech3.png",
    title: "Project Manager",
    desc: "Plans, executes, and closes projects on time and budget.",
  },
  {
    id: 7,
    category: "Management",
    banner: "/tech.png",
    title: "Product Manager",
    desc: "Defines product roadmaps and aligns features with market needs.",
  },
  {
    id: 8,
    category: "Management",
    banner: "/tech5.png",
    title: "Operations Manager",
    desc: "Oversees daily operations and process improvements.",
  },
  {
    id: 9,
    category: "Management",
    banner: "/tech2.png",
    title: "HR Manager",
    desc: "Manages recruitment, training, and employee relations.",
  },
  {
    id: 10,
    category: "Management",
    banner: "/tech4.png",
    title: "Business Analyst",
    desc: "Gathers requirements and delivers data-driven insights.",
  },

  // General
  {
    id: 11,
    category: "General",
    banner: "/tech5.png",
    title: "Aptitude Test",
    desc: "Evaluates logical reasoning, quantitative ability, and data interpretation.",
  },
  {
    id: 12,
    category: "General",
    banner: "/tech3.png",
    title: "Verbal Ability",
    desc: "Assesses grammar, vocabulary, and reading comprehension skills.",
  },
  {
    id: 13,
    category: "General",
    banner: "/tech4.png",
    title: "Logical Reasoning",
    desc: "Tests critical thinking and problem-solving patterns.",
  },
  {
    id: 14,
    category: "General",
    banner: "/tech2.png",
    title: "Quantitative Aptitude",
    desc: "Measures numerical ability, shortcuts, and speed.",
  },
  {
    id: 15,
    category: "General",
    banner: "/tech.png",
    title: "Data Interpretation",
    desc: "Checks your skill in analyzing and presenting data.",
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

const MockTest = () => {
  const [activeCat, setActiveCat] = useState("Tech");
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

  const filtered = TESTS.filter((t) => t.category === activeCat);

  return (
    <section className="py-12 bg-white px-5 md:px-32">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">
            AI-Powered <span className="text-blue-600">Mock Tests</span>
          </h2>
          <p className="text-gray-600 mt-1">
            Master your concepts with AI-Powered full-length mock tests for 360°
            preparation!
          </p>
        </div>
        <Link
          href="/mock-tests"
          className="text-blue-600 hover:underline flex items-center"
        >
          View all
          <FaArrowRightLong className="-rotate-45 ml-2" />
        </Link>
      </div>

      <div className="flex space-x-3 mb-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={`px-4 py-2 rounded-full border cursor-pointer ${
              activeCat === cat
                ? "bg-white text-gray-900 border-gray-300"
                : "bg-gray-100 text-gray-600 border-transparent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="relative">
        <PrevArrow onClick={() => sliderRef.current?.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current?.slickNext()} />

        <Slider ref={sliderRef} {...settings}>
          {filtered.map((test) => (
            <div key={test.id} className="px-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer group h-[300px]">
                <Image
                  src={test.banner}
                  alt={test.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-40"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-medium">{test.title}</h3>
                  <p className="text-sm text-gray-600">{test.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium">
                      Start Test
                    </span>
                    <FaArrowRightLong className="text-gray-400 -rotate-45" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MockTest;
