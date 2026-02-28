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

  // BULLETPROOF MOBILE SCROLL (Fixes the unmount bug)
  const handleMobileClick = (href: string) => {
    // 1. Close the menu immediately
    setMobileMenuOpen(false);

    // 2. Wait exactly 300ms for the menu exit animation to finish, THEN scroll
    setTimeout(() => {
      if (href.startsWith("#")) {
        const element = document.querySelector(href);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      } else {
        // If it's an external link (like registration), open in new tab
        window.open(href, "_blank");
      }
    }, 300);
  };

  return (
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
                {/* REVERTED: Back to solid white so it doesn't compete with the main title */}
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
                  {/* ENHANCED CAPTIVATING TEXT EFFECT */}
                  <span className="text-[11px] md:text-[12px] font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-gray-500 group-hover:from-white group-hover:to-green-400 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.9)]">
                    {link.name}
                  </span>
                  {/* GLOWING LASER UNDERLINE */}
                  <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center drop-shadow-[0_0_5px_rgba(34,197,94,1)]" />
                </a>
              ))}

              <a
                href={eventData?.registration?.registration_link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 border border-green-500 text-green-500 text-[11px] font-black uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)] hover:-translate-y-0.5 rounded-sm ml-4"
              >
                [ REGISTER ]
              </a>
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
                      {/* ENHANCED CAPTIVATING TEXT FOR MOBILE */}
                      <span className="text-sm font-black uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-gray-500 group-hover:from-white group-hover:to-green-400 transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.9)]">
                        {link.name}
                      </span>
                      <span className="text-green-500/30 group-hover:text-green-400 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-all">
                        {">"}
                      </span>
                    </button>
                  ))}

                  <div className="pt-8 pb-4">
                    <button
                      onClick={() =>
                        handleMobileClick(
                          eventData?.registration?.registration_link || "#",
                        )
                      }
                      className="block w-full py-4 bg-green-500 text-black text-center font-black uppercase tracking-widest text-xs rounded-sm shadow-[0_0_20px_rgba(34,197,94,0.3)] active:scale-95 transition-all"
                    >
                      Initiate_Registration
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
