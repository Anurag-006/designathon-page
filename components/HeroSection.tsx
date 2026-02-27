"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import MatrixRain from "./MatrixRain";

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
    <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl w-16 h-20 sm:w-24 sm:h-28 md:w-32 md:h-32 shadow-[0_0_40px_rgba(255,255,255,0.03)] shrink-0 transition-all hover:border-amber-500/50">
      <span className="text-2xl sm:text-4xl md:text-5xl font-bold text-amber-500 tabular-nums drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">
        {isMounted ? String(value).padStart(2, "0") : "--"}
      </span>
      <span className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 uppercase tracking-[0.3em] mt-1 md:mt-2 font-black">
        {label}
      </span>
    </div>
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center bg-[#050505] overflow-hidden font-mono px-4 pb-20">
      {/* 1. THE "SWEET SPOT" SPACER 
          20vh places the title in the upper focal point.
          100px ensures mobile screens still clear the navbar safely. */}
      <div className="w-full h-[max(100px,20vh)] shrink-0" />

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
        className="relative z-20 flex flex-col items-center text-center w-full max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: bootComplete ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mb-8 px-6 py-2 border border-white/20 bg-white/5 backdrop-blur-md rounded-full">
          <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.5em]">
            4th Edition // VNRVJIET
          </span>
        </div>

        {/* NORMAL TEXT TITLE WITH CHROME GRADIENT */}
        <div className="relative mb-12 w-full flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.05em] uppercase leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)] font-sans">
            {eventData.name || "VNR DESIGNATHON"}
          </h1>
        </div>

        <p className="text-[10px] md:text-lg text-gray-500 tracking-[0.4em] uppercase mb-12 px-2 max-w-3xl leading-relaxed italic">
          {eventData.tagline}
        </p>

        {/* YELLOW PRIZE MONEY */}
        <div className="flex flex-col items-center justify-center mb-12">
          <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-500 drop-shadow-[0_0_25px_rgba(234,179,8,0.6)]">
            {eventData.prize_pool}
          </span>
          <span className="text-[10px] text-gray-500 uppercase tracking-[0.4em] mt-2 underline underline-offset-8 decoration-yellow-500/30">
            Prize_Pool_Authorized
          </span>
        </div>

        {/* AMBER GOLD TIMER */}
        <div className="flex flex-row justify-center gap-3 sm:gap-4 md:gap-5 mb-14 w-full px-2">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-2xl px-4">
          <a
            href={eventData.registration.registration_link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-[280px] flex items-center justify-center px-6 py-4 bg-green-500/10 border border-green-500 text-green-400 font-bold uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all duration-300"
          >
            Initiate_Registration
          </a>
          <a
            href="#tracks"
            className="w-full sm:w-[240px] flex items-center justify-center px-6 py-4 border border-[#30363d] text-gray-400 uppercase tracking-widest hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
          >
            View_Directives
          </a>
        </div>
      </motion.div>
    </section>
  );
}
