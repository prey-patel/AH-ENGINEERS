"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  // Mouse position values for 3D parallax effects on floating components
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;
    mouseX.set((clientX / width) - 0.5);
    mouseY.set((clientY / height) - 0.5);
  };

  // Parallax transforms for floating engineering shapes
  const floatX1 = useTransform(mouseX, (v) => v * 60);
  const floatY1 = useTransform(mouseY, (v) => v * 60);
  
  const floatX2 = useTransform(mouseX, (v) => v * -80);
  const floatY2 = useTransform(mouseY, (v) => v * -80);

  const floatX3 = useTransform(mouseX, (v) => v * 40);
  const floatY3 = useTransform(mouseY, (v) => v * -40);

  const floatX4 = useTransform(mouseX, (v) => v * -50);
  const floatY4 = useTransform(mouseY, (v) => v * 50);

  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white py-20 lg:py-28"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image with Dark Steel Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-[1.02]"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.92) 20%, rgba(15, 23, 42, 0.75) 70%, rgba(46, 107, 62, 0.25) 100%), url('/hero_bg.png')`,
        }}
      />

      {/* Grid Overlay for Industrial Aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating 3D Engineering Elements (SVGs with mouse parallax) */}
      <motion.div
        style={{ x: floatX1, y: floatY1 }}
        className="absolute top-1/4 left-10 md:left-24 w-16 h-16 pointer-events-none opacity-20 hidden md:block"
      >
        {/* Gear SVG */}
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="animate-[spin_40s_linear_infinite] text-slate-300">
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

      <motion.div
        style={{ x: floatX2, y: floatY2 }}
        className="absolute bottom-1/4 right-12 md:right-28 w-24 h-24 pointer-events-none opacity-25 hidden md:block"
      >
        {/* Flange/Hex Nut SVG */}
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-[spin_60s_linear_infinite] text-primary">
          <polygon points="50,5 90,28 90,72 50,95 10,72 10,28" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="25" />
          <circle cx="50" cy="50" r="18" strokeDasharray="4 2" />
        </svg>
      </motion.div>

      <motion.div
        style={{ x: floatX3, y: floatY3 }}
        className="absolute top-1/3 right-1/4 w-12 h-12 pointer-events-none opacity-15 hidden lg:block"
      >
        {/* Structural Bolt profile */}
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-400">
          <rect x="40" y="20" width="20" height="60" rx="2" />
          <rect x="30" y="10" width="40" height="15" rx="3" fill="currentColor" />
          <line x1="40" y1="35" x2="60" y2="35" />
          <line x1="40" y1="45" x2="60" y2="45" />
          <line x1="40" y1="55" x2="60" y2="55" />
          <line x1="40" y1="65" x2="60" y2="65" />
        </svg>
      </motion.div>

      <motion.div
        style={{ x: floatX4, y: floatY4 }}
        className="absolute bottom-1/5 left-1/5 w-16 h-16 pointer-events-none opacity-15 hidden lg:block"
      >
        {/* Bearings/Co-axial Rings */}
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-400">
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="28" />
          {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const cx = (50 + 34 * Math.cos(rad)).toFixed(3);
            const cy = (50 + 34 * Math.sin(rad)).toFixed(3);
            return <circle key={idx} cx={cx} cy={cy} r="4" fill="currentColor" />;
          })}
        </svg>
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-bold uppercase tracking-wider text-slate-300 mb-6 glass-effect/10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Leading Indian Industrial Manufacturer
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up [animation-delay:150ms] text-4xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight leading-tight md:leading-none text-white mb-6">
            Precision Engineering <br className="hidden sm:inline" />
            Solutions <span className="text-primary">Built to Last</span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-up [animation-delay:300ms] text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl">
            Manufacturing premium industrial components, high-tensile fasteners, shafts, and couplings with absolute precision, structural integrity, and reliability for over 20 years.
          </p>

          {/* Action Buttons */}
          <div className="animate-fade-up [animation-delay:450ms] flex flex-col sm:flex-row gap-4 mb-14">
            <Button
              size="lg"
              onClick={() => {
                const el = document.getElementById("products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex gap-2 items-center text-sm uppercase tracking-wider"
            >
              Explore Products
              <ArrowRight size={16} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="border-slate-700 hover:bg-slate-900/50 text-white flex gap-2 items-center text-sm uppercase tracking-wider bg-transparent"
            >
              Request Quote
              <FileText size={16} className="text-slate-400" />
            </Button>
          </div>

          {/* Banner Statistics */}
          <div className="animate-fade-in [animation-delay:600ms] grid grid-cols-3 gap-6 pt-8 border-t border-slate-900/60 max-w-lg">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-primary font-heading">20+</div>
              <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">Years Market Presence</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-heading">100%</div>
              <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">Quality Assurance</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-heading">TUV/ISO</div>
              <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest font-semibold mt-1">Standard Certified</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer select-none"
        onClick={() => {
          const el = document.getElementById("highlights");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Scroll Down</span>
        <ChevronDown size={18} className="text-primary" />
      </motion.div>
    </section>
  );
}
