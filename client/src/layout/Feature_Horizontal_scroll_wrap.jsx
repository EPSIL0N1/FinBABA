import Spline from "@splinetool/react-spline"
import HorizontalScrolling from "./HorizontalScrolling"
import "./css_files/Feature_Horizontal_scroll_wrap.css"
// import { ContactUs } from "./ContactUs"
import { Additional_Content } from "./Additional_Content";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const animationStyle = (isInView) => ({
  opacity: isInView ? 1 : 0,
  transform: isInView ? "translateY(0px)" : "translateY(50px)",
  transition: "opacity 1s ease, transform 1s ease",
});


const Feature_Horizontal_scroll_wrap = () => {

  const titleRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <>
      <div className="ey_feature_section_horizontal_wrap_top">
        <motion.div className="ey_feature_section_h_wrap_top_title"
          ref={titleRef}
          style={animationStyle(isTitleInView)}
        >
          
          <span style={{color : "red"}}>Innovation&nbsp; </span> Awaits Here
          
        </motion.div>
      </div>
      <HorizontalScrolling/>
      <div className="ey_feature_section_horizontal_wrap_bottom" style={{height : "max-content"}}>

          
          {/* <div id="ey_feature_section_h_w_b_text">LETS WORK TOGETHER.</div>
          
        <Spline
            scene="https://prod.spline.design/VA0N9E4-vZ5OQn1p/scene.splinecode" 
        /> */}
        <Additional_Content/>

      </div>
    </>
  )
}

export default Feature_Horizontal_scroll_wrap
