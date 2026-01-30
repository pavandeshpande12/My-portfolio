"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Divider */}
        <div className="border-t border-border mb-6 sm:mb-8" />
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 md:mb-8">
            About
          </h2>

          {/* Content */}
          <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              I&apos;m Pavan. I like building things that just work — simple, clean, and useful.
              Focused on Development, AI, and Product Thinking.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
