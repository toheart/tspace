"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

const navItems = [
  { key: "about", href: "#about" },
  { key: "tech", href: "#tech" },
  { key: "projects", href: "#projects" },
  { key: "posts", href: "#posts" },
  { key: "influence", href: "#influence" },
  { key: "contact", href: "#contact" },
] as const;

export default function Navbar() {
  const { t, locale, toggleLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-300 transition-all"
        >
          Levi.Tang
        </a>

        {/* 导航链接 */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {t.nav[key]}
            </a>
          ))}

          {/* 语言切换 */}
          <button
            onClick={toggleLocale}
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer"
            aria-label="切换语言"
          >
            <Globe size={14} />
            <span>{locale === "zh" ? "EN" : "中"}</span>
          </button>
        </div>

        {/* 移动端语言切换 */}
        <button
          onClick={toggleLocale}
          className="md:hidden flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="切换语言"
        >
          <Globe size={14} />
          <span>{locale === "zh" ? "EN" : "中"}</span>
        </button>
      </div>
    </motion.nav>
  );
}
