import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Whatsapp = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="2348177771590"
      accountName="Blue square"
      avatar="/assets/blue-square-logo.png"
      className="text-black"
    />
  );
};

export default Whatsapp;
