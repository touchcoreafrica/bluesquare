import React from "react";
import Image from "next/image";

function FacilitiesSection() {
  const items = [
    { label: "Fitness Center", icon: "/assets/gym.svg", alt: "fitness center" },
    { label: "Security", icon: "/assets/cctv.svg", alt: "security" },
    {
      label: "Swimming pool",
      icon: "/assets/swimming-pool.svg",
      alt: "swimming pool",
    },
    { label: "Kitchen", icon: "/assets/restaurant.svg", alt: "kitchen" },
    { label: "Lounge", icon: "/assets/lounge.svg", alt: "lounge" },
    { label: "Elevator", icon: "/assets/lift.svg", alt: "elevator" },
    { label: "Reception", icon: "/assets/reception.svg", alt: "reception" },
    {
      label: "Dedicated Transformer",
      icon: "/assets/transformer.svg",
      alt: "transformer",
    },
    { label: "Parking", icon: "/assets/parking.svg", alt: "parking" },
    {
      label: "Spacious Property",
      icon: "/assets/house.svg",
      alt: "spacious property",
    },
    { label: "Namaste Spa", icon: "/assets/massage.svg", alt: "spa" },
    {
      label: "Fire Control System",
      icon: "/assets/fire-extinguisher.svg",
      alt: "fire control system",
    },
    {
      label: "Exquisite Bar Area",
      icon: "/assets/drinks.svg",
      alt: "bar area",
    },
    { label: "Facility Manager", icon: "/assets/manager.svg", alt: "manager" },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
        <h2 className="headerFont text-4xl md:text-5xl text-gray-900 tracking-wide">
          Facilities &amp; Specifications
        </h2>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-y-8 gap-x-6">
          {items.map((it) => (
            <div
              key={it.label}
              className="flex flex-col items-center text-center"
            >
              <div className="h-12 w-12 md:h-14 md:w-14 relative">
                <Image
                  alt={it.alt}
                  src={it.icon}
                  fill
                  className="object-contain"
                />
              </div>

              <p className="mt-3 text-xs md:text-sm text-gray-700">
                {it.label}
              </p>
            </div>
          ))}
        </div>

        {/* Spacer on the right like screenshot */}
        <div className="hidden md:block h-10" />
      </div>
    </section>
  );
}

export default FacilitiesSection;
