"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import { ExternalLink, Brain, Container, Code } from "lucide-react";

const categoryIcons = [Brain, Container, Code];
const categoryColors = [
  { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", hoverBorder: "hover:border-purple-500/30" },
  { bg: "bg-cyan-500/10", text: "text-cyan-400", border: "border-cyan-500/20", hoverBorder: "hover:border-cyan-500/30" },
  { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", hoverBorder: "hover:border-amber-500/30" },
];

export default function Posts() {
  const { t } = useI18n();

  return (
    <section id="posts" className="py-28 md:py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-3"
        >
          <span className="text-blue-400 font-mono mr-2 text-2xl md:text-3xl">
            04.
          </span>
          {t.posts.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-zinc-500 mb-14 text-base"
        >
          {t.posts.subtitle}
        </motion.p>

        {/* 分类文章展示 */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.posts.categories.map((category, ci) => {
            const Icon = categoryIcons[ci];
            const colors = categoryColors[ci];

            return (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * ci }}
                className="space-y-4"
              >
                {/* 分类标题 */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div
                    className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}
                  >
                    <Icon size={16} className={colors.text} />
                  </div>
                  <h3 className="text-white font-semibold text-sm font-mono tracking-wide">
                    {category.name}
                  </h3>
                </div>

                {/* 文章列表 */}
                <div className="space-y-3">
                  {category.items.map((article, ai) => (
                    <motion.a
                      key={ai}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 * ci + 0.08 * ai }}
                      className={`group block p-4 rounded-xl border ${colors.border} ${colors.hoverBorder} bg-white/[0.015] hover:bg-white/[0.03] transition-all duration-300`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-zinc-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                          {article.title}
                        </p>
                        <ExternalLink
                          size={14}
                          className="flex-shrink-0 mt-0.5 text-zinc-600 group-hover:text-zinc-400 transition-colors"
                        />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 查看全部 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href={t.posts.viewAllUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-blue-400 font-mono transition-colors duration-300"
          >
            {t.posts.viewAll}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
