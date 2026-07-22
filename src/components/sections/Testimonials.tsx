"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  designation: string;
  company: string;
  industry: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: "AH Engineers supplied critical foundation bolts for our cement kiln expansion. The dimensional accuracy and Mill Test Certificates were immaculate, keeping our project on schedule with zero alignment issues.",
    author: "Rahul Sharma",
    designation: "Head of Sourcing",
    company: "L&T Infrastructure Projects",
    industry: "Cement & Infrastructure",
  },
  {
    quote: "We have been sourcing custom splined shafts and flexible couplings for our sugar mill crushing machinery. The induction hardening is top-notch, drastically reducing our annual mechanical breakdown rates.",
    author: "Vikram Singhania",
    designation: "VP Mechanical Maintenance",
    company: "Balrampur Chini Mills Group",
    industry: "Sugar Mills & Bio-fuels",
  },
  {
    quote: "Their closed-die forging capabilities are world-class. From technical drawings to final normalized components, AH Engineers has proven to be a highly reliable partner for our heavy-duty engineering parts.",
    author: "Anoop Deshmukh",
    designation: "Director of Operations",
    company: "Gujarat Heavy Engineering Ltd.",
    industry: "Heavy Engineering & Manufacturing",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex text-xs font-bold uppercase tracking-wider text-primary border-b border-primary/20 pb-2 mb-3">
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-navy leading-tight mt-2">
            Trusted by Procurement Managers
          </h2>
          <p className="text-sm text-slate-500 font-medium mt-3 max-w-lg mx-auto">
            Read what engineering and procurement leads say about our component quality, delivery schedules, and customer service.
          </p>
        </div>

        {/* Testimonial Box */}
        <div className="relative bg-slate-50 border border-slate-200/80 rounded-2xl p-8 md:p-14 shadow-lg shadow-slate-100/50">
          {/* Quote mark icon background */}
          <div className="absolute top-6 right-8 text-slate-200 pointer-events-none">
            <Quote size={80} className="stroke-[1.5] opacity-20" />
          </div>

          <div className="min-h-[180px] flex flex-col justify-between">
            <div
              key={current}
              className="animate-fade-in"
            >
              {/* Quote Text */}
              <p className="text-sm sm:text-base md:text-lg text-slate-700 italic font-medium leading-relaxed mb-8">
                &ldquo;{testimonialsData[current].quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-200/60">
                <div>
                  <h4 className="text-sm font-bold text-navy">
                    {testimonialsData[current].author}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {testimonialsData[current].designation} &mdash; <span className="text-slate-700 font-semibold">{testimonialsData[current].company}</span>
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-primary bg-primary/5 px-2.5 py-1 rounded-md border border-primary/25 self-start sm:self-auto">
                  <CheckCircle size={12} />
                  Verified Partner: {testimonialsData[current].industry}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute -bottom-6 right-8 flex gap-2">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary shadow-md hover:shadow-lg transition-all flex items-center justify-center cursor-pointer focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-primary hover:border-primary shadow-md hover:shadow-lg transition-all flex items-center justify-center cursor-pointer focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
