"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const certifications = [
  {
    title: "The Complete 2024 Web Development Bootcamp",
    description: "Comprehensive full-stack web development course covering modern technologies and best practices.",
    issuer: "Udemy • Dr. Angela Yu",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    link: "/certificates/web-development-bootcamp.pdf",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8">
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
            Certifications
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="group rounded-xl border border-border bg-card transition-all hover:border-muted-foreground/50 p-3 sm:p-4 md:p-5"
              >
                {/* Top Row: Title & Button */}
                <div className="flex items-start justify-between gap-2 sm:gap-4 mb-2">
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-0.5 sm:mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Verify
                  </a>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-secondary rounded-full text-muted-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
