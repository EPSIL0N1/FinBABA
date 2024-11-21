import Spline from "@splinetool/react-spline";
import "./css_files/AboutUsContent.css";
import { Button } from "../components/ui/button";
import { ArrowUpRightFromCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Shared animation logic
const animationStyle = (isInView) => ({
  opacity: isInView ? 1 : 0,
  transform: isInView ? "translateY(0px)" : "translateY(50px)",
  transition: "opacity 0.6s ease, transform 0.6s ease",
});

const AboutUsContent = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true });
  const isDescInView = useInView(descRef, { once: true });

  return (
    <div id="ey-AboutUs-container">
      {/* Spline Model */}
      <div id="ey-AboutUs-Spline-Container">
        <Spline
          id="ey-AboutUs-spline-model"
          scene="https://prod.spline.design/3z4g0T1XR9XhQOBJ/scene.splinecode"
        />
      </div>

      {/* Content */}
      <div className="ey-AboutUs-Content">
        <motion.p
          id="ey-aboutus-content-title"
          ref={titleRef}
          style={animationStyle(isTitleInView)}
        >
          Personal financial assistant
        </motion.p>
        <motion.p
          id="ey-aboutus-content-description"
          ref={descRef}
          style={animationStyle(isDescInView)}
        >
          AI-powered financial advisor simplifying money management. From
          tracking expenses to building financial confidence, we empower your
          financial journey with ease and clarity.
        </motion.p>
        <motion.span 
          ref={descRef}
          style={animationStyle(isDescInView)}
        >
        <Button
          variant="difftextSize"
          size="diffSz"
          id="ey-aboutus-content-button"
        >
          Explore Features <ArrowUpRightFromCircle size={70} />
        </Button>
        </motion.span>
      </div>
    </div>
  );
};

export default AboutUsContent;
