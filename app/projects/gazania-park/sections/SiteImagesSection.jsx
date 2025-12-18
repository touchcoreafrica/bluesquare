import React, { useMemo, useState } from "react";
import Modal from "@/components/Modal/Modal";

function SiteImagesSection() {
  const siteImages = [
    "/assets/gazania-park-site1.png",
    "/assets/gazania-park-site2.png",
    "/assets/gazania-park-site3.png",
    "/assets/gazania-park-site4.png",
    "/assets/gazania-park-site5.png",
    "/assets/gazania-park-site6.png",
    "/assets/gazania-park-site7.png",
    "/assets/gazania-park-site8.png",
    "/assets/gazania-park-site9.png",
  ];

  const siteBigImages = [
    "/assets/gazania-park-site1.png",
    "/assets/gazania-park-site2.png",
    "/assets/gazania-park-site3.png",
    "/assets/gazania-park-site4.png",
    "/assets/gazania-park-site5.png",
    "/assets/gazania-park-site6.png",
    "/assets/gazania-park-site7.png",
    "/assets/gazania-park-site8.png",
    "/assets/gazania-park-site9.png",
  ];

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const previewGrid = useMemo(() => {
    // show first 7 as images, last tile as "+N" overlay (like screenshot)
    const maxTiles = 8;
    const remaining = Math.max(0, siteImages.length - (maxTiles - 1));
    const tiles = siteImages.slice(0, maxTiles);
    return { tiles, remaining };
  }, [siteImages]);

  const openModal = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const closeModal = () => setOpen(false);

  const go = (dir) => {
    const n = siteBigImages.length;
    if (!n) return;
    setActiveIndex((prev) => (prev + dir + n) % n);
  };

  return (
    <section className="w-full bg-[#F8F8F8]">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <h2 className="headerFont text-4xl md:text-5xl text-gray-900 tracking-wide">
          Take a Look Inside
        </h2>

        <div className="mt-6 grid grid-cols-4 gap-4">
          {previewGrid.tiles.map((src, i) => {
            const isLastTile = i === 7 && previewGrid.remaining > 0;

            return (
              <button
                key={src + i}
                type="button"
                onClick={() => openModal(i)}
                className="relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-100 focus:outline-none cursor-pointer"
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />

                {isLastTile ? (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-white text-3xl md:text-4xl font-semibold">
                      +{previewGrid.remaining}
                    </div>
                  </div>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <Modal isVisible={open} onClose={() => setOpen(false)}>
        <div className="w-full max-w-5xl mx-auto p-4 md:p-6">
          <div className="relative w-full overflow-hidden rounded-lg bg-black">
            <img
              src={siteBigImages[activeIndex]}
              alt=""
              className="w-full max-h-[75vh] object-contain"
            />

            {/* Controls */}
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center"
              aria-label="Previous"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center"
              aria-label="Next"
            >
              ›
            </button>

            <button
              type="button"
              onClick={closeModal}
              className="absolute right-3 top-3 h-9 w-9 rounded-full bg-white/90 hover:bg-white text-gray-900 flex items-center justify-center"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Counter */}
            <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
              {activeIndex + 1} / {siteBigImages.length}
            </div>
          </div>

          {/* Thumbs */}
          <div className="mt-4 grid grid-cols-6 md:grid-cols-9 gap-2">
            {siteBigImages.map((src, idx) => (
              <button
                key={src + idx}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`aspect-[4/3] overflow-hidden rounded bg-gray-100 border ${
                  idx === activeIndex ? "border-blue-500" : "border-transparent"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
}

export default SiteImagesSection;
