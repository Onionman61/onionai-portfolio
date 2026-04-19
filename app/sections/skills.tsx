import { GalleryImageFrame } from "@/components/gallery-image-frame";
import { getDevTools, getGalleryItems } from "@/lib/api";

export async function SkillsSection() {
  const [tools, gallery] = await Promise.all([getDevTools(), getGalleryItems()]);

  const stacks = [
    "建筑空间逻辑转化",
    "游戏视觉资产管线",
    "垂直场景 AIGC 落地",
    "多模态动态路由",
    "Agent 工作流编排",
    "工业级 LoRA 训练 SOP",
    "ComfyUI 算子开发",
    "MVP 敏捷验证",
    "算力成本与体验均衡",
  ];

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl scroll-mt-32 px-6 md:px-10 lg:px-0"
    >
      <div className="grid min-h-[calc(100vh-8rem)] items-center gap-10 py-10">
        <header className="space-y-4">
          <p className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.26em] text-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
            技术沉淀
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            底层架构 · 模型资产 · 研发效能优化
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted">
            交互体验只是表层。真正的复用能力来自底层抽象：可插拔的多模型适配、可维护的 Prompt 结构、可复现的风格资产。
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {stacks.map((t) => (
              <span
                key={t}
                className="rounded-full border border-grid/70 bg-black/60 px-3 py-1 font-mono text-[11px] text-foreground/90"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {tools.map((t) => (
            <article
              key={t.id}
              className="rounded-2xl border border-grid/80 bg-black/70 p-5"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                {t.label}
              </p>
              {t.link ? (
                <a
                  href={t.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex text-lg font-semibold text-foreground underline decoration-grid/70 underline-offset-4 hover:text-foreground/90"
                >
                  {t.title}
                </a>
              ) : (
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {t.title}
                </h3>
              )}
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t.description}
              </p>
              {t.link && (
                <a
                  href={t.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex font-mono text-[11px] text-foreground/90 underline decoration-grid/70 underline-offset-4 hover:text-foreground"
                >
                  GitHub
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="rounded-2xl border border-grid/80 bg-black/70 p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            LoRA Gallery (Preview)
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.slice(0, 6).map((g) => (
              <div
                key={g.id}
                className="overflow-hidden rounded-xl border border-grid/70 bg-black/60"
              >
                <GalleryImageFrame
                  imageUrl={g.imageUrl}
                  ariaLabel={g.title}
                  aspectClassName="aspect-[4/3]"
                  imagePosition={g.imagePosition}
                  nudgeYPercent={g.imageNudgeYPercent}
                  zoom={1.12}
                />
                <div className="p-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    {g.tag}
                  </p>
                  <p className="mt-1 text-sm text-foreground">{g.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

