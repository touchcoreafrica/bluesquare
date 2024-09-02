import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Whatsapp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="2349161225266"
      accountName="Blue square"
      avatar="/assets/blue-square-logo.png"
      className="text-black"
    />
  );
};

export default Whatsapp;
