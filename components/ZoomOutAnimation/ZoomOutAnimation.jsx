import React from "react";
import { motion } from "framer-motion";

const ZoomInOutAnimation = ({ children, className }) => {
  return (
    <motion.div
      className={`${className}`}
      whileHover={{ scale: 1.1 }} // Zoom in on hover
      // whileTap={{ scale: 0.8 }} // Zoom out when clicked
    >
      {children}
    </motion.div>
  );
};

export default ZoomInOutAnimation;
