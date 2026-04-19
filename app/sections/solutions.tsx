"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { OnionAssistantDemo } from "../demos/onion-assistant-demo";
import { EnterpriseBotAutoDemo } from "../demos/enterprise-bot-auto";
import { StyleTransferDemo } from "../demos/style-transfer-demo";

const STEPS = [
  {
    id: "step-onion",
    title: "01 智能指令转译：Agent 助手",
    desc: "无缝聚合 AIGC 服务入口，引入 LLM 作为中间层 Agent，将自然语言智能转译为底层结构化专业指令。",
  },
  {
    id: "step-enterprise",
    title: "02 数据自动化清洗：协同机器人",
    desc: "基于 N8N 搭建自动化工作流，自动拉取非结构化日报，经由 Agent 提炼为高管视角的结构化洞察摘要。",
  },
  {
    id: "step-style",
    title: "03 场景化多模态路由：建筑深化",
    desc: "针对 B 端场景设计动态模型路由策略，在“创意发散”与“结构绝对保真”业务意图间可控切换。",
  },
];

export function SolutionsSection() {
  const [activeStep, setActiveStep] = useState(STEPS[0].id);
  const sectionRef = useRef<HTMLElement | null>(null);

  const scrollToStep = (stepId: string) => {
    const el = document.getElementById(stepId);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-step-anchor='true']"),
    );
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.25, rootMargin: "0px 0px -32% 0px" },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  const ActiveDemo = useMemo(() => {
    if (activeStep === "step-enterprise") return EnterpriseBotAutoDemo;
    if (activeStep === "step-style") return StyleTransferDemo;
    return OnionAssistantDemo;
  }, [activeStep]);

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="relative mx-auto max-w-7xl scroll-mt-32 px-6 md:px-10 lg:px-0"
    >
      <div className="py-10">
        <header className="space-y-4">
          <p className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.26em] text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
            我的解决方案与 Demo 体验
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            用交互证明产品化能力，而不是堆算力
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted">
            向下滚动时，右侧舞台会按步骤切换 3 个体验：提示词翻译官、企业自动化洞察、建筑风格迁移。
          </p>
        </header>
      </div>

      <div className="hidden lg:grid lg:grid-cols-[0.75fr_1.25fr] lg:gap-8">
        <aside className="sticky top-32 h-[calc(100vh-10rem)]">
          <div className="space-y-4 rounded-2xl border border-grid/80 bg-black/70 p-5">
            {STEPS.map((step) => {
              const active = step.id === activeStep;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => {
                    setActiveStep(step.id);
                    scrollToStep(step.id);
                  }}
                  className={`rounded-xl border p-4 transition ${
                    active
                      ? "border-foreground/30 bg-foreground/10"
                      : "border-grid/70 bg-black/60 hover:border-foreground/20 hover:bg-foreground/[0.06]"
                  } cursor-pointer text-left`}
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </aside>

        <div className="space-y-[24vh]">
          {STEPS.map((step) => (
            <div
              key={step.id}
              id={step.id}
              data-step-anchor="true"
              className="h-[46vh] scroll-mt-32"
            />
          ))}
          <div className="h-[52vh]" />
        </div>

        <div className="pointer-events-none sticky top-32 col-start-2 row-start-1 h-[calc(100vh-10rem)]">
          <div className="pointer-events-auto h-full overflow-hidden rounded-2xl border border-grid/80 bg-black/60 p-1">
            <div className="h-full overflow-hidden rounded-2xl bg-black/40 p-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 12, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.99 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                  className="h-full"
                >
                  <ActiveDemo />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-10 lg:hidden">
        <div className="rounded-2xl border border-grid/80 bg-black/60 p-1">
          <div className="rounded-2xl bg-black/40 p-5">
            <OnionAssistantDemo />
          </div>
        </div>
        <EnterpriseBotAutoDemo />
        <StyleTransferDemo />
      </div>
    </section>
  );
}

