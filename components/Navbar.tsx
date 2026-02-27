"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "ABOUT", href: "#about" }, // Added ABOUT back to the directory
  { name: "SCHEDULE", href: "#schedule" },
  { name: "TRACKS", href: "#tracks" },
  { name: "SPONSORS", href: "#sponsors" },
  { name: "FAQS", href: "#faqs" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detect scroll to add a stronger border/background when not at the very top
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 font-mono transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/80 backdrop-blur-md border-b border-green-900/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Terminal Prompt */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="text-gray-500 group-hover:text-green-500 transition-colors">
            ~/
          </span>
          <span className="text-gray-300 font-bold tracking-widest group-hover:text-white transition-colors">
            DESIGNATHON<span className="text-green-500 animate-pulse">_</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-400 hover:text-cyan-400 tracking-widest uppercase transition-colors relative group"
            >
              <span className="absolute -left-3 opacity-0 group-hover:opacity-100 text-cyan-500 transition-opacity">
                {">"}
              </span>
              {link.name}
            </a>
          ))}

          {/* Main Action Button in Nav */}
          <a
            href="#" // <-- REPLACE THIS '#' WITH YOUR UNSTOP LINK
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500/10 border border-green-500 text-green-400 text-sm font-bold uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all"
          >
            [ EXECUTE_JOIN ]
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-green-500 focus:outline-none font-bold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "[X] CLOSE" : "[+] MENU"}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-b border-[#30363d] overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-cyan-400 tracking-widest border-b border-gray-800/50 pb-2"
                >
                  <span className="text-gray-600 mr-2">./</span>
                  {link.name}
                </a>
              ))}
              <a
                href="#" // <-- REPLACE THIS '#' WITH YOUR UNSTOP LINK
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center mt-4 px-4 py-3 bg-green-500/10 border border-green-500 text-green-400 font-bold uppercase tracking-widest active:bg-green-500 active:text-black"
              >
                [ EXECUTE_JOIN ]
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
