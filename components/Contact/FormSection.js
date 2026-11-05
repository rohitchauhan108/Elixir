"use client";

import { Mail, MapPin } from "lucide-react";
import ContactMap from "./ContactMap";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const contactCards = [
  {
    id: "call-us",
    title: "Call Us",
    values: [
      { text: "+91 9837771244", href: "tel:+919837771244" },
      { text: "+91 9837028249", href: "tel:+919837028249" },
    ],
    Icon: FaPhoneAlt,
  },
  {
    id: "wa-guyana",
    title: "WhatsApp",
    values: [
      { text: "+592 717 2566 [Guyana]", href: "https://wa.me/5927172566" },
      { text: "+592 683 7971 [Guyana]", href: "https://wa.me/5926837971" },
    ],
    Icon: FaWhatsapp,
  },
  {
    id: "wa-liberia",
    title: "WhatsApp",
    values: [
      { text: "0770-762300 [Liberia]", href: "https://wa.me/231770762300" },
      { text: "0774-274647 [Liberia]", href: "https://wa.me/231774274647" },
    ],
    Icon: FaWhatsapp,
  },
  {
    id: "email-us",
    title: "Email Us",
    values: [{ text: "elixirfar24@gmail.com", href: "mailto:elixirfar24@gmail.com" }],
    Icon: Mail,
  },
  {
    id: "visit-us",
    title: "Visit Us",
    values: [
      {
        text: "C-109, First Floor, Block-C, Parsvnath Eleganza Mall, Rajpur Road, Dehradun-248001, Uttarakhand",
        href: "https://maps.google.com/?q=Parsvnath+Eleganza+Mall+Dehradun",
      },
    ],
    Icon: MapPin,
  },
];

function ContactCard({ card }) {
  const { id, title, values, Icon } = card;

  return (
    <div className="flex min-h-36 items-start gap-4 rounded-xl border border-gray-100 bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
        <Icon size={24} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-lg font-semibold text-red-700">
          {title}
        </span>
        <span className="mt-2 block space-y-1 text-sm leading-relaxed text-gray-600">
          {values.map((value, index) =>
            value.href ? (
              <a
                key={`${id}-${index}`}
                href={value.href}
                target={value.href.startsWith("http") ? "_blank" : undefined}
                rel={value.href.startsWith("http") ? "noreferrer" : undefined}
                className="block break-words hover:text-[#009136] hover:underline"
              >
                {value.text}
              </a>
            ) : (
              <span key={`${id}-${index}`} className="block break-words">
                {value.text}
              </span>
            ),
          )}
        </span>
      </span>
    </div>
  );
}

export default function FormSection() {
  return (
    <section className="w-full bg-gray-50 px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactCards.slice(0, 3).map((card) => (
            <ContactCard key={card.id} card={card} />
          ))}
        </div>
        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {contactCards.slice(3).map((card) => (
            <ContactCard key={card.id} card={card} />
          ))}
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          <ContactMap />

          <div className="rounded-xl bg-white p-6 shadow-lg sm:p-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-800 sm:text-3xl">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-[#009136] focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-md border border-gray-300 p-3 focus:border-[#009136] focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-gray-300 p-3 focus:border-[#009136] focus:outline-none"
              />
              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-md border border-gray-300 p-3 focus:border-[#009136] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-[#009136] py-3 font-semibold text-white transition-transform duration-200 hover:scale-[0.98] hover:bg-[#007d2c]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}