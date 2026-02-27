"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqsData: FAQ[];
}

export default function FAQSection({ faqsData }: FAQSectionProps) {
  // Track which FAQ is currently open. null means all are closed.
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#050505] relative font-mono text-gray-300">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,100,0.03)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="mb-12 border-b border-[#30363d] pb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">
            <span className="text-gray-600 mr-2">?</span>QUERY_DATABASE
          </h2>
          <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mt-2">
            Accessing frequently asked questions...
          </p>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`border ${isActive ? "border-green-500/50 bg-green-900/10" : "border-[#30363d] bg-[#0a0a0f]/50"} transition-colors duration-300 rounded overflow-hidden`}
              >
                {/* Question / Toggle Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none group"
                >
                  <span
                    className={`font-bold tracking-wide ${isActive ? "text-green-400" : "text-gray-300 group-hover:text-white"} transition-colors`}
                  >
                    <span className="text-gray-500 mr-2">{">"}</span>
                    {faq.question}
                  </span>

                  {/* The [+] / [-] Toggle Indicator */}
                  <span
                    className={`text-sm font-bold ${isActive ? "text-green-500" : "text-gray-600 group-hover:text-gray-400"} transition-colors`}
                  >
                    [{isActive ? "-" : "+"}]
                  </span>
                </button>

                {/* Animated Answer Section */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-[#1a1a24] pt-4 mt-2">
                        <span className="text-cyan-600/70 font-bold mr-2">
                          RESPONSE:
                        </span>
                        {faq.answer}
                        {/* Blinking cursor at the end of the answer */}
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ repeat: Infinity, duration: 0.8 }}
                          className="inline-block w-2 h-4 bg-green-500/50 ml-2 align-middle"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
