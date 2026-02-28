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
              ? "bg-[#050505]/95 backdrop-blur-xl border-b border-[#30363d] py-3"
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
              <div className="relative w-10 h-10 border border-green-500/30 rounded-full p-1 bg-green-500/5 group-hover:border-green-500 transition-colors shadow-[0_0_15px_rgba(34,197,94,0.1)]">
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
                <span className="text-[8px] md:text-[10px] text-green-500 font-bold tracking-[0.2em] uppercase">
                  {eventData?.edition || "4th Edition"} // VNRVJIET
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
                  className="text-[11px] font-bold text-gray-400 uppercase tracking-widest hover:text-green-400 transition-colors relative group"
                >
                  <span className="text-gray-600 mr-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    ./
                  </span>
                  {link.name}
                </a>
              ))}

              <a
                href={eventData?.registration?.registration_link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-green-500 text-green-500 text-[11px] font-black uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all shadow-[0_0_15px_rgba(34,197,94,0.2)]"
              >
                [ REGISTER ]
              </a>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
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
                className="md:hidden bg-[#0a0a0f] border-b border-[#30363d] overflow-hidden shadow-2xl"
              >
                <div className="px-4 py-4 flex flex-col">
                  {/* CHANGED FROM <a> TO <button> TO FIX MOBILE SAFARI BUG */}
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleMobileClick(link.href)}
                      className="text-left text-xs font-bold text-gray-400 hover:text-green-400 uppercase tracking-widest flex items-center justify-between w-full py-4 border-b border-[#1a1a24] last:border-0 transition-colors"
                    >
                      {link.name}
                      <span className="text-green-500/50">{">"}</span>
                    </button>
                  ))}

                  <div className="pt-6 pb-2">
                    <button
                      onClick={() =>
                        handleMobileClick(
                          eventData?.registration?.registration_link || "#",
                        )
                      }
                      className="block w-full py-4 bg-green-500 text-black text-center font-black uppercase tracking-widest text-xs rounded-sm active:scale-95 transition-transform"
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
