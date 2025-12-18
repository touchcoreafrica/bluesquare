import React from "react";
import { FiCheck } from "react-icons/fi";

function WhyPerfectSection() {
  const left = [
    "Modern, luxury-finished 2 & 3 bedroom apartments",
    "Secure estate, top-tier infrastructure",
    "High rental & resale value, strong investment",
  ];

  const right = [
    "Prime Lekki Phase 1 location",
    "Flexible payment plans available",
    "Close to major roads, supermarkets, hospitals, and schools",
  ];

  const Bullet = ({ text }) => (
    <div className="flex items-start gap-3">
      <div className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3E7D8]">
        <FiCheck className="h-4 w-4 text-[#DAB797]" />
      </div>
      <p className="text-sm leading-relaxed text-gray-600">{text}</p>
    </div>
  );

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <h2 className="headerFont text-4xl md:text-5xl text-gray-900 tracking-wide">
          Why This Property Is Perfect for You
        </h2>

        <p className="mt-5 max-w-5xl text-base md:text-lg leading-relaxed text-gray-600">
          Gazania Park depicts an outstanding opportunity to live amongst the
          character, heritage and culture that Periwinkle has to offer. This
          impressive development is home to a unique collection of Luxury 1, 2,
          and 3 bedrooms apartments with staff quarters, designed with the
          sophisticated and discerning in mind, upholding the tenets of class,
          style, quality and innovation.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
          <div className="flex flex-col gap-5">
            {left.map((t) => (
              <Bullet key={t} text={t} />
            ))}
          </div>

          <div className="flex flex-col gap-5">
            {right.map((t) => (
              <Bullet key={t} text={t} />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <button className="rounded-sm bg-blue-600 px-10 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition">
            Book a Site Visit
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyPerfectSection;
