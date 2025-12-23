import React from "react";
import Modal from "@/components/Modal/Modal";
import CloseIcon from "@mui/icons-material/Close";

function PriceListModal({ open, setOpen, onGetStarted }) {
  const close = () => setOpen?.(false);

  const handleGetStarted = () => {
    if (onGetStarted) return onGetStarted();
    close();
  };

  return (
    <Modal isVisible={open} onClose={close}>
      <div className="w-[92vw] max-w-md overflow-scroll scroll-hide max-h-[80vh] rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <span className="text-sm font-semibold text-gray-900">
            Price List
          </span>

          <button
            onClick={close}
            className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center"
            aria-label="Close"
          >
            <CloseIcon fontSize="small" className="text-gray-700" />
          </button>
        </div>

        {/* Content */}
        <div className="px-4 py-4">
          <div className="w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
            <img
              src="/priceList.jpeg"
              alt="Price list"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* CTA */}
          <div className="mt-4 flex flex-col gap-2">
            <button
              onClick={handleGetStarted}
              className="w-full h-11 rounded-lg bg-black text-white text-sm font-semibold hover:bg-black/90 transition"
            >
              Get Started
            </button>

            <button
              onClick={close}
              className="w-full h-11 rounded-lg border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default PriceListModal;
