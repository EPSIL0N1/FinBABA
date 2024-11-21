import { useRef } from "react"
import "./css_files/HorizontalScrolling.css"
import Financial_Education from "./Financial_Education"
import FinancialDashboard from "./FinancialDashboard"
import FinancialSupportPlatform from "./FinancialSupportPlatform"
import PartnerConnect from "./PartnerConnect"
import { motion, useScroll, useTransform } from "framer-motion"

const HorizontalScrolling = () => {

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target : targetRef });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <div className="ey_horizontalScrollingcarousel_container" ref = {targetRef}>

        <div className="ey_horizontalscroll_content_container">

            <motion.div className="ey_horizontalscroll_features" 
              style={{ x }}>

                <motion.div className="ey_horizontalscroll_feature_item" 
                  initial={{opacity : 0, y : 150}}
                  whileInView={{opacity : 1, y : 0, threshold: 0.99}}
                  transition={{ duration : 1, ease : "easeOut"}}
                  >

                    <FinancialDashboard/>

                </motion.div>
                <motion.div className="ey_horizontalscroll_feature_item" 
                  initial={{opacity : 0, y : 150}}
                  whileInView={{opacity : 1, y : 0, threshold: 0.99}}
                  transition={{ duration : 1, ease : "easeOut"}}
                  >

                    <FinancialSupportPlatform/>

                </motion.div>
                <motion.div className="ey_horizontalscroll_feature_item" 
                  initial={{opacity : 0, y : 150}}
                  whileInView={{opacity : 1, y : 0, threshold: 0.99}}
                  transition={{ duration : 1, ease : "easeOut"}}
                  >

                    <Financial_Education/>

                </motion.div>
                <motion.div className="ey_horizontalscroll_feature_item" 
                  initial={{opacity : 0, y : 150}}
                  whileInView={{opacity : 1, y : 0, threshold: 0.99}}
                  transition={{ duration : 1, ease : "easeOut"}}
                  >

                    <PartnerConnect/>

                </motion.div>
                
            </motion.div>

        </div>

    </div>
  )
}

export default HorizontalScrolling
