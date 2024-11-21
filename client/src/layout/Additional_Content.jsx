import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import "./css_files/ey_features_font_edit.css"
import img1 from "/public/additional_content_images/expense_tracking.webp"
import img2 from "/public/additional_content_images/finance_education.webp"
import img3 from "/public/additional_content_images/peronalised_insights.webp"
import img4 from "/public/additional_content_images/partner.webp"

export const Additional_Content = () => {
  return (
    <div className="bg-black" style={{zIndex : "5"}}>
      <TextParallaxContent
        imgUrl={img1}
        subheading="Track your finances"
        heading="Daily Expense Tracker"
      >
        <ExampleContent
          title="Stay on Top of Your Expenses"
          description="Monitor your income and daily spending through a seamless OCR-based tracking system. Get notified about your financial goals and progress with real-time alerts."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={img2}
        subheading="Learn Finance the Easy Way"
        heading="Financial Education"
      >
        <ExampleContent
          title="Interactive Learning"
          description="Explore articles, voice-guided assessments, and level-based progress tailored for financial literacy. Simplify complex concepts with story-mode learning and OCR-based text simplification."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={img3}
        subheading="Personalized Insights"
        heading="Investment Analysis"
      >
        <ExampleContent
          title="Custom Strategies for Growth"
          description="Analyze your earnings, plan for healthcare, life insurance, or microfinance. Use our simulation demo to forecast investments and expenses with inflation-adjusted dashboards and goal tracking."
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={img4}
        subheading="Build a Support Network"
        heading="Community & Partners"
      >
        <ExampleContent
          title="Collaborate and Connect"
          description="Join a community of financial advisors and female entrepreneurs. Partner with others to combine resources and achieve common financial goals, such as joint account planning for couples."
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]" style={{zIndex : "5"}}>
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-5 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl ey_desription_font_color_and_family">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl ey_btn_font_color_and_family">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({ title, description }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4 text-red-600 ey_desription_font_color_and_family">{title}</h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-white md:text-2xl ey_btn_font_color_and_family">{description}</p>
      <button className="w-full px-9 py-4 text-xl text-white transition-colors md:w-fit bg-red-600 bg-opacity-10 backdrop-blur-xl border border-white rounded-lg shadow-lg hover:bg-red-800">
      
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
