"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";
import { Code2, Rocket, PenLine } from "lucide-react";

const lineIcons = [Rocket, Code2, PenLine];

export default function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-28 md:py-32 px-6 relative">
      {/* 微弱的左侧装饰光线 */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-40 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent hidden lg:block" />

      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12"
        >
          <span className="text-blue-400 font-mono mr-2 text-2xl md:text-3xl">
            01.
          </span>
          {t.about.title}
        </motion.h2>

        {/* 核心介绍段落 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-zinc-300 leading-relaxed mb-12"
        >
          {t.about.intro}
        </motion.p>

        {/* 三条主线 */}
        <div className="space-y-6 mb-12">
          {t.about.lines.map((line, i) => {
            const Icon = lineIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                className="group flex gap-4 p-5 rounded-xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-blue-500/15 transition-all duration-500"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1.5 font-mono text-sm tracking-wide">
                    {line.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {line.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 信念 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base text-zinc-500 italic mb-14 border-l-2 border-blue-500/20 pl-4"
        >
          {t.about.belief}
        </motion.p>

        {/* 数据卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.about.highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="group p-5 rounded-xl border border-white/[0.04] bg-white/[0.015] hover:bg-white/[0.03] hover:border-blue-500/15 transition-all duration-500"
            >
              <div className="text-[10px] text-zinc-600 mb-3 font-mono uppercase tracking-[0.15em]">
                {item.label}
              </div>
              <div className="text-sm text-zinc-200 font-medium leading-snug">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
