"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { pharmaceuticalCategories } from "@/lib/productCategories";

// Import both slider components
import AyurvedicProducts from "@/components/Home/AyurvedicProducts";
import MedicalProducts from "@/components/Home/MedicalDevices";
import SurgicalProducts from "@/components/Home/SurgicalProducts";
import TestCardsProducts from "@/components/Home/TestCardsProducts";
import Antibiotics from "@/components/Home/Antibiotics";
import Antidiabetic from "@/components/Home/Antidiabetic";
import Cardiovascular from "@/components/Home/Cardiovascular";
import Analgesics from "@/components/Home/Analgesics";
import EyeEarNasal from "@/components/Home/EyeEarNasal";
import Antacid from "@/components/Sliders/Antacid";
import Injectable from "@/components/Sliders/Injectable";
import Antimalarial from "@/components/Sliders/Antimalarial";
import Tablets from "@/components/Sliders/Tablets";
import LiquidDrySyp from "@/components/Sliders/LiquidDrySyp";
import Ointment from "@/components/Sliders/Ointment";
import OncologyCapsules from "@/components/Sliders/OncologyCapsules";
import OncologyInjection from "@/components/Sliders/OncologyInjection";
import VetBolus from "@/components/Sliders/VetBolus";
import VetInjection from "@/components/Sliders/VetInjection";
import VetLiquid from "@/components/Sliders/VetLiquid";
import VetPowder from "@/components/Sliders/VetPowder";
import VetTablet from "@/components/Sliders/VetTablet";
import AllProducts from "@/components/Home/AllProducts";


