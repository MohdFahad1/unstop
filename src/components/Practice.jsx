"use client";

import { useState } from "react";
import { IoCodeSlash } from "react-icons/io5";
import { CgList } from "react-icons/cg";
import { LuClipboardCheck } from "react-icons/lu";
import { IoCheckmarkDone } from "react-icons/io5";

import { FaArrowRightLong } from "react-icons/fa6";

const cards = [
  {
    id: 1,
    title: "Coding Practice",
    desc: "Level up your coding skills by practicing the hiring questions.",
    icon: <IoCodeSlash size={35} />,
    linkText: "400+ Questions",
    color: "#9BC9FF",
  },
  {
    id: 2,
    title: "Interview Preparation",
    desc: "Crack top companies in just 5 days.",
    icon: <CgList size={35} />,
    linkText: "20+ Companies",
    color: "#FFB1CC",
  },
  {
    id: 3,
    title: "Projects",
    desc: "Projects epitomize perfect synergy for success.",
    icon: <LuClipboardCheck size={35} />,
    linkText: "15+ Projects",
    color: "#EBE8FD",
  },
  {
    id: 4,
    title: "Skill Based Assessments",
    desc: "Assess your skills and get ahead of the curve.",
    icon: <IoCheckmarkDone size={35} />,
    linkText: "2000+ Questions",
    color: "#FFF1CE",
  },
];

const PracticeSection = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-12 px-32 bg-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">
            Practice Coding & Ace Hiring Assessments
          </h2>
          <p className="text-gray-600 mt-1">
            Level up your coding skills by practicing the hiring assessments of
            your dream companies & ace your placement game!
          </p>
        </div>
        <a
          href="/practice"
          className="text-blue-600 hover:underline flex items-center text-sm"
        >
          View More
          <span className="-rotate-45 inline-block ml-2">
            <FaArrowRightLong />
          </span>
        </a>
      </div>

      <div className="flex gap-4">
        {cards.map((c) => {
          const isHovered = hovered === c.id;
          return (
            <div
              key={c.id}
              onMouseEnter={() => setHovered(c.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                flex: isHovered || c.isLarge ? 2 : 1,
                backgroundColor: isHovered ? `${c.color}` : "#ffffff",
              }}
              className={`
                transition-all duration-300 ease-in-out cursor-pointer
                bg-white bg-cover bg-center rounded-xl p-6
                flex flex-col justify-between border-1 border-gray-400
                ${c.isLarge && hovered === null ? "flex-[2]" : ""}
              `}
            >
              <div
                className="flex items-center justify-center size-18 rounded-full"
                style={{
                  backgroundColor: isHovered ? "#ffffff" : c.color,
                }}
              >
                {c.icon}
              </div>
              <div className="mt-4 flex-1">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{c.desc}</p>
              </div>
              <div className="mt-4 flex items-center text-gray-800 font-medium">
                <span>{c.linkText}</span>
                <span className="ml-1 -rotate-45 inline-block">
                  <FaArrowRightLong />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PracticeSection;
