"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Wrench,
  BadgeDollarSign,
  Users,
  Truck,
  HeartHandshake,
} from "lucide-react";

interface Reason {
  title: string;
  description: string;
  icon: any;
}

const reasons: Reason[] = [
  {
    title: "High Quality Assurance",
    description: "Every component is manufactured under strict ISO guidelines, undergoing ultrasonic, hardness, and dimension audits.",
    icon: ShieldCheck,
  },
  {
    title: "Custom Manufacturing",
    description: "Tailor-made structural bolts, shafts, and forging components crafted precisely to your technical drawings and CAD specs.",
    icon: Wrench,
  },
  {
    title: "Competitive Pricing",
    description: "Optimized in-house production cycles and smart sourcing enable premium B2B quality at highly competitive prices.",
    icon: BadgeDollarSign,
  },
  {
    title: "Experienced Team",
    description: "Supported by senior metallurgists, CAD designers, and CNC operators holding over 20 years of manufacturing experience.",
    icon: Users,
  },
  {
    title: "Fast & Reliable Delivery",
    description: "Global delivery integrations and optimized logistics keep dispatch times fast, ensuring minimal plant downtime.",
    icon: Truck,
  },
  {
    title: "Customer Satisfaction",
    description: "Dedicated account engineers managing your order from raw-material selection through dispatch and after-sales.",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex text-xs font-bold uppercase tracking-wider text-primary border-b border-primary/20 pb-2 mb-3">
            Why AH Engineers
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-navy leading-tight mt-2">
            Engineered for Industrial Performance
          </h2>
          <p className="text-sm text-slate-500 font-medium mt-3">
            Partnering with global clients to supply heavy engineering fasteners, joints, and custom forging parts that ensure operational reliability.
          </p>
        </div>

        {/* Reason Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="group bg-slate-50 border border-slate-200/60 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:border-primary/20 hover:bg-white hover:-translate-y-1 transition-all duration-300"
            >
              {/* Floating icon */}
              <div className="w-12 h-12 rounded-xl bg-white text-slate-700 shadow-sm border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                <item.icon size={22} className="stroke-[1.75]" />
              </div>

              <h3 className="text-base font-bold text-navy mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
