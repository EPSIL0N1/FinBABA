import React, { useEffect, useState } from "react";
import { motion, AnimatePresence} from "framer-motion";
import "./page_css/Preloader.css"
import GradualSpacing from "../components/animation/GradualSpacing";

const Preloader = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants for panels
  const panelVariants = {
    hidden: { x: 0 },
    visible: { x: 0 },
    exit: (custom) => ({
      x: custom === "left" ? "-100%" : "100%",
      transition: { duration: 1, ease: "easeInOut" },
    }),
  };

  const logoVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div className="preloader">
          <motion.div
            className="panel left-panel"
            custom="left"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
          <motion.div
            className="panel right-panel"
            custom="right"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
          <motion.h1
            className="logo-text"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* <span style={{color : "red"}}>FIN</span>BABA */}
            <GradualSpacing text="FINBABA"/>

          </motion.h1>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;