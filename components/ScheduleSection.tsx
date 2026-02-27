"use client";

import { motion } from "framer-motion";

export interface ScheduleItem {
  time: string;
  event: string;
}

interface ScheduleSectionProps {
  scheduleData: ScheduleItem[];
}

export default function ScheduleSection({
  scheduleData,
}: ScheduleSectionProps) {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden font-mono">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* FIXED HEADER: Now scales and breaks properly for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-20 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 inline-block break-all sm:break-normal">
            <span className="text-gray-600 mr-2 md:mr-4">./</span>
            EXECUTION_TIMELINE
          </h2>
          <p className="text-gray-500 mt-4 text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-widest">
            System operations schedule for the 24-hour cycle
          </p>
        </motion.div>

        <div className="relative">
          {/* Reverted Line: Back to the side for the side-card look */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-900 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-10 md:space-y-12">
            {scheduleData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full group"
                >
                  {/* Node: Positioned at left-6 on mobile, centered on desktop */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-[#050505] border-2 border-cyan-500 rounded-full -translate-x-1/2 z-10 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_2px_rgba(34,211,238,0.5)] transition-all duration-300 mt-6 md:mt-0"></div>

                  {/* DESKTOP LEFT SIDE: ALWAYS THE TIME */}
                  <div className="hidden md:block w-1/2 pr-12 text-right">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        bounce: 0.4,
                      }}
                    >
                      <div className="text-xl text-cyan-500 font-bold tracking-widest drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                        [{item.time}]
                      </div>
                    </motion.div>
                  </div>

                  {/* DESKTOP RIGHT SIDE / MOBILE CARD: ALWAYS THE EVENT */}
                  <div className="pl-16 md:pl-12 w-full md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        bounce: 0.4,
                      }}
                      className="bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#30363d] p-5 md:bg-transparent md:border-none md:p-0 rounded-lg group-hover:border-cyan-500/50 transition-colors"
                    >
                      {/* Mobile View */}
                      <div className="md:hidden block">
                        <div className="text-sm text-cyan-500 font-bold tracking-widest mb-2">
                          [{item.time}]
                        </div>
                        <div className="text-base sm:text-lg font-bold text-gray-300">
                          {item.event}
                        </div>
                      </div>

                      {/* Desktop View */}
                      <div className="hidden md:block">
                        <div className="text-xl font-bold text-gray-300 group-hover:text-cyan-400 transition-colors">
                          {item.event}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
