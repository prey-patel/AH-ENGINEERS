"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Info, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  title: string;
  category: "fasteners" | "transmission" | "forging";
  description: string;
  image: string;
  specs: {
    materials: string;
    sizes: string;
    standards: string;
    coating: string;
  };
}

const productsData: Product[] = [
  {
    id: "prod-1",
    title: "Foundation Bolts",
    category: "fasteners",
    description: "Heavy-duty bolts designed to secure structural columns and machinery to concrete foundations.",
    image: "/prod_foundation_bolts.png",
    specs: {
      materials: "Carbon Steel, Alloy Steel, Stainless Steel",
      sizes: "M12 to M100 (up to 4000mm length)",
      standards: "IS 5624, DIN 529",
      coating: "Hot Dip Galvanized, Zinc Plated, Black Oxide",
    },
  },
  {
    id: "prod-2",
    title: "Eye Bolts",
    category: "fasteners",
    description: "Forged rigging bolts with a loop/eye end, engineered for secure overhead lifting and mechanical anchoring.",
    image: "/prod_eye_bolts.png",
    specs: {
      materials: "Forged C15 Carbon Steel, SS 304/316",
      sizes: "M8 to M64",
      standards: "DIN 580, ISO 3266",
      coating: "Self-Colored, Electro-Zinc Plated",
    },
  },
  {
    id: "prod-3",
    title: "Ring Bolts",
    category: "fasteners",
    description: "Heavy-duty closed loop ring bolts designed for heavy rigging, lifting operations, and cable tensioning.",
    image: "/prod_ring_bolts.png",
    specs: {
      materials: "High Tensile Carbon Steel, SS 316",
      sizes: "M10 to M48",
      standards: "DIN 582, BS 3971",
      coating: "Hot Dip Galvanized, Self-Colored",
    },
  },
  {
    id: "prod-4",
    title: "Anchor & Crusher Bolts",
    category: "fasteners",
    description: "High-strength anchor bolts designed for securing stone crushers and vibrating heavy plant machinery.",
    image: "/prod_anchor_crusher_bolts.png",
    specs: {
      materials: "High Tensile Alloy Steel Grade 8.8, 10.9",
      sizes: "M24 to M72",
      standards: "ASTM A325, IS 1367",
      coating: "Zinc Plated, Phosphate Coated",
    },
  },
  {
    id: "prod-5",
    title: "“J” Bolts",
    category: "fasteners",
    description: "Hook-shaped J-bolts designed to anchor structural frames and support steel beams in concrete structures.",
    image: "/prod_j_bolts.png",
    specs: {
      materials: "Mild Steel, Stainless Steel 304",
      sizes: "M8 to M36",
      standards: "DIN 529 Style C",
      coating: "Hot Dip Galvanized, Zinc Electroplated",
    },
  },
  {
    id: "prod-6",
    title: "Foundation Bolts (as per drawing provided)",
    category: "fasteners",
    description: "Fully customized foundation bolts fabricated precisely to client-submitted blueprints and engineering specifications.",
    image: "/prod_custom_foundation_bolts.png",
    specs: {
      materials: "Custom Alloy Grade, EN8, EN19, SS304/316",
      sizes: "Custom diameters up to M120",
      standards: "As per client drawing",
      coating: "Specified by client (Galvanized/PTFE)",
    },
  },
  {
    id: "prod-7",
    title: "S.S. Nut Bolts",
    category: "fasteners",
    description: "Corrosion-resistant stainless steel nut and bolt pairs designed for chemical processing and marine applications.",
    image: "/prod_ss_nut_bolts.png",
    specs: {
      materials: "Stainless Steel A2 (304), A4 (316), Dual Grade",
      sizes: "M6 to M48",
      standards: "DIN 931 / 933, ISO 4017",
      coating: "Passivated, Plain Polish",
    },
  },
  {
    id: "prod-8",
    title: "M.S. Special Nut Bolts",
    category: "fasteners",
    description: "Specialty mild steel nut and bolt sets engineered to client requirements for general structural fastenings.",
    image: "/prod_ms_special_nut_bolts.png",
    specs: {
      materials: "Mild Steel Grade 4.6, 5.6",
      sizes: "M6 to M64",
      standards: "Custom / IS 1363",
      coating: "Black Phosphate, Zinc Plated",
    },
  },
  {
    id: "prod-9",
    title: "High Tensile Nut-Bolts",
    category: "fasteners",
    description: "High-strength grade fasteners engineered to withstand extreme vibrations and shear loads in heavy machinery.",
    image: "/proc_quality_check.png",
    specs: {
      materials: "Alloy Steel Grade 8.8, 10.9, 12.9",
      sizes: "M10 to M72",
      standards: "ISO 898-1, DIN 933 / 931",
      coating: "Phosphate Black, Geomet, Dacromet",
    },
  },
  {
    id: "prod-10",
    title: "Universal Joint (All types)",
    category: "transmission",
    description: "High-torque steel cross-journal universal joints enabling angular power transmission in drive trains.",
    image: "/prod_universal_joint.png",
    specs: {
      materials: "20CrMnTi, Case Hardened Carbon Steel",
      sizes: "10mm to 150mm shaft diameter",
      standards: "DIN 808",
      coating: "Anti-Rust Oil Coating",
    },
  },
  {
    id: "prod-11",
    title: "Flexible Couplings (All types)",
    category: "transmission",
    description: "Shaft couplings designed to isolate vibrations, absorb shock loads, and accommodate minor shaft misalignments.",
    image: "/prod_flexible_couplings.png",
    specs: {
      materials: "Cast Iron FG250, SG Iron, PU Elastomers",
      sizes: "Bores up to 200mm, Torque to 25,000 Nm",
      standards: "AGMA Class 9",
      coating: "Powder Coated, Painted Protective Grey",
    },
  },
  {
    id: "prod-12",
    title: "“VEE” Groove Pulleys",
    category: "transmission",
    description: "Precision-machined cast iron V-belt pulleys dynamically balanced to ensure smooth power transmission.",
    image: "/prod_vee_groove_pulleys.png",
    specs: {
      materials: "Graded Cast Iron FG220 / FG260",
      sizes: "Single/Multi groove, 50mm to 1500mm diameter",
      standards: "IS 3142, ISO 4183",
      coating: "Rust Preventive primer",
    },
  },
  {
    id: "prod-13",
    title: "M.S. SAG Rods (Stud)",
    category: "fasteners",
    description: "Mild steel structural tie rods and hanger studs used to support metal purlins and wall girts.",
    image: "/prod_ms_sag_rods.png",
    specs: {
      materials: "Mild Steel Grade 4.6",
      sizes: "M12 to M36 (lengths up to 6000mm)",
      standards: "Custom structural design specs",
      coating: "Hot Dip Galvanized, Red Oxide Primer",
    },
  },
  {
    id: "prod-14",
    title: "S.S. SAG Rods (Stud)",
    category: "fasteners",
    description: "Stainless steel tie rods and girt supports offering high corrosion resistance in acidic or seaside environments.",
    image: "/prod_ss_sag_rods_v2.png",
    specs: {
      materials: "Stainless Steel 304, 316 Grades",
      sizes: "M12 to M36 (lengths up to 6000mm)",
      standards: "ASTM A193 / A320",
      coating: "Plain Polished",
    },
  },
  {
    id: "prod-15",
    title: "Shafts",
    category: "transmission",
    description: "Precision-ground induction hardened steel shafts, including splined shafts and transmission shafts.",
    image: "/proc_cnc_machining.png",
    specs: {
      materials: "EN8, EN19, EN24, C45 Alloy Steel",
      sizes: "Diameter 15mm to 300mm, length to 4000mm",
      standards: "ISO h6/g6 tolerance class",
      coating: "Hard Chrome Plated, Ground Polish",
    },
  },
  {
    id: "prod-16",
    title: "Coupling",
    category: "transmission",
    description: "Rigid sleeve and muff couplings engineered for locking heavy-duty shafts together coaxially.",
    image: "/prod_coupling.png",
    specs: {
      materials: "Forged Carbon Steel, Cast Iron",
      sizes: "Bores 20mm to 250mm",
      standards: "DIN 115",
      coating: "Anti-corrosion oil, Epoxy painted",
    },
  },
];