export default function ProductDetails({ product }) {
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  // const shortDescription =
  //   product.description.split(" ").slice(0, 20).join(" ") + "...";

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsLightboxOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <section className="bg-[#e7ebee]">
      <div className="max-w-6xl mx-auto py-16 px-4">
      <div className="md:flex md:gap-10 bg-white p-10 rounded-xl">
        {/* Left Side: Images */}
        <div className="md:w-1/2">
          <div className="group relative w-full h-52 md:h-[300px] mb-3 border rounded-lg overflow-hidden shadow-sm">
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              aria-label={`View larger image of ${product.title}`}
              className="absolute inset-0 h-full w-full cursor-zoom-in"
            >
              <Image
                src={mainImage}
                alt={product.title}
                fill
                className={`${
                  pharmaceuticalCategories.has(product.category)
                    ? "object-cover"
                    : "object-contain"
                } transition duration-500 ease-in-out group-hover:scale-110`}
              />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3">
            {product.images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setMainImage(img)}
                className={`relative w-20 h-20 border rounded-lg overflow-hidden cursor-pointer transition duration-300 ${
                  mainImage === img
                    ? "border-[#B3CB02] border-2 scale-105"
                    : "border-gray-200 hover:scale-105"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.title} ${idx}`}
                  fill
                  className={
                    pharmaceuticalCategories.has(product.category)
                      ? "object-cover"
                      : "object-contain"
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="md:w-1/2 mt-6 md:mt-10 flex flex-col justify-between">
          <div>
            <p className="text-sm font-semibold text-[#B3CB02] mb-4">
              {product.category === "ayurvedic"
                ? "Ayurvedic & Herbal Products"
                : product.category === "nutraceutical"
                ? "Nutraceutical Products"
                : product.category === "anticold"
                ? "Anticold"
                : product.category === "cosmetics"
                ? "Cosmetic Products"
                : product.category === "otc-product"
                ? "OTC Products"
                : product.category === "medical-devices"
                ? "Medical Devices"
                : product.category === "orthopaedics"
                ? "Orthopaedics Products"
                : product.category === "surgical"
                ? "Surgical Products"
                : product.category === "test-card"
                ? "Test Cards And Test Strips"
                : product.category === "anti-hyperlipidemic"
                ? "Anti-Hyperlipidemic"
                : product.category === "eye-ear-and-nasal-drops"
                ? "EYE/EAR & NASAL DROPS"
                : product.category === "tablets"
                ? "Phosphodiesterase-5 Inhibitor [Erectile Dysfunction]"
                : product.category === "antacid"
                ? "ANTACID"
                : product.category === "antimalarial"
                ? "ANTIMALARIAL"
                : product.category === "liquid-dry-syp"
                ? "LIQUID/DRY SYP"
                : product.category === "ointment"
                ? "OINTMENT"
                : product.category === "oncology-capsules"
                ? "Oncology Capsules"
                : product.category === "oncology-injections"
                ? "Oncology Injections"
                : product.category === "veterinary-bolus"
                ? "Veterinary Bolus"
                : product.category === "veterinary-injection"
                ? "Veterinary Injection"
                : product.category === "veterinary-liquid"
                ? "Veterinary Liquid"
                : product.category === "veterinary-powder"
                ? "Veterinary Powder"
                : product.category === "veterinary-tablet"
                ? "Veterinary Tablet"
                : product.category.charAt(0).toUpperCase() +
                  product.category.slice(1)}
            </p>
            <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
            <p className="text-md text-gray-600 mb-4">{product.description}</p>

            {product.ingredient && (
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-1">Ingredients:</h3>
                <p className="text-sm text-gray-700">{product.ingredient}</p>
              </div>
            )}

            {/* <div className="mb-4">
              <h3 className="text-md font-semibold mb-1">
                Price: ₹ {product.price}
              </h3>
            </div> */}

            {/* Buttons */}
            <div className="w-full gap-4 mt-4">
              <Link href="#" className="block w-full">
                <button className="px-6 py-3 w-full lg:w-[68%] bg-[#009136] text-white font-semibold rounded transform transition hover:scale-95 hover:bg-[#007a29] lg:text-[14px] text-[10px]">
                  Book Now
                </button>
              </Link>
            </div>
            <div className="w-full gap-4 mt-4">
              <Link href={`/products?category=${product.category}`}>
                <button className="w-full lg:w-[68%] px-6 py-3 bg-gray-200 border border-[#009136] text-gray-800 font-semibold rounded transform transition hover:scale-95 hover:bg-gray-300 lg:text-[14px] text-[10px]">
                  ← Back to{" "}
                  {product.category === "ayurvedic"
                    ? "Ayurvedic"
                    : product.category === "nutraceutical"
                    ? "Nutraceutical"
                    : product.category === "anticold"
                    ? "Anticold"
                    : product.category === "cosmetics"
                    ? "Cosmetic"
                    : product.category === "otc-product"
                    ? "OTC"
                    : product.category === "orthopaedics"
                    ? "Orthopaedics"
                    : "Medical Devices"}{" "}
                  Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${product.title} image`}
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close image"
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
          >
            <X size={28} />
          </button>
          <div
            className="relative h-[85vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={mainImage}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 90vw"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* Show slider based on category */}
      <div className="mt-10">
        {product.category === "ayurvedic" ? (
          <AyurvedicProducts />
        ) : product.category === "medical-devices" ? (
          <MedicalProducts />
        ) : product.category === "test-card" ? (
          <TestCardsProducts />
        ) : product.category === "surgical" ? (
          <SurgicalProducts />
        ) : product.category === "antibiotics" ? (
          <Antibiotics />
        ) : product.category === "antidiabetic" ? (
          <Antidiabetic />
        ) : product.category === "cardiovascular" ? (
          <Cardiovascular />
        ) : product.category === "analgesics" ? (
          <Analgesics />
        ) : product.category === "eye-ear-and-nasal-drops" ? (
          <EyeEarNasal />
        ) : product.category === "injectable" ? (
          <Injectable />
        ) : product.category === "antacid" ? (
          <Antacid />
        ) : product.category === "antimalarial" ? (
          <Antimalarial />
        ) : product.category === "tablets" ? (
          <Tablets />
        ) : product.category === "liquid-dry-syp" ? (
          <LiquidDrySyp />
        ) : product.category === "ointment" ? (
          <Ointment />
        ) : product.category === "oncology-capsules" ? (
          <OncologyCapsules />
        ) : product.category === "oncology-injections" ? (
          <OncologyInjection />
        ) : product.category === "veterinary-bolus" ? (
          <VetBolus />
        ) : product.category === "veterinary-injection" ? (
          <VetInjection />
        ) : product.category === "veterinary-liquid" ? (
          <VetLiquid />
        ) : product.category === "veterinary-powder" ? (
          <VetPowder />
        ) : product.category === "veterinary-tablet" ? (
          <VetTablet />
        ) : (
          <AllProducts />
        )}
      </div>
    </div>
    </section>
  );
}
