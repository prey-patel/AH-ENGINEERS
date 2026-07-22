"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const productsList = [
  { name: "Foundation Bolts", href: "#products" },
  { name: "Anchor Bolts", href: "#products" },
  { name: "High Tensile Bolts", href: "#products" },
  { name: "Eye & Ring Bolts", href: "#products" },
  { name: "Shafts & Pulleys", href: "#products" },
  { name: "Flexible Couplings", href: "#products" },
  { name: "Custom Forging", href: "#products" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`z-50 transition-all duration-300 ${
          isScrolled
            ? "sticky top-0 bg-white shadow-md border-b border-slate-100 py-3"
            : "absolute left-0 right-0 bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 relative">
            <Image
              src={isScrolled ? "/logo_v2.png" : "/logo_white_v2.png"}
              alt="AH Engineers Logo"
              width={187}
              height={60}
              className="h-11 w-auto transition-all"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-medium">
            <a
              href="#"
              className={`hover:text-primary transition-colors text-sm ${
                isScrolled ? "text-slate-700" : "text-white"
              }`}
            >
              Home
            </a>
            
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                className={`hover:text-primary transition-colors text-sm flex items-center gap-1 cursor-pointer focus:outline-none py-2 ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                Products
                <ChevronDown size={14} className={`transition-transform duration-200 ${productsDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {productsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full w-56 bg-white border border-slate-100 rounded-xl shadow-xl py-3 z-50 grid grid-cols-1"
                  >
                    {productsList.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:text-primary transition-all duration-150 flex justify-between items-center group"
                      >
                        {item.name}
                        <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 text-primary" />
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#why-choose-us"
              className={`hover:text-primary transition-colors text-sm ${
                isScrolled ? "text-slate-700" : "text-white"
              }`}
            >
              Why Choose Us
            </a>
            <a
              href="#industries"
              className={`hover:text-primary transition-colors text-sm ${
                isScrolled ? "text-slate-700" : "text-white"
              }`}
            >
              Industries
            </a>
            <a
              href="#process"
              className={`hover:text-primary transition-colors text-sm ${
                isScrolled ? "text-slate-700" : "text-white"
              }`}
            >
              Process
            </a>
            <a
              href="#quality"
              className={`hover:text-primary transition-colors text-sm ${
                isScrolled ? "text-slate-700" : "text-white"
              }`}
            >
              Quality
            </a>
            <a
              href="#contact"
              className={`hover:text-primary transition-colors text-sm ${
                isScrolled ? "text-slate-700" : "text-white"
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant={isScrolled ? "primary" : "outline"}
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className={
                !isScrolled
                  ? "border-white text-white hover:bg-white hover:text-navy"
                  : ""
              }
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg text-slate-800"
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} className={isScrolled ? "text-slate-800" : "text-white"} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-50 lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50 p-6 flex flex-col justify-between lg:hidden"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <Image
                    src="/logo_v2.png"
                    alt="AH Engineers Logo"
                    width={125}
                    height={40}
                    className="h-9 w-auto"
                  />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col gap-5 text-base font-semibold">
                  <a
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-800 hover:text-primary py-1 transition-colors"
                  >
                    Home
                  </a>
                  <div>
                    <button
                      onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                      className="w-full flex justify-between items-center text-slate-800 hover:text-primary py-1 transition-colors"
                    >
                      Products
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          productsDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {productsDropdownOpen && (
                      <div className="mt-2 pl-4 border-l border-slate-100 flex flex-col gap-3 text-sm">
                        {productsList.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-slate-600 hover:text-primary py-0.5"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  <a
                    href="#why-choose-us"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-800 hover:text-primary py-1 transition-colors"
                  >
                    Why Choose Us
                  </a>
                  <a
                    href="#industries"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-800 hover:text-primary py-1 transition-colors"
                  >
                    Industries
                  </a>
                  <a
                    href="#process"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-800 hover:text-primary py-1 transition-colors"
                  >
                    Process
                  </a>
                  <a
                    href="#quality"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-800 hover:text-primary py-1 transition-colors"
                  >
                    Quality
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-slate-800 hover:text-primary py-1 transition-colors"
                  >
                    Contact
                  </a>
                </nav>
              </div>

              <div>
                <Button
                  className="w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Request a Quote
                </Button>
                <div className="mt-6 text-center text-xs text-slate-500">
                  © 2026 AH Engineers. All rights reserved.
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
