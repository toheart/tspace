"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, GitFork } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import type { RepoStats } from "@/lib/github";

interface ProjectsProps {
  stars: RepoStats;
}

export default function Projects({ stars }: ProjectsProps) {
  const { t } = useI18n();

  return (
    <section id="projects" className="py-28 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-16"
        >
          <span className="text-blue-400 font-mono mr-2 text-2xl md:text-3xl">
            03.
          </span>
          {t.projects.title}
        </motion.h2>

        <div className="grid gap-6">
          {t.projects.items.map((project, i) => (
            <motion.a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="group block p-6 md:p-8 rounded-2xl glow-border hover:shadow-[0_0_40px_rgba(59,130,246,0.06)] transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <GitFork
                    size={18}
                    className="text-zinc-600 group-hover:text-blue-400 transition-colors"
                  />
                  <h3 className="text-xl md:text-2xl font-bold font-mono text-white group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                </div>
                <div className="flex items-center gap-4 text-zinc-500">
                  {stars[project.repo] > 0 && (
                    <span className="flex items-center gap-1.5 text-sm font-mono">
                      <Star
                        size={14}
                        className="text-amber-400 fill-amber-400/30"
                      />
                      {stars[project.repo]}
                    </span>
                  )}
                  <ExternalLink
                    size={15}
                    className="opacity-0 group-hover:opacity-100 group-hover:text-blue-400 transition-all duration-300"
                  />
                </div>
              </div>

              <p className="text-zinc-400 mb-6 leading-relaxed text-[15px]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, ti) => (
                  <span
                    key={ti}
                    className="px-2.5 py-1 rounded-md text-xs font-mono text-blue-400/70 bg-blue-500/[0.06] border border-blue-500/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
