import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import "./css_files/Footer.css"
import "./css_files/ey_features_font_edit.css"
import "./css_files/Feature_Horizontal_scroll_wrap.css"
import { useInView } from "framer-motion";
import img1 from "/public/footer_images/normal_expense.webp"
import img2 from "/public/footer_images/clients.webp"
import img3 from "/public/footer_images/portfolio.webp"
import img4 from "/public/footer_images/girl_jumping.webp"
import img5 from "/public/footer_images/fun.webp"


const animationStyle = (isInView) => ({
  opacity: isInView ? 1 : 0,
  transform: isInView ? "translateY(0px)" : "translateY(50px)",
  transition: "opacity 1s ease, transform 1s ease",
});

export const Home_Footer = () => {

  const titleRef = useRef(null);

  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <div id="ey_footer_container">
        <section className="p-4 md:p-8" id="ey_footer_section">
            <motion.div 
              ref={titleRef}
              style={animationStyle(isTitleInView)}
              className="ey_feature_section_h_wrap_top_title"><span style={{color : "red"}}>Let's&nbsp;</span> Work Together.</motion.div>
          <div className="mx-auto max-w-7xl ey_btn_font_color_and_family"  style={{marginTop : "4rem"}}>
            <Link
              heading="About"
              subheading="Learn what we do here"
              imgSrc={img1}
              href="#"
            />
            <Link
              heading="Clients"
              subheading="We work with great people"
              imgSrc={img2}
              href="#"
            />
            <Link
              heading="Portfolio"
              subheading="Our work speaks for itself"
              imgSrc={img3}
              href="#"
            />
            <Link
              heading="Careers"
              subheading="We want cool people"
              imgSrc={img4}
              href="#"
            />
            <Link
              heading="Fun"
              subheading="Incase you're bored"
              imgSrc={img5}
              href="#"
            />
          </div>
        </section>
    </div>
  );
};

const Link = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-white transition-colors duration-500 group-hover:text-red-600 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-white transition-colors duration-500 group-hover:text-red-800">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a link for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-white" />
      </motion.div>
    </motion.a>
  );
};