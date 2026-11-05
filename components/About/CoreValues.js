"use client";
import Divider from "../Divider";

const values = [
  {
    title: "Quality First",
    desc: "Every product meets strict safety and performance standards.",
    bg: "from-green-400 to-green-600",
  },
  {
    title: "Integrity",
    desc: "We stand by transparency, trust, and ethical practices.",
    bg: "from-blue-400 to-blue-600",
  },
  {
    title: "Innovation",
    desc: "Continuously developing smarter, more effective solutions.",
    bg: "from-purple-400 to-purple-600",
  },
  {
    title: "Customer Wellbeing",
    desc: "Your health and satisfaction drive everything we do.",
    bg: "from-orange-400 to-orange-600",
  },
  {
    title: "Sustainability",
    desc: "Respecting nature while building a healthier future.",
    bg: "from-teal-400 to-teal-600",
  },
  {
    title: "Tradition + Technology",
    desc: "Merging old-world knowledge with new-age science.",
    bg: "from-pink-400 to-pink-600",
  },
];

export default function CoreValues() {
  return (
    <section className="py-16 bg-[#EFF5FA] px-6 md:px-12 lg:px-24 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-5">
        Our Core Values
      </h2>
      <Divider />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {values.map((item, index) => (
          <div
            key={index}
            className={`
            relative p-6 hover:border-[2px] shadow-sm transition-all duration-500
            rounded-tl-2xl rounded-br-2xl rounded-tr-none rounded-bl-none
            bg-gradient-to-br ${item.bg} border-transparent group overflow-hidden
          `}
          >
            <div
              className="absolute inset-0 bg-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></div>

            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-500 group-hover:text-gray-800">
                {item.title}
              </h3>
              <p className="text-white text-base transition-colors duration-500 group-hover:text-gray-600">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
