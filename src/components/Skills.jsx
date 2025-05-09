"use client";

import Image from "next/image";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const SkillsSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-32">
      <div className="bg-white rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="relative bg-yellow-100">
          <Image
            src="/skills-left.png"
            alt="Learn & Level Up Your Skills"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
          <div className="absolute bottom-6 left-6 bg-white px-4 py-2 rounded-xl shadow">
            <span className="block text-xl font-bold">50k+</span>
            <span className="block text-sm text-gray-600">
              Students Preparing with Us
            </span>
          </div>
        </div>

        <div className="p-8 bg-gray-50 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Learn & Level Up Your Skills
          </h2>
          <p className="text-gray-600 mt-2">
            Select from a wide range of courses to upskill and advance your
            career!
          </p>

          <ul className="mt-6 flex items-center gap-8">
            {["50+ Courses", "Certificate", "Projects & Assignments"].map(
              (item) => (
                <li key={item} className="flex items-center">
                  <IoCheckmarkCircleOutline className="text-yellow-500 w-6 h-6" />
                  <span className="ml-3 text-gray-700">{item}</span>
                </li>
              )
            )}
          </ul>

          <button className="cursor-pointer mt-6 self-start px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
