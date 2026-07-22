"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPreview() {
  const handleScrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-slate-50">
      
      {/* 1. Large Call To Action Banner */}
      <div
        className="relative py-24 px-4 sm:px-6 md:px-8 text-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(46, 107, 62, 0.6) 100%), url('/forgings.png')`,
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight leading-tight">
            Need Custom Engineering Components?
          </h2>
          <p className="text-sm sm:text-base text-slate-200 mt-4 max-w-xl font-medium">
            Contact us today for custom quotes on foundation bolts, coupling sets, splined shafts, or custom forgings. Our team responds within 24 hours.
          </p>
          <div className="mt-8">
            <Button
              size="lg"
              onClick={handleScrollToContact}
              className="text-xs uppercase tracking-wider font-bold"
            >
              Get Corporate Contact
            </Button>
          </div>
        </div>
      </div>

      {/* 2. Contact Details & Map Grid */}
      <div id="contact-section" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-primary border-l-2 border-primary pl-2.5 inline-block mb-3">
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-navy leading-tight">
            Our Corporate Offices & Manufacturing Plant
          </h2>
          <p className="text-sm text-slate-500 font-medium leading-relaxed mt-3 max-w-2xl mx-auto">
            Visit our tooling facilities or speak with our sales representatives. We distribute globally from Ahmedabad, Gujarat, India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Contact details card */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-md shadow-slate-100/50 gap-6">
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Plant Address</h4>
                <a
                  href="https://maps.google.com/?q=Plot+No.+B/14+Swaminarayan+Wadi+Asarva+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-500 font-semibold mt-1 leading-relaxed hover:text-primary transition-colors block"
                >
                  Plot No. : B/14, Swaminarayan Wadi, <br />
                  Nr. Swaminarayan Gurukul, Hathikhana Babupura, <br />
                  Asarva Road, Asarva, Ahmedabad - 380016, Gujarat, India
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center shrink-0">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Call Inquiries</h4>
                <p className="text-sm text-slate-500 font-semibold mt-1">
                  <a href="tel:+919879056926" className="hover:text-primary transition-colors">+91 98790 56926</a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center shrink-0">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Email Communications</h4>
                <p className="text-sm text-slate-500 font-semibold mt-1">
                  <a href="mailto:aheng6006@yahoo.com" className="hover:text-primary transition-colors">aheng6006@yahoo.com</a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 flex items-center justify-center shrink-0">
                <Clock size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-navy uppercase tracking-wider">Business Hours</h4>
                <p className="text-sm text-slate-500 font-semibold mt-1">
                  Monday &ndash; Saturday: 8:00 AM &ndash; 6:00 PM <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Styled Map Card */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden bg-[#0A0F1D] min-h-[350px] border border-slate-800 shadow-lg group flex flex-col justify-center items-center">
            {/* Map grid lines / design styling */}
            <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/40 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin size={22} />
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Interactive Map Location</h4>
              <p className="text-xs text-slate-400 mt-2 max-w-xs leading-relaxed">
                Asarva, Ahmedabad - 380016, India. <br />
                Coordinates: 23.0416° N, 72.6025° E
              </p>
              {/* Simulated route button */}
              <a
                href="https://maps.google.com/?q=Plot+No.+B/14+Swaminarayan+Wadi+Asarva+Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-xs uppercase font-bold text-primary hover:text-primary-hover transition-colors flex items-center gap-1.5"
              >
                Open in Google Maps
                <span className="text-xs">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
