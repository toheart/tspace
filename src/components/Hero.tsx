"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

/* ===== 打字机 Hook ===== */
function useTypewriter(text: string, speed = 80, delay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          setDone(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return { displayed, done };
}

/* ===== 浮动粒子 Canvas ===== */
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // 初始化粒子
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.3 + 0.05,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // 边界回绕
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`;
        ctx.fill();
      });

      // 连线（距离小于 120 的粒子）
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.04 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

export default function Hero() {
  const { t } = useI18n();
  const { displayed: nameText, done: nameDone } = useTypewriter(
    "Levi.Tang",
    100,
    300
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scanline">
      {/* 粒子背景 */}
      <ParticleField />

      {/* 背景网格（更强对比度） */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.04)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* 中心径向渐变 */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/8 via-cyan-500/3 to-transparent rounded-full blur-[80px]" />

      {/* 右下角辅助光晕 */}
      <div className="absolute bottom-1/4 right-1/5 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px]" />

      {/* 底部渐变衰减 */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050508] to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* 终端风格装饰行 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 font-mono text-xs text-zinc-600 tracking-wider"
        >
          <span className="text-blue-500/60">~/</span>portfolio{" "}
          <span className="text-zinc-700">$</span> whoami
        </motion.div>

        {/* 名字 — 打字机效果 */}
        <h1 className="font-mono text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none">
          {nameText.split("").map((char, i) => (
            <span
              key={i}
              className={
                char === "."
                  ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent"
              }
            >
              {char}
            </span>
          ))}
          {/* 光标闪烁 */}
          <motion.span
            animate={{ opacity: nameDone ? [1, 0] : 1 }}
            transition={{
              duration: 0.6,
              repeat: nameDone ? Infinity : 0,
              repeatType: "reverse",
            }}
            className="inline-block w-[3px] h-[0.8em] bg-blue-400 ml-1 align-baseline translate-y-1"
          />
        </h1>

        {/* 副标题 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-8 text-base md:text-lg text-zinc-500 font-mono tracking-wide"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* 宣言 */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mt-3 text-sm md:text-base text-zinc-600 italic"
        >
          &ldquo;{t.hero.slogan}&rdquo;
        </motion.p>

        {/* 社交链接 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/toheart"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.08] text-sm text-zinc-400 hover:text-white hover:bg-white/[0.04] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500"
          >
            <Github size={16} className="group-hover:text-blue-400 transition-colors" />
            GitHub
          </a>
          <a
            href="https://www.zhihu.com/people/tang-luo-yan"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-6 py-3 rounded-full border border-white/[0.08] text-sm text-zinc-400 hover:text-white hover:bg-white/[0.04] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500"
          >
            <ZhihuIcon />
            知乎
          </a>
        </motion.div>

        {/* 向下滚动指示 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.2em]">
              scroll
            </span>
            <div className="w-4 h-7 rounded-full border border-zinc-700 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-1.5 bg-zinc-600 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* 知乎图标 SVG */
function ZhihuIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="group-hover:text-blue-400 transition-colors"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0H5.721zm1.964 4.078h5.36c.076-.328.144-.614.209-.898l2.012.209c.075.013.178.072.178.157 0 .073-.09.146-.222.184a3.03 3.03 0 0 1-.157.348H19.1v1.238h-3.627v1.203h2.82v1.238h-2.82v1.238h3.4v1.238H7.465v-1.238h3.4V6.759h-2.6V5.521h2.6V4.318H7.685V4.078zm-2.08 7.153h4.933l.037-1.127h-4.97V8.762h7.674l.001 6.727c0 .764-.093 1.264-.385 1.486-.232.186-.56.255-.983.278-.402.022-1.022.012-1.642-.023a3.823 3.823 0 0 0-.343-1.328c.558.06 1.09.075 1.376.064.235-.012.355-.069.355-.478v-1.156H9.91l1.463 1.236-1.024.821L8.81 15.11l.724-.743H7.494v1.865h4.196v1.316H4.025v-1.316h2.16V12.43l-1.357 2.07c-.282-.465-.793-1.07-1.223-1.515V20.7H2.263V13.97a17.963 17.963 0 0 1-1.636 2.36 7.489 7.489 0 0 0-.617-1.62A16.62 16.62 0 0 0 2.251 11h-1.5V9.775h2.852V7.3L5.1 7.385c.06.006.164.05.164.127 0 .088-.104.166-.26.199v2.064h1.104V11H5.605v.232z" />
    </svg>
  );
}
