"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Next.js",
  "TypeScript",
  "Python",
  "AI Agents",
  "AI Integration",
  "LLM Workflows",
  "API Design",
  "MongoDB",
  "Cloud Deployment",
  "Automation",
  "Git",
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Divider */}
        <div className="border-t border-border mb-6 sm:mb-8" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 sm:mb-3">
            Building Blocks & Technical Toolkit
          </h2>

          <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
            A mix of technologies and principles I rely on to ship clean, functional products.
          </p>

          {/* Marquee Container */}
          <div className="relative overflow-hidden py-4 rounded-xl">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-background to-transparent z-10" />

            {/* Marquee Track */}
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
              {[...skills, ...skills].map((skill, index) => (
                <span
                  key={`${skill}-${index}`}
                  className="flex-shrink-0 mx-1.5 sm:mx-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-secondary rounded-full text-foreground border border-border whitespace-nowrap"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
