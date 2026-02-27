"use client";

import { motion } from "framer-motion";

export interface ScheduleItem {
  time: string;
  event: string;
  isDayTwo?: boolean;
}

interface ScheduleSectionProps {
  scheduleData: ScheduleItem[];
}

export default function ScheduleSection({
  scheduleData,
}: ScheduleSectionProps) {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden font-mono">
      {/* Background Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-center mb-20 px-2"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 inline-block uppercase">
            <span className="text-gray-600 mr-2 md:mr-4">./</span>
            EXECUTION_TIMELINE
          </h2>
          <p className="text-gray-500 mt-4 text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-widest">
            24-HOUR SYSTEM CYCLE // MARCH 24-25
          </p>
        </motion.div>

        <div className="relative">
          {/* Main Vertical Timeline Axis */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-900 to-transparent md:-translate-x-1/2 z-0"></div>

          <div className="space-y-10 md:space-y-12">
            {scheduleData.map((item, index) => (
              <div key={index}>
                {/* DAY 2 SEPARATOR BREACH: Mobile Alignment Fixed */}
                {item.isDayTwo && (
                  <div className="relative w-full pt-4 pb-12 flex items-center justify-start md:justify-center">
                    {/* Horizontal Divider Line */}
                    <div className="absolute left-6 right-0 md:left-0 md:right-0 h-px bg-cyan-900/40 z-0"></div>

                    {/* Day 2 Label Box - Fixed ml-14 for mobile visibility */}
                    <div className="relative z-20 bg-[#050505] px-4 sm:px-6 md:px-10 py-2 border border-cyan-500/50 rounded-sm ml-14 md:ml-0 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                      <span className="text-xs md:text-sm font-black tracking-[0.8em] text-cyan-400 uppercase">
                        DAY_02
                      </span>
                    </div>
                  </div>
                )}

                <div className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                  {/* Timeline Node Point */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-[#050505] border-2 border-cyan-500 rounded-full -translate-x-1/2 z-10 group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_2px_rgba(34,211,238,0.5)] transition-all duration-300 mt-6 md:mt-0"></div>

                  {/* Desktop Left: Time */}
                  <div className="hidden md:block w-1/2 pr-12 text-right">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                    >
                      <div className="text-xl text-cyan-500 font-bold tracking-widest drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                        [{item.time}]
                      </div>
                    </motion.div>
                  </div>

                  {/* Event Content */}
                  <div className="pl-16 md:pl-12 w-full md:w-1/2">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, margin: "-50px" }}
                      className="relative z-10 bg-[#0a0a0f]/80 backdrop-blur-sm border border-[#30363d] p-5 md:bg-transparent md:border-none md:p-0 rounded-lg group-hover:border-cyan-500/50 transition-colors"
                    >
                      {/* Mobile Card Layout */}
                      <div className="md:hidden block">
                        <div className="text-sm text-cyan-500 font-bold tracking-widest mb-2">
                          [{item.time}]
                        </div>
                        <div className="text-base sm:text-lg font-bold text-gray-300">
                          {item.event}
                        </div>
                      </div>

                      {/* Desktop Card Layout */}
                      <div className="hidden md:block">
                        <div className="text-xl font-bold text-gray-300 group-hover:text-cyan-400 transition-colors">
                          {item.event}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
