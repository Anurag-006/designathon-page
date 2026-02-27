"use client";

import { motion } from "framer-motion";

export interface Sponsor {
  name: string;
  tier: string;
  website: string;
  logo_url: string;
}

interface SponsorsSectionProps {
  sponsorsData: Sponsor[];
}

export default function SponsorsSection({
  sponsorsData,
}: SponsorsSectionProps) {
  const marqueeSponsors = Array.from({ length: 20 }).flatMap(
    () => sponsorsData,
  );

  if (!sponsorsData || sponsorsData.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden font-mono border-t border-b border-[#1a1a24]">
      {/* Subtle scanline overlay for the terminal effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,255,100,0.02)_50%)] bg-[length:100%_4px] pointer-events-none z-10"></div>

      {/* HEADER: Centered on mobile, Left-aligned on PC */}
      <div className="max-w-7xl mx-auto px-4 relative z-20 mb-10 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 inline-flex items-center gap-3 tracking-tighter sm:tracking-normal">
          <span className="text-yellow-500 animate-pulse shrink-0">●</span>
          NETWORK_ALLIANCES
        </h2>
        <p className="text-gray-500 mt-3 text-[10px] md:text-xs uppercase tracking-[0.2em] block">
          Initiating handshake with partner entities... [OK]
        </p>
      </div>

      {/* The Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center h-32 md:h-48 bg-[#0a0a0f]/50 backdrop-blur-sm shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 md:before:w-32 before:bg-gradient-to-r before:from-[#050505] before:to-transparent before:z-20 after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 md:after:w-32 after:bg-gradient-to-l after:from-[#050505] after:to-transparent after:z-20">
        <motion.div
          className="flex gap-4 md:gap-8 w-max pl-4 md:pl-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {marqueeSponsors.map((sponsor, index) => (
            <a
              key={`${sponsor.name}-${index}`}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center w-48 h-24 md:w-64 md:h-32 bg-[#0a0a0f] border border-[#30363d] hover:border-yellow-500/50 rounded transition-colors duration-300 flex-shrink-0 overflow-hidden"
            >
              {/* Decorative terminal corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gray-600 group-hover:border-yellow-500 transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gray-600 group-hover:border-yellow-500 transition-colors"></div>

              {/* Sponsor Tier Label */}
              <div className="absolute top-2 left-2 text-[8px] md:text-[10px] text-gray-500 tracking-widest uppercase group-hover:text-yellow-500/70 transition-colors z-20">
                // {sponsor.tier}
              </div>

              {/* Sponsor Logo Image */}
              <img
                src={sponsor.logo_url}
                alt={sponsor.name}
                className="max-h-10 md:max-h-16 max-w-[80%] object-contain opacity-50 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0 z-10"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling?.classList.remove(
                    "hidden",
                  );
                }}
              />

              {/* Text Fallback */}
              <div className="hidden text-sm md:text-xl font-bold text-gray-400 group-hover:text-white transition-all z-10 text-center px-4">
                {sponsor.name}
              </div>

              {/* Background glow */}
              <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
