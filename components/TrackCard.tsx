"use client";

import { motion } from "framer-motion";

export interface ProblemStatement {
  id: number;
  title: string;
  description: string;
  requirements?: string[]; // Added for the new layout
  outcomes?: string[]; // Added for the new layout
}

export interface Track {
  id: number;
  title: string;
  description: string;
  problem_statements: ProblemStatement[];
}

interface TrackProps {
  track: Track;
  index: number;
  onOpenModal: (ps: ProblemStatement, trackTitle: string) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

export default function TrackCard({ track, index, onOpenModal }: TrackProps) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{
        y: -5,
        boxShadow: "0px 0px 20px 2px rgba(34, 197, 94, 0.15)",
        borderColor: "rgba(34, 197, 94, 0.6)",
      }}
      className="relative flex flex-col min-h-[500px] h-full p-5 md:p-6 bg-[#0a0a0f]/95 backdrop-blur-md border border-[#30363d] rounded-lg font-mono text-gray-300 group overflow-hidden transition-all shadow-2xl"
    >
      {/* Sector Number Background */}
      <div className="absolute top-0 right-4 text-7xl md:text-8xl font-black text-green-500/10 select-none pointer-events-none group-hover:text-green-500/20 transition-colors">
        0{index + 1}
      </div>

      {/* Decorative terminal header dots */}
      <div className="flex gap-2 mb-4 shrink-0 relative z-10">
        <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
      </div>

      {/* Track Title and Description */}
      <div className="shrink-0 mb-4 relative z-10">
        <h3 className="text-xl font-bold text-green-400 mb-2 tracking-wider">
          <span className="text-gray-500 select-none">{"> "}</span>
          {track.title}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2 h-5 bg-green-400 ml-2 align-middle"
          />
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-2">
          {track.description}
        </p>
      </div>

      {/* Problem Statement List */}
      <div className="flex-1 flex flex-col min-h-0 border-t border-[#30363d]/50 pt-4 mt-2 relative z-10">
        <h4 className="text-[10px] md:text-xs uppercase text-cyan-400 font-bold tracking-[0.2em] pb-3 shrink-0">
          // Executable_Files [{track.problem_statements.length}]
        </h4>

        <div className="flex-1 overflow-y-auto pr-1 space-y-2 custom-scrollbar max-h-[300px] md:max-h-none">
          {track.problem_statements.map((ps, i) => (
            <button
              key={ps.id}
              onClick={() => onOpenModal(ps, track.title)}
              className="w-full text-left bg-[#050505]/90 p-3 rounded border border-gray-800/50 hover:border-cyan-500/50 hover:bg-[#0c0c14] transition-all group/btn flex items-center justify-between"
            >
              <div className="flex flex-col overflow-hidden">
                <span className="text-yellow-500 text-[10px] font-bold block mb-1 group-hover/btn:text-cyan-400 transition-colors">
                  {/* Updated to show 1.1, 1.2 format */}
                  ./execute PS_{index + 1}.{i + 1}
                </span>
                <span className="text-xs md:text-sm text-gray-200 truncate pr-2">
                  {ps.title}
                </span>
              </div>
              <span className="text-gray-600 group-hover/btn:text-cyan-500 font-bold shrink-0">
                [+]
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced stars background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #22c55e 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>
    </motion.div>
  );
}
