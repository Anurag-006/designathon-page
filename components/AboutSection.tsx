"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-[#050505] relative overflow-hidden font-mono border-t border-[#1a1a24]"
    >
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-[#30363d] pb-6 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 inline-block">
            <span className="text-gray-600 mr-2">~/</span>SYSTEM_ARCHIVES
          </h2>
          <p className="text-gray-500 font-mono text-xs md:text-sm mt-2 uppercase tracking-[0.2em]">
            Decrypting institutional and event parameters... [OK]
          </p>
        </motion.div>

        {/* Two-Column Terminal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: About VNR VJIET */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col bg-[#0a0a0f]/80 backdrop-blur-md border border-[#30363d] rounded-lg overflow-hidden group hover:border-green-500/50 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            {/* Terminal Header */}
            <div className="bg-[#050505] border-b border-[#30363d] px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>
              <span className="text-xs text-gray-500 tracking-widest uppercase">
                host_origin.md
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-12 flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                <span className="text-gray-600">{">"}</span> About VNR VJIET
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify flex-1">
                Established in 1995 by the Vignana Jyothi Society, the
                Vallurupalli Nageswara Rao Vignana Jyothi Institute of
                Engineering and Technology (VNRVJIET) is recognized by the UGC
                as a "College with Potential for Excellence" and has been
                accredited by NAAC with A++ with the highest CGPA in South India
                of 3.73 out of 4. Many awards have been bestowed upon the
                college, including a "Best Innovation by Engineering Institute"
                at the Global Education Summit, "Best Managed College with CSR"
                from the Telangana IT Association, and so on.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Event Overview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col bg-[#0a0a0f]/80 backdrop-blur-md border border-[#30363d] rounded-lg overflow-hidden group hover:border-cyan-500/50 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            {/* Terminal Header */}
            <div className="bg-[#050505] border-b border-[#30363d] px-4 py-3 flex items-center justify-between shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-cyan-500/70"></div>
              </div>
              <span className="text-xs text-gray-500 tracking-widest uppercase">
                mission_brief.txt
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 md:p-12 flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                <span className="text-gray-600">{">"}</span> Event Overview
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify flex-1">
                Step into the mystical realm of VNR DESIGN-A-THON, a 24-hour
                hackathon where creativity meets innovation! This crucible of
                design thinking fuels collaboration, problem-solving, and
                technical excellence. Guided by industry experts, participants
                craft groundbreaking solutions aligned with the given prompts.
                With incredible prizes and an electrifying atmosphere, VNR
                DESIGN-A-THON is your gateway to transforming imagination into
                reality. Heed the call, embrace the challenge, and let the magic
                unfold!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
