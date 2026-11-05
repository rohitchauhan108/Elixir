"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Facebook,
  Youtube,
  Instagram,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const usefulLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  const categories = [
    { name: "Ayurvedic & Herbal Products", href: "/products?category=ayurvedic" },
    { name: "Nutraceutical Products", href: "/products?category=nutraceutical" },
    { name: "Medical Devices", href: "/products?category=medical-devices" },
    { name: "Orthopaedics Products", href: "/products?category=orthopaedics" },
    { name: "Surgical Products", href: "/products?category=surgical" },
    { name: "Test Cards & Test Strips", href: "/products?category=test-card" },
    { name: "Biological Reagents", href: "/products?category=biological-reagents" },
  ];

  return (
    <footer id="contact" className="bg-white text-gray-700 border-t-2 relative">
      {/* Background Overlay Image */}
      <div
        className="absolute bottom-20 right-0 w-40 h-40 bg-no-repeat bg-contain opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('/Assets/logos/elixir-logo-main.png')" }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4 text-left">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/Assets/logos/elixir-logo-main.png"
                  alt="Logo"
                  className="h-[150px] w-auto cursor-pointer"
                />
              </Link>
            </div>
            <p className="text-red-700 leading-relaxed text-[15px] text-justify sm:text-left">
              Elixir Far LLP offers trusted medical solutions ensuring health,
              safety, and care.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-[#0AA0DD] text-white p-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <Facebook size={25} />
              </a>
              <a
                href="#"
                className="bg-[#009136] text-white p-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <Instagram size={25} />
              </a>
              <a
                href="#"
                className="bg-[#B3CB02] text-white p-2 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <Youtube size={25} />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="space-y-4 text-left">
            <h4 className="text-2xl font-semibold text-red-700">Useful Links</h4>
            <div className="grid grid-cols-1 gap-3">
              {usefulLinks.map((link, index) =>
                link.name === "Product Category" ? (
                  <div key={index} className="relative">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center text-gray-700 hover:text-[#0AA0DD] transition-colors duration-200"
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform ${
                          isDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {/* Dropdown */}
                    {isDropdownOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {categories.map((cat, i) => (
                          <Link
                            key={i}
                            href={cat.href}
                            className="block text-sm text-gray-600 hover:text-[#0AA0DD] transition-colors duration-200"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-700 hover:text-[#0AA0DD] transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 text-left md:col-span-2">
            <h4 className="text-2xl font-semibold text-red-700">Contact Information</h4>
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#009136]" />
                  <div>
                    <p className="font-medium text-gray-800">Call Us</p>
                    <a
                      href="tel:+919837771244"
                      className="text-gray-700 hover:text-[#009136]"
                    >
                      +91 9837771244
                    </a>
                    <a
                      href="tel:+919837028249"
                      className="block text-gray-700 hover:text-[#009136]"
                    >
                      +91 9837028249
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaWhatsapp size={18} className="mt-0.5 text-[#009136]" />
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium text-gray-800">WhatsApp — Guyana</p>
                      <a
                        href="https://wa.me/5927172566"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-700 hover:text-[#009136]"
                      >
                        +592 717 2566
                      </a>
                      <a
                        href="https://wa.me/5926837971"
                        target="_blank"
                        rel="noreferrer"
                        className="block text-gray-700 hover:text-[#009136]"
                      >
                        +592 683 7971
                      </a>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">WhatsApp — Liberia</p>
                      <a
                        href="https://wa.me/231770762300"
                        target="_blank"
                        rel="noreferrer"
                        className="block text-gray-700 hover:text-[#009136]"
                      >
                        0770-762300
                      </a>
                      <a
                        href="https://wa.me/231774274647"
                        target="_blank"
                        rel="noreferrer"
                        className="block text-gray-700 hover:text-[#009136]"
                      >
                        0774-274647
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#009136]" />
                  <div>
                    <p className="font-medium text-gray-800">Email Us</p>
                    <a
                      href="mailto:elixirfar24@gmail.com"
                      className="break-all text-gray-700 hover:text-[#009136]"
                    >
                      elixirfar24@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin size={50} className="mt-1 text-[#009136]" />
                  <div>
                    <p className="font-medium text-gray-800">Visit Us</p>
                    <a
                      href="https://maps.google.com/?q=Parsvnath+Eleganza+Mall+Dehradun"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-700 hover:text-[#009136]"
                    >
                      C-109, First Floor, Block-C, Parsvnath Eleganza Mall, Rajpur
                      Road, Dehradun-248001, Uttarakhand
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0AA0DD] mt-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-white text-sm text-center">
            © 2025 Elixir Far LLP. All Rights Reserved. | Designed & Developed by
            Rank Mantra
          </p>
        </div>
      </div>
    </footer>
  );
}
