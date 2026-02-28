"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SponsorsSection({ sponsors }: { sponsors: any }) {
  const { official_sponsor, innovation_partner } = sponsors.alliances;

  const allianceNodes = [
    {
      data: official_sponsor,
      color: "text-green-500",
      glow: "shadow-green-500/20",
    },
    {
      data: innovation_partner,
      color: "text-cyan-400",
      glow: "shadow-cyan-400/20",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#050505] relative overflow-hidden font-mono border-y border-[#1a1a24]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-20">
        {/* HEADER: Centered and Grand */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-200 mb-4 flex justify-center items-center gap-4">
            <span className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
            NETWORK_ALLIANCES
          </h2>
          <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.4em]">
            Dual-Node Handshake Established // Secure Partners Active
          </p>
        </div>

        {/* DUAL NODE LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {allianceNodes.map((node, idx) => (
            <motion.a
              key={node.data.name}
              href={node.data.website}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`group relative w-full h-64 bg-[#0a0a0f] border border-[#30363d] hover:border-green-500 transition-all duration-700 rounded-2xl flex flex-col items-center justify-center p-8 shadow-2xl overflow-hidden`}
            >
              {/* Node Metadata Labels (Brightened Visibility) */}
              <div className="absolute top-0 left-0 p-5 w-full flex justify-between items-start z-30">
                <div className="flex flex-col gap-1">
                  <span
                    className={`text-[10px] ${node.color} font-black uppercase tracking-tighter`}
                  >
                    {node.data.tier.toUpperCase()}
                  </span>
                  <span className="text-[8px] text-gray-400 font-bold tracking-widest">
                    UPLINK_STABLE
                  </span>
                </div>
                <div className="text-[8px] text-gray-400 font-bold text-right hidden sm:block uppercase">
                  VNRVJIET_CSBS
                  <br />
                  ALLIANCE_0{idx + 1}
                </div>
              </div>

              {/* LOGO: Large and Clear */}
              <div className="relative w-full h-[55%] transform group-hover:scale-105 transition-transform duration-700 z-10">
                <Image
                  src={node.data.logo_url}
                  alt={node.data.name}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

              {/* Bottom ID Bar */}
              <div className="absolute bottom-0 left-0 w-full py-5 bg-[#11111a] border-t border-[#1a1a24] flex items-center justify-center gap-4 z-20">
                <span
                  className={`text-xs md:text-sm font-black uppercase tracking-[0.5em] ${node.color} group-hover:text-white transition-all`}
                >
                  {node.data.name}
                </span>
              </div>

              {/* Glowing Background Accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
