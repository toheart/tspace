"use client";

import { motion } from "framer-motion";
import { Github, Heart } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="relative pt-24 pb-12 px-6">
      {/* 上方渐变分隔 */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        {/* 大标语 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-white mb-3"
        >
          {t.footer.connect}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm text-zinc-600 mb-10 max-w-md mx-auto leading-relaxed"
        >
          {t.footer.connectSub}
        </motion.p>

        {/* 社交链接 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://github.com/toheart"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.06] text-sm text-zinc-500 hover:text-white hover:border-blue-500/30 hover:bg-white/[0.03] transition-all duration-300"
            aria-label="GitHub"
          >
            <Github
              size={16}
              className="group-hover:text-blue-400 transition-colors"
            />
            <span className="font-mono">GitHub</span>
          </a>
          <a
            href="https://www.zhihu.com/people/tang-luo-yan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.06] text-sm text-zinc-500 hover:text-white hover:border-blue-500/30 hover:bg-white/[0.03] transition-all duration-300"
            aria-label="知乎"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="group-hover:text-blue-400 transition-colors"
            >
              <path d="M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0H5.721zm1.964 4.078h5.36c.076-.328.144-.614.209-.898l2.012.209c.075.013.178.072.178.157 0 .073-.09.146-.222.184a3.03 3.03 0 0 1-.157.348H19.1v1.238h-3.627v1.203h2.82v1.238h-2.82v1.238h3.4v1.238H7.465v-1.238h3.4V6.759h-2.6V5.521h2.6V4.318H7.685V4.078zm-2.08 7.153h4.933l.037-1.127h-4.97V8.762h7.674l.001 6.727c0 .764-.093 1.264-.385 1.486-.232.186-.56.255-.983.278-.402.022-1.022.012-1.642-.023a3.823 3.823 0 0 0-.343-1.328c.558.06 1.09.075 1.376.064.235-.012.355-.069.355-.478v-1.156H9.91l1.463 1.236-1.024.821L8.81 15.11l.724-.743H7.494v1.865h4.196v1.316H4.025v-1.316h2.16V12.43l-1.357 2.07c-.282-.465-.793-1.07-1.223-1.515V20.7H2.263V13.97a17.963 17.963 0 0 1-1.636 2.36 7.489 7.489 0 0 0-.617-1.62A16.62 16.62 0 0 0 2.251 11h-1.5V9.775h2.852V7.3L5.1 7.385c.06.006.164.05.164.127 0 .088-.104.166-.26.199v2.064h1.104V11H5.605v.232z" />
            </svg>
            <span className="font-mono">Zhihu</span>
          </a>
        </motion.div>

        {/* 底部版权 */}
        <div className="pt-8 border-t border-white/[0.03]">
          <p className="text-xs text-zinc-700 font-mono flex items-center justify-center gap-1.5">
            Built with <Heart size={10} className="text-red-500/40" /> using
            Next.js & Tailwind CSS
          </p>
          <p className="text-xs text-zinc-800 font-mono mt-2">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
