"use-client";

import React, { useState } from "react";
import RequestFormModal from "./RequestFormModal";

function HeroSection() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative h-[85vh] w-full bg-cover bg-center bg-[url('/assets/gazania-park-banner.png')]">
      {/* Overlay */}

      {/* Content */}
      <RequestFormModal open={open} setOpen={setOpen} />
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-5xl text-center flex flex-col items-center gap-6">
          {/* Top pill */}
          <div className="rounded-full border border-[#DAB797]/40 px-4 py-1 text-xs tracking-wide text-[#DAB797] bg-black/40">
            LIMITED UNITS AVAILABLE — Invest in 2 & 3 Bedroom Apartments at
            Lekki Phase 1
          </div>

          {/* Title */}
          <h1 className="headerFont text-[#DAB797] text-5xl md:text-[100px] leading-none">
            GAZANIA PARK
          </h1>

          {/* Subtitle */}
          <p className="headerFont text-[#DAB797] text-xl md:text-3xl">
            Build Wealth Where it Counts:
            <br className="hidden md:block" />
            Your 2026 Investment Plan Begins Now
          </p>

          {/* CTA Buttons */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              className=" bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
              onClick={() => setOpen(true)}
            >
              Book a Viewing
            </button>

            <button
              className=" border border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              onClick={() => setOpen(true)}
            >
              Get Price List
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
