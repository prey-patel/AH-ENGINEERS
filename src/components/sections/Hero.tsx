"use client";

import { motion, useMotionValue, useTransform, Variants } from "framer-motion";
import { ArrowRight, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// Smooth animation variants for text staggered reveal
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  // Mouse position values for 3D parallax effects on floating components
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    mouseX.set(clientX / width - 0.5);
    mouseY.set(clientY / height - 0.5);
  };

  // Parallax transforms for floating engineering shapes
  const floatX1 = useTransform(mouseX, (v) => v * 40);
  const floatY1 = useTransform(mouseY, (v) => v * 40);

  const floatX2 = useTransform(mouseX, (v) => v * -50);
  const floatY2 = useTransform(mouseY, (v) => v * -50);

  const floatX3 = useTransform(mouseX, (v) => v * 30);
  const floatY3 = useTransform(mouseY, (v) => v * -30);

  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white py-20 lg:py-28"
      onMouseMove={handleMouseMove}
    >
      {/* 1. Slow Ken-Burns Background Image (Smooth Infinite Zoom & Ambient Breathe) */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.92) 20%, rgba(15, 23, 42, 0.78) 70%, rgba(46, 107, 62, 0.3) 100%), url('/hero_bg.png')`,
        }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 2. Soft Ambient Glowing Light Orbs (Slow Floating Gradients) */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 50, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 3. Grid Overlay for Industrial Aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 4. Floating 3D Engineering Elements (Gears, Hex Nut, Bolts) with Gentle Motion on All Devices */}
      {/* Gear SVG 1 */}
      <motion.div
        style={{ x: floatX1, y: floatY1 }}
        animate={{ y: [0, -16, 0], rotate: [0, 360] }}
        transition={{
          y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 50, repeat: Infinity, ease: "linear" },
        }}
        className="absolute top-1/6 left-4 md:left-20 w-12 sm:w-20 h-12 sm:h-20 pointer-events-none opacity-25"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-slate-300">
          <circle cx="50" cy="50" r="30" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => (
            <rect
              key={idx}
              x="45"
              y="5"
              width="10"
              height="20"
              transform={`rotate(${angle} 50 50)`}
              fill="currentColor"
            />
          ))}
          <circle cx="50" cy="50" r="15" fill="#0F172A" />
        </svg>
      </motion.div>

      {/* Hex Nut SVG 2 */}
      <motion.div
        style={{ x: floatX2, y: floatY2 }}
        animate={{ y: [0, 20, 0], rotate: [0, -360] }}
        transition={{
          y: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 65, repeat: Infinity, ease: "linear" },
        }}
        className="absolute bottom-1/4 right-4 md:right-24 w-14 sm:w-24 h-14 sm:h-24 pointer-events-none opacity-30"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full text-primary">
          <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="25" />
          <circle cx="50" cy="50" r="18" strokeDasharray="4 2" />
        </svg>
      </motion.div>

      {/* Structural Bolt SVG 3 */}
      <motion.div
        style={{ x: floatX3, y: floatY3 }}
        animate={{ y: [0, -14, 0], rotate: [0, 12, -12, 0] }}
        transition={{
          y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 14, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute top-1/3 right-1/4 w-10 sm:w-14 h-10 sm:h-14 pointer-events-none opacity-20 hidden sm:block"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full text-slate-400">
          <rect x="40" y="20" width="20" height="60" rx="2" />
          <rect x="30" y="10" width="40" height="15" rx="3" fill="currentColor" />
          <line x1="40" y1="35" x2="60" y2="35" />
          <line x1="40" y1="45" x2="60" y2="45" />
          <line x1="40" y1="55" x2="60" y2="55" />
          <line x1="40" y1="65" x2="60" y2="65" />
        </svg>
      </motion.div>

      {/* 5. Main Content Area with Staggered Framer Motion Animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-300 mb-6 shadow-lg shadow-black/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Leading Indian Industrial Manufacturer
            </div>
          </motion.div>

          {/* Premium Animated Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-[1.15] text-white mb-6"
          >
            Precision Engineering <br className="hidden sm:inline" />
            Solutions{" "}
            <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-slow inline-block">
              Built to Last
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl"
          >
            Manufacturing premium industrial components, high-tensile fasteners, shafts, and couplings with absolute precision, structural integrity, and reliability for over 20 years.
          </motion.p>

          {/* Action Buttons with Smooth Motion */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={() => {
                  const el = document.getElementById("products");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto flex gap-2 items-center text-sm uppercase tracking-wider shadow-lg shadow-primary/20"
              >
                Explore Products
                <ArrowRight size={16} />
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto border-slate-700 hover:bg-slate-900/60 hover:border-slate-600 text-white flex gap-2 items-center text-sm uppercase tracking-wider bg-slate-900/40 backdrop-blur-sm"
              >
                Request Quote
                <FileText size={16} className="text-slate-400" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Banner Statistics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80 max-w-lg"
          >
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.3 }}>
              <div className="text-xl sm:text-2xl font-bold text-primary font-heading">20+</div>
              <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">Years Market Presence</div>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.3 }}>
              <div className="text-xl sm:text-2xl font-bold text-white font-heading">100%</div>
              <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">Quality Assurance</div>
            </motion.div>
            <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.3 }}>
              <div className="text-xl sm:text-2xl font-bold text-white font-heading">TUV/ISO</div>
              <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">Standard Certified</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Smooth Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.8 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => {
          const el = document.getElementById("highlights");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Scroll Down</span>
        <ChevronDown size={18} className="text-primary" />
      </motion.div>
    </section>
  );
}
