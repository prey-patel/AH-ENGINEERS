import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-navy text-slate-300 border-b border-slate-800 text-xs py-2 px-4 sm:px-6 md:px-8 hidden lg:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Info Contact */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 hover:text-white transition-colors duration-200">
            <MapPin size={14} className="text-primary" />
            <span>Asarva, Ahmedabad, India</span>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors duration-200">
            <Phone size={14} className="text-primary" />
            <a href="tel:+919879056926">+91 98790 56926</a>
          </div>
          <div className="flex items-center gap-2 hover:text-white transition-colors duration-200">
            <Mail size={14} className="text-primary" />
            <a href="mailto:aheng6006@yahoo.com">aheng6006@yahoo.com</a>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-primary" />
            <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* Certification */}
        <div>
          <div className="text-[10px] uppercase font-bold tracking-widest text-primary border border-primary/45 rounded px-2 py-0.5 bg-primary/5">
            ISO 9001:2015 Certified
          </div>
        </div>
      </div>
    </div>
  );
}
