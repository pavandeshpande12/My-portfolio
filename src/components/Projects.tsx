"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "Job Tracker",
    description:
      "A comprehensive job application tracking system to manage and monitor your job search journey.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/pavandeshpande12/job-tracker",
    live: "https://job-tracker-rho-ruddy.vercel.app",
  },
  {
    title: "CampusVote",
    description:
      "A modern voting platform for student council elections with real-time results and email-based vote validation.",
    tech: ["Python", "Streamlit", "SQLite", "Plotly"],
    github: "https://github.com/pavandeshpande12/campusvote",
    live: "https://campusvote-nsnq.onrender.com",
  },
];

const funProjects = [
  {
    title: "Life in Weeks",
    description:
      "A week-by-week visualization of life to reflect on time, progress, and what remains.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/pavandeshpande12/life-in-weeks",
    live: "https://pavandeshpande12.github.io/life-in-weeks/",
  },
];

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  placeholder?: boolean;
}

const MAX_VISIBLE_TECH = 4;
const INITIAL_VISIBLE_COUNT = 3;

function ProjectCard({ project }: { project: Project }) {
  const visibleTech = project.tech.slice(0, MAX_VISIBLE_TECH);
  const remainingCount = project.tech.length - MAX_VISIBLE_TECH;

  return (
    <div
      className={`group rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-muted-foreground/50 p-4 sm:p-5 ${
        project.placeholder ? "opacity-50" : ""
      }`}
    >
        {/* Title Row */}
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <h3 className="text-base sm:text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={18} />
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-secondary rounded-full text-muted-foreground border border-border"
            >
              {tech}
            </span>
          ))}
          {remainingCount > 0 && (
            <span className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-secondary rounded-full text-muted-foreground border border-border">
              +{remainingCount}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        {!project.placeholder && (
          <div className="flex gap-2 sm:gap-3">
            <a
              href={project.github !== "#" ? project.github : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 bg-secondary rounded-lg text-foreground hover:bg-secondary/80 transition-colors border border-border"
              onClick={project.github === "#" ? (e) => e.preventDefault() : undefined}
            >
              Details
            </a>
            <a
              href={project.live !== "#" ? project.live : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 inline-flex items-center justify-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-colors ${
                project.live !== "#"
                  ? "bg-foreground text-background hover:opacity-90"
                  : "bg-secondary text-muted-foreground cursor-not-allowed border border-border"
              }`}
              onClick={project.live === "#" ? (e) => e.preventDefault() : undefined}
            >
              {project.live !== "#" ? "Live" : "Soon"}
            </a>
          </div>
        )}
    </div>
  );
}

function ShowMoreButton({
  expanded,
  onClick,
  hiddenCount,
}: {
  expanded: boolean;
  onClick: () => void;
  hiddenCount: number;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full mt-4 py-2 px-4 text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-2 rounded-lg border border-border hover:border-muted-foreground/50 transition-all bg-card"
    >
      {expanded ? (
        <>
          Show less <ChevronUp size={16} />
        </>
      ) : (
        <>
          Show {hiddenCount} more <ChevronDown size={16} />
        </>
      )}
    </button>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const [funProjectsExpanded, setFunProjectsExpanded] = useState(false);

  const visibleProjects = projectsExpanded
    ? projects
    : projects.slice(0, INITIAL_VISIBLE_COUNT);
  const visibleFunProjects = funProjectsExpanded
    ? funProjects
    : funProjects.slice(0, INITIAL_VISIBLE_COUNT);

  const hiddenProjectsCount = projects.length - INITIAL_VISIBLE_COUNT;
  const hiddenFunCount = funProjects.length - INITIAL_VISIBLE_COUNT;

  return (
    <section id="projects" className="py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Divider */}
        <div className="border-t border-border mb-6 sm:mb-8" />

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Two Column Grid */}
          <div className="grid md:grid-cols-[1fr_1px_1fr] gap-6 sm:gap-8">
            {/* Projects Column */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 md:mb-8">
                Projects
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {visibleProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
              {hiddenProjectsCount > 0 && (
                <ShowMoreButton
                  expanded={projectsExpanded}
                  onClick={() => setProjectsExpanded(!projectsExpanded)}
                  hiddenCount={hiddenProjectsCount}
                />
              )}
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:block bg-border" />

            {/* Mini Projects Column */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 md:mb-8">
                Mini Projects
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {visibleFunProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
              {hiddenFunCount > 0 && (
                <ShowMoreButton
                  expanded={funProjectsExpanded}
                  onClick={() => setFunProjectsExpanded(!funProjectsExpanded)}
                  hiddenCount={hiddenFunCount}
                />
              )}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
