import { StyleMatrixSection } from "./sections/style-matrix";
import { ProductShowcaseSection } from "./sections/product-showcase";
import { DevToolsSection } from "./sections/dev-tools";
import { ModelLabSection } from "./sections/model-lab";
import { AboutTimelineSection } from "./sections/about-timeline";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl flex-col gap-10 px-6 md:px-10 lg:px-0"
      >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
        <div className="absolute inset-x-0 top-10 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-grid/70 to-transparent" />
        <div className="absolute left-10 top-0 h-full w-px bg-grid/60" />
        <div className="absolute right-14 top-0 h-full w-px bg-grid/40" />
      </div>

      <header className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="space-y-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-muted">
            personal blueprint
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            <span className="block text-[0.85em] leading-tight text-muted">
              onionman /
            </span>
            <span className="block leading-none">
              AI<span className="mx-2 text-accent">·</span>ARCH
              <span className="mx-2 text-accent">·</span>CODE
            </span>
          </h1>
          <p className="max-w-xl font-mono text-[12px] leading-relaxed text-muted">
            作品集，不是公司站点。这里收纳的是从建筑、游戏概念，到 AIGC
            工程化工作流的所有侧写——一张在不断被改写的数字图纸。
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 text-[11px] font-mono text-muted md:items-end">
          <span className="inline-flex items-center gap-2 rounded-full border border-grid/80 bg-black/70 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(139,92,246,0.9)]" />
            <span>Onionman · AIGC / Visual Systems</span>
          </span>
          <span className="max-w-xs text-right text-[10px] leading-relaxed">
            从建筑学剖面图，到 LoRA 风格资产与 ComfyUI 节点——
            每一条线都是一次关于“生成”与“控制”的实验。
          </span>
        </div>
      </header>

      <div className="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] md:items-start">
        <div className="space-y-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            Artist Statement
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-foreground">
            我把大模型当作一种“可编程的材质”，在建筑、游戏与品牌项目之间切换，同一套
            工具链服务不同场景。
          </p>
        </div>

        <aside className="space-y-4 rounded-xl border border-grid/80 bg-black/70 p-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            Mediums &amp; Motifs
          </p>
            <div className="space-y-2 text-xs font-mono text-muted">
              <p className="leading-relaxed text-foreground">
                建筑剖面、结构线稿与空间光感，迁移为 LoRA 风格与场景模板。
              </p>
              <p className="leading-relaxed text-foreground">
                游戏化角色、占卜小程序与浏览器插件，是我实验交互与工作流的三个载体。
              </p>
            </div>
        </aside>
      </div>
    </section>
      <StyleMatrixSection />
      <ProductShowcaseSection />
      <DevToolsSection />
      <ModelLabSection />
      <AboutTimelineSection />
    </>
  );
}
