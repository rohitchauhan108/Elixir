"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/category";
import Divider from "../Divider";

// Filter only veterinary categories
const vetCategories = categories.filter((cat) =>
  cat.slug.startsWith("veterinary")
);

export default function VeterinaryProducts() {
  return (
    <section className="py-16 px-4 bg-[#F7F9FC]">
      {/* Heading */}
      {/* <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold mb-2 text-[#1a1a1a]">
          Veterinary Categories
        </h2>
       <Divider/>
      </div> */}
      <div className="relative max-w-6xl mx-auto text-center mb-8">
        {/* Left decorative image */}
        <img
          src="/bg-1.webp"
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute -top-7 left-64 w-24 h-auto z-0 pointer-events-none"
        />

        {/* Heading */}
        <h2 className="relative z-10 text-3xl font-bold mb-2">Veterinary Categories</h2>

        {/* Right decorative image */}
        <img
          src="/bg-2.webp"
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute -top-7 right-60 w-24 h-auto z-0 pointer-events-none"
        />

        {/* Divider */}
        <div className="relative z-10">
          <Divider />
        </div>
      </div>

      {/* Cards */}
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 
  justify-center"
      >
        {vetCategories.map((item) => (
          <div
            key={item.slug}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <div className="relative w-full h-32">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 text-center">
              <h3 className="text-md font-semibold text-[#1a1a1a] mb-4">
                {item.title}
              </h3>

              <Link
                href={item.buttonLink}
                className="inline-block text-sm px-5 py-2 bg-[#009136] text-white font-medium rounded-lg
          transform transition-all duration-300 hover:scale-95"
              >
                View Products
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
