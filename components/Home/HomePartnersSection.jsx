import React from "react";

function HomePartnersSection() {
  const partners = [
    "/partner1.png",
    "/partner2.png",
    "/partner3.png",
    "/partner4.png",
    "/partner5.png",
  ];
  return (
    <div className="py-10 px-4 md:py-24 bg-[#26282B] flex flex-col items-center justify-center gap-5 md:gap-10">
      <span className="headerFont text-xll lg:text-2xl w-full px-2 max-w-7xl">
        Our partners
      </span>
      <div
        className="w-full px-2 max-w-7xl items-center flex flex-wrap gap-6 justify-between "
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {partners?.map((partner, index) => (
          <img
            src={partner}
            key={index}
            alt=""
            className="h-24 lg:h-36 object-contain"
          />
        ))}
      </div>
    </div>
  );
}

export default HomePartnersSection;
