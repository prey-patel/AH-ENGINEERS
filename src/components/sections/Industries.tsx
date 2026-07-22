"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FlaskConical,
  Layers,
  Container,
  Activity,
  Cpu,
  Flame,
  Zap,
  Factory,
} from "lucide-react";

interface Industry {
  title: string;
  description: string;
  image: string;
  icon: any;
}

const industriesList: Industry[] = [
  {
    title: "Chemical Plants",
    description: "Anti-corrosive fasteners and structural bolts manufactured using special alloys to resist aggressive environments.",
    image: "/ind_chemical.png",
    icon: FlaskConical,
  },
  {
    title: "Paper Industries",
    description: "High-grade steel drive shafts, flexible couplings, and pulleys optimized for continuous web-handling runtimes.",
    image: "/ind_paper.png",
    icon: Layers,
  },
  {
    title: "Cement Plants",
    description: "Heavy-duty foundation anchor bolts and high-torque couplings engineered to withstand dust and high vibrations.",
    image: "/ind_cement.png",
    icon: Container,
  },
  {
    title: "Sugar Mills",
    description: "Heavy forged components, custom gear pulleys, and shafts optimized to run smoothly under damp and acidic conditions.",
    image: "/ind_sugar.png",
    icon: Activity,
  },
  {
    title: "Heavy Engineering",
    description: "High-tensile structural bolts, pins, and custom forgings tailored for high-scale infrastructure developments.",
    image: "/ind_heavy_eng.png",
    icon: Cpu,
  },
  {
    title: "Steel Industries",
    description: "Heat-treated rollers, custom-forged components, and heavy-duty nuts built to withstand extreme thermal stresses.",
    image: "/ind_steel.png",
    icon: Flame,
  },
  {
    title: "Power Plants",
    description: "Turbine-grade bolts, studs, and high-transmission couplings engineered for thermal power and hydro facilities.",
    image: "/ind_power.png",
    icon: Zap,
  },
  {
    title: "Manufacturing",
    description: "Standard off-the-shelf and custom-designed mechanical components for automated assembly lines and robotic units.",
    image: "/ind_manufacturing.png",
    icon: Factory,
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 bg-slate-900 text-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-primary border-l-2 border-primary pl-2.5 mb-3">
            Sectors We Support
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black tracking-tight leading-tight">
            Engineering Solutions Across Core Industries
          </h2>
          <p className="text-sm text-slate-400 font-medium mt-3 max-w-xl">
            We deliver critical components and heavy-duty fasteners to key sectors, driving reliability and efficiency worldwide.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesList.map((ind, idx) => (
            <div
              key={idx}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-slate-800 hover:border-primary/40 transition-colors duration-300"
            >
              {/* Image background with zoom on hover */}
              <Image
                src={ind.image}
                alt={ind.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-60 group-hover:opacity-75"
                sizes="(max-width: 640px) 100vw, 300px"
              />

              {/* Gradient overlay - turns green/blue-grey on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent transition-all duration-500 group-hover:from-slate-950 group-hover:via-slate-950/20" />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Contents */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                {/* Floating Icon */}
                <div className="w-10 h-10 rounded-xl bg-slate-800/80 text-white flex items-center justify-center mb-4 border border-slate-700/50 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <ind.icon size={20} className="stroke-[1.75]" />
                </div>

                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                    {ind.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
