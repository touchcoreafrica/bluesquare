"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FadeInFadeOut = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex items-center flex-col gap-5">
      <div
        data-aos="fade-up"
        className="h-40 w-96 bg-white border-8 border-black"
      >
        <h2>This is a fade-up element</h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        className="h-40 w-96 bg-white border-8 border-black"
      >
        <p>This is another fade-up element</p>
      </div>
      {/* Add more elements with the fade-up effect */}
    </div>
  );
};

export default FadeInFadeOut;
