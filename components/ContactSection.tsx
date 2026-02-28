"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  const students = [
    { name: "A. Bhanu Srikar", phone: "6281638803" },
    { name: "P. Deekshitha", phone: "6302078822" },
    { name: "B. Amogh", phone: "9652856718" },
    { name: "K. Deepika", phone: "8106285578" },
  ];

  const faculty = [
    "Dr. N Sandeep Chaitanya",
    "Mr. K Akhil",
    "Mrs. G Laxmi Deepthi",
    "Mr. P Sudheer Benarji",
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-[#050505] relative overflow-hidden font-mono border-t border-[#1a1a24]"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-[#30363d] pb-6 text-center md:text-left"
        >
          {/* FIXED: Adjusted responsive text sizes (text-2xl -> sm:text-3xl -> md:text-4xl -> lg:text-5xl) and added tracking-tight for mobile */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight md:tracking-normal font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500 inline-block">
            <span className="text-gray-600 mr-1 md:mr-2">~/</span>
            COMMAND_DIRECTORY
          </h2>
          <p className="text-gray-500 font-mono text-xs md:text-sm mt-3 uppercase tracking-[0.2em] px-2 md:px-0">
            System Administrators and Event Coordinators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ========================================= */}
          {/* COLUMN 1: LEADERSHIP (HEAD & CONVENOR)      */}
          {/* ========================================= */}
          <div className="flex flex-col gap-8">
            {/* Head Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col bg-[#0a0a0f]/80 backdrop-blur-md border border-[#30363d] rounded-lg overflow-hidden group hover:border-purple-500/50 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)] flex-1"
            >
              <div className="bg-[#050505] border-b border-[#30363d] px-4 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-purple-500/70"></div>
                </div>
                <span className="text-[10px] text-gray-500 tracking-widest uppercase">
                  sys_admin.exe
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 text-purple-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  <span className="text-xs uppercase tracking-[0.3em] font-bold">
                    Head
                  </span>
                </div>
                <div className="bg-[#050505] border border-[#1a1a24] p-4 rounded-md group-hover:border-purple-500/30 transition-colors">
                  <h3 className="text-lg font-bold text-gray-200 font-sans">
                    Dr. V Baby
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">
                    Head of Department, CSE
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Convenor Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col bg-[#0a0a0f]/80 backdrop-blur-md border border-[#30363d] rounded-lg overflow-hidden group hover:border-cyan-500/50 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)] flex-1"
            >
              <div className="bg-[#050505] border-b border-[#30363d] px-4 py-3 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-cyan-500/70"></div>
                </div>
                <span className="text-[10px] text-gray-500 tracking-widest uppercase">
                  core_logic.exe
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 text-cyan-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    ></path>
                  </svg>
                  <span className="text-xs uppercase tracking-[0.3em] font-bold">
                    Convenor
                  </span>
                </div>
                <div className="bg-[#050505] border border-[#1a1a24] p-4 rounded-md group-hover:border-cyan-500/30 transition-colors">
                  <h3 className="text-lg font-bold text-gray-200 font-sans">
                    Dr. S. Nagini
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">
                    Professor, CSE
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ========================================= */}
          {/* COLUMN 2: FACULTY COORDINATORS              */}
          {/* ========================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col bg-[#0a0a0f]/80 backdrop-blur-md border border-[#30363d] rounded-lg overflow-hidden group hover:border-blue-500/50 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            <div className="bg-[#050505] border-b border-[#30363d] px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-blue-500/70"></div>
              </div>
              <span className="text-[10px] text-gray-500 tracking-widest uppercase">
                network_nodes.dll
              </span>
            </div>

            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6 text-blue-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
                <span className="text-xs uppercase tracking-[0.3em] font-bold">
                  Faculty Coordinators
                </span>
              </div>

              <div className="flex flex-col gap-3 flex-1 justify-center">
                {faculty.map((name, idx) => (
                  <div
                    key={idx}
                    className="bg-[#050505] border border-[#1a1a24] p-4 rounded-md group-hover:border-blue-500/20 transition-colors flex items-center gap-3"
                  >
                    <span className="text-blue-500/50 text-xs">{`0${idx + 1}`}</span>
                    <h3 className="text-sm md:text-base font-bold text-gray-300 font-sans">
                      {name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ========================================= */}
          {/* COLUMN 3: STUDENT COORDINATORS              */}
          {/* ========================================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col bg-[#0a0a0f]/80 backdrop-blur-md border border-[#30363d] rounded-lg overflow-hidden group hover:border-green-500/50 transition-colors shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          >
            <div className="bg-[#050505] border-b border-[#30363d] px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>
              <span className="text-[10px] text-gray-500 tracking-widest uppercase">
                active_uplinks.sh
              </span>
            </div>

            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6 text-green-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  ></path>
                </svg>
                <span className="text-xs uppercase tracking-[0.3em] font-bold">
                  Student Coordinators
                </span>
              </div>

              <div className="flex flex-col gap-3 flex-1 justify-center">
                {students.map((student, idx) => (
                  <div
                    key={idx}
                    className="bg-[#050505] border border-[#1a1a24] p-3 md:p-4 rounded-md group-hover:border-green-500/30 transition-colors flex flex-col xl:flex-row xl:items-center justify-between gap-2"
                  >
                    <h3 className="text-sm md:text-base font-bold text-gray-200 font-sans">
                      {student.name}
                    </h3>

                    {/* Clickable Phone Number */}
                    <a
                      href={`tel:+91${student.phone}`}
                      className="flex items-center gap-2 text-green-500/70 hover:text-green-400 transition-colors bg-green-500/10 px-2 py-1 rounded w-fit"
                    >
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                      <span className="text-xs tracking-widest">
                        {student.phone}
                      </span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
