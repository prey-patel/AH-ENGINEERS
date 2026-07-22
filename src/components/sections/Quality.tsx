"use client";

import { motion } from "framer-motion";
import { Check, ShieldCheck, Microscope, Ruler, Award } from "lucide-react";

const qualityStandards = [
  {
    title: "ISO 9001:2015 Standards",
    desc: "Strict adherence to international manufacturing guidelines and standardized traceabilities for every batch.",
    icon: Award,
  },
  {
    title: "Precision Engineering (h6/g6)",
    desc: "Ensuring threading and cylindrical components conform exactly to tight micro-level tolerance limits.",
    icon: Ruler,
  },
  {
    title: "Spectrometer Chemical Auditing",
    desc: "Verification of carbon and alloy configurations to match design mechanical specifications exactly.",
    icon: Microscope,
  },
  {
    title: "Universal Tensile Testing",
    desc: "Validating breaking stress limits and elastic capacities on high-tensile structural fasteners.",
    icon: ShieldCheck,
  },
];

const checklistItems = [
  "Ultrasonic Testing (UT) for internal forging defects",
  "Rockwell/Brinell Hardness checks for structural strength",
  "Magnetic Particle Inspection (MPI) for surface crack audits",
  "Salt Spray testing (SST) for surface rust coatings",
  "Precision Vernier & thread ring gauge audits",
  "Mill Test Certificate (MTC) supplied with shipments",
];

export default function Quality() {
  return (
    <section id="quality" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Text and Standards checklist */}
          <div className="flex-1">
            <div className="text-xs font-bold uppercase tracking-wider text-primary border-l-2 border-primary pl-2.5 mb-3">
              Quality Assurance
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-navy leading-tight">
              Uncompromising Quality & Manufacturing Standards
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-3 leading-relaxed">
              At AH Engineers, precision isn&apos;t just a specification—it&apos;s our core commitment. Every component goes through a systematic testing matrix before leaving our shop floor, ensuring zero defects at installation.
            </p>

            {/* Standards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {qualityStandards.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-3.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy">{item.title}</h3>
                    <p className="text-xs text-slate-500 font-medium mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image & Interactive Checklist */}
          <div className="flex-1 w-full lg:w-auto relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200 aspect-[4/3] w-full">
              <img
                src="/factory.png"
                alt="Quality Inspection checks"
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />

              {/* Checklist Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-5 shadow-lg border border-white/20">
                <h3 className="text-xs font-black uppercase text-navy tracking-wider mb-3">
                  Testing & Inspection Checklist
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {checklistItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-slate-700 font-semibold"
                    >
                      <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Check size={10} className="stroke-[3]" />
                      </div>
                      <span className="text-[10px] sm:text-xs leading-none">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
