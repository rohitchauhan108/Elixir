"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  const features = [
    "Pharmaceutical Elixir Brand",
    "Ayurvedic & Herbal Products",
    "Nutraceutical product",
    "OTC Products",
    "Cosmetic product",
    "Surgical Products",
    "Orthopaedics products",
    "Repid test  card and strips"
    ,"biological reagents",
    "veterinary products",
    "Pharma APIs",
    "Medical devices",
  ];

  return (
    <section id="about" className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* ✅ Text Content (mobile pe upar, desktop pe left) */}
          <div className="order-1 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              About Elixir Far LLP
            </h2>

            {/* Divider with Logo */}
            <div className="flex items-center justify-center lg:justify-start my-4">
              <div className="w-[45px] sm:w-[55px] h-[2px] bg-gray-600"></div>
              <div className="mx-3 sm:mx-4">
                <Image
                  src="/Assets/logos/elixir-logo-main.png"
                  alt="Logo"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
              <div className="w-[45px] sm:w-[55px] h-[2px] bg-gray-600"></div>
            </div>

            <div className="shadow-xl p-5 relative">
              <p className=" text-base sm:text-lg text-red-700 mb-4 leading-relaxed text-justify sm:text-left">
              <Image
                src="/commas.png"
                alt=""
                width={40}
                height={40}
                aria-hidden="true"
                className="absolute top-1 -left-8 mr-2 inline-block h-22 w-22 align-middle"
              />
              Elixir Far LLP is engaged in the business of manufacturing,
              marketing, and exporting high-quality Medicines as Pharmaceutical Elixir Brand,
              Ayurvedic & Herbal Products, Nutraceutical product, OTC Products, Cosmetic product, Surgical Products, Orthopaedics products, Repid test  card and strips,biological reagents medical deives in addition also deals with veterinary products and Pharma APIs&rdquo;.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 sm:gap-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start sm:items-center">
                  <CheckCircle
                    className="text-green-500 mr-3 mt-1 sm:mt-0 flex-shrink-0"
                    size={20}
                  />
                  <span className="text-[#5ba6df] text-sm sm:text-base font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            </div>

            {/* Button */}
            <Link href="/about">
            <button className="mt-8 bg-[#009136] hover:bg-[#007d2c] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300">
              Read More About Us
            </button>
            </Link>
          </div>

          {/* ✅ Image Section (mobile pe neeche, desktop pe right) */}
          <div className="order-2 lg:order-2">
            <div className="relative w-full max-w-[600px] mx-auto">
              <Image
                src="/nhm-logo.webp"
                alt="NHM logo"
                width={88}
                height={88}
                className="absolute left-3 top-1 z-10 h-72 w-72 object-contain"
              />
              <Image
                src="/Assets/home-img/elixirfarllp-2.jpg"
                alt="About Us"
                width={600}
                height={500}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-0 -right-0 sm:-bottom-0 sm:-right-0 bg-[#B3CB02] text-white p-4 sm:p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold">15+</div>
                  <div className="text-xs sm:text-sm">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="mt-8 rounded-xl border border-gray-100 border-l-4 border-l-[#009136] bg-white p-6 shadow-lg sm:p-8">
              <h3 className="text-4xl font-bold text-red-700">
                Our Commitment
              </h3>
              <p className="mt-3 leading-relaxed text-green-600">
                We honour the doctors, pharmacists, and nurses who build the
                healthcare system, and work every day to be worthy of their
                legacy.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
