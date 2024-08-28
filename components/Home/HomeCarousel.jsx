"use client";

import React, { useEffect, useRef, useState } from "react";

const carouselImages = ["/estate1.png", "/estate1.png"];

function HomeHeroCarousel() {
  const [page, setPage] = useState(0);
  const scrollableDivRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 3000);

    return () => clearInterval(interval);
  }, [page]);

  const change = () => {
    if (scrollableDivRef.current) {
      const scrollAmount = scrollableDivRef.current.clientWidth;
      const maxScrollLeft =
        scrollableDivRef.current.scrollWidth -
        scrollableDivRef.current.clientWidth;

      if (scrollableDivRef.current.scrollLeft < maxScrollLeft) {
        scrollableDivRef.current.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollableDivRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }

    if (page < carouselImages.length - 1) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  };

  return (
    <div
      className="w-[100vw] h-full overflow-hidden flex items-end z-10 max-w-[100vw]"
      ref={scrollableDivRef}
    >
      {carouselImages?.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className="w-[100vw] h-[100vh] object-cover flex-shrink-0 flex"
          data-aos="fade-up"
        />
      ))}
    </div>
  );
}

export default HomeHeroCarousel;
