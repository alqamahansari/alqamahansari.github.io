// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#040812] border-t border-[#5A9ABF]/10">
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left — Name */}
        <button
          onClick={scrollToTop}
          className="text-lg font-black text-white uppercase tracking-tighter font-['Space_Grotesk'] hover:text-[#00C9A7] transition-colors duration-200"
        >
          Alquamah Ansari
        </button>

        {/* Center — Copyright */}
        <p className="text-xs text-slate-500 font-['Space_Grotesk'] tracking-widest uppercase text-center">
          © 2026 Mohammad Alquamah Ansari · ML Engineer
        </p>

        {/* Right — Status */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00C9A7] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] font-['Space_Grotesk']">
            Available for Work
          </span>
        </div>

      </div>
    </footer>
  );
}