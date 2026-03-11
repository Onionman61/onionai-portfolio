import { getStylePipelines } from "@/lib/api";

export async function StyleMatrixSection() {
  const pipelines = await getStylePipelines();

  return (
    <section
      id="matrix"
      className="relative mx-auto mt-20 max-w-5xl px-6 md:px-10 lg:px-0"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-grid/60 to-transparent" />
        <div className="absolute left-6 top-10 h-40 w-px bg-grid/40 md:left-10" />
      </div>

      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            智能图像处理矩阵
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Style Transfer Matrix
          </h2>
          <p className="max-w-xl text-sm text-muted">
            三条代表性工作流，用来在概念发散、结构控制与局部修复之间快速切换生产模式。
          </p>
        </div>
      </header>

      <div className="mt-10 space-y-6 rounded-2xl border border-grid/80 bg-black/70 p-5">
        <div className="grid gap-4 md:grid-cols-3">
          {pipelines.map((flow, index) => (
            <div
              key={flow.id}
              className="relative flex flex-col gap-3 rounded-xl border border-grid/80 bg-black/70 p-4"
            >
              <div className="absolute -left-6 top-6 hidden h-px w-6 bg-grid/70 md:block" />
              {index > 0 && (
                <div className="pointer-events-none absolute -top-5 left-1/2 hidden h-4 w-px -translate-x-1/2 bg-grid/60 md:block" />
              )}
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  {flow.code}
                </span>
                <span className="rounded-full border border-grid/70 px-2 py-0.5 text-[10px] font-mono text-accent">
                  {flow.name}
                </span>
              </div>
              <p className="text-xs leading-relaxed text-foreground">
                {flow.description}
              </p>
              <div className="space-y-1.5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  use cases
                </p>
                <ul className="space-y-1 text-[11px] text-foreground/90">
                  {flow.useCases.map((item) => (
                    <li key={item} className="flex items-start gap-1.5">
                      <span className="mt-1 h-1.5 w-1.5 rounded-sm bg-accent-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-2 border-t border-grid/60 pt-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                  model stack
                </p>
                <p className="mt-1 text-[11px] text-accent">
                  {flow.modelStack}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 space-y-4 rounded-2xl border border-dashed border-grid/70 bg-black/60 p-4">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              Case Study · 建筑风格迁移
            </p>
            <p className="max-w-md text-[11px] font-mono leading-relaxed text-muted">
              在现公司中，将“风格迁移”这一抽象需求拆解为可落地的工程路径：结合
              模型选型、提示词工程与节点图，将复杂路由具象为团队可复用的配置模板。
            </p>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              {
                label: "建筑底图",
                desc: "原始立面 / 空间草图，作为结构与光影基底。",
                alt: "建筑底图示意图",
              },
              {
                label: "风格参考",
                desc: "目标画风参考，如插画、水彩或品牌视觉语言。",
                alt: "风格参考示意图",
              },
              {
                label: "生成效果图",
                desc: "在约束结构的前提下，将参考风格映射到底图之上。",
                alt: "风格迁移后的效果示意图",
              },
            ].map((item) => (
              <figure
                key={item.label}
                className="group flex flex-col gap-2 rounded-xl border border-grid/80 bg-black/70 p-3"
              >
                <div className="relative overflow-hidden rounded-lg border border-grid/70">
                  <div
                    className="aspect-[4/3] w-full bg-[url('https://placehold.co/600x400/0a0a0a/ededed?text=Style+Transfer+Demo')] bg-cover bg-center bg-no-repeat transition duration-500 group-hover:brightness-110 group-hover:saturate-150 group-hover:grayscale-0 grayscale"
                    aria-label={item.alt}
                  />
                </div>
                <figcaption className="space-y-1 text-xs">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {item.label}
                  </p>
                  <p className="text-foreground">{item.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

