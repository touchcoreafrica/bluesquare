import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

import Image from "../Image/Image";

const MenuTab = ({ menus, width }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={` ${width} min-h-fit flex gap-2`}>
      <div className="">
        <Tabs
          TabIndicatorProps={{
            style: {
              backgroundColor: "#CAA969",
            },
          }}
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
        >
          {menus.map((menu, index) => (
            <Tab
              onMouseEnter={(e) => {
                handleChange(e, index);
                console.log(menu.title);
              }}
              key={index}
              label={
                <Button
                  className="px-8 py-4  text-black flex items-center gap-4 justify-center hover:bg-stone-100"
                  endIcon={<ChevronRight className="text-white" />}
                  style={{ textTransform: "none" }}
                >
                  <div>{menu.icon}</div>
                  <div className="flex flex-col gap-1 items-start">
                    <p className={` text-white`}>{menu.title}</p>
                    <p className="text-sm  text-start text-[#6D6E71]">
                      {menu.subTitle}
                    </p>
                  </div>
                </Button>
              }
            />
          ))}
        </Tabs>
      </div>
      <div className=" grid grid-cols-3 gap-6 pl-8 ">
        {Array.isArray(menus) &&
          menus[value].menuOptions?.map((option, index) => {
            if (option.type === "link") {
              return (
                <Button
                  className="bg-white/10 h-fit  text-white flex gap-4 "
                  key={index}
                  href={option.link}
                >
                  <Image alt={""} className={"h-16 w-16"} src={option.image} />
                  <div className="flex flex-col gap-1 items-start">
                    <p className={` text-white`}>{option.title}</p>
                    <p className="text-sm capitalize text-start text-[#6D6E71]">
                      {option.subTitle}
                    </p>
                  </div>
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

export default MenuTab;
