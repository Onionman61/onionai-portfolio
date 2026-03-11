import { getDevTools } from "@/lib/api";

export async function DevToolsSection() {
  const tools = await getDevTools();

  return (
    <section
      id="tools"
      className="relative mx-auto mt-20 max-w-5xl px-6 md:px-10 lg:px-0"
    >
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            开源与底层工具
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Workflow &amp; Hybrid Cloud
          </h2>
          <p className="max-w-xl text-sm text-muted">
            这些仓库更像是“个人工作台”的延伸：把在项目里验证过的做法，沉淀成节点、脚本与桥接层。
          </p>
        </div>
        <p className="mt-2 max-w-xs font-mono text-[11px] leading-relaxed text-muted">
          不追求大而全，只记录真正改变自己工作方式的那一小部分工具。
        </p>
      </header>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {tools.map((tool) => (
          <article
            key={tool.id}
            className="flex flex-col justify-between rounded-2xl border border-grid/80 bg-black/70 p-5"
          >
            <div className="space-y-2">
              <p className="inline-flex rounded-full border border-grid/80 bg-black/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                {tool.label}
              </p>
              <h3 className="text-lg font-semibold text-foreground">
                {tool.title}
              </h3>
              <p className="mt-1 text-sm text-foreground">{tool.description}</p>
            </div>
            <div className="mt-4 space-y-2 text-xs font-mono text-muted">
              <p className="text-[10px] uppercase tracking-[0.22em]">Impact</p>
              <p className="text-foreground">{tool.impact}</p>
              {tool.link && (
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-accent hover:text-accent-2"
                >
                  <span>View on GitHub</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

