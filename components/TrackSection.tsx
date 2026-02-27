"use client";

import { useRef, useState, UIEvent, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DownloadPDFButton } from "./DownloadPDFButton";

export interface ProblemStatement {
  id: number;
  title: string;
  description: string;
  requirements?: string[];
  outcomes?: string[];
}

export interface Track {
  id: number;
  title: string;
  description: string;
  problem_statements: ProblemStatement[];
}

interface TracksSectionProps {
  tracksData: Track[];
}

export default function TracksSection({ tracksData }: TracksSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeDomainIndex, setActiveDomainIndex] = useState(0);
  const [selectedPS, setSelectedPS] = useState<{
    data: ProblemStatement;
    trackName: string;
  } | null>(null);

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    container.scrollTo({
      left: container.clientWidth * index,
      behavior: "smooth",
    });
    setActiveDomainIndex(index);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedPS) {
        setSelectedPS(null);
        return;
      }
      if (selectedPS) return;
      if (e.key === "ArrowRight") {
        scrollToIndex(Math.min(activeDomainIndex + 1, tracksData.length - 1));
      }
      if (e.key === "ArrowLeft") {
        scrollToIndex(Math.max(activeDomainIndex - 1, 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDomainIndex, tracksData.length, selectedPS, scrollToIndex]);

  useEffect(() => {
    document.body.style.overflow = selectedPS ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedPS]);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const newIndex = Math.round(container.scrollLeft / container.clientWidth);
    if (newIndex !== activeDomainIndex) setActiveDomainIndex(newIndex);
  };

  return (
    <section
      id="tracks"
      className="min-h-screen py-16 md:py-24 bg-[#050505] relative overflow-hidden flex flex-col font-mono"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 flex-1 flex flex-col">
        {/* HEADER: Centered on mobile, Space-between on Desktop */}
        <div className="mb-10 border-b border-[#30363d] pb-8 flex flex-col items-center lg:flex-row lg:items-center justify-between gap-8 text-center lg:text-left">
          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white tracking-tighter">
              ~/MISSION_<span className="text-green-500">TRACKS</span>
            </h2>

            {/* HIGH VISIBILITY DEADLINE */}
            <div className="flex flex-col items-center lg:items-start gap-3">
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3">
                <div className="bg-yellow-500 text-black px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-tighter animate-pulse flex items-center gap-2">
                  <span className="w-2 h-2 bg-black rounded-full" />
                  URGENT: ROUND_1 SUBMISSION DEADLINE
                </div>
                <div className="border border-yellow-500/50 text-yellow-500 px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest">
                  MARCH 15th, 12:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* UTILITIES: Download PDF and Nav buttons */}
          <div className="flex flex-col items-center gap-6">
            <DownloadPDFButton />

            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollToIndex(activeDomainIndex - 1)}
                disabled={activeDomainIndex === 0}
                className="px-4 py-2 border border-[#404040] text-gray-300 text-[10px] font-bold uppercase tracking-widest hover:border-green-500 hover:text-green-400 disabled:opacity-20 transition-all bg-[#0a0a0f]"
              >
                {"<"} PREV
              </button>
              <button
                onClick={() => scrollToIndex(activeDomainIndex + 1)}
                disabled={activeDomainIndex === tracksData.length - 1}
                className="px-4 py-2 border border-[#404040] text-gray-300 text-[10px] font-bold uppercase tracking-widest hover:border-green-500 hover:text-green-400 disabled:opacity-20 transition-all bg-[#0a0a0f]"
              >
                NEXT {">"}
              </button>
            </div>
          </div>
        </div>

        {/* DOMAIN TABS */}
        <div className="flex overflow-x-auto no-scrollbar gap-4 mb-10 border-b border-[#1a1a24] pb-2 justify-start lg:justify-start">
          {tracksData.map((track, idx) => (
            <button
              key={track.id}
              onClick={() => scrollToIndex(idx)}
              className={`pb-2 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all relative whitespace-nowrap ${
                activeDomainIndex === idx
                  ? "text-green-400"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {track.title}
              {activeDomainIndex === idx && (
                <motion.div
                  layoutId="trackUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                />
              )}
            </button>
          ))}
        </div>

        {/* MAIN DISPLAY AREA */}
        <div className="relative flex-1">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar w-full h-full"
          >
            {tracksData.map((track, index) => (
              <div
                key={track.id}
                className="w-full flex-shrink-0 snap-center px-1 md:px-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* LEFT PANEL */}
                  <div className="lg:col-span-5 bg-[#0a0a0f]/90 border border-[#30363d] rounded-lg p-6 md:p-10 h-fit">
                    <div className="text-green-300 text-5xl md:text-7xl font-bold mb-4 opacity-30 drop-shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-100 mb-6 leading-tight">
                      {track.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                      {track.description}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 uppercase font-bold">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                      SYSTEM_SCAN: {track.problem_statements.length} DIRECTIVES
                      FOUND
                    </div>
                  </div>

                  {/* RIGHT PANEL */}
                  <div className="lg:col-span-7 flex flex-col space-y-3 overflow-y-auto custom-scrollbar max-h-[450px] lg:max-h-[600px] pr-2 pb-4">
                    {track.problem_statements.map((ps, i) => (
                      <button
                        key={ps.id}
                        onClick={() =>
                          setSelectedPS({ data: ps, trackName: track.title })
                        }
                        className="group w-full text-left bg-[#08080c] border border-[#1a1a24] p-4 md:p-5 rounded-lg hover:border-cyan-500/50 transition-all flex items-center justify-between"
                      >
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                          <span className="text-cyan-400/50 text-xs font-bold shrink-0">
                            [{String(i + 1).padStart(2, "0")}]
                          </span>
                          <h4 className="text-yellow-500 font-bold text-xs md:text-base truncate pr-2">
                            {ps.title}
                          </h4>
                        </div>
                        <div className="shrink-0 flex items-center gap-1">
                          <span className="hidden sm:inline text-[10px] text-gray-400 group-hover:text-cyan-400 font-bold underline underline-offset-4 tracking-tighter transition-colors">
                            ACCESS_FILE
                          </span>
                          <span className="sm:hidden text-cyan-400 font-bold text-lg transition-transform group-hover:translate-x-1">
                            &gt;
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DETAILED MODAL */}
      <AnimatePresence>
        {selectedPS && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPS(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[85vh] bg-[#0a0a0f] border border-[#30363d] rounded-xl flex flex-col overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              <div className="px-4 md:px-6 py-4 border-b border-[#1a1a24] flex justify-between items-center bg-[#050505]/80 shrink-0">
                <span className="text-[9px] md:text-[10px] text-green-400 font-bold tracking-[0.1em] md:tracking-[0.3em] uppercase leading-tight max-w-[70%]">
                  DECRYPTING: {selectedPS.trackName}
                </span>
                <button
                  onClick={() => setSelectedPS(null)}
                  className="text-gray-400 hover:text-white text-[10px] md:text-xs font-bold transition-colors border border-gray-800 px-2 py-1 rounded shrink-0"
                >
                  [ ESC ]
                </button>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1">
                <h2 className="text-xl md:text-3xl font-bold text-yellow-500 mb-8 border-b border-[#1a1a24] pb-4 leading-snug">
                  {selectedPS.data.title}
                </h2>

                <div className="space-y-8">
                  <div>
                    <span className="text-cyan-400 text-[10px] font-bold uppercase block mb-3 tracking-widest">
                      // DESCRIPTION
                    </span>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                      {selectedPS.data.description}
                    </p>
                  </div>

                  {selectedPS.data.requirements && (
                    <div className="bg-[#050505]/50 border border-[#1a1a24] p-5 rounded-lg">
                      <span className="text-green-400 text-[10px] font-bold uppercase block mb-4 tracking-widest">
                        // REQUIREMENTS
                      </span>
                      <ul className="space-y-3">
                        {selectedPS.data.requirements.map((req, idx) => (
                          <li
                            key={idx}
                            className="text-[11px] md:text-xs text-gray-400 flex gap-3 items-start"
                          >
                            <span className="text-green-500 mt-1 shrink-0">
                              {">"}
                            </span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedPS.data.outcomes && (
                    <div className="bg-[#050505]/50 border border-[#1a1a24] p-5 rounded-lg">
                      <span className="text-yellow-500 text-[10px] font-bold uppercase block mb-4 tracking-widest">
                        // EXPECTED_OUTCOMES
                      </span>
                      <ul className="space-y-3">
                        {selectedPS.data.outcomes.map((outcome, idx) => (
                          <li
                            key={idx}
                            className="text-[11px] md:text-xs text-gray-400 flex gap-3 items-start"
                          >
                            <span className="text-yellow-500 mt-1 shrink-0">
                              ::
                            </span>
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
