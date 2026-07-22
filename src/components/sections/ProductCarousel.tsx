"use client";

import Image from "next/image";
import { ArrowRight, Activity } from "lucide-react";

interface CarouselProduct {
  title: string;
  category: string;
  image: string;
  specs: string;
}

const carouselProducts: CarouselProduct[] = [
  {
    title: "Anchor Foundation Bolts",
    category: "Heavy Fasteners",
    image: "/prod_foundation_bolts.png",
    specs: "Sizes: M12 - M100 | Grade 8.8",
  },
  {
    title: "Precision Cross U-Joints",
    category: "Power Transmission",
    image: "/prod_universal_joint.png",
    specs: "Hardness: 58-62 HRC | DIN 808",
  },
  {
    title: "Heavy Hot-Forged Flanges",
    category: "Custom Forgings",
    image: "/proc_hot_forging.png",
    specs: "Weight: Up to 150kg | ISO 9001",
  },
  {
    title: "Splined Drive Shafts",
    category: "Power Transmission",
    image: "/proc_cnc_machining.png",
    specs: "Splines: Custom CNC | EN24 Steel",
  },
  {
    title: "Flexible Pin-Bush Couplings",
    category: "Power Transmission",
    image: "/prod_flexible_couplings.png",
    specs: "Torque: Up to 15,000 Nm",
  },
  {
    title: "Rigging Lifting Eye Bolts",
    category: "Heavy Fasteners",
    image: "/prod_eye_bolts.png",
    specs: "Capacity: Up to 30 Tons | DIN 580",
  },
];

// Double the array for seamless infinite looping
const doubleProducts = [...carouselProducts, ...carouselProducts];

export default function ProductCarousel() {
  const handleScrollToProducts = () => {
    const el = document.getElementById("products");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-b border-slate-200/60 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-2">
            <Activity size={14} className="animate-pulse" />
            Showcase Spotlight
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-navy leading-tight">
            Featured Manufacturing Components
          </h2>
        </div>
        <button
          onClick={handleScrollToProducts}
          className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1 cursor-pointer focus:outline-none transition-colors border-b border-transparent hover:border-primary/40 pb-0.5"
        >
          View Full Specifications Catalog
          <ArrowRight size={14} />
        </button>
      </div>

      {/* Infinite slider track */}
      <div className="relative w-full overflow-hidden py-4 bg-slate-100/50">
        {/* Soft edge blur overlays */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Rolling wrapper */}
        <div className="flex w-max gap-6 animate-infinite-scroll hover:[animation-play-state:paused]">
          {doubleProducts.map((prod, idx) => (
            <div
              key={idx}
              className="w-72 bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 shrink-0 cursor-pointer"
              onClick={handleScrollToProducts}
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                <Image
                  src={prod.image}
                  alt={prod.title}
                  fill
                  className="object-cover opacity-90"
                  sizes="300px"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <span className="text-[9px] font-bold text-primary uppercase tracking-wider">
                  {prod.category}
                </span>
                <h4 className="text-sm font-bold text-navy mt-1 truncate">
                  {prod.title}
                </h4>
                <p className="text-[10px] text-slate-500 font-semibold mt-1">
                  {prod.specs}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
