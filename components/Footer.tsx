"use client";

import { motion } from "framer-motion";

export default function Footer({ contactData }: { contactData?: any }) {
  return (
    <footer className="bg-[#050505] relative overflow-hidden font-mono pt-24 border-t border-[#1a1a24]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,100,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,100,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* ========================================= */}
        {/* UNSTOP REGISTRATION CALL-TO-ACTION AREA   */}
        {/* ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-4 tracking-tight">
            Register Now
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed mb-10">
            Join us for an exciting 24-hour journey of innovation, creativity,
            and problem-solving. Limited spots available!
          </p>

          {/* Glassmorphic Unstop Logo Box */}
          <div className="w-32 h-32 md:w-40 md:h-40 bg-[#0a0a0f]/80 backdrop-blur-md border border-[#30363d] rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,0,0,0.5)] group hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-300">
            {/* Direct link to Unstop's official SVG logo */}
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/svg/unstop-logo.svg"
              alt="Unstop Logo"
              className="w-24 md:w-32 object-contain filter drop-shadow-[0_0_8px_rgba(59,130,246,0.2)] group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Failsafe: Shows text if the image link ever breaks
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
            <span className="hidden text-2xl font-bold text-blue-500 tracking-wider">
              unstop
            </span>
          </div>

          {/* Theme-Blended Unstop Button */}
          <a
            // Replace '#' with your actual Unstop registration link from your eventData
            href={contactData?.registration_link || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 px-8 py-4 w-full sm:w-auto bg-blue-600/10 border border-blue-500 text-blue-400 font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all duration-300 rounded-lg sm:rounded-none"
          >
            {/* Terminal Corner Accents (Hidden on mobile to keep it clean) */}
            <span className="hidden sm:block absolute -top-1 -right-1 w-2 h-2 bg-blue-500 group-hover:bg-white transition-colors"></span>
            <span className="hidden sm:block absolute -bottom-1 -left-1 w-2 h-2 bg-blue-500 group-hover:bg-white transition-colors"></span>
            Register on Unstop
            {/* External Link Icon that pops up on hover */}
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
        {/* STANDARD FOOTER DIRECTORY                 */}
        {/* ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#30363d] pt-12 pb-12">
          {/* Column 1: System Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-200 mb-4 flex items-center gap-2">
              <span className="text-green-500 animate-pulse">●</span>
              SYSTEM_STATUS
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              VNR DESIGN-A-THON 2027
              <br />A 24-Hour immersive design and innovation sprint.
            </p>
            <div className="text-xs text-gray-600 uppercase tracking-widest">
              Location: VNR VJIET Campus
              <br />
              Status:{" "}
              <span className="text-green-500">Awaiting Submissions</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-300 mb-4 tracking-widest uppercase">
              // DIRECTORY
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  ./about_us.sh
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  ./timeline.sh
                </a>
              </li>
              <li>
                <a
                  href="#tracks"
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  ./mission_tracks.sh
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  className="text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  ./support_faqs.sh
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Socials */}
          <div>
            <h3 className="text-lg font-bold text-gray-300 mb-4 tracking-widest uppercase">
              // PING_US
            </h3>
            <div className="space-y-3 text-sm text-gray-500">
              <p className="hover:text-green-400 transition-colors cursor-pointer">
                <span className="text-gray-600 mr-2">{">"}</span>
                {contactData?.email || "designathon@vnrvjiet.in"}
              </p>
              <p className="hover:text-green-400 transition-colors cursor-pointer">
                <span className="text-gray-600 mr-2">{">"}</span>
                {contactData?.phone || "+91 XXXXX XXXXX"}
              </p>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* COPYRIGHT BAR                             */}
        {/* ========================================= */}
        <div className="border-t border-[#1a1a24] py-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 uppercase tracking-widest">
          <p>© 2027 VNR VJIET. ALL RIGHTS RESERVED.</p>
          <p className="mt-2 md:mt-0">END_OF_TRANSMISSION.</p>
        </div>
      </div>
    </footer>
  );
}
