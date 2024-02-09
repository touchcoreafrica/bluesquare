import { motion } from "framer-motion";

const SlideInFromTop = ({ className, children }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{
        duration: 0.5,
        delay: 0,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInFromTop;
