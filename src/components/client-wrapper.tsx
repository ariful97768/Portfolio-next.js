"use client";
import { ReactNode, useEffect, useState } from "react";
import LoadingAnimation from "./LoadingAnimation";
import { motion, AnimatePresence } from "motion/react";

export default function ServerCompWrapper({
  children,
}: {
  children: ReactNode;
}) {
  const [state, setState] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setState(false);
    }, 2000);
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {state ? (
          <LoadingAnimation key="loader" />
        ) : (
          <motion.div
  
            key="content"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
