import { motion } from "framer-motion";

const SlideFromRtoL = ({ className, children }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 5000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.05,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideFromRtoL;
