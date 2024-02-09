"use client";

import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "../Button/Button";

const FAQCard = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col w-full gap-4 bg-[#f8f8f8] p-4">
      <div className="flex justify-between w-full items-center">
        <p className={`headerFont text-xl font-black `}>{question}</p>
        <Button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? (
            <RemoveIcon className="text-[#D1A55C]" />
          ) : (
            <AddIcon className="text-[#D1A55C]" />
          )}
        </Button>
      </div>
      <p className={`${show ? "block" : "hidden"} text-[#6D6E71]`}>{answer}</p>
    </div>
  );
};

export default FAQCard;
