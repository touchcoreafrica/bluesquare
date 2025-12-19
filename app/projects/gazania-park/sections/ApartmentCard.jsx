import React, { useMemo, useState } from "react";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi2";
import { PiRulerLight } from "react-icons/pi";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
// If you already have your own Modal component, replace this with it.
// This one is self-contained and works immediately.
function SimpleModal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999999]">
      {/* Backdrop (click outside closes) */}
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
        aria-label="Close modal"
      />

      {/* Centered modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {/* Stop propagation so inside clicks don’t close */}
        <div
          className="w-full max-w-5xl bg-white max-h-[80vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function ApartmentDetail({
  images = [],
  name,
  detail,
  squareFoot,
  bedroom,
  bath,
  guest,
  site,
  onClose,
}) {
  const [idx, setIdx] = useState(0);

  const go = (dir) => {
    const n = images.length || 1;
    setIdx((p) => (p + dir + n) % n);
  };

  return (
    <div className="p-5 md:p-6">
      <div className="flex items-center justify-between">
        <div className="headerFont text-2xl md:text-3xl text-gray-900">
          {name} <span className="text-gray-500">at</span> {site}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="h-10 w-10 text-black rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
        >
          <FiX />
        </button>
      </div>

      <div className="mt-4 relative overflow-hidden bg-black">
        <img
          src={images[idx]}
          alt=""
          className="w-full max-h-[70vh] object-contain"
        />

        {images.length > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-black"
              aria-label="Previous"
            >
              <FiChevronLeft />
            </button>

            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-black"
              aria-label="Next"
            >
              <FiChevronRight />
            </button>

            <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
              {idx + 1} / {images.length}
            </div>
          </>
        ) : null}
      </div>

      <div className="mt-5 text-sm md:text-base text-gray-600 leading-relaxed">
        {detail}
      </div>

      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
        <Spec icon={<PiRulerLight />} label={`${squareFoot}sqm`} />
        <Spec icon={<IoBedOutline />} label={`${bedroom} Bedroom`} />
        <Spec icon={<LuBath />} label={`${bath} Bath`} />
        <Spec icon={<HiOutlineUser />} label={`${guest} Guest`} />
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="button"
          className="h-11 rounded-md bg-[#2C393C] px-6 text-white font-semibold hover:opacity-95"
        >
          Book a tour
        </button>
      </div>
    </div>
  );
}

function Spec({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-md bg-[#F8F8F8] px-3 py-2">
      <div className="text-[#CAA969]">{icon}</div>
      <div className="text-gray-700">{label}</div>
    </div>
  );
}

export default function ApartmentCard({
  images = [],
  name,
  detail,
  squareFoot,
  bedroom,
  bath,
  guest,
  site = "",
}) {
  const [open, setOpen] = useState(false);

  const shortDetail = useMemo(() => {
    const d = detail || "";
    return d.length > 75 ? d.slice(0, 75).trim() + "..." : d;
  }, [detail]);

  const iconClass = "h-3.5 w-3.5 text-[#CAA969]";

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full text-left bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-sm transition"
      >
        <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
          <img
            src={images?.[0]}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="px-4 py-4">
          <div className="headerFont text-lg md:text-xl text-gray-900">
            {name}
          </div>

          <div className="mt-1 text-sm text-gray-500 leading-relaxed">
            {shortDetail}
          </div>

          <div className="mt-3 border-t border-gray-100 pt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1.5">
              <PiRulerLight className={iconClass} />
              {squareFoot}sqm
            </span>

            <span className="inline-flex items-center gap-1.5">
              <IoBedOutline className={iconClass} />
              {bedroom} Bedroom
            </span>

            <span className="inline-flex items-center gap-1.5">
              <LuBath className={iconClass} />
              {bath} Bath
            </span>

            <span className="inline-flex items-center gap-1.5">
              <HiOutlineUser className={iconClass} />
              {guest} Guest
            </span>
          </div>
        </div>
      </button>

      <SimpleModal open={open} onClose={() => setOpen(false)}>
        <ApartmentDetail
          images={images}
          name={name}
          detail={detail}
          squareFoot={squareFoot}
          bedroom={bedroom}
          bath={bath}
          guest={guest}
          site={site}
          onClose={() => setOpen(false)}
        />
      </SimpleModal>
    </>
  );
}
