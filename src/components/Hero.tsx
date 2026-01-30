"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Download } from "lucide-react";
import Image from "next/image";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/pavandeshpande12",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pavan-deshpande-723aa6239",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:pavandeshpande.work@gmail.com",
    icon: Mail,
  },
];

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="home"
      className="pt-20 sm:pt-24 md:pt-28 pb-4 px-4 sm:px-6 md:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Profile Photo */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-secondary mb-4 sm:mb-6 ring-2 ring-border">
          {!imageError ? (
            <Image
              src="/profile.jpg"
              alt="Pavan Deshpande"
              width={80}
              height={80}
              className="object-cover w-full h-full"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xl font-semibold text-muted-foreground">
              PD
            </div>
          )}
        </div>

        {/* Name */}
        <h1 className="group text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-1 cursor-default">
          <span className="relative inline-block tracking-normal group-hover:tracking-wide group-hover:text-shadow-glow transition-all duration-500 ease-out">
            Pavan Deshpande
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-500 ease-out group-hover:w-full" />
          </span>
        </h1>

        {/* Title */}
        <p className="text-sm sm:text-base text-primary mb-4 sm:mb-6">
          Developer
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={link.name}
            >
              <link.icon size={18} />
            </a>
          ))}
        </div>

        {/* Resume Links */}
        <div className="flex items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <FileText size={16} />
            View Resume
          </a>
          <a
            href="/resume.pdf"
            download="Pavan_Deshpande_Resume.pdf"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Download size={16} />
            Download
          </a>
        </div>
      </motion.div>
    </section>
  );
}
