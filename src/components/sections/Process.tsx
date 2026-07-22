"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Boxes,
  Flame,
  Wrench,
  ThermometerSnowflake,
  ClipboardCheck,
  PackageCheck,
  ChevronRight,
} from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  icon: any;
  shortDesc: string;
  longDesc: string;
  image: string;
}

const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Raw Material",
    icon: Boxes,
    shortDesc: "Sourcing certified, ultra-grade alloy & carbon steel bars.",
    longDesc: "We procure premium-grade raw materials (EN8, EN19, EN24, C45, SS304/316) from vetted manufacturers, conducting chemical and tensile audits before processing.",
    image: "/proc_raw_material.png",
  },
  {
    step: "02",
    title: "Hot Forging",
    icon: Flame,
    shortDesc: "Forging under immense pressure to enhance metal grain flows.",
    longDesc: "Under controlled temperatures, our heavy-induction presses and hammer forging tools compress steel to create parts with superior fatigue and impact strength.",
    image: "/proc_hot_forging.png",
  },
  {
    step: "03",
    title: "CNC Machining",
    icon: Wrench,
    shortDesc: "Precision milling, threading, and turning to micro tolerances.",
    longDesc: "VMC and CNC lathe machinery mill, turn, drill, and thread components exactly to client CAD specifications, ensuring flawless component fitment.",
    image: "/proc_cnc_machining.png",
  },
  {
    step: "04",
    title: "Heat Treatment",
    icon: ThermometerSnowflake,
    shortDesc: "Quenching and tempering to achieve specific mechanical grades.",
    longDesc: "Components undergo heat cycles—normalizing, liquid quenching, and tempering—to reach precise hardness thresholds (like Grade 8.8, 10.9, or 12.9 requirements).",
    image: "/proc_heat_treatment.png",
  },
  {
    step: "05",
    title: "Quality Check",
    icon: ClipboardCheck,
    shortDesc: "Rigorous dimensional, hardness, and chemical inspections.",
    longDesc: "Every run undergoes dimensional checks using digital vernier calipers, hardness testers, and non-destructive testing (MPI/Ultrasonic) to rule out defects.",
    image: "/proc_quality_check.png",
  },
  {
    step: "06",
    title: "Dispatch",
    icon: PackageCheck,
    shortDesc: "Anti-rust coating, professional boxing, and prompt delivery.",
    longDesc: "Components receive protective oil coatings or hot-dip galvanization before robust timber packaging and swift logistics dispatch to minimize factory downtime.",
    image: "/proc_dispatch.png",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-50 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-primary border-l-2 border-primary pl-2.5 mb-3">
            How We Manufacture
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-navy leading-tight">
            Our Manufacturing Process Flow
          </h2>
          <p className="text-sm text-slate-500 font-medium mt-3 max-w-xl">
            From raw steel bars to ready-to-install industrial components, we enforce systematic workflows that ensure dimensional precision and industrial strength.
          </p>
        </div>

        {/* Timeline Navigation - Horizontal on desktop, grid on mobile */}
        <div className="relative mb-12">
          {/* Progress bar line on desktop */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0 hidden lg:block" />
          <div
            className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 z-0 hidden lg:block transition-all duration-500"
            style={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between relative z-10 gap-4 lg:gap-0">
            {processSteps.map((step, idx) => {
              const IconComp = step.icon;
              const isActive = activeStep === idx;
              
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center focus:outline-none group cursor-pointer"
                >
                  {/* Step Bubble */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-105 ${
                      isActive
                        ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                        : "bg-white border-slate-200 text-slate-400 group-hover:border-primary/50 group-hover:text-primary"
                    }`}
                  >
                    <IconComp size={22} className="stroke-[1.75]" />
                  </div>

                  {/* Title & Number */}
                  <div className="mt-3 text-center">
                    <span className="text-[10px] font-bold text-slate-400 block tracking-wider">
                      STEP {step.step}
                    </span>
                    <span className={`text-xs font-bold block mt-0.5 transition-colors ${
                      isActive ? "text-primary font-black" : "text-slate-700"
                    }`}>
                      {step.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Details Panel */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden p-6 md:p-10">
          <div
            key={activeStep}
            className="animate-fade-in flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
          >
            {/* Image box */}
            <div className="relative w-full lg:w-5/12 h-64 sm:h-80 rounded-xl overflow-hidden bg-slate-900 shrink-0 shadow-md">
              <img
                src={processSteps[activeStep].image}
                alt={processSteps[activeStep].title}
                className="object-cover w-full h-full opacity-90"
              />
              <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-navy text-white text-xs font-bold flex items-center justify-center font-heading">
                {processSteps[activeStep].step}
              </div>
            </div>

            {/* Descriptions */}
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-primary/5 text-primary">
                  {(() => {
                    const IconComp = processSteps[activeStep].icon;
                    return <IconComp size={20} />;
                  })()}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy font-heading">
                  {processSteps[activeStep].title}
                </h3>
              </div>

              <h4 className="text-sm font-bold text-slate-800 mt-5 leading-normal">
                {processSteps[activeStep].shortDesc}
              </h4>
              <p className="text-xs text-slate-500 font-medium leading-relaxed mt-3">
                {processSteps[activeStep].longDesc}
              </p>

              {/* Checklist helper */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <ChevronRight size={14} className="text-primary" />
                  <span>Rigorous process audits</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <ChevronRight size={14} className="text-primary" />
                  <span>100% Traceability maintained</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
