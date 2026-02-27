"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const bootLines = [
  "INIT_SYSTEM v9.0.4...",
  "CONNECTING TO VNRVJIET MAINFRAME...",
  "UPLINK ESTABLISHED. PACKET LOSS: 0%",
  "LOADING INNOVATION_PROTOCOLS... [OK]",
  "BYPASSING DESIGN_LIMITS... [OK]",
  "LAUNCHING DESIGNATHON WORKSPACE...",
];

export default function HeroSection({ eventData }: { eventData: any }) {
  const [bootComplete, setBootComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Middle-ground speed: 300ms delay
    const timer = setTimeout(
      () => setBootComplete(true),
      bootLines.length * 300 + 600,
    );
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden font-mono px-4">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      {/* 1. COLUMN-ALIGNED CENTERED TERMINAL */}
      <AnimatePresence>
        {!bootComplete && (
          <motion.div
            exit={{ opacity: 0, scale: 1.05 }}
            className="absolute inset-0 z-[200] bg-[#050505] flex items-center justify-center p-6"
          >
            {/* This container centers itself, but keeps children left-aligned */}
            <div className="w-fit text-left">
              <div className="flex flex-col gap-2 text-green-500 text-[10px] sm:text-xs md:text-sm">
                {bootLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3 }}
                    className="flex items-start"
                  >
                    <span className="text-gray-600 mr-3 shrink-0">{`[0x${(index * 256).toString(16).toUpperCase()}]`}</span>
                    <span className="whitespace-nowrap">{line}</span>
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.7 }}
                  className="w-2 h-4 bg-green-500 mt-1"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN CONTENT */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center w-full max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: bootComplete ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-6 px-4 py-1 border border-cyan-500/30 bg-cyan-500/5 rounded-full">
          <span className="text-cyan-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">
            4th Edition // VNRVJIET
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-cyan-400 to-blue-600 drop-shadow-[0_0_20px_rgba(34,197,94,0.4)] mb-4 uppercase">
          {eventData.name}
        </h1>

        <p className="text-xs md:text-xl text-gray-400 tracking-[0.2em] uppercase mb-12 px-2 max-w-3xl leading-relaxed">
          {eventData.tagline}
        </p>

        <div className="flex flex-col items-center justify-center mb-10">
          <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-500 drop-shadow-[0_0_25px_rgba(234,179,8,0.6)]">
            {eventData.prize_pool}
          </span>
          <span className="text-[10px] text-gray-500 uppercase tracking-[0.4em] mt-2 underline underline-offset-8 decoration-yellow-500/30">
            Prize_Pool_Authorized
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-2xl px-4">
          <a
            href={eventData.registration.registration_link}
            target="_blank"
            className="group relative w-full sm:w-[300px] flex items-center justify-center px-6 py-4 bg-green-500/10 border border-green-500 text-green-400 font-bold uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all duration-300"
          >
            Initiate_Registration
          </a>
          <a
            href="#tracks"
            className="w-full sm:w-[250px] flex items-center justify-center px-6 py-4 border border-[#30363d] text-gray-400 uppercase tracking-widest hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
          >
            View_Directives
          </a>
        </div>
      </motion.div>
    </section>
  );
}
