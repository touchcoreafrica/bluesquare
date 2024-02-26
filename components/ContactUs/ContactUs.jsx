import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import { toast } from "react-toastify";

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
        "service_xu3donk",
        "template_ev31ckt",
        e.target,
        "gnsdNKS6z8dMdokCg"
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          toast.success("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // hide message after 5 seconds
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          toast.error("Something went wrong, please try again later");
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
    <form
      className="flex flex-col gap-2 w-full justify-between"
      onSubmit={sendEmail}
    >
      <div className="flex gap-4 w-full">
        <div className="flex flex-col w-1/2">
          <p className={` text-sm text-[#CAA969]`}>FIRST NAME</p>
          <TextField
            name={"first_name"}
            className={"border-[1px] bg-[#f8f8f8] py-4"}
            placeholder={"e.g John"}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <p className={` text-sm text-[#CAA969]`}>LAST NAME</p>
          <TextField
            name={"last_name"}
            className={"border-[1px] bg-[#f8f8f8] py-4"}
            placeholder={"e.g Doe"}
          />
        </div>
      </div>
      <div className="flex gap-4 w-full">
        <div className="flex flex-col w-1/2">
          <p className={` text-sm text-[#CAA969]`}>EMAIL</p>
          <TextField
            name={"email"}
            className={"border-[1px] bg-[#f8f8f8] py-4"}
            placeholder={"e.g jhon.doe@gmail.com"}
          />
        </div>
        <div className="flex flex-col w-1/2">
          <p className={` text-sm text-[#CAA969]`}>PHONE NUMBER</p>
          <TextField
            name={"phone"}
            className={"border-[1px] bg-[#f8f8f8] py-4"}
            placeholder={"e.g 08031234878"}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <p className={` text-sm text-[#CAA969]`}>MESSAGE</p>
        <textarea
          name={"message"}
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
        type="submit"
        disable={isSubmitting}
        className={`bodyFont font-bold text-white w-full bg-[#D1A55C] py-4`}
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactUs;
