import React, { useMemo, useState } from "react";
import Modal from "@/components/Modal/Modal";
import { FiX, FiCheck } from "react-icons/fi";
import TallyEmbed from "@/components/TallyEmbed";

function RequestFormModal({ open, setOpen }) {
  const close = () => setOpen && setOpen(false);

  return (
    <Modal isVisible={open} onClose={close}>
      {/* Backdrop click should close if your Modal does it; otherwise it still closes via X */}
      <div className="w-[92vw] max-w-md bg-white shadow-2xl px-4 py-4">
        {/* Header */}
        <TallyEmbed />
      </div>
    </Modal>
  );
}

export default RequestFormModal;
