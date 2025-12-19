import React, { useState } from "react";
import { FiPlus, FiMinus, FiCheck } from "react-icons/fi";

const FacilitiesCard = ({ className = "", title, facilities = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        ${className}
        w-full rounded-sm bg-[#F8F8F8]
        transition
      `}
    >
      {/* Header */}
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="
          w-full flex items-center justify-between
          px-4 py-4
          text-left
          hover:bg-black/[0.02]
        "
      >
        <h3 className="headerFont text-xl md:text-2xl font-medium text-gray-900">
          {title}
        </h3>

        <span className="text-[#CAA969]">
          {open ? <FiMinus size={20} /> : <FiPlus size={20} />}
        </span>
      </button>

      {/* Content */}
      {open && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 px-4 pb-5 headerFont mt-2">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="flex items-start gap-4 text-sm md:text-base text-gray-700"
            >
              {/* Check circle */}
              <span
                className="
                mt-0.5
                flex h-7 w-7 shrink-0 items-center justify-center
                rounded-full
                bg-[#F4ECDD]
              "
              >
                <FiCheck className="text-[#CAA969]" size={14} />
              </span>

              <span className="leading-relaxed">{facility}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FacilitiesCard;
