'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const GradualSpacing = ({ text = 'Gradual Spacing' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.span
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={i < 3 ? { color: 'red' } : {}}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.span>
        ))}
      </AnimatePresence>
    </>
  );
};

export default GradualSpacing;