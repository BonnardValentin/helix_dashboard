import { c as createComponent, a as createAstro, b as addAttribute, r as renderHead, e as renderSlot, f as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Dxnbu5EQ.mjs';
import 'clsx';
/* empty css                                 */
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title,
    description = "Next-generation AI Agents platform for enterprise businesses",
    ogImage = "/og-image.jpg"
  } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site || "https://shinai.vercel.app");
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Primary Meta Tags --><title>${title} | ShinAI</title><meta name="title"${addAttribute(`${title} | ShinAI`, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(`${title} | ShinAI`, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(`${title} | ShinAI`, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(ogImage, "content")}><!-- Font preloads --><link rel="preload" href="https://rsms.me/inter/font-files/Inter-roman.var.woff2?v=3.19" as="font" type="font/woff2" crossorigin><!-- Preload critical assets --><link rel="preload" href="/images/grid-pattern.svg" as="image">${renderHead()}</head> <body class="antialiased min-h-screen"> <!-- Background elements --> <div class="fixed inset-0 bg-grid pointer-events-none"></div> <div class="fixed inset-0 bg-gradient-radial from-transparent to-background/80 pointer-events-none"></div> <div class="bg-glow pointer-events-none"></div> <main class="relative z-10"> ${renderSlot($$result, $$slots["default"])} </main> <!-- Glow effect at the bottom --> <div class="fixed bottom-0 left-0 w-full h-1/4 pointer-events-none"> <div class="absolute bottom-0 left-1/4 w-1/2 h-full bg-gradient-radial from-primary/20 to-transparent opacity-50 blur-3xl"></div> </div> <!-- Shader backdrop effect for modern browsers --> <div id="shader-backdrop" class="fixed inset-0 pointer-events-none opacity-20 mix-blend-overlay"></div>  </body> </html> `;
}, "/Users/valentin/Development/ipome/helix_dashboard/src/layouts/MainLayout.astro", void 0);

function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: heroRef,
      className: "relative min-h-[90vh] flex items-center justify-center overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 bg-grid",
              style: {
                transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 20}px)`
              }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-blue/20 filter blur-3xl",
              animate: {
                x: [0, 50, 0],
                y: [0, 30, 0]
              },
              transition: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-purple/20 filter blur-3xl",
              animate: {
                x: [0, -40, 0],
                y: [0, -20, 0]
              },
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "container relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, ease: "easeOut" },
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-md border border-white/5 mb-6", children: [
                    /* @__PURE__ */ jsx("span", { className: "animate-pulse w-2 h-2 rounded-full bg-neon-green" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-neon-green", children: "Revolutionary DNA-Powered AI" })
                  ] }),
                  /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight", children: [
                    /* @__PURE__ */ jsx("span", { className: "block text-white", children: "Evolve Your" }),
                    /* @__PURE__ */ jsx("span", { className: "block text-gradient", children: "Business Intelligence" }),
                    /* @__PURE__ */ jsx("span", { className: "block text-white mt-2", children: "Automatically" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-6 text-xl text-foreground/80 max-w-xl", children: "ShinAI's intelligent agents streamline workflows and boost efficiency. Transform business operations with our revolutionary Digital DNA technology that adapts and evolves to meet your unique needs." })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "flex flex-wrap gap-4",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
                children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "#demo",
                      className: "btn-neon px-8 py-4 rounded-md text-white font-medium inline-flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "btn-neon-text", children: "Start Free Trial" }),
                        /* @__PURE__ */ jsxs(
                          "svg",
                          {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            className: "relative z-10",
                            children: [
                              /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
                              /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: "#features",
                      className: "inline-flex items-center gap-2 px-8 py-4 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all",
                      children: /* @__PURE__ */ jsx("span", { children: "See 300% ROI Case Study" })
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "flex items-center gap-x-8 pt-6",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 1, delay: 0.6 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "flex -space-x-2", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "w-10 h-10 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 border-2 border-background flex items-center justify-center text-xs font-medium text-white",
                      children: String.fromCharCode(64 + i)
                    },
                    i
                  )) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: "Trusted by Fortune 500 companies" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center mt-1", children: [
                      [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "#3B82F6",
                          className: "w-4 h-4",
                          children: /* @__PURE__ */ jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
                        },
                        i
                      )),
                      /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-muted-foreground", children: "4.9/5" })
                    ] })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "relative h-[500px]",
              initial: { opacity: 0, scale: 0.9 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 1, ease: "easeOut" },
              children: /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative w-80 h-80", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-radial from-neon-blue/30 to-transparent animate-pulse-glow" }),
                  [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "absolute inset-0",
                      style: {
                        animation: `orbit ${5 + i * 2}s linear infinite`,
                        transform: `rotate(${i * 60}deg)`
                      },
                      children: /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "absolute w-4 h-4 rounded-full bg-neon-blue",
                          style: {
                            top: "0%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            boxShadow: "0 0 15px rgba(59, 130, 246, 0.8)"
                          }
                        }
                      )
                    },
                    i
                  )),
                  /* @__PURE__ */ jsxs("svg", { className: "absolute inset-0 w-full h-full animate-pulse-slow", viewBox: "0 0 200 200", children: [
                    /* @__PURE__ */ jsx("circle", { cx: "100", cy: "100", r: "80", fill: "none", stroke: "rgba(59, 130, 246, 0.2)", strokeWidth: "0.5" }),
                    /* @__PURE__ */ jsx("circle", { cx: "100", cy: "100", r: "60", fill: "none", stroke: "rgba(59, 130, 246, 0.3)", strokeWidth: "0.5" }),
                    /* @__PURE__ */ jsx("circle", { cx: "100", cy: "100", r: "40", fill: "none", stroke: "rgba(59, 130, 246, 0.4)", strokeWidth: "0.5" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 backdrop-blur-xl border border-white/10 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-white", children: "AI" }) })
                ] }) }),
                [
                  { top: "10%", left: "0%", delay: "0s" },
                  { top: "20%", right: "10%", delay: "0.5s" },
                  { bottom: "15%", left: "5%", delay: "1s" },
                  { bottom: "25%", right: "5%", delay: "1.5s" }
                ].map((pos, i) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "absolute glass px-4 py-2 rounded-lg text-sm",
                    style: {
                      ...pos,
                      opacity: 0.9
                    },
                    animate: {
                      y: [0, -10, 0],
                      opacity: [0.7, 1, 0.7]
                    },
                    transition: {
                      duration: 3,
                      delay: parseFloat(pos.delay),
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-neon-blue" }),
                        /* @__PURE__ */ jsxs("div", { className: "font-mono text-xs", children: [
                          "agent_",
                          i + 1,
                          ".processing"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "text-gradient font-mono mt-1", children: [
                        Math.floor(Math.random() * 100),
                        "% complete"
                      ] })
                    ]
                  },
                  i
                ))
              ] })
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center",
            animate: { y: [0, 8, 0] },
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm text-foreground/60 mb-2", children: "Scroll to explore" }),
              /* @__PURE__ */ jsxs(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "text-foreground/60",
                  children: [
                    /* @__PURE__ */ jsx("path", { d: "M12 5v14" }),
                    /* @__PURE__ */ jsx("path", { d: "m19 12-7 7-7-7" })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("style", { children: `
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse 3s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
      ` })
      ]
    }
  );
}

