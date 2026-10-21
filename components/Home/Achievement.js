"use client";
import { useState } from "react";
import Divider from "../Divider";

export default function Achievement() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/Assets/home/certificate-1.jpg",
    "/Assets/home/certificate-2.jpg",
  ];

  return (
    <section className="py-16 bg-[#EFF5FA] text-center">
      <div className="relative max-w-6xl mx-auto text-center mb-8">
        {/* Left decorative image */}
        <img
          src="/bg-1.webp"
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute -top-7 left-64 w-24 h-auto z-0 pointer-events-none"
        />

        {/* Heading */}
        <h2 className="relative z-10 text-3xl font-bold mb-2">Achievements</h2>

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
      {/* Heading */}
      {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        Achievements
      </h2> */}

      {/* Divider */}
      {/* <Divider /> */}

      {/* Images */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 px-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Preview ${index + 1}`}
              className="w-full h-72 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative flex items-center gap-6 max-w-5xl mx-auto px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={selectedImage}
              alt="Preview"
              className="rounded-lg max-h-[80vh] object-contain"
            />

            {/* Close Button (Side me) */}
            <button
              onClick={() => setSelectedImage(null)}
              className="text-white text-5xl font-bold hover:text-gray-300 transition-colors"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
