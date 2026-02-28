"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface NavbarProps {
  eventData: {
    name: string;
    edition?: string;
    registration: {
      registration_link: string;
    };
  };
}

export default function Navbar({ eventData }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // ADDED MODAL STATE

  useEffect(() => {
    // SYNC: Navbar triggers after 2.4s (300ms per line * 6 lines + buffer)
    const timer = setTimeout(() => setVisible(true), 2400);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Timeline", href: "#schedule" },
    { name: "Guidelines", href: "#guidelines" },
    { name: "Tracks", href: "#tracks" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQs", href: "#faqs" },
  ];

  // BULLETPROOF DESKTOP SCROLL
  const handleDesktopClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        // Scroll with an 80px offset so the navbar doesn't hide the title
        const top = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  // BULLETPROOF MOBILE SCROLL
  const handleMobileClick = (href: string) => {
    setMobileMenuOpen(false);

    setTimeout(() => {
      if (href.startsWith("#")) {
        const element = document.querySelector(href);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      } else {
        window.open(href, "_blank");
      }
    }, 300);
  };

  // NEW: Handle mobile registration click
  const handleMobileRegistrationClick = () => {
    setMobileMenuOpen(false); // Close the mobile dropdown
    setTimeout(() => {
      setIsModalOpen(true); // Open the advisory modal
    }, 300);
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 w-full z-[150] transition-all duration-300 font-mono ${
              scrolled
                ? "bg-[#050505]/95 backdrop-blur-xl border-b border-[#30363d] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
                : "bg-transparent py-5"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
              {/* LOGO & IDENTITY */}
              <a
                href="#hero"
                onClick={(e) => handleDesktopClick(e, "#hero")}
                className="flex items-center gap-3 group"
              >
                <div className="relative w-10 h-10 border border-green-500/30 rounded-full p-1 bg-green-500/5 group-hover:border-green-500 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.1)] group-hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <Image
                    src="/logo.png"
                    alt="Designathon Logo"
                    fill
                    className="object-contain p-1"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm md:text-lg font-black text-white tracking-tighter leading-none uppercase">
                    {eventData?.name || "DESIGN-A-THON"}
                  </span>
                  <span className="text-[8px] md:text-[10px] text-green-500 font-bold tracking-[0.2em] uppercase mt-0.5 group-hover:text-green-400 transition-colors">
                    {eventData?.edition || "4th Edition"}
                  </span>
                </div>
              </a>

              {/* DESKTOP LINKS */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleDesktopClick(e, link.href)}
                    className="relative group px-1 py-1"
                  >
                    <span className="text-[11px] md:text-[12px] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-gray-500 group-hover:from-white group-hover:to-green-400 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.9)]">
                      {link.name}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center drop-shadow-[0_0_5px_rgba(34,197,94,1)]" />
                  </a>
                ))}

                {/* CHANGED TO BUTTON TO OPEN MODAL */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-6 py-2 border border-green-500 text-green-500 text-[11px] font-black uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:-translate-y-0.5 rounded-sm ml-4"
                >
                  [ REGISTER ]
                </button>
              </div>

              {/* MOBILE MENU TOGGLE */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)] transition-all"
                aria-label="Toggle Menu"
              >
                <div className="space-y-1.5">
                  <div
                    className={`w-6 h-0.5 bg-current transition-all ${
                      mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <div
                    className={`w-6 h-0.5 bg-current transition-all ${
                      mobileMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <div
                    className={`w-6 h-0.5 bg-current transition-all ${
                      mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            <AnimatePresence>
              {mobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-3xl border-b border-[#30363d] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
                >
                  <div className="px-6 py-4 flex flex-col">
                    {navLinks.map((link) => (
                      <button
                        key={link.name}
                        onClick={() => handleMobileClick(link.href)}
                        className="group text-left flex items-center justify-between w-full py-5 border-b border-[#1a1a24] last:border-0 transition-all"
                      >
                        <span className="text-sm font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-gray-500 group-hover:from-white group-hover:to-green-400 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.9)]">
                          {link.name}
                        </span>
                        <span className="text-green-500/30 group-hover:text-green-400 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-all">
                          {">"}
                        </span>
                      </button>
                    ))}

                    <div className="pt-8 pb-4">
                      {/* CHANGED: Opens modal after closing mobile menu */}
                      <button
                        onClick={handleMobileRegistrationClick}
                        className="block w-full py-4 bg-green-500 text-black text-center font-black uppercase tracking-widest text-xs rounded-sm shadow-[0_0_20px_rgba(34,197,94,0.3)] active:scale-95 transition-all"
                      >
                        [ Register ]
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ========================================= */}
      {/* REGISTRATION ADVISORY MODAL               */}
      {/* ========================================= */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 font-mono"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0f] border border-green-500/50 shadow-[0_0_40px_rgba(34,197,94,0.15)] rounded-xl max-w-lg w-full p-6 md:p-8 relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

              <div className="flex items-center gap-3 mb-6 border-b border-[#1a1a24] pb-4">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="text-lg md:text-xl font-bold text-gray-200 tracking-widest uppercase">
                  Registration Protocol
                </h3>
              </div>

              <div className="space-y-4 mb-8 text-sm md:text-base text-gray-400 leading-relaxed text-left">
                <p>
                  Please review the official fee structure before proceeding to
                  the registration portal:
                </p>
                <div className="bg-[#050505] border border-[#1a1a24] p-4 rounded-lg space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-0.5">▸</span>
                    <div>
                      <span className="text-gray-200 font-bold">
                        Phase 01 (Abstract Submission):
                      </span>
                      <p className="text-sm mt-1">
                        Free of charge. All teams may submit their initial ideas
                        without any registration fee.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-500 mt-0.5">▸</span>
                    <div>
                      <span className="text-gray-200 font-bold">
                        Phase 02 (Final Execution):
                      </span>
                      <p className="text-sm mt-1">
                        Teams shortlisted for the 24-hour on-campus event will
                        be required to pay a confirmation fee of{" "}
                        <span className="text-yellow-500 font-bold">
                          ₹500/-
                        </span>{" "}
                        per team.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-3 border border-red-500/50 text-red-400 font-bold uppercase tracking-widest hover:bg-red-500/10 transition-colors rounded-lg sm:rounded-none text-xs md:text-sm"
                >
                  [ ABORT ]
                </button>
                <a
                  href={eventData?.registration?.registration_link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-[2] text-center px-4 py-3 bg-green-500 text-black font-black uppercase tracking-widest hover:bg-green-400 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.3)] rounded-lg sm:rounded-none text-xs md:text-sm"
                >
                  ACKNOWLEDGE & PROCEED
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
