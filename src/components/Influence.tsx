"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n-context";

export default function Influence() {
  const { t } = useI18n();
  const [showQR, setShowQR] = useState(false);

  return (
    <section id="influence" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-16"
        >
          <span className="text-blue-400 font-mono mr-2">05.</span>
          {t.influence.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* 公众号 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                <WechatIcon />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm">
                  {t.influence.wechat.name}
                </h3>
                <span className="text-xs text-zinc-500">WeChat</span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
              {t.influence.wechat.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-zinc-500">
                <span className="text-lg font-bold text-white mr-1">
                  {t.influence.wechat.followers}
                </span>
                {t.influence.wechat.followersLabel}
              </div>
              <button
                onClick={() => setShowQR(true)}
                className="text-xs text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
              >
                {t.influence.wechat.scanTip} →
              </button>
            </div>
          </motion.div>

          {/* 知乎 */}
          <motion.a
            href={t.influence.zhihu.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <ZhihuIcon />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">
                  {t.influence.zhihu.name}
                </h3>
                <span className="text-xs text-zinc-500">Zhihu</span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {t.influence.zhihu.description}
            </p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href={t.influence.github.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <GithubIcon />
              </div>
              <div>
                <h3 className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">
                  {t.influence.github.name}
                </h3>
                <span className="text-xs text-zinc-500">Open Source</span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {t.influence.github.description}
            </p>
          </motion.a>
        </div>
      </div>

      {/* 二维码弹窗 */}
      <AnimatePresence>
        {showQR && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            onClick={() => setShowQR(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl p-6 shadow-2xl max-w-xs"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/wechat-qr.png"
                alt="公众号二维码"
                width={280}
                height={280}
                className="rounded-xl"
              />
              <p className="text-center text-sm text-zinc-600 mt-4 font-medium">
                {t.influence.wechat.name}
              </p>
              <p className="text-center text-xs text-zinc-400 mt-1">
                {t.influence.wechat.scanTip}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function WechatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#22c55e">
      <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05a6.42 6.42 0 0 1-.246-1.758c0-3.671 3.228-6.649 7.206-6.649.175 0 .342.021.515.033C15.868 4.447 12.595 2.188 8.691 2.188zm-2.6 4.408c.58 0 1.049.47 1.049 1.049 0 .58-.47 1.049-1.049 1.049a1.049 1.049 0 0 1 0-2.098zm5.143 0c.58 0 1.049.47 1.049 1.049 0 .58-.47 1.049-1.049 1.049a1.049 1.049 0 0 1 0-2.098zm4.228 3.264c-3.573 0-6.472 2.623-6.472 5.86 0 3.238 2.9 5.86 6.472 5.86a7.793 7.793 0 0 0 2.16-.306.622.622 0 0 1 .516.07l1.37.802a.235.235 0 0 0 .12.039.212.212 0 0 0 .21-.212c0-.052-.02-.103-.035-.153l-.28-1.065a.426.426 0 0 1 .154-.48C22.148 18.878 23.1 17.175 23.1 15.32c0-3.237-2.9-5.86-6.472-5.86v-.6zm-2.083 3.384c.419 0 .757.338.757.757a.757.757 0 1 1-.757-.757zm4.166 0c.418 0 .756.338.756.757a.757.757 0 1 1-.756-.757z" />
    </svg>
  );
}

function ZhihuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#3b82f6">
      <path d="M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0H5.721zm1.964 4.078h5.36c.076-.328.144-.614.209-.898l2.012.209c.075.013.178.072.178.157 0 .073-.09.146-.222.184a3.03 3.03 0 0 1-.157.348H19.1v1.238h-3.627v1.203h2.82v1.238h-2.82v1.238h3.4v1.238H7.465v-1.238h3.4V6.759h-2.6V5.521h2.6V4.318H7.685V4.078zm-2.08 7.153h4.933l.037-1.127h-4.97V8.762h7.674l.001 6.727c0 .764-.093 1.264-.385 1.486-.232.186-.56.255-.983.278-.402.022-1.022.012-1.642-.023a3.823 3.823 0 0 0-.343-1.328c.558.06 1.09.075 1.376.064.235-.012.355-.069.355-.478v-1.156H9.91l1.463 1.236-1.024.821L8.81 15.11l.724-.743H7.494v1.865h4.196v1.316H4.025v-1.316h2.16V12.43l-1.357 2.07c-.282-.465-.793-1.07-1.223-1.515V20.7H2.263V13.97a17.963 17.963 0 0 1-1.636 2.36 7.489 7.489 0 0 0-.617-1.62A16.62 16.62 0 0 0 2.251 11h-1.5V9.775h2.852V7.3L5.1 7.385c.06.006.164.05.164.127 0 .088-.104.166-.26.199v2.064h1.104V11H5.605v.232z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#a855f7">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}
