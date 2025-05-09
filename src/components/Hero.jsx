import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const cards = [
  {
    title: "Internships",
    subtitle: "Gain Practical Experience",
    bg: "bg-[#9BE6C1]",
    img: "/img1.png",
  },
  {
    title: "Mentorships",
    subtitle: "Guidance From Top Mentors",
    bg: "bg-[#FEC192]",
    img: "/img2.png",
  },
  {
    title: "Jobs",
    subtitle: "Explore Diverse Careers",
    bg: "bg-[#9BC9FF]",
    img: "/img3.png",
  },
  {
    title: "Practice",
    subtitle: "Refine Skills Daily",
    bg: "bg-[#C8BBFF]",
    img: "/img4.png",
  },
  {
    title: "Competitions",
    subtitle: "Battle For Excellence",
    bg: "bg-[#FFDD80]",
    img: "/img5.png",
  },
  {
    title: "More",
    subtitle: "",
    bg: "bg-[#FFB1CC]",
    img: "/img1.png",
  },
];

const users = [
  {
    title: "Students and Professionals",
    subtitle:
      "Unlock Your Potential: Compete, Build Resume, Grow and get Hired!",
    img: "/img1.png",
  },
  {
    title: "Companies and Recruiters",
    subtitle:
      "Discover Right Talent: Hire, Engage, and Brand Like Never Before!",
    img: "/img2.png",
  },
  {
    title: "Colleges",
    subtitle:
      "Bridge Academia and Industry: Empower Students with Real-World Opportunities!",
    img: "/img3.png",
  },
];

const Hero = () => {
  return (
    <section className="py-8 bg-white px-5 md:px-32">
      <div className=" px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="w-[82%]">
          <h1 className="text-6xl font-semibold ">
            <span className="text-[#1C4980]">Unlock</span>{" "}
            <span className="text-gray-900">Your Career</span>
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Explore opportunities from across the globe to grow, showcase
            skills, gain CV points & get hired by your dream company.
          </p>
          <div className="inline-flex gap-2 items-center bg-[#EBE8FD] px-4 py-2 rounded-full mt-6">
            <Image
              src="/diamond.png"
              alt="Unstop logo"
              width={50}
              height={50}
            />
            <div className="flex flex-col ml-2">
              <span className="text-sm text-gray-500">Aditya</span>
              <span className="font-medium text-lg">Just Went Unstop Pro!</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 relative">
          <Image
            src={"/dummy1.png"}
            height={50}
            width={50}
            className="absolute -right-[50px] top-[38%]"
            alt="dummy"
          />
          <Image
            src={"/dummy2.png"}
            height={60}
            width={60}
            className="absolute -left-15 top-5"
            alt="dummy"
          />
          {cards.map(({ title, subtitle, bg, text, img }) => (
            <div
              key={title}
              className={`${bg} rounded-2xl p-6 flex flex-col justify-between text-[#212121] overflow-hidden relative h-[130px] hover:-translate-y-2 duration-300 cursor-pointer w-[330px]`}
            >
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                {subtitle && (
                  <p className="mt-1 text-sm w-[100px]">{subtitle}</p>
                )}
              </div>
              <div className="mt-4">
                <Image
                  src={img}
                  alt={title}
                  width={230}
                  height={230}
                  className="absolute -right-10 -bottom-10"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Who’s using Unstop?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {users.map(({ title, subtitle, img }) => (
              <div
                key={title}
                className="flex items-center bg-white border border-gray-200 rounded-xl p-6"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <Image
                    src={img}
                    alt={title}
                    width={120}
                    height={80}
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <button className="inline-flex text-gray-700 hover:text-blue-600 cursor-pointer duration-300 items-center gap-2">
              <span>Know How</span>
              <IoIosArrowDown size={20} />
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;
