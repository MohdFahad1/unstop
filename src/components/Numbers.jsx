import React from "react";

const numbers = [
  { id: 1, number: "5k+", title: "Students Enrolled" },
  { id: 2, number: "2.5k+", title: "Courses Published" },
  { id: 3, number: "1k+", title: "Certified Mentors" },
  { id: 4, number: "100+", title: "Skills Developed" },
];

const NumberSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-5 md:px-32 bg-white">
      <h1 className="text-3xl font-semibold text-center mb-5">Our Numbers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {numbers.map((item) => (
          <div key={item.id} className="p-6 bg-gray-100 rounded-xl text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              {item.number}
            </div>
            <div className="text-lg font-semibold text-gray-600">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumberSection;
