import React, { useMemo, useState } from "react";
import Modal from "@/components/Modal/Modal";
import { FiX, FiCheck } from "react-icons/fi";

function RequestFormModal({ open, setOpen }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    unit: "2", // "2" | "3"
  });

  const canSubmit = useMemo(() => {
    return (
      form.fullName.trim() &&
      form.email.trim() &&
      form.phone.trim() &&
      form.whatsapp.trim()
    );
  }, [form]);

  const onChange = (key) => (e) =>
    setForm((p) => ({ ...(p || {}), [key]: e.target.value }));

  const close = () => setOpen && setOpen(false);

  const inputWrap = "w-full";
  const labelCls =
    "text-[10px] tracking-wide uppercase font-semibold text-[#CAA969]";
  const inputCls =
    "mt-1 w-full h-10 rounded-sm border border-gray-200 bg-white px-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10";

  const unitCardBase =
    "w-full h-12 border rounded-sm flex items-center justify-center gap-2 text-sm font-semibold transition";
  const unitSelected = "bg-green-100 border-green-500 text-green-800";
  const unitIdle = "bg-white border-gray-300 text-gray-700 hover:bg-gray-50";

  return (
    <Modal isVisible={open} onClose={close}>
      {/* Backdrop click should close if your Modal does it; otherwise it still closes via X */}
      <div className="w-[92vw] max-w-md bg-white shadow-2xl">
        {/* Header */}
        <div className="relative px-8 pt-8">
          <button
            type="button"
            onClick={close}
            className="absolute right-6 top-6 h-10 w-10 rounded-sm bg-pink-50 border border-pink-100 flex items-center justify-center hover:bg-pink-100"
            aria-label="Close"
          >
            <FiX className="text-pink-600" />
          </button>

          <h2 className="headerFont text-4xl text-gray-900 leading-none">
            Request Form
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            We will contact you within 24 hours.
          </p>

          <div className="mt-4 h-[1px] w-full bg-[#CAA969]/70" />
        </div>

        {/* Body */}
        <form
          className="px-8 pb-8 pt-5"
          onSubmit={(e) => {
            e.preventDefault();
            if (!canSubmit) return;
            // hook your submit here
            // console.log(form);
          }}
        >
          <div className="space-y-4">
            <div className={inputWrap}>
              <div className={labelCls}>Full Name</div>
              <input
                className={inputCls}
                placeholder="Full name"
                value={form.fullName}
                onChange={onChange("fullName")}
              />
            </div>

            <div className={inputWrap}>
              <div className={labelCls}>Email</div>
              <input
                className={inputCls}
                placeholder="email"
                value={form.email}
                onChange={onChange("email")}
              />
            </div>

            <div className={inputWrap}>
              <div className={labelCls}>Phone Number</div>
              <input
                className={inputCls}
                placeholder="phone number"
                value={form.phone}
                onChange={onChange("phone")}
              />
            </div>

            <div className={inputWrap}>
              <div className={labelCls}>Whatsapp Number</div>
              <input
                className={inputCls}
                placeholder="whatsapp number"
                value={form.whatsapp}
                onChange={onChange("whatsapp")}
              />
            </div>

            {/* Preferred unit */}
            <div className="pt-1">
              <div className="text-sm text-gray-800">Preferred Unit</div>

              <div className="mt-3 grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...(p || {}), unit: "2" }))}
                  className={`${unitCardBase} ${
                    form.unit === "2" ? unitSelected : unitIdle
                  }`}
                >
                  <span
                    className={`h-5 w-5 rounded-full border flex items-center justify-center ${
                      form.unit === "2"
                        ? "border-green-600 bg-green-200"
                        : "border-gray-400 bg-white"
                    }`}
                  >
                    {form.unit === "2" ? (
                      <FiCheck className="text-green-700 text-[14px]" />
                    ) : null}
                  </span>
                  <span>2-Bedroom</span>
                </button>

                <button
                  type="button"
                  onClick={() => setForm((p) => ({ ...(p || {}), unit: "3" }))}
                  className={`${unitCardBase} ${
                    form.unit === "3" ? unitSelected : unitIdle
                  }`}
                >
                  <span
                    className={`h-5 w-5 rounded-full border flex items-center justify-center ${
                      form.unit === "3"
                        ? "border-green-600 bg-green-200"
                        : "border-gray-400 bg-white"
                    }`}
                  >
                    {form.unit === "3" ? (
                      <FiCheck className="text-green-700 text-[14px]" />
                    ) : null}
                  </span>
                  <span>3-Bedroom</span>
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!canSubmit}
              className={`mt-2 w-full h-12 rounded-sm font-semibold text-white transition
                ${
                  canSubmit
                    ? "bg-[#2C2F33] hover:bg-[#23262A]"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default RequestFormModal;
