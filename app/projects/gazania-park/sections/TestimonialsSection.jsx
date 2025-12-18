import React from "react";

const testimonials = [
  {
    name: "Aisha Bello",
    text: "From inspection to closing, everything was managed with attention to detail. I would recommend this service to anyone buying a property.",
  },
  {
    name: "Adekunle Adebayo",
    text: "The buying process was clear and well organized from start to finish. Communication was consistent, and every step was explained properly.",
  },
  {
    name: "Okeke Ebube",
    text: "As a first time buyer, the guidance I received made the process simple and easy to understand. I always knew what was happening.",
  },
  {
    name: "Funke Adeyemi",
    text: "The service was professional and seamless. Everything was handled efficiently, and I felt confident throughout the entire process.",
  },
];

function TestimonialsSection() {
  return (
    <section className="bg-white text-black px-4 md:px-20 py-16">
      {/* Title */}
      <h2 className="headerFont text-3xl md:text-5xl mb-8">
        Hear From Our Buyers
      </h2>

      {/* Horizontal Scroll */}
      <div
        className="
          flex gap-4
          overflow-x-auto
          scroll-smooth
          scroll-hide
          pb-2
        "
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="
              min-w-[280px] md:min-w-[340px]
              bg-[#F8F8F8]
              p-6
              rounded-sm
              shadow-sm
              flex flex-col gap-3
            "
          >
            <p className="headerFont text-lg font-medium text-gray-900">
              {item.name}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              “{item.text}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
