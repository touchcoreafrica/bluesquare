"use client";

import React from "react";

const Button = ({ className, startIcon, children, ...otherProps }) => {
  return (
    <button className={`${className}`} {...otherProps}>
      {children}
    </button>
  );
};
export default Button;
