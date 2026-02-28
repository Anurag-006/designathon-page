"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import MatrixRain from "@/components/MatrixRain";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(
      () => setBootComplete(true),
      bootLines.length * 300 + 600,
    );
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const calculateTime = () => {
      const difference =
        new Date(eventData.start_date).getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [eventData.start_date, isMounted]);

  const TimeBox = ({
    value,
    label,
  }: {
    value: number | string;
    label: string;
  }) => (
    // FIXED TIMER BOXES: Uses dynamic width (23% of container) so they perfectly share the row on mobile, keeping full words intact.
    <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl w-[23%] max-w-[112px] aspect-[4/3] sm:aspect-square shadow-[0_0_40px_rgba(255,255,255,0.03)] shrink-0 transition-all hover:border-amber-500/50 p-1">
      <span className="text-xl sm:text-4xl md:text-5xl font-bold text-amber-500 tabular-nums drop-shadow-[0_0_15px_rgba(245,158,11,0.5)] leading-none">
        {isMounted ? String(value).padStart(2, "0") : "--"}
      </span>
      {/* Restored full labels. Text dynamically shrinks on very small screens to fit "SECONDS" */}
      <span className="text-[7px] sm:text-[10px] md:text-xs text-gray-400 uppercase tracking-widest md:tracking-[0.3em] mt-1.5 md:mt-2 font-black text-center w-full">
        {label}
      </span>
    </div>
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center bg-[#050505] overflow-hidden font-mono px-4 pb-16">
      {/* 1. RE-BALANCED TOP SPACER */}
      <div className="w-full h-[max(90px,16vh)] shrink-0" />

      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <AnimatePresence>
        {bootComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-10"
          >
            <MatrixRain />
          </motion.div>
        )}
      </AnimatePresence>

      {/* TERMINAL BOOT */}
      <AnimatePresence>
        {!bootComplete && (
          <motion.div
            exit={{ opacity: 0, scale: 1.05 }}
            className="absolute inset-0 z-[100] bg-[#050505] flex items-center justify-center p-6"
          >
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

      {/* MAIN CONTENT */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center w-full max-w-5xl px-0 md:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: bootComplete ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-4 px-6 py-2 border border-white/20 bg-white/5 backdrop-blur-md rounded-full">
          <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.5em]">
            4th Edition
          </span>
        </div>

        {/* ========================================= */}
        {/* ONE-LINE FLUID TYPOGRAPHY TITLE           */}
        {/* ========================================= */}
        <div className="relative w-full flex items-center justify-center mb-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] h-[80%] md:h-[60%] bg-white/15 blur-[40px] rounded-[100%] pointer-events-none"></div>

          {/* FIXED: Restored flex-row, added whitespace-nowrap to prevent line breaks, and used fluid vw text sizing for mobile */}
          <h1 className="relative z-10 flex flex-row justify-center items-center gap-[2vw] sm:gap-4 md:gap-8 lg:gap-12 text-[8.5vw] sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.02em] md:tracking-[-0.05em] uppercase leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 font-sans whitespace-nowrap w-full">
            <span>VNR</span>
            <span>DESIGNATHON</span>
          </h1>
        </div>

        {/* ========================================= */}
        {/* TAGLINE WITH RESPONSIVE WORD SPACING      */}
        {/* ========================================= */}
        <p className="text-[9px] md:text-lg text-gray-500 text-center tracking-[0.2em] md:tracking-[0.4em] uppercase mb-8 md:mb-6 px-4 max-w-3xl leading-relaxed italic [word-spacing:4px] md:[word-spacing:15px]">
          {eventData.tagline}
        </p>

        {/* YELLOW PRIZE MONEY */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-6">
          <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-500 drop-shadow-[0_0_25px_rgba(234,179,8,0.6)]">
            {eventData.prize_pool}
          </span>
          <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.3em] md:tracking-[0.4em] mt-2 underline underline-offset-8 decoration-yellow-500/30">
            Prize_Pool_Authorized
          </span>
        </div>

        {/* AMBER GOLD TIMER */}
        {/* Container max-w prevents them from becoming massive on tablets, gap-2 ensures they don't hit each other */}
        <div className="flex flex-row justify-center gap-2 sm:gap-4 md:gap-5 mb-10 w-full max-w-3xl px-2">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* HOSTED BY SECTION */}
        <div className="flex flex-col items-center justify-center mb-10 md:mb-8">
          <div className="flex items-center gap-3 md:gap-4 mb-4">
            <span className="w-6 md:w-8 h-px bg-gray-800"></span>
            <span className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-[0.3em] md:tracking-[0.4em]">
              Hosted_By
            </span>
            <span className="w-6 md:w-8 h-px bg-gray-800"></span>
          </div>

          <a
            href="https://vnrvjiet.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer group"
          >
            <div className="relative w-32 h-12 md:w-40 md:h-14">
              <Image
                src="/vnr-logo.png"
                alt="VNRVJIET Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 128px, 160px"
              />
            </div>
            <span className="text-[9px] md:text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] transition-colors text-center">
              Department of CSE & CSBS
            </span>
          </a>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-2xl px-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group relative w-full sm:w-[280px] flex items-center justify-center px-6 py-4 bg-green-500/10 border border-green-500 text-green-400 font-bold uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all duration-300 text-xs md:text-sm"
          >
            Initiate_Registration
          </button>
          <a
            href="#tracks"
            className="w-full sm:w-[240px] flex items-center justify-center px-6 py-4 border border-[#30363d] text-gray-400 uppercase tracking-widest hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 text-xs md:text-sm"
          >
            View_Directives
          </a>
        </div>
      </motion.div>

      {/* ========================================= */}
      {/* REGISTRATION ADVISORY MODAL               */}
      {/* ========================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 font-mono"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0f] border border-green-500/50 shadow-[0_0_40px_rgba(34,197,94,0.15)] rounded-xl max-w-lg w-full p-5 md:p-8 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

              <div className="flex items-center gap-3 mb-5 md:mb-6 border-b border-[#1a1a24] pb-4">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-green-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="text-base md:text-xl font-bold text-gray-200 tracking-widest uppercase truncate">
                  Registration Protocol
                </h3>
              </div>

              <div className="space-y-4 mb-6 md:mb-8 text-xs md:text-sm text-gray-400 leading-relaxed text-left">
                <p>
                  Please review the official fee structure before proceeding to
                  the registration portal:
                </p>
                <div className="bg-[#050505] border border-[#1a1a24] p-3 md:p-4 rounded-lg space-y-4">
                  <div className="flex items-start gap-2 md:gap-3">
                    <span className="text-green-500 mt-0.5 shrink-0">▸</span>
                    <div>
                      <span className="text-gray-200 font-bold block mb-1">
                        Phase 01 (Abstract Submission):
                      </span>
                      <p className="text-gray-500 leading-snug">
                        Free of charge. All teams may submit their initial ideas
                        without any registration fee.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 md:gap-3">
                    <span className="text-yellow-500 mt-0.5 shrink-0">▸</span>
                    <div>
                      <span className="text-gray-200 font-bold block mb-1">
                        Phase 02 (Final Execution):
                      </span>
                      <p className="text-gray-500 leading-snug">
                        Teams shortlisted for the 24-hour on-campus event will
                        be required to pay a confirmation fee of{" "}
                        <span className="text-yellow-500 font-bold">
                          ₹500/-
                        </span>{" "}
                        per team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:flex-1 px-4 py-3 md:py-4 border border-red-500/50 text-red-400 font-bold uppercase tracking-widest hover:bg-red-500/10 transition-colors rounded-lg sm:rounded-none text-[10px] md:text-xs"
                >
                  [ ABORT ]
                </button>
                <a
                  href={eventData.registration.registration_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full sm:flex-[2] text-center px-4 py-3 md:py-4 bg-green-500 text-black font-black uppercase tracking-widest hover:bg-green-400 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.3)] rounded-lg sm:rounded-none text-[10px] md:text-xs"
                >
                  ACKNOWLEDGE & PROCEED
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
