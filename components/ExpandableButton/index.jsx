import { ChevronRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Divider } from "antd";
import { useState } from "react";

const ExpandableButton = ({ title, menuOptions, icon, subTitle }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full min-h-fit grid grid-cols-4 gap-2">
      <div className="col-span-1 flex justify-center border-r-2 border-orange-200">
        <Button
          className="px-10 py-4 bg-stone-300 text-black flex items-center gap-4 justify-center hover:bg-stone-100"
          onClick={handleClick}
          endIcon={<ChevronRight />}
          style={{ textTransform: "none" }}
        >
          <div>{icon}</div>
          <div className="flex flex-col gap-1 items-start">
            <div>{title}</div>
            <div className="text-sm text-gray-500">{subTitle}</div>
          </div>
        </Button>
      </div>
      <div className="col-span-3 flex flex-row gap-6 pl-8">
        {Array.isArray(menuOptions) &&
          open &&
          menuOptions?.map((option, index) => {
            if (option.type === "link") {
              return (
                <Button
                  className="col-span-1 px-10 py-4 bg-stone-600 text-white flex items-center gap-4 justify-center hover:bg-stone-700"
                  key={index}
                  href={option.link}
                >
                  {option.title}
                  {option.subTitle}
                </Button>
              );
            }
            return (
              <Button key={index} onClick={option.action}>
                {option.title}
              </Button>
            );
          })}
      </div>
    </div>
  );
};

export default ExpandableButton;
