import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Levi.Tang - Go 后端工程师 & 云原生架构师",
  description:
    "Levi.Tang 的个人网站。9年后端开发经验，专注于 Go 语言、云原生架构、微服务体系与 AI 赋能工程效能。",
  keywords: [
    "Levi.Tang",
    "Go",
    "Golang",
    "Cloud Native",
    "Kubernetes",
    "Microservices",
    "Backend Engineer",
    "SRE",
    "AI Agent",
  ],
  openGraph: {
    title: "Levi.Tang - Go Backend Engineer & Cloud Native Architect",
    description:
      "9 years of backend development. Focused on Go, Cloud Native, and AI-powered engineering.",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body
        className={`${notoSansSC.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
