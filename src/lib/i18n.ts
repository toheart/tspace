export type Locale = "zh" | "en";

export const translations = {
  zh: {
    nav: {
      about: "关于",
      tech: "技术",
      projects: "项目",
      posts: "文章",
      influence: "影响力",
      contact: "联系",
    },
    hero: {
      subtitle: "Go 后端工程师 / 云原生架构师 / AI 工程化探索者",
      slogan: "用代码构建系统，用开源分享经验，用 AI 重新定义效能",
    },
    about: {
      title: "关于我",
      intro:
        "做了 9 年后端，写了 85 篇技术文章，造了 2 个开源工具。一路从业务开发走到架构设计，从云原生走到 AI 工程化 —— 不是简历上的关键词堆砌，而是每一步都踩过坑、写过总结、留下了代码。",
      lines: [
        {
          title: "架构实践者",
          desc: "先后主导过 SASE 安全产品的云原生转型、云游戏平台的分发系统重构、企业级监控告警平台的从零建设。关注的不只是「能跑」，而是「能扛、能维护、能演进」。",
        },
        {
          title: "开源创作者",
          desc: "GoAnalysis 帮助开发者可视化阅读 Go 源码，累计 239+ Stars。CoCursor 让团队更高效地使用 AI 协作。不只是写代码，更是解决自己和社区真实遇到的问题。",
        },
        {
          title: "持续输出者",
          desc: "知乎 85 篇原创文章，从 Kubernetes 源码逐行拆解到 AI Agent 底层原理，从 Go channel 内部机制到 LangGraph 实战。2000+ 赞同不是流量，是一篇篇被验证有价值的深度内容。",
        },
      ],
      belief:
        "技术的价值不在于知道多少，而在于能沉淀多少、能分享多少、能改变多少。",
      highlights: [
        {
          label: "后端经验",
          value: "9 年",
        },
        {
          label: "原创文章",
          value: "85 篇",
        },
        {
          label: "知乎赞同",
          value: "2,166",
        },
        {
          label: "开源 Stars",
          value: "250+",
        },
      ],
    },
    tech: {
      title: "技术栈",
      categories: [
        {
          name: "后端开发",
          tags: ["Go", "Python", "C++", "gRPC", "Kratos", "Gin", "Flask"],
        },
        {
          name: "架构设计",
          tags: ["微服务", "DDD", "事件驱动", "边缘云架构", "GitOps"],
        },
        {
          name: "云原生",
          tags: [
            "Kubernetes",
            "Istio",
            "Helm",
            "APISIX",
            "Docker",
            "Dragonfly2",
          ],
        },
        {
          name: "AI 工程化",
          tags: [
            "LangGraph",
            "RAG",
            "LLM 编排",
            "AI Agent",
            "Prompt Engineering",
          ],
        },
        {
          name: "数据与存储",
          tags: ["MySQL", "Redis", "Elasticsearch", "MongoDB", "Kafka", "Ceph"],
        },
        {
          name: "可观测性",
          tags: [
            "Prometheus",
            "Jaeger",
            "OpenTelemetry",
            "ELK",
            "Nightingale",
          ],
        },
      ],
    },
    projects: {
      title: "开源项目",
      items: [
        {
          name: "GoAnalysis",
          description:
            "Go 语言函数追踪与可视化分析工具。支持实时 Goroutine 执行捕获、Mermaid 交互式流程图、性能瓶颈定位与 GitLab MR 变更分析。",
          techStack: [
            "Kratos",
            "gRPC",
            "SQLite",
            "Vue3",
            "Mermaid.js",
            "D3.js",
          ],
          repo: "toheart/goanalysis",
          url: "https://github.com/toheart/goanalysis",
        },
        {
          name: "CoCursor",
          description:
            "Cursor IDE 团队 AI 协作工具。集成工作分析面板、AI 对话语义搜索（RAG）、技能共享市场与 P2P 局域网实时协作，完全本地运行，保障数据隐私。",
          techStack: [
            "Go",
            "Gin",
            "DDD",
            "React",
            "TypeScript",
            "Qdrant",
            "P2P/mDNS",
          ],
          repo: "toheart/cocursor",
          url: "https://github.com/toheart/cocursor",
        },
      ],
    },
    posts: {
      title: "精选文章",
      subtitle: "从源码深读到工程实战，持续记录每一次技术探索",
      categories: [
        {
          name: "AI 工程化",
          items: [
            {
              title: "AI 编程心法：架构才是硬道理",
              url: "https://zhuanlan.zhihu.com/p/1994358048869851415",
            },
            {
              title: "AI 工程化方法论：规范驱动开发在团队中的落地",
              url: "https://zhuanlan.zhihu.com/p/1969831404754965340",
            },
            {
              title: "入门 LangGraph：从状态到图的最小可用实践",
              url: "https://zhuanlan.zhihu.com/p/1951066713627027407",
            },
          ],
        },
        {
          name: "Kubernetes 深度",
          items: [
            {
              title: "可视化阅读 Kubelet（一）：从宏观架构到启动全流程",
              url: "https://zhuanlan.zhihu.com/p/1938363114698544823",
            },
            {
              title: "Kubernetes 访问流程深度拆解：从配置加载到 Client 创建",
              url: "https://zhuanlan.zhihu.com/p/32071228517",
            },
            {
              title: "跟 K8S 学设计：Informer 全分析 - Reflector",
              url: "https://zhuanlan.zhihu.com/p/1894148676840060283",
            },
          ],
        },
        {
          name: "Go 语言",
          items: [
            {
              title: "深入 Go 语言：解锁 channel 内部机制",
              url: "https://zhuanlan.zhihu.com/p/2996272789",
            },
            {
              title: "和\u201c自己\u201d的战斗：插桩服务性能优化血泪史",
              url: "https://zhuanlan.zhihu.com/p/1941642695794759168",
            },
            {
              title: "从 1.6GB 到 11MB：GoAnalysis 存储优化实战",
              url: "https://zhuanlan.zhihu.com/p/1891964432705356784",
            },
          ],
        },
      ],
      viewAll: "查看全部文章 →",
      viewAllUrl: "https://www.zhihu.com/people/tang-luo-yan/posts",
    },
    influence: {
      title: "技术影响力",
      wechat: {
        name: "小唐的技术日志",
        description: "原创技术文章 85+ 篇，专注云原生、Go 语言与 AI 工程化",
        followers: "889",
        followersLabel: "关注者",
        scanTip: "扫码关注公众号",
      },
      zhihu: {
        name: "知乎",
        description: "85 篇文章 · 2,166 赞同 · 3,883 收藏",
        url: "https://www.zhihu.com/people/tang-luo-yan",
      },
      github: {
        name: "GitHub",
        description: "开源项目累计 250+ Stars",
        url: "https://github.com/toheart",
      },
    },
    footer: {
      connect: "Feel free to connect",
      connectSub:
        "如果你也在探索云原生、AI 工程化，或者对开源项目感兴趣，欢迎交流。",
      copyright: "© 2026 Levi.Tang. All rights reserved.",
    },
  },
  en: {
    nav: {
      about: "About",
      tech: "Tech",
      projects: "Projects",
      posts: "Posts",
      influence: "Influence",
      contact: "Contact",
    },
    hero: {
      subtitle:
        "Go Backend Engineer / Cloud Native Architect / AI Engineering Explorer",
      slogan:
        "Building systems with code, sharing through open source, redefining efficiency with AI",
    },
    about: {
      title: "About Me",
      intro:
        "9 years in backend, 85 tech articles, 2 open-source tools. From business development to architecture design, from Cloud Native to AI engineering — not just resume keywords, but real problems solved, lessons documented, and code shipped.",
      lines: [
        {
          title: "Architecture Practitioner",
          desc: "Led Cloud Native transformation of SASE security products, rebuilt cloud gaming distribution systems, and built an enterprise monitoring platform from scratch. Focused not just on \"it works\" but on \"it scales, it's maintainable, it evolves.\"",
        },
        {
          title: "Open Source Creator",
          desc: "GoAnalysis helps developers visually read Go source code (239+ Stars). CoCursor enables teams to collaborate with AI more effectively. Building tools that solve real problems for myself and the community.",
        },
        {
          title: "Consistent Writer",
          desc: "85 original articles on Zhihu — from Kubernetes source code deep dives to AI Agent internals, from Go channel mechanisms to LangGraph hands-on. 2,000+ upvotes built on deep, validated content.",
        },
      ],
      belief:
        "The value of technology lies not in how much you know, but in how much you can distill, share, and change.",
      highlights: [
        {
          label: "Experience",
          value: "9 Years",
        },
        {
          label: "Articles",
          value: "85",
        },
        {
          label: "Upvotes",
          value: "2,166",
        },
        {
          label: "OSS Stars",
          value: "250+",
        },
      ],
    },
    tech: {
      title: "Tech Stack",
      categories: [
        {
          name: "Backend",
          tags: ["Go", "Python", "C++", "gRPC", "Kratos", "Gin", "Flask"],
        },
        {
          name: "Architecture",
          tags: [
            "Microservices",
            "DDD",
            "Event-Driven",
            "Edge Cloud",
            "GitOps",
          ],
        },
        {
          name: "Cloud Native",
          tags: [
            "Kubernetes",
            "Istio",
            "Helm",
            "APISIX",
            "Docker",
            "Dragonfly2",
          ],
        },
        {
          name: "AI Engineering",
          tags: [
            "LangGraph",
            "RAG",
            "LLM Orchestration",
            "AI Agent",
            "Prompt Engineering",
          ],
        },
        {
          name: "Data & Storage",
          tags: ["MySQL", "Redis", "Elasticsearch", "MongoDB", "Kafka", "Ceph"],
        },
        {
          name: "Observability",
          tags: [
            "Prometheus",
            "Jaeger",
            "OpenTelemetry",
            "ELK",
            "Nightingale",
          ],
        },
      ],
    },
    projects: {
      title: "Open Source",
      items: [
        {
          name: "GoAnalysis",
          description:
            "Go function tracing & visualization tool. Real-time goroutine capture, interactive Mermaid flowcharts, performance bottleneck identification and GitLab MR change analysis.",
          techStack: [
            "Kratos",
            "gRPC",
            "SQLite",
            "Vue3",
            "Mermaid.js",
            "D3.js",
          ],
          repo: "toheart/goanalysis",
          url: "https://github.com/toheart/goanalysis",
        },
        {
          name: "CoCursor",
          description:
            "Team AI collaboration tool for Cursor IDE. Integrates work analytics, semantic search of AI conversations (RAG), skill marketplace and P2P LAN collaboration. Fully local execution for data privacy.",
          techStack: [
            "Go",
            "Gin",
            "DDD",
            "React",
            "TypeScript",
            "Qdrant",
            "P2P/mDNS",
          ],
          repo: "toheart/cocursor",
          url: "https://github.com/toheart/cocursor",
        },
      ],
    },
    posts: {
      title: "Selected Posts",
      subtitle:
        "From source code deep reads to engineering practice, documenting every exploration",
      categories: [
        {
          name: "AI Engineering",
          items: [
            {
              title: "AI Coding Philosophy: Architecture Is What Matters",
              url: "https://zhuanlan.zhihu.com/p/1994358048869851415",
            },
            {
              title:
                "AI Engineering Methodology: Spec-Driven Development in Teams",
              url: "https://zhuanlan.zhihu.com/p/1969831404754965340",
            },
            {
              title: "Getting Started with LangGraph: From State to Graph",
              url: "https://zhuanlan.zhihu.com/p/1951066713627027407",
            },
          ],
        },
        {
          name: "Kubernetes Deep Dive",
          items: [
            {
              title:
                "Visual Reading of Kubelet: From Architecture to Boot Process",
              url: "https://zhuanlan.zhihu.com/p/1938363114698544823",
            },
            {
              title:
                "K8s Access Flow Deep Dive: From Config to Client Creation",
              url: "https://zhuanlan.zhihu.com/p/32071228517",
            },
            {
              title: "Learning Design from K8s: Full Informer Analysis",
              url: "https://zhuanlan.zhihu.com/p/1894148676840060283",
            },
          ],
        },
        {
          name: "Go Language",
          items: [
            {
              title: "Deep Into Go: Unlocking Channel Internal Mechanisms",
              url: "https://zhuanlan.zhihu.com/p/2996272789",
            },
            {
              title:
                "Fighting Myself: Instrumentation Service Performance Optimization",
              url: "https://zhuanlan.zhihu.com/p/1941642695794759168",
            },
            {
              title: "From 1.6GB to 11MB: GoAnalysis Storage Optimization",
              url: "https://zhuanlan.zhihu.com/p/1891964432705356784",
            },
          ],
        },
      ],
      viewAll: "View all posts →",
      viewAllUrl: "https://www.zhihu.com/people/tang-luo-yan/posts",
    },
    influence: {
      title: "Influence",
      wechat: {
        name: "Tech Blog (WeChat)",
        description:
          "85+ original articles on Cloud Native, Go and AI engineering",
        followers: "889",
        followersLabel: "Followers",
        scanTip: "Scan to follow",
      },
      zhihu: {
        name: "Zhihu",
        description: "85 articles · 2,166 upvotes · 3,883 bookmarks",
        url: "https://www.zhihu.com/people/tang-luo-yan",
      },
      github: {
        name: "GitHub",
        description: "Open source projects with 250+ Stars",
        url: "https://github.com/toheart",
      },
    },
    footer: {
      connect: "Feel free to connect",
      connectSub:
        "If you're also exploring Cloud Native, AI engineering, or interested in open source — let's connect.",
      copyright: "© 2026 Levi.Tang. All rights reserved.",
    },
  },
} as const;
