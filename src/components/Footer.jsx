"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Unstop Feedback"],
  },
  {
    title: "Product",
    links: ["Hackathons", "Competitions", "Jobs", "Internships", "Quizzes"],
  },
  {
    title: "For Candidates",
    links: ["Explore", "Practice", "Mentorship", "Certification"],
  },
  {
    title: "For Recruiters",
    links: ["Hire With Us", "Our Clients"],
  },
  {
    title: "Support",
    links: ["Help & Support", "Contact Us", "FAQs"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#153460] text-white py-10 px-32 text-sm">
      <div className="flex flex-wrap justify-between gap-y-8 border-b border-gray-300 pb-8">
        <div className="max-w-xs">
          <Image
            src="/logo-bg.png"
            alt="Unstop Logo"
            width={100}
            height={32}
            className="text-xl mix-blend-lighten"
          />
          <p className="mt-4">
            Unstop is a community engagement and hiring platform designed for
            students and graduates to unlock opportunities, showcase talent, and
            get hired.
          </p>
          <div className="flex gap-4 mt-4 text-lg ">
            <FaInstagram className="hover:text-black cursor-pointer" />
            <FaLinkedin className="hover:text-black cursor-pointer" />
            <FaYoutube className="hover:text-black cursor-pointer" />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 w-full sm:w-auto">
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className=" font-semibold mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="/">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 text-xs text-gray-200 text-center">
        © {new Date().getFullYear()} Unstop. All rights reserved.
      </div>
    </footer>
  );
}
