import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingIntro({ onAnimationComplete }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  
  // O&O inspired bold statements
  const cyclingWords = [
    "WE ARE INNOVATORS",
    "WE ARE PIONEERS",
    "WE ARE SUSTAINABLE",
    "WE ARE GLOBAL",
    "WE ARE BLACKSAND"
  ];

  useEffect(() => {
    // Show main content after statements cycle
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 6000);

    const completeTimer = setTimeout(() => {
      onAnimationComplete?.();
    }, 7500);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(completeTimer);
    };
  }, [onAnimationComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [cyclingWords.length]);

  const titleText = "BLACKSAND".split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.2 },
    },
  };

  const letterVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };

  const wordVariants = {
    initial: { opacity: 0, scale: 0.9, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    },
    exit: { 
      opacity: 0, 
      scale: 0.9, 
      y: -20,
      transition: { duration: 0.4 }
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center text-white overflow-hidden"
        style={{ backgroundColor: "#0A2B3D" }}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at center, rgba(163, 177, 194, 0.15), transparent 70%)`
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 1, 0.6], scale: [0.8, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Cycling bold statements - O&O style */}
        <AnimatePresence mode="wait">
          {!showContent && (
            <motion.div
              key="statements"
              className="relative z-10 text-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                <motion.h1
                  key={cyclingWords[currentWordIndex]}
                  variants={wordVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase"
                  style={{ color: "#FFFFFF" }}
                >
                  {cyclingWords[currentWordIndex]}
                </motion.h1>
              </AnimatePresence>

              {/* Accent line */}
              <motion.div
                className="mt-8 h-1 mx-auto"
                style={{ 
                  width: "120px",
                  background: `linear-gradient(to right, transparent, #A3B1C2, transparent)`
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main brand reveal */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              key="content"
              className="relative z-10 flex flex-col items-center justify-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Brand name */}
              <motion.h1
                className="text-5xl md:text-7xl font-bold tracking-[0.22em] uppercase overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                aria-label="BLACKSAND"
              >
                {titleText.map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    variants={letterVariants}
                    style={{ color: "#FFFFFF" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>

              {/* Metallic accent line */}
              <div className="relative mt-6 h-px w-full max-w-md overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to right, #666666, #A3B1C2, #666666)`
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 1,
                    delay: 0.8,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  style={{ transformOrigin: "center" }}
                />
              </div>

              {/* Tagline */}
              <motion.h2
                className="mt-6 text-base md:text-lg font-light tracking-wider text-center"
                style={{ color: "#A3B1C2" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.7 }}
              >
                Pioneering Energy Solutions
              </motion.h2>

              {/* Refined dual spinner */}
              <motion.div
                className="relative mt-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.6 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-full"
                  style={{
                    border: "3px solid transparent",
                    borderTopColor: "#A3B1C2"
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: "3px solid transparent",
                    borderTopColor: "#666666",
                    borderBottomColor: "#666666"
                  }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom gradient overlay */}
        <motion.div
          className="absolute bottom-0 w-full h-32 pointer-events-none"
          style={{
            background: `linear-gradient(to top, rgba(10, 43, 61, 0.8), transparent)`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </motion.div>
    </AnimatePresence>
  );
}