"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Briefcase, Box, ShieldCheck } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    const id = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(id);
  }, [end, duration]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

const highlightsData = [
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Delivering industrial excellence and expertise.",
  },
  {
    icon: Briefcase,
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    description: "Engineered solutions for complex infrastructures.",
  },
  {
    icon: Box,
    value: 1000,
    suffix: "+",
    label: "Standard Products",
    description: "Diverse catalog of precision fasteners and joints.",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "Quality Assurance",
    description: "Rigorous standards checked on every production run.",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="relative z-20 py-10 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {highlightsData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-lg shadow-slate-100/50 flex items-start gap-4 group hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Icon Wrapper */}
            <div className="p-3.5 rounded-xl bg-slate-50 text-slate-600 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
              <item.icon size={24} className="stroke-[1.75]" />
            </div>

            {/* Stat Info */}
            <div className="flex-1">
              <div className="text-3xl font-black font-heading text-navy flex items-baseline gap-0.5">
                <Counter end={item.value} suffix={item.suffix} />
              </div>
              <h3 className="text-sm font-bold text-slate-800 tracking-tight mt-1">
                {item.label}
              </h3>
              <p className="text-xs text-slate-500 mt-1 leading-normal font-medium">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
