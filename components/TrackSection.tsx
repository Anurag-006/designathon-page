"use client";

import { useRef, useState, UIEvent, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface ProblemStatement {
  id: number;
  title: string;
  description: string;
  objectives?: string[];
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPS) return;
      if (e.key === "ArrowRight")
        scrollToIndex(Math.min(activeDomainIndex + 1, tracksData.length - 1));
      if (e.key === "ArrowLeft")
        scrollToIndex(Math.max(activeDomainIndex - 1, 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeDomainIndex, tracksData.length, selectedPS]);

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

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      scrollContainerRef.current.scrollTo({
        left: clientWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="tracks"
      className="min-h-screen py-16 md:py-24 bg-[#050505] relative overflow-hidden flex flex-col font-mono"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10 flex-1 flex flex-col">
        {/* HEADER AREA */}
        <div className="mb-6 border-b border-[#30363d] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500 inline-block">
              <span className="text-gray-500 mr-2">~/</span>MISSION_TRACKS
            </h2>
            <p className="text-gray-400 text-[10px] md:text-sm mt-2 uppercase tracking-widest">
              [ SECTOR 0{activeDomainIndex + 1} OF 0{tracksData.length} ACTIVE ]
            </p>
          </div>

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

        {/* DOMAIN TABS */}
        <div className="flex overflow-x-auto no-scrollbar gap-4 mb-10 border-b border-[#1a1a24] pb-2">
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

        {/* MAIN DISPLAY */}
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
                  {/* LEFT: Track Info */}
                  <div className="lg:col-span-5 bg-[#0a0a0f]/90 backdrop-blur-md border border-[#30363d] rounded-lg p-6 md:p-10 h-fit">
                    {/* VISIBILITY BOOST: Increased opacity and brightened green */}
                    <div className="text-green-500 text-5xl md:text-7xl font-bold mb-4 opacity-30 drop-shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-100 mb-6 leading-tight">
                      {track.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8">
                      {track.description}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 uppercase font-bold">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                      SYSTEM_SCAN: {track.problem_statements.length} DIRECTIVES
                      FOUND
                    </div>
                  </div>

                  {/* RIGHT: Problem Statements */}
                  <div className="lg:col-span-7 flex flex-col space-y-3 overflow-y-auto custom-scrollbar max-h-[400px] lg:max-h-[600px] pr-2 pb-4">
                    {track.problem_statements.map((ps, i) => (
                      <button
                        key={ps.id}
                        onClick={() =>
                          setSelectedPS({ data: ps, trackName: track.title })
                        }
                        className="group w-full text-left bg-[#08080c] border border-[#1a1a24] p-5 rounded-lg hover:border-cyan-500/50 hover:bg-[#0c0c14] transition-all flex items-center justify-between shadow-lg"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-cyan-400/50 text-xs font-bold shrink-0">
                            [{String(i + 1).padStart(2, "0")}]
                          </span>
                          <h4 className="text-yellow-500 font-bold text-xs md:text-base truncate pr-4">
                            {ps.title}
                          </h4>
                        </div>
                        <div className="text-[10px] text-gray-400 group-hover:text-cyan-400 font-bold ml-2 underline underline-offset-4 tracking-tighter shrink-0 transition-colors">
                          ACCESS_FILE
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

      {/* DETAIL MODAL */}
      {/* PS MODAL - FIXED HEADER FOR MOBILE */}
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
              {/* HEADER: Adjusted for long titles and fixed button stacking */}
              <div className="px-4 md:px-6 py-4 border-b border-[#1a1a24] flex justify-between items-center bg-[#050505]/80 shrink-0">
                <span className="text-[9px] md:text-[10px] text-green-400 font-bold tracking-[0.1em] md:tracking-[0.3em] uppercase leading-tight max-w-[70%]">
                  DECRYPTING: {selectedPS.trackName}
                </span>
                <button
                  onClick={() => setSelectedPS(null)}
                  className="text-gray-400 hover:text-white text-[10px] md:text-xs font-bold transition-colors border border-gray-800 px-2 py-1 rounded shrink-0 flex items-center justify-center whitespace-nowrap"
                >
                  [ ESC ]
                </button>
              </div>

              {/* BODY */}
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar flex-1">
                <h2 className="text-xl md:text-3xl font-bold text-yellow-500 mb-6 border-b border-[#1a1a24] pb-4 leading-snug">
                  {selectedPS.data.title}
                </h2>
                <div className="space-y-6">
                  <div>
                    <span className="text-cyan-400 text-[9px] md:text-[10px] font-bold uppercase block mb-3 tracking-widest">
                      // MISSION_BRIEF
                    </span>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                      {selectedPS.data.description}
                    </p>
                  </div>
                  {selectedPS.data.objectives && (
                    <div className="bg-[#050505] border border-[#1a1a24] p-5 md:p-6 rounded-lg">
                      <span className="text-green-400 text-[9px] md:text-[10px] font-bold uppercase block mb-4 tracking-widest">
                        // OBJECTIVES
                      </span>
                      <ul className="space-y-3">
                        {selectedPS.data.objectives.map((obj, idx) => (
                          <li
                            key={idx}
                            className="text-[11px] md:text-xs text-gray-400 flex gap-3 items-start"
                          >
                            <span className="text-green-500 mt-1 shrink-0">
                              {">"}
                            </span>
                            <span>{obj}</span>
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
