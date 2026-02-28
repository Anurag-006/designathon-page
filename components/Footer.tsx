"use client";

import { motion } from "framer-motion";

export default function Footer({ contactData }: { contactData?: any }) {
  return (
    <footer className="bg-[#050505] relative overflow-hidden font-mono pt-24 border-t border-[#1a1a24]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* ========================================= */}
        {/* COLLABORATORS AREA                        */}
        {/* ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20 border-b border-[#1a1a24] pb-20"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="w-12 h-px bg-gray-800"></span>
            <h3 className="text-xs md:text-sm font-bold text-gray-500 tracking-[0.4em] uppercase">
              Authorized_Collaborators
            </h3>
            <span className="w-12 h-px bg-gray-800"></span>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center gap-12 md:gap-24">
            {/* IIC Logo Card */}
            <div className="flex flex-col items-center group">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-[#0a0a0f]/50 backdrop-blur-sm border border-[#30363d] rounded-xl flex items-center justify-center mb-4 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300">
                <a
                  href="https://iic.mic.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/iic-logo.png"
                    alt="IIC Logo"
                    className="w-24 md:w-28 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </a>
              </div>
              <span className="text-[10px] text-gray-600 tracking-[0.2em] uppercase group-hover:text-cyan-400 transition-colors">
                IIC Chapter
              </span>
            </div>

            {/* CSI Logo Card */}
            <div className="flex flex-col items-center group">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-[#0a0a0f]/50 backdrop-blur-sm border border-[#30363d] rounded-xl flex items-center justify-center mb-4 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300">
                <a
                  href="https://www.csi-india.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/csi-logo.png"
                    alt="CSI Logo"
                    className="w-24 md:w-28 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </a>
              </div>
              <span className="text-[10px] text-gray-600 tracking-[0.2em] uppercase group-hover:text-cyan-400 transition-colors">
                CSI Chapter
              </span>
            </div>
          </div>
        </motion.div>

        {/* ========================================= */}
        {/* UNSTOP REGISTRATION CALL-TO-ACTION AREA   */}
        {/* ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-4 tracking-tight">
            Register Now
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed mb-10">
            Join the 4th Edition of VNR DESIGN-A-THON. A 24-hour national-level
            building sprint at VNRVJIET.
          </p>

          <div className="w-32 h-32 md:w-40 md:h-40 bg-[#0a0a0f]/80 backdrop-blur-md border border-[#30363d] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group hover:border-blue-500/50 transition-all duration-300">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
              alt="Unstop Logo"
              className="w-24 md:w-32 object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.2)] group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <a
            href={contactData?.registration_link || "https://unstop.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto bg-blue-600/10 border border-blue-500 text-blue-400 font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300 rounded-lg sm:rounded-none"
          >
            Register on Unstop
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </motion.div>

        {/* ========================================= */}
        {/* FOOTER DIRECTORY                          */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#30363d] pt-12 pb-12">
          {/* Column 1: System Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
              <span className="text-green-500 animate-pulse">●</span>
              SYSTEM_STATUS
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              VNR DESIGN-A-THON 2026
              <br />
              Organized by Department of CSE & CSBS, VNRVJIET.
            </p>
            <div className="text-xs text-gray-600 uppercase tracking-widest">
              Location: VNRVJIET, Hyd
              <br />
              Status:{" "}
              <span className="text-green-500">Secure_Uplink_Active</span>
            </div>
          </div>

          {/* Column 2: Directory */}
          <div>
            <h3 className="text-lg font-bold text-gray-300 mb-4 tracking-widest uppercase">
              // DIRECTORY
            </h3>
            <ul className="space-y-3 text-sm">
              {["about", "schedule", "tracks", "faqs"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-gray-500 hover:text-cyan-400 transition-colors"
                  >
                    ./{item}.sh
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contacts & Socials */}
          <div>
            <h3 className="text-lg font-bold text-gray-300 mb-4 tracking-widest uppercase">
              // UPLINK_CHANNELS
            </h3>
            <div className="space-y-4 text-sm">
              {/* Email */}
              <a
                href={`mailto:${contactData?.email || "csbsdesignathon@vnrvjiet.in"}`}
                className="flex items-center gap-3 text-gray-500 hover:text-green-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                {contactData?.email || "csbsdesignathon@vnrvjiet.in"}
              </a>

              {/* Instagram */}
              <a
                href={
                  contactData?.socials?.instagram ||
                  "https://www.instagram.com/vnr_designathon"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-pink-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                @vnr_designathon
              </a>

              {/* LinkedIn */}
              <a
                href={
                  contactData?.socials?.linkedin ||
                  "https://www.linkedin.com/company/vnr-designathon"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-500 hover:text-blue-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                /vnr-designathon
              </a>

              {/* Phone */}
              <a
                href={`tel:+916281638803`}
                className="flex items-center gap-3 text-gray-500 hover:text-cyan-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91 62816 38803
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT BAR */}
        <div className="border-t border-[#1a1a24] py-8 flex flex-col md:flex-row items-center justify-between text-[10px] text-gray-600 uppercase tracking-[0.3em]">
          <p>© 2026 VNR VJIET. ALL RIGHTS RESERVED.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            End_Of_Transmission
          </p>
        </div>
      </div>
    </footer>
  );
}
