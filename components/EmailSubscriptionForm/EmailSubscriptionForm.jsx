"use client";

import React, { useState } from "react";
import TextField from "../TextField/TextField";
import { toast } from "react-toastify";

const EmailSubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("none");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  /**
   * Sends a subscription request to the server with the given email address.
   *
   * @param {string} email - The email address to subscribe.
   * @returns {Promise<object>} The response data with 'message' and 'status' properties.
   */
  const subscribe = async (email) => {
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    return {
      message: data.message,
      status: response.ok ? "success" : "error",
    };
  };
  /**
   * Handles the form submission.
   *
   * @param {Event} event - The form submission event.
   */
  const handleSubmit = async (event) => {
    // Prevent the default form submission behavior.
    event.preventDefault();

    // Set the isLoading state to true to indicate the subscription is in progress.
    setIsLoading(true);

    try {
      const { message, status } = await subscribe(email);
      setMessage(message);
      setStatus(status);
      setIsLoading(false);
      setIsSubscribed(status === "success");
      if (status === "success") {
        setEmail("");
        toast.success("You have successfully subscribed");
      } else {
        toast.error(message);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setStatus("error");
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col md:flex-row px-4 gap-4 md:px-10 py-5 justify-between  w-[90%] md:w-4/5 mt-[-80px] bg-[#26282B] items-center">
      <div className="flex flex-col md:w-[48%] gap-4">
        <div className="flex gap-4 items-center">
          <div className="w-0.5 h-6 bg-[#CAA969]"></div>
          <p className={` text-white/80`}>Newsletter</p>
        </div>
        <p className={` text-2xl text-[#CAA969]`}>Ready to join Blue Square?</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full md:w-[48%] gap-4 "
      >
        <TextField
          placeholder={"email address here"}
          className={"w-full py-4"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          require={true}
          disable={isSubscribed}
        />
        <button
          type="submit"
          disabled={isSubscribed || isLoading}
          className={`w-full text-white text-center py-4`}
          style={{
            background:
              "linear-gradient(78deg, #835A03 0%, #CAA969 66.54%, #835A03 100%)",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmailSubscriptionForm;
