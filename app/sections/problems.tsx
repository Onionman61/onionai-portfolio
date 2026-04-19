export function ProblemsSection() {
  return (
    <section
      id="problems"
      className="relative mx-auto max-w-7xl scroll-mt-32 px-6 md:px-10 lg:px-0"
    >
      <div className="grid min-h-[calc(100vh-8rem)] items-center gap-10 py-10">
        <header className="space-y-4">
          <p className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.26em] text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
            企业面临的痛点
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            工具壁垒高 · 信息结构化难 · 垂直场景精度受限
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted">
            很多团队不是缺模型，而是缺“把模型变成可用能力”的产品化路径：用户意图无法转成可执行指令，工作流在多个平台间来回跳转，产出不可控，试错成本高。
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "痛点 01：指令非标准化与流程割裂",
              bullets: [
                "1. 专业工具参数冗杂，新手上手成本极高；",
                "2. 灵感采集与生图调试分散多端，业务流割裂；",
                "3. 自然语言缺乏结构，跨模型生成结果不可控。",
              ],
            },
            {
              title: "痛点 02：管理视野盲区与信息过载",
              bullets: [
                "1. 非结构化业务数据堆积，人工聚合成本极高；",
                "2. 关键业务风险与商业机会点难以被迅速提取；",
                "3. 管理层缺乏全局视野，项目阻塞点（Block）无法量化追踪。",
              ],
            },
            {
              title: "痛点 03：架构选型复杂与精度妥协",
              bullets: [
                "1. 既要求空间结构的严谨一致，又要求商业视觉的美感；",
                "2. B 端输入质量极不稳定（草图/手拍/毛坯）；",
                "3. 单一底层控制网（ControlNet）链路难以固化为高成功率的 SOP。",
              ],
            },
          ].map((p, idx) => (
            <article
              key={p.title}
              className="group relative min-w-0 overflow-hidden rounded-2xl border border-grid/80 bg-black/70 p-6 md:p-7 transition hover:border-foreground/20"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-accent/10 blur-2xl" />
                <div className="absolute -right-24 -bottom-24 h-56 w-56 rounded-full bg-accent-2/8 blur-2xl" />
              </div>

              <div className="relative">
                <div className="flex justify-end">
                  <span className="rounded-full border border-grid/70 bg-black/60 px-2 py-0.5 font-mono text-[10px] text-foreground/80">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-3 text-pretty text-lg font-semibold leading-snug text-foreground break-keep">
                  {p.title}
                </h3>

                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-foreground/90">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2 min-w-0">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-grid/80" />
                      <span className="min-w-0 break-keep text-pretty">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

