"use client";

import { motion } from "framer-motion";

const guidelines = [
  {
    id: "0x01",
    title: "TEAM_FORMATION",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        ></path>
      </svg>
    ),
    points: [
      "Up to 3 participants per team.",
      "Cross-college and cross-specialization teams are permitted.",
      "Optional faculty mentor allowed (not provided by organizers).",
    ],
  },
  {
    id: "0x02",
    title: "PHASE_01: ABSTRACT",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        ></path>
      </svg>
    ),
    points: [
      "Deadline: March 15th, 2026.",
      "No registration fee for initial abstract submission.",
      "Format: PPT/PDF using the provided template.",
      "File naming: TeamName_ProblemStatementNumber",
    ],
  },
  {
    id: "0x03",
    title: "PHASE_02: EXECUTION",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        ></path>
      </svg>
    ),
    points: [
      "Shortlist Announcement: March 19th, 2026.",
      "Confirmation Fee: INR 500/- required for shortlisted teams.",
      "Mandatory 24-hour on-campus stay during the event.",
    ],
  },
  {
    id: "0x04",
    title: "LOGISTICS_STATUS",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
    points: [
      "Location: VNRVJIET Campus, Hyderabad.",
      "Accommodation and all meals/snacks will be provided.",
      "Travel arrangements and expenses are the responsibility of the team.",
    ],
  },
];

export default function GuidelinesSection() {
  return (
    <section
      id="guidelines"
      className="py-24 bg-[#050505] relative overflow-hidden font-mono border-t border-[#1a1a1a]"
    >
      {/* Background Grid Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 inline-block uppercase">
            <span className="text-gray-600 mr-2 md:mr-4">./</span>
            OPERATION_GUIDELINES
          </h2>
          <p className="text-gray-500 mt-4 text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-widest">
            System rules and event parameters for VNR DESIGN-A-THON
          </p>
        </motion.div>

        {/* Guidelines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {guidelines.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0a0a0f]/80 backdrop-blur-md border border-[#30363d] p-6 md:p-8 rounded-xl group hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-[#1a1a24]">
                <div className="text-cyan-500 bg-cyan-500/10 p-3 rounded-lg border border-cyan-500/20">
                  {item.icon}
                </div>
                <div>
                  {" "}
                  {/* <div className="text-[10px] text-gray-500 tracking-[0.3em] uppercase mb-1"> */}
                  {/*    {item.id} */}
                  {/*   {" "} */}
                  {/* </div> */}
                  <h3 className="text-lg font-bold text-gray-200 tracking-wider">
                    {item.title}
                  </h3>
                </div>
              </div>

              <ul className="space-y-3">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-400"
                  >
                    <span className="text-cyan-600 mt-1">▹</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Download Full Guidelines Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center"
        >
          <a
            href="/guidelines.pdf"
            download="VNR_Designathon_2026_Guidelines.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-8 py-4 border border-cyan-500/50 text-cyan-400 text-sm font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all duration-300 w-full sm:w-auto min-w-[300px]"
          >
            <svg
              className="w-5 h-5 group-hover:animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            DECRYPT_FULL_GUIDELINES_PDF
          </a>

          <div className="mt-6 flex items-center gap-4 text-[10px] text-gray-600 font-black tracking-[0.4em] uppercase">
            <span className="w-8 h-px bg-gray-800"></span>
            Format: PDF // Size: Verified
            <span className="w-8 h-px bg-gray-800"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
