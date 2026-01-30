"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  "Next.js",
  "TypeScript",
  "React",
  "Node.js",
  "MongoDB",
  "Tailwind CSS",
  "Python",
  "Git",
  "SQL",
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
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 md:mb-8">
            Skills
          </h2>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-secondary rounded-full text-foreground border border-border hover:border-muted-foreground/50 hover:bg-secondary/80 cursor-default transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
