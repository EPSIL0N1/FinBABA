import Spline from '@splinetool/react-spline';
import "./css_files/HeroSplineWithHeading.css";
import { Button } from '../components/ui/button';
import { LucideCircleArrowOutUpRight } from 'lucide-react';
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";


const HeroSplineWithHeading = () => {

    const titleRef = useRef(null);
    const isTitleInView = useInView(titleRef, { once: true });

  return (
    <div id="ey-herosection-SplineHeadingContainer">

        <div id="ey-herosection-heading-box">

            <motion.div
                id="ey-herosection-heading-title"
                ref={titleRef}
                initial={{ opacity: 0, y: 50 }}
                animate={
                    isTitleInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{
                    opacity: { delay: 3, duration: 0.6, ease: "easeOut" },
                    y: { delay: 3, duration: 0.6, ease: "easeOut" },
                }}
            >
                
                Where Your <p>Money</p> <span style={{color : "whitesmoke"}}>Meets Its Goals</span>

            </motion.div>

            <motion.div id="ey-herosection-heading-description" >
            Track your expenses, grow your savings, and achieve your financial dreams. From investment tips to goal planning, partner connections, and community support.
                <div id="ey-herosection-heading-description-btn">
                    <Button variant="difftextSize" size="diffSz"> GET THE APP <LucideCircleArrowOutUpRight/> </Button>
                </div>
            </motion.div>

        </div>

        <div id="ey-herosection-spline-box">
            <Spline id="ey-heroSection-spline"
            scene="https://prod.spline.design/V6jATXxuar1pQkWK/scene.splinecode" 
            />
        </div>


    </div>
  )
}

export default HeroSplineWithHeading