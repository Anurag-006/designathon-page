"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const bootLines = [
  "INIT_SYSTEM v9.0.4...",
  "CONNECTING TO VNRVJIET MAINFRAME...",
  "UPLINK ESTABLISHED. PACKET LOSS: 0%",
  "LOADING INNOVATION_PROTOCOLS... [OK]",
  "BYPASSING DESIGN_LIMITS... [OK]",
  "LAUNCHING DESIGNATHON WORKSPACE...",
];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function HeroSection({ eventData }: { eventData: any }) {
  const [bootComplete, setBootComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 1. BOOT SEQUENCE LOGIC WITH MOBILE FAST-BOOT
  useEffect(() => {
    setIsMounted(true);

    // If we are on a mobile device (< 768px), skip the timer and load instantly
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setBootComplete(true);
      return;
    }

    // Otherwise, run the full 3-second boot sequence for desktop
    const timer = setTimeout(
      () => {
        setBootComplete(true);
      },
      bootLines.length * 400 + 500,
    );
    return () => clearTimeout(timer);
  }, []);

  // 2. LIVE COUNTDOWN LOGIC
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

  // A helper component to render the large countdown boxes
  const TimeBox = ({
    value,
    label,
  }: {
    value: number | string;
    label: string;
  }) => (
    <div className="flex flex-col items-center justify-center bg-[#0a0a0f]/80 backdrop-blur-md border border-[#30363d] rounded-xl w-16 h-20 sm:w-24 sm:h-28 md:w-36 md:h-36 shadow-[0_0_30px_rgba(34,211,238,0.05)] hover:border-cyan-500/50 transition-colors shrink-0">
      <span className="text-2xl sm:text-4xl md:text-6xl font-bold text-cyan-400 tabular-nums drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
        {isMounted ? String(value).padStart(2, "0") : "--"}
      </span>
      <span className="text-[9px] sm:text-[10px] md:text-sm text-gray-500 uppercase tracking-widest mt-1 md:mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden font-mono px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      {/* Boot Sequence Terminal - Hidden on mobile, visible on medium screens and up */}
      <div className="hidden md:block absolute top-24 left-10 z-10 text-green-500/80 text-sm">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-1"
        >
          {bootLines.map((line, index) => (
            <motion.div key={index} variants={lineVariants}>
              <span className="text-gray-500">{`[${(1000 + index * 123).toString(16).toUpperCase()}] `}</span>
              {line}
            </motion.div>
          ))}
          {!bootComplete && (
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-4 bg-green-500 mt-1"
            />
          )}
        </motion.div>
      </div>

      {/* Main Content Reveal */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center w-full max-w-5xl mt-16 md:mt-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: bootComplete ? 1 : 0,
          scale: bootComplete ? 1 : 0.95,
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Title & Tagline - Strips out "2027" dynamically */}
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-cyan-400 to-blue-600 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)] mb-4 break-words px-2 w-full">
          {eventData.name ? eventData.name.trim() : "DESIGNATHON"}
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 tracking-widest uppercase mb-12 px-2">
          {eventData.tagline}
        </p>

        {/* PERFECTLY CENTERED Prize Pool Area */}
        <div className="flex flex-col items-center justify-center mb-10">
          <div className="flex items-center gap-3 mb-3">
            {/* Neon Trophy SVG */}
            <div className="w-8 h-8 flex items-center justify-center bg-yellow-500/10 border border-yellow-500/30 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.2)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-yellow-500"
              >
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
            </div>
            <span className="text-sm md:text-base text-gray-400 uppercase tracking-widest">
              // PRIZE_POOL
            </span>
          </div>

          <span className="text-4xl sm:text-5xl md:text-7xl font-bold text-yellow-500 drop-shadow-[0_0_20px_rgba(234,179,8,0.5)]">
            {eventData.prize_pool || "₹1,00,000"}
          </span>
        </div>

        {/* Responsive Boxed Countdown: Forced into a single flex row */}
        <div className="flex flex-row justify-center gap-2 sm:gap-4 md:gap-6 mb-12 w-full px-2 mx-auto">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* EQUAL WIDTH Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-2xl mx-auto px-4">
          <a
            href={eventData.registration.registration_link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-[300px] flex items-center justify-center px-6 py-4 bg-green-500/10 border border-green-500 text-green-400 font-bold uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all duration-300 text-sm md:text-base"
          >
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 group-hover:bg-black transition-colors"></span>
            <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-green-500 group-hover:bg-black transition-colors"></span>
            {">"} Initiate_Registration
          </a>

          <a
            href="#tracks"
            className="w-full sm:w-[300px] flex items-center justify-center px-6 py-4 border border-[#30363d] text-gray-400 uppercase tracking-widest hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 bg-[#050505] text-sm md:text-base"
          >
            View_Directives
          </a>
        </div>
      </motion.div>
    </section>
  );
}
