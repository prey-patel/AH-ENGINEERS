import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0F1D] text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
        
        {/* About Column */}
        <div className="md:col-span-2 flex flex-col items-start gap-4">
          <Image
            src="/logo_white_v2.png"
            alt="AH Engineers Logo"
            width={156}
            height={50}
            className="h-9 w-auto"
          />
          <p className="text-sm text-slate-400 mt-2 leading-relaxed max-w-sm">
            AH Engineers has been a leading manufacturer of premium industrial forged components and high-tensile fasteners for over 20 years. We specialize in precision engineering built for durability, strength, and reliability.
          </p>
        </div>

        {/* Products Column */}
        <div className="md:col-span-1">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-primary pl-2.5">
            Products
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              "Foundation Bolts",
              "Anchor Bolts",
              "High Tensile Bolts",
              "Eye & Ring Bolts",
              "Universal Joints",
              "Flexible Couplings",
              "Custom Forging",
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href="#products"
                  className="hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  <span className="h-1 w-1 bg-slate-700 rounded-full group-hover:bg-primary transition-all group-hover:w-2" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries Column */}
        <div className="md:col-span-1">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-primary pl-2.5">
            Industries
          </h4>
          <ul className="space-y-2.5 text-sm">
            {[
              "Chemical Plants",
              "Paper Industries",
              "Cement Plants",
              "Sugar Mills",
              "Power Plants",
              "Steel Industries",
              "Heavy Engineering",
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href="#industries"
                  className="hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  <span className="h-1 w-1 bg-slate-700 rounded-full group-hover:bg-primary transition-all group-hover:w-2" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-8 border-t border-slate-900/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <div className="flex flex-wrap gap-4 text-slate-500">
          <span>© {currentYear} AH Engineers. All rights reserved.</span>
          <span className="hidden md:inline">|</span>
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Service</a>
          <a href="#" className="hover:text-slate-300">Sitemap</a>
        </div>
        <div className="text-slate-500 flex items-center gap-1.5">
          <span>Designed & Built with Precision</span>
          <ArrowUpRight size={12} className="text-primary" />
        </div>
      </div>
    </footer>
  );
}
