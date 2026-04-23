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
  {
    title: "SQL (Basic) Certificate",
    description: "Foundational SQL skills covering simple queries, relationships, and aggregators.",
    issuer: "HackerRank",
    skills: ["SQL", "Queries", "Aggregations", "Relationships"],
    link: "https://www.hackerrank.com/certificates/2b15268d516a",
  },
  {
    title: "Software Engineer Certificate",
    description: "Verified software engineering skills covering problem solving, SQL, and REST APIs.",
    issuer: "HackerRank",
    skills: ["Problem Solving", "SQL", "REST API"],
    link: "https://www.hackerrank.com/certificates/acbd279862ac",
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="group flex flex-col rounded-xl border border-border bg-card transition-all hover:border-muted-foreground/50 p-3 sm:p-4 md:p-5"
              >
                <div className="mb-2">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-0.5 sm:mt-1">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-muted-foreground text-xs sm:text-sm mb-3 flex-grow">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 bg-secondary rounded-full text-muted-foreground border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-xs px-3 py-1.5 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity w-full"
                >
                  Verify
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
