export function WhoSection() {
  const strengths = [
    "AIGC 产品架构",
    "工作流编排",
    "提示词工程",
    "多模型路由",
  ];

  const guide = [
    "核心定位：横跨建筑与互联网的全栈 AI 产品架构师",
    "商业价值：降低使用门槛，提升出图精度，打通全链路闭环",
    "交互验证：拒绝纯堆算力，用可交互 Demo 跑通产品逻辑",
    "底层沉淀：开源算子库、工业级 LoRA 资产与自动化 SOP",
  ];

  return (
    <section
      id="who"
      className="relative mx-auto max-w-7xl scroll-mt-32 px-6 md:px-10 lg:px-0"
    >
      <div className="relative grid min-h-[calc(100vh-8rem)] items-center gap-10 py-10 md:grid-cols-[1fr_1fr]">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 hidden h-72 w-72 rounded-full bg-accent-2/10 blur-3xl md:block"
        />

        <div className="relative space-y-7">
          <p className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.26em] text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
            onionman / 洋葱侠
          </p>

          <div className="space-y-4">
            <h1 className="max-w-full text-pretty text-[40px] font-semibold leading-[1.14] tracking-tight text-foreground break-keep sm:text-[52px] sm:leading-[1.12]">
              重塑 AIGC 生产力：
              <br />
              从底层工作流到商业化交付
            </h1>
            <div className="h-px w-28 bg-gradient-to-r from-accent/70 via-accent-2/60 to-transparent" />
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-muted">
            将 AIGC 视为可编排的生产线，把模糊的创意转化为可复用的工程路径：从
            Prompt 结构化、多模态动态路由，到应用层 Agent 插件与自动化协同机器人。
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {strengths.map((t) => (
              <span
                key={t}
                className="rounded-full border border-grid/70 bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground/90 transition hover:border-foreground/25 hover:bg-foreground/[0.06]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-[1px] rounded-[24px] bg-gradient-to-br from-accent/35 via-transparent to-accent-2/25"
          />
          <div className="relative space-y-4 rounded-[24px] border border-grid/80 bg-black/70 p-5 md:p-6">
            <p className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.26em] text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2/80" />
              能力导览
            </p>
            <ul className="space-y-2.5 text-[13px] text-foreground md:text-sm">
              {guide.map((line, idx) => (
                <li
                  key={line}
                  className="flex gap-3 rounded-lg border border-grid/60 bg-black/45 px-3 py-2 transition hover:border-foreground/20 hover:bg-foreground/[0.05]"
                >
                  <span className="mt-0.5 shrink-0 font-mono text-[11px] text-muted">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-pretty leading-[1.6] text-foreground/95">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

