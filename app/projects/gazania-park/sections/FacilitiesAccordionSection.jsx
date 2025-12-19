import React from "react";
import FacilitiesCard from "./FacilitiesCard";

function FacilitiesAccordionSection() {
  return (
    <section className="w-full bg-white px-4 flex items-center flex-col">
      <div className="max-w-5xl w-full">
        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          <FacilitiesCard
            title="Shared Facilities"
            facilities={[
              "Interior designed entrance lobby",
              "12-hour daytime concierge",
              "24-hours CCTV and security",
              "Over 100 car parking bays",
              "Caribbean themed pool bar",
              "Large outdoor sun heated swimming pool",
            ]}
          />

          <FacilitiesCard
            title="Electrical and Mechanical"
            facilities={[
              "High capacity water treatment plants",
              "Smoke detectors",
              "LED down-lighters throughout",
              "Wall plates for power and light switches",
              "Fire heat detector",
            ]}
          />

          <FacilitiesCard
            title="General"
            facilities={[
              "Square edge skirting and architraves",
              "3 Panoramic lifts",
              "Fire control systems",
              "Private balcony for each apartment",
              "Walls painted with premium emulsion / white satin paint",
              "Beautiful façade with contemporary architecture",
            ]}
          />

          <FacilitiesCard
            title="Kitchen"
            facilities={[
              "Composite worktop",
              "Feature LED lighting to wall units",
              "Stainless steel kitchen sink",
              "Integrated extractor",
              "Handless kitchen units with soft close doors",
              "Premium brand appliances – Microwave – Oven – Table-top hob",
            ]}
          />

          <FacilitiesCard
            title="Bathrooms and Ensuites"
            facilities={[
              "Vitrified premium matt tiles",
              "Tiled bathrooms and shower rooms",
              "Glazed wall tiles",
              "Composite countertop to bathrooms/toilet",
            ]}
          />

          <FacilitiesCard
            title="Bedroom"
            facilities={[
              "Full height fitted wardrobes to master bedroom and normal sized rooms",
              "Private balcony with glass balustrades",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default FacilitiesAccordionSection;
