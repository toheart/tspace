"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";

// 核心技能列表 — 这些标签会高亮显示
const PRIMARY_TAGS = new Set([
  "Go",
  "gRPC",
  "Kubernetes",
  "DDD",
  "LangGraph",
  "AI Agent",
  "Prometheus",
  "微服务",
  "Microservices",
]);

export default function TechStack() {
  const { t } = useI18n();

  return (
    <section id="tech" className="py-28 md:py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-16"
        >
          <span className="text-blue-400 font-mono mr-2 text-2xl md:text-3xl">
            02.
          </span>
          {t.tech.title}
        </motion.h2>

        <div className="space-y-10">
          {t.tech.categories.map((category, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * ci }}
            >
              <h3 className="text-xs font-mono text-zinc-600 mb-4 uppercase tracking-[0.2em]">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.tags.map((tag, ti) => {
                  const isPrimary = PRIMARY_TAGS.has(tag);
                  return (
                    <motion.span
                      key={ti}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.08 * ci + 0.03 * ti,
                      }}
                      className={`px-3.5 py-1.5 rounded-lg text-sm border font-mono transition-all duration-300 cursor-default ${
                        isPrimary
                          ? "tag-primary"
                          : "border-white/[0.04] bg-white/[0.015] text-zinc-400 hover:bg-white/[0.04] hover:border-white/[0.08] hover:text-zinc-300"
                      }`}
                    >
                      {tag}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