const categories = [
  { id: "all", name: "All Components" },
  { id: "fasteners", name: "Fasteners & Rods" },
  { id: "transmission", name: "Transmission & Pulleys" },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeTab === "all"
    ? productsData
    : productsData.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-20 lg:py-28 bg-slate-50 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-primary border-l-2 border-primary pl-2.5 mb-3">
              Product Catalog
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-navy leading-tight">
              Precision Engineered Components
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-3 max-w-xl">
              Our products are manufactured in-house under strict quality checks using premium grade raw materials to ensure heavy-duty reliability.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "text-white bg-primary border border-primary shadow-sm"
                    : "text-slate-600 bg-white border border-slate-200 hover:bg-slate-50"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group bg-white border border-slate-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
            >
              <div>
                {/* Image wrapper */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                    sizes="(max-width: 640px) 100vw, 300px"
                  />
                  {/* Subtle Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-base font-bold text-navy group-hover:text-primary transition-colors duration-250">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2 line-clamp-3">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Card footer */}
              <div className="px-5 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-navy transition-colors flex items-center gap-1">
                  <Info size={12} className="text-primary/70" />
                  View Specs
                </span>
                <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-primary text-slate-600 group-hover:text-white transition-all flex items-center justify-center">
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specification Modal (Radix style Dialog) */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-slate-950/80 z-50 backdrop-blur-sm"
            />
            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 bottom-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Image side */}
              <div className="relative w-full md:w-5/12 h-44 md:h-auto min-h-[220px] bg-slate-900">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  className="object-cover opacity-90"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
              </div>

              {/* Specs side */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-[10px] font-bold text-primary uppercase tracking-wider">
                        {selectedProduct.category}
                      </div>
                      <h3 className="text-xl font-bold text-navy mt-1">
                        {selectedProduct.title}
                      </h3>
                    </div>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                  
                  <p className="text-xs text-slate-500 mt-3 font-medium leading-relaxed">
                    {selectedProduct.description}
                  </p>

                  {/* Specs Table */}
                  <div className="mt-5 space-y-2 border-t border-b border-slate-100 py-4">
                    {[
                      { label: "Available Materials", val: selectedProduct.specs.materials },
                      { label: "Available Sizes", val: selectedProduct.specs.sizes },
                      { label: "Compliance Standards", val: selectedProduct.specs.standards },
                      { label: "Surface Coating", val: selectedProduct.specs.coating },
                    ].map((spec, sidx) => (
                      <div key={sidx} className="flex justify-between gap-4 text-xs font-semibold">
                        <span className="text-slate-400 w-1/3 shrink-0">{spec.label}</span>
                        <span className="text-slate-700 text-right">{spec.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    onClick={() => {
                      setSelectedProduct(null);
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="flex-1 text-xs uppercase tracking-wider"
                  >
                    Request Specifications Quote
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setSelectedProduct(null)}
                    className="text-xs uppercase tracking-wider"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
