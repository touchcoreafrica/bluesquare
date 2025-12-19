"use-client";

import React, { useState } from "react";
import RequestFormModal from "./RequestFormModal";

function CTASection() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative w-full py-20 px-4 md:px-20 bg-cover bg-[url('/assets/footerBg.png')]">
      <RequestFormModal open={open} setOpen={setOpen} />
      {/* CTA Container */}
      <div
        className="
          relative
          mx-auto
          max-w-6xl
          bg-[#1F2427]
          border border-black
          flex
          items-center
        "
      >
        {/* Text Content */}
        <div className="flex flex-col gap-6 px-6 md:px-12 py-10 md:py-12 md:w-[65%]">
          <p className="headerFont text-xl md:text-3xl text-[#CAA969] leading-snug">
            Limited units available. Secure your apartment before it’s gone.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button
              className="
                bg-[#1E6AE1]
                text-white
                px-6
                py-3
                text-sm
                font-semibold
                hover:opacity-90
              "
              onClick={() => setOpen(true)}
            >
              Book a Viewing
            </button>

            <button
              className="
                border border-white
                text-white
                px-6
                py-3
                text-sm
                font-semibold
                hover:bg-white
                hover:text-black
                transition
              "
              onClick={() => setOpen(true)}
            >
              Request Info
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="hidden md:flex absolute right-0 bottom-0 h-full items-end">
          <img
            src="/assets/ctaImage.png"
            alt="CTA"
            className="h-[150%] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default CTASection;
