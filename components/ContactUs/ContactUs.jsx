import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    console.log(e.target);
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        }
      );

    // Clears the form after sending the email
    e.target.reset();
  };
  return (
    <form className="flex flex-col gap-2 w-full" onSubmit={sendEmail}>
      <div className="flex gap-4 w-full">
        <div className="flex flex-col w-1/2">
          <p className={` text-sm text-[#CAA969]`}>FIRST NAME</p>
          <TextField
            className={"border-[1px] bg-[#f8f8f8] py-4"}
            placeholder={"Chiemena"}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <p className={` text-sm text-[#CAA969]`}>LAST NAME</p>
          <TextField
            className={"border-[1px] bg-[#f8f8f8] py-4"}
            placeholder={"Okafor"}
          />
        </div>
      </div>
      <div className="flex gap-4 w-full">
        <div className="flex flex-col w-1/2">
          <p className={` text-sm text-[#CAA969]`}>EMAIL</p>
          <TextField
            className={"border-[1px] bg-[#f8f8f8] py-4"}
            placeholder={"email"}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <p className={` text-sm text-[#CAA969]`}>PHONE NUMBER</p>
          <TextField
            className={"border-[1px] bg-[#f8f8f8] py-4"}
            placeholder={"phone number"}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <p className={` text-sm text-[#CAA969]`}>MESSAGE</p>
        <textarea
          type={"text"}
          rows={7}
          className={"border-[1px] bg-[#f8f8f8]"}
          placeholder={"Message"}
        />
      </div>
      <div className="flex gap-10">
        <p className="text-black/60">How do you want to be replied?</p>
        <div className=""></div>
      </div>
      <Button
        disable={isSubmitting}
        className={`bodyFont font-bold text-white w-full bg-[#26282B] py-4`}
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactUs;
