"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 min-h-[30vh] sm:min-h-[40vh]">
      <div className="max-w-4xl mx-auto">
        {/* Divider */}
        <div className="border-t border-border mb-6 sm:mb-8" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Let&apos;s work on something together. You can drop me a DM on{" "}
            <a
              href="https://linkedin.com/in/pavan-deshpande-723aa6239"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            {" "}or email me at{" "}
            <a
              href="mailto:pavandeshpande.work@gmail.com"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
            >
              pavandeshpande.work@gmail.com
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
