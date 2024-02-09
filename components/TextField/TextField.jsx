import React from "react";

const TextField = ({ className, ...otherProps }) => {
  return <input className={`${className} py-2 px-2`} {...otherProps} />;
};

export default TextField;
