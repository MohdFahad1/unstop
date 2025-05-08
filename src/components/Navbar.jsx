import Link from "next/link";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { IoBagAddOutline } from "react-icons/io5";

const navLinks = [
  { name: "Internships", href: "/internships" },
  { name: "Jobs", href: "/jobs" },
  { name: "Competitions", href: "/competitions" },
  { name: "Mentorships", href: "/mentorships" },
  { name: "Practice", href: "/practice" },
];

const Navbar = () => {
  return (
    <header className="bg-white border-b-1 border-gray-300 sticky top-0 z-[999]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/">
            <span className="flex items-center">
              <Image src="/logo.png" alt="Unstop" width={100} height={32} />
            </span>
          </Link>
          <div className="relative">
            <button
              type="submit"
              className="left-2 absolute top-1/2 transform -translate-y-1/2"
            >
              <IoSearch color="gray" size={24} />
            </button>
            <input
              type="text"
              placeholder="Search Opportunities"
              className="w-64 px-4 pl-9 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-600"
            />
          </div>
        </div>

        <nav className="hidden lg:flex space-x-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:bg-slate-100 rounded-full px-4 py-3 duration-300"
            >
              <span className="text-gray-700 font-medium">{link.name}</span>
            </Link>
          ))}
          <div className="relative group hover:bg-slate-100 rounded-full px-4 py-3 cursor-pointer">
            <button className="flex items-center text-gray-700 font-medium focus:outline-none cursor-pointer">
              More
              <span className="ml-1">▾</span>
            </button>
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/login">
            <span className="px-4 py-3 text-white bg-[#0073E6] rounded-full hover:bg-[#0049e6] duration-300">
              Login
            </span>
          </Link>
          <Link href="/host">
            <span className="px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 flex items-center space-x-1">
              <span className="text-xl">+</span>
              <span>Host</span>
            </span>
          </Link>
          <Link
            href="/business"
            className="px-4 py-2 bg-[#FFF6D9] text-gray-900 rounded-full hover:bg-[#fbedbd] border-1 border-yellow-500 font-medium flex items-center gap-2 duration-300"
          >
            <IoBagAddOutline size={24} color="gray" />
            <span className="">For Business</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
