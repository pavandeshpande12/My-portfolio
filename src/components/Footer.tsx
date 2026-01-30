"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Status & CTA Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="border border-border rounded-xl p-5 sm:p-6 md:p-8 mb-8 sm:mb-10 md:mb-12 text-center"
        >
          {/* Availability Status */}
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-green-500"></span>
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          {/* CTA */}
          <p className="text-lg sm:text-xl font-medium text-foreground mb-3 sm:mb-4">
            Let's build something together
          </p>

          {/* Contact Link */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
          >
            Get in touch
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m-7-7 7 7-7 7"/>
            </svg>
          </a>
        </motion.div>

        {/* Footer Text */}
        <div className="text-center space-y-1.5 sm:space-y-2">
          <p className="text-xs sm:text-sm text-muted-foreground">
            Design & Developed by <span className="text-foreground font-medium">Pavan Deshpande</span>
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