const features = [
  {
    icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M12 2L2 7l10 5 10-5-10-5z" }),
      /* @__PURE__ */ jsx("path", { d: "M2 17l10 5 10-5" }),
      /* @__PURE__ */ jsx("path", { d: "M2 12l10 5 10-5" })
    ] }),
    title: "Digital DNA Evolution",
    description: "Cut AI management costs by 70% with self-evolving agents. Our proprietary technology mimics natural selection to create increasingly powerful AI without manual intervention.",
    gradient: "from-neon-blue to-neon-purple"
  },
  {
    icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "6" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "2" })
    ] }),
    title: "Optimized LLM Selection",
    description: "Reduce AI costs significantly with our smart model selection system. We match the right model to each task, ensuring optimal performance while minimizing operational expenses.",
    gradient: "from-neon-purple to-neon-pink"
  },
  {
    icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("rect", { x: "2", y: "2", width: "20", height: "8", rx: "2", ry: "2" }),
      /* @__PURE__ */ jsx("rect", { x: "2", y: "14", width: "20", height: "8", rx: "2", ry: "2" }),
      /* @__PURE__ */ jsx("line", { x1: "6", y1: "6", x2: "6.01", y2: "6" }),
      /* @__PURE__ */ jsx("line", { x1: "6", y1: "18", x2: "6.01", y2: "18" })
    ] }),
    title: "Enterprise-Ready Architecture",
    description: "Built on solid architectural principles that ensure reliability, maintainability, and scalability for enterprise deployments, with easy integration into existing systems.",
    gradient: "from-neon-green to-neon-blue"
  },
  {
    icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("path", { d: "M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25" }),
      /* @__PURE__ */ jsx("line", { x1: "8", y1: "16", x2: "8.01", y2: "16" }),
      /* @__PURE__ */ jsx("line", { x1: "8", y1: "20", x2: "8.01", y2: "20" }),
      /* @__PURE__ */ jsx("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" }),
      /* @__PURE__ */ jsx("line", { x1: "12", y1: "22", x2: "12.01", y2: "22" }),
      /* @__PURE__ */ jsx("line", { x1: "16", y1: "16", x2: "16.01", y2: "16" }),
      /* @__PURE__ */ jsx("line", { x1: "16", y1: "20", x2: "16.01", y2: "20" })
    ] }),
    title: "Epigenetic Adaptation",
    description: "Agents adapt to feedback through epigenetic markers that influence DNA expression, enabling context-specific optimization without modifying core genetic traits.",
    gradient: "from-neon-pink to-neon-purple"
  },
  {
    icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
      /* @__PURE__ */ jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" }),
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "16", r: "1" })
    ] }),
    title: "Secure API Integration",
    description: "Comprehensive API key management system with secured endpoints and permissions, making it enterprise-ready with robust authentication and authorization.",
    gradient: "from-neon-blue to-neon-cyan"
  },
  {
    icon: /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsx("path", { d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" }) }),
    title: "Fitness Evaluation",
    description: "Intelligent fitness scoring system that evaluates agent performance across multiple dimensions, enabling targeted evolution and continuous improvement.",
    gradient: "from-neon-cyan to-neon-green"
  }
];
const FeaturesSection = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center max-w-3xl mx-auto mb-16",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-sm font-medium text-neon-blue uppercase tracking-widest mb-3", children: "Breakthrough Technology" }),
          /* @__PURE__ */ jsx("h3", { className: "text-4xl sm:text-5xl font-display font-bold mb-6", children: "Enhance Your AI Capabilities" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-foreground/80", children: "Our innovative Digital DNA technology creates AI agents that adapt to your business needs, improving efficiency while reducing the complexity of AI implementation." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-3", children: features.map((feature, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "card-glass group hover:shadow-lg transition-all duration-500",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: index * 0.1 },
        children: [
          /* @__PURE__ */ jsx("div", { className: `mb-5 w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${feature.gradient} text-white`, children: feature.icon }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3 group-hover:text-gradient transition-colors duration-300", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300", children: feature.description }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center text-sm font-medium", children: [
            /* @__PURE__ */ jsx("span", { className: `text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient}`, children: "Learn more" }),
            /* @__PURE__ */ jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: `ml-1 w-4 h-4 text-transparent bg-clip-text bg-gradient-to-r ${feature.gradient} transition-transform duration-300 group-hover:translate-x-1`,
                children: [
                  /* @__PURE__ */ jsx("path", { d: "M5 12h14" }),
                  /* @__PURE__ */ jsx("path", { d: "m12 5 7 7-7 7" })
                ]
              }
            )
          ] })
        ]
      },
      index
    )) }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "mt-24 glass p-8 sm:p-12 rounded-2xl border border-white/10",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.3 },
        children: /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-4", children: [
          { value: "95%", label: "Task Completion Rate", gradient: "from-neon-blue to-neon-purple" },
          { value: "20+", label: "Active Clients", gradient: "from-neon-purple to-neon-pink" },
          { value: "2x", label: "Productivity Increase", gradient: "from-neon-pink to-neon-blue" },
          { value: "30%", label: "Average Time Saved", gradient: "from-neon-blue to-neon-green" }
        ].map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h4", { className: `text-4xl sm:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-2`, children: stat.value }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/70", children: stat.label })
        ] }, index)) })
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "mt-24 relative overflow-hidden rounded-2xl border-glow",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.4 },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary-900/80 to-secondary/50 backdrop-blur-sm -z-10" }),
          /* @__PURE__ */ jsx("div", { className: "relative p-8 sm:p-12 z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl sm:text-3xl font-display font-bold mb-4", children: "Transform Your Business with ShinAI" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-foreground/80 mb-6", children: "Join forward-thinking businesses that are streamlining operations and enhancing productivity with our intelligent AI platform." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#demo",
                    className: "btn-neon px-8 py-3 rounded-md text-white font-medium inline-flex items-center gap-2",
                    children: /* @__PURE__ */ jsx("span", { className: "btn-neon-text", children: "Get Started" })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: "#contact",
                    className: "inline-flex items-center gap-2 px-8 py-3 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-all",
                    children: /* @__PURE__ */ jsx("span", { children: "Contact Sales" })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex justify-center md:justify-end", children: /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-gradient-radial from-neon-blue/30 to-transparent relative",
                animate: {
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                },
                transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white", children: "AI" }) }),
                  [1, 2, 3].map((i) => /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "absolute inset-0",
                      style: {
                        animation: `orbit ${8 + i * 3}s linear infinite ${i * 2}s`,
                        transform: `rotate(${i * 120}deg)`
                      },
                      children: /* @__PURE__ */ jsx(
                        "div",
                        {
                          className: "absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-neon-blue",
                          style: {
                            top: "5%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            boxShadow: "0 0 15px rgba(59, 130, 246, 0.8)"
                          }
                        }
                      )
                    },
                    i
                  ))
                ]
              }
            ) })
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      ` })
  ] });
};

function AgentsShowcase() {
  const agents = [
    {
      name: "Evolution Agent",
      description: "Manages the genetic evolution process for agent DNA, handling mutation, crossover, and selection to create improved agent generations.",
      icon: "🧬",
      color: "from-neon-blue to-neon-cyan"
    },
    {
      name: "Inference Agent",
      description: "Connects to LLM providers like Together.ai to perform specialized inference with optimized prompting and context management.",
      icon: "🧠",
      color: "from-neon-purple to-neon-pink"
    },
    {
      name: "Fitness Evaluator",
      description: "Analyzes agent performance across multiple dimensions, calculating fitness scores to guide the evolutionary process.",
      icon: "📊",
      color: "from-neon-green to-neon-blue"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "py-16", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center max-w-3xl mx-auto mb-16",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-sm font-medium text-neon-purple uppercase tracking-widest mb-3", children: "Digital DNA Agents" }),
          /* @__PURE__ */ jsx("h3", { className: "text-4xl sm:text-5xl font-display font-bold mb-6", children: "Continuously Evolving Intelligence" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-foreground/80", children: "Our specialized agents leverage digital DNA technology to evolve and improve with each generation, creating a self-optimizing ecosystem." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-3", children: agents.map((agent, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "card-glass overflow-hidden relative group",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: index * 0.1 },
        children: [
          /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${agent.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500` }),
          /* @__PURE__ */ jsxs("div", { className: "p-8 relative z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: agent.icon }),
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-3", children: agent.name }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground/70 mb-4", children: agent.description }),
            /* @__PURE__ */ jsxs("button", { className: "text-gradient font-medium inline-flex items-center", children: [
              "Learn more",
              /* @__PURE__ */ jsx("svg", { className: "ml-2 w-4 h-4", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M5 12H19M19 12L12 5M19 12L12 19", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) })
            ] })
          ] })
        ]
      },
      index
    )) })
  ] });
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "ShinAI's digital DNA evolution system has transformed our agent development approach. After just five generations, our agents are 42% more efficient at complex tasks.",
      author: "Sarah Johnson",
      position: "CTO, TechVision Inc.",
      avatar: "🧑‍💼"
    },
    {
      quote: "The Together.ai integration in ShinAI provides reliable and cost-effective inference while the DNA evolution ensures our agents continually improve without manual tuning.",
      author: "Michael Chen",
      position: "AI Director, GrowthSphere",
      avatar: "👨‍💼"
    },
    {
      quote: "The hexagonal architecture of ShinAI made it remarkably simple to integrate with our existing systems. The clean API design saved us months of development time.",
      author: "Amara Patel",
      position: "Lead Engineer, SecureBank Financial",
      avatar: "👩‍💼"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center max-w-3xl mx-auto mb-16",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-sm font-medium text-neon-cyan uppercase tracking-widest mb-3", children: "Testimonials" }),
          /* @__PURE__ */ jsx("h3", { className: "text-4xl sm:text-5xl font-display font-bold mb-6", children: "What Our Partners Say" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-foreground/80", children: "See how our digital DNA technology is accelerating AI agent evolution across industries." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-3", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "glass p-8 rounded-xl relative",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: index * 0.1 },
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl mb-4", children: '"' }),
          /* @__PURE__ */ jsx("p", { className: "text-foreground/90 mb-6 italic", children: testimonial.quote }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 mr-4 text-2xl", children: testimonial.avatar }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: testimonial.author }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-foreground/70", children: testimonial.position })
            ] })
          ] })
        ]
      },
      index
    )) })
  ] });
}

