import React from "react";
import ApartmentCard from "./ApartmentCard";

function ApartmentsSection() {
  const apartments = [
    {
      name: "2 Bedroom Apartment with BQ",
      detail:
        "As you step through the grand entrance, you'll be greeted by soaring ceilings and opulent finishes that set the tone for the rest of the home.",
      images: [
        "/assets/GazaniaParkTwoBedroom1.png",
        "/assets/GazaniaParkTwoBedroom2.png",
      ],
      squareFoot: 145,
      bedroom: 2,
      bath: 2,
      guest: 1,
    },
    {
      name: "3 Bedroom Apartment with BQ",
      detail:
        "The spacious living area is perfect for entertaining guests, while the bedrooms offer a peaceful retreat from the hustle and bustle of the city.",
      images: [
        "/assets/GazaniaParkThreeBedroom1.png",
        "/assets/GazaniaParkThreeBedroom2.png",
      ],
      squareFoot: 177,
      bedroom: 3,
      bath: 3,
      guest: 1,
    },
    {
      name: "3 Bedroom Maisonette with BQ",
      detail:
        "The expansive living area features beautifully finished interiors, designed for comfort, style, and everyday luxury.",
      images: [
        "/assets/gazania-park-site7.png",
        "/assets/gazania-park-site8.png",
      ],
      squareFoot: 236,
      bedroom: 3,
      bath: 3,
      guest: 1,
    },
  ];

  return (
    <section className="w-full bg-[#F8F8F8] mt-4 lg:mt-10">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <h2 className="headerFont text-4xl md:text-5xl text-gray-900">
          Apartments
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {apartments.map((apt, idx) => (
            <ApartmentCard key={idx} {...apt} site="Gazania Park" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApartmentsSection;
