"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const CARDS = [
  {
    title: "Quizzes",
    img: "/quiz.png",
    bg: "bg-blue-200",
  },
  {
    title: "Hackathons",
    img: "/hackathon.png",
    bg: "bg-green-200",
  },
  {
    title: "Scholarships",
    img: "/scholarship.png",
    bg: "bg-purple-200",
  },
  {
    title: "Conferences",
    img: "/conferences.png",
    bg: "bg-pink-100",
  },
  {
    title: "College Festivals",
    img: "/festivals.png",
    bg: "bg-yellow-200",
  },
];

const OpportunitySection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-5 md:px-32 bg-white space-y-12">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            Pick The Right Opportunity!
          </h2>
          <p className="text-gray-600 mt-1">
            Explore opportunities that best suit your skills and interests!
          </p>
        </div>
        <Link
          href="/opportunities"
          className="flex items-center text-blue-600 hover:underline"
        >
          Explore all
          <FaArrowRightLong className="-rotate-45 ml-2" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {CARDS.map(({ title, img, bg }) => (
          <div
            key={title}
            className={`relative overflow-hidden rounded-xl ${bg} h-40 cursor-pointer hover:-translate-y-2 duration-300`}
          >
            <Image
              src={img}
              alt={title}
              fill
              className="object-contain object-right-bottom transition-opacity duration-300"
            />
            <h3 className="absolute top-4 left-4 text-lg font-medium text-black">
              {title}
            </h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6 h-[300px]">
        <div className="bg-blue-50 rounded-xl flex flex-col items-center text-center space-y-6 cursor-pointer hover:-translate-y-2 duration-300 cols-span-1">
          <h3 className="text-xl font-semibold mt-5">Download Unstop App</h3>
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/mobile.png"
              alt="Google Play"
              height={250}
              width={400}
              className="absolute object-contain bottom-0 left-[25%]"
            />
          </div>
        </div>

        <div className="bg-yellow-50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 cols-span-3 cursor-pointer hover:-translate-y-2 duration-300 relative overflow-hidden">
          <div className="max-w-xs space-y-4">
            <h3 className="text-xl font-semibold">Refer &amp; Win</h3>
            <p className="text-gray-700">
              MacBook, iPhone, Apple Watch, AirPods, Cash Rewards and more!
            </p>
            <button className="inline-block bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">
              Get Started
            </button>
          </div>
          <Image
            src="/people.png"
            alt="Refer & Win"
            height={250}
            width={400}
            className="absolute bottom-0 right-0 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