function ContactSection() {
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center max-w-3xl mx-auto mb-16",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-sm font-medium text-neon-green uppercase tracking-widest mb-3", children: "Contact Us" }),
          /* @__PURE__ */ jsx("h3", { className: "text-4xl sm:text-5xl font-display font-bold mb-6", children: "Ready to Evolve Your AI?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-foreground/80", children: "Get in touch to learn how our digital DNA evolution platform can create self-improving AI agents for your specific needs." })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "glass p-8 md:p-12 rounded-xl max-w-4xl mx-auto",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay: 0.2 },
        children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-2xl font-semibold mb-4", children: "Get in Touch" }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground/70 mb-6", children: "Our team is ready to discuss how ShinAI's evolutionary agents can transform your AI capabilities with minimal oversight." }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }) }) }),
                /* @__PURE__ */ jsx("span", { children: "contact@shinai.com" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" }) }) }),
                /* @__PURE__ */ jsx("span", { children: "+1 (555) 123-4567" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("form", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium mb-1", children: "Name" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  id: "name",
                  className: "w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:border-primary focus:ring focus:ring-primary/20 outline-none transition",
                  placeholder: "Your Name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-1", children: "Email" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  id: "email",
                  className: "w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:border-primary focus:ring focus:ring-primary/20 outline-none transition",
                  placeholder: "your.email@company.com"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium mb-1", children: "Message" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  id: "message",
                  rows: 4,
                  className: "w-full px-4 py-2 rounded-md bg-white/5 border border-white/10 focus:border-primary focus:ring focus:ring-primary/20 outline-none transition",
                  placeholder: "How can we help you?"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "btn-neon w-full py-3 rounded-md text-white font-medium",
                children: /* @__PURE__ */ jsx("span", { className: "btn-neon-text", children: "Send Message" })
              }
            )
          ] }) })
        ] })
      }
    )
  ] });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "ShinAI - Orchestrating Intelligence" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-24 sm:space-y-32 md:space-y-40 lg:space-y-48 overflow-hidden"> <!-- Hero Section --> ${renderComponent($$result2, "HeroSection", HeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/valentin/Development/ipome/helix_dashboard/src/components/sections/HeroSection", "client:component-export": "HeroSection" })} <!-- Features Section --> <section id="features" class="container relative" data-animate="slide-up"> <div class="absolute -top-20 -right-20 w-1/3 h-1/2 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse-glow"></div> ${renderComponent($$result2, "FeaturesSection", FeaturesSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/valentin/Development/ipome/helix_dashboard/src/components/sections/FeaturesSection", "client:component-export": "default" })} </section> <!-- Agents Showcase Section --> <section id="agents" class="relative" data-animate="slide-up"> <div class="absolute -bottom-20 -left-20 w-1/4 h-1/2 bg-accent/10 rounded-full blur-3xl opacity-50 animate-pulse-glow"></div> <div class="container"> ${renderComponent($$result2, "AgentsShowcase", AgentsShowcase, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/valentin/Development/ipome/helix_dashboard/src/components/sections/AgentsShowcase", "client:component-export": "AgentsShowcase" })} </div> </section> <!-- Testimonials Section with Split Background --> <section id="testimonials" class="relative py-24 clip-slant-br" data-animate> <div class="absolute inset-0 bg-card/30 -z-10"></div> <div class="absolute inset-0 bg-grid opacity-10 -z-10"></div> <div class="container"> ${renderComponent($$result2, "TestimonialsSection", TestimonialsSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/valentin/Development/ipome/helix_dashboard/src/components/sections/TestimonialsSection", "client:component-export": "TestimonialsSection" })} </div> </section> <!-- Contact Section --> <section id="contact" class="container py-24" data-animate="slide-up"> ${renderComponent($$result2, "ContactSection", ContactSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/valentin/Development/ipome/helix_dashboard/src/components/sections/ContactSection", "client:component-export": "ContactSection" })} </section> </div> ` })} `;
}, "/Users/valentin/Development/ipome/helix_dashboard/src/pages/index.astro", void 0);

const $$file = "/Users/valentin/Development/ipome/helix_dashboard/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
