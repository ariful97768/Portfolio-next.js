import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationFile from "@/assets/animation.json";

const LoadingAnimation = () => {
 
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex h-screen absolute bg-[#1f1f1f] top-0 w-full z-50 transition-all opacity-100 duration-700 items-center justify-center`}
    >
      <Lottie className="h-1/2 w-1/2 mb-50" animationData={animationFile} />
    </motion.div>
  );
};

export default LoadingAnimation;
