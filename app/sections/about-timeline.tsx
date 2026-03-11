import { getTimeline } from "@/lib/api";

export async function AboutTimelineSection() {
  const items = await getTimeline();

  return (
    <section
      id="about"
      className="relative mx-auto mt-20 max-w-5xl px-6 md:px-10 lg:px-0 pb-20"
    >
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            关于 &amp; 履历
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            About &amp; Timeline
          </h2>
          <p className="max-w-xl text-sm text-muted">
            路线看起来有些曲折：建筑、游戏、再到 AIGC。但对我来说，它们只是同一张图纸的不同图层。
          </p>
        </div>
        <p className="mt-2 max-w-xs font-mono text-[11px] leading-relaxed text-muted">
          如果你希望聊项目或合作，可以直接发邮件给我。
        </p>
      </header>

      <div className="mt-10 space-y-6 border-l border-grid/70 pl-6 md:pl-8">
        {items.map((item) => (
          <article key={item.id} className="relative space-y-2">
            <span className="absolute -left-3 top-1 h-2.5 w-2.5 rounded-full border border-grid/80 bg-accent" />
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              {item.period}
            </p>
            <h3 className="text-sm font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="max-w-xl text-sm text-foreground">{item.description}</p>
          </article>
        ))}
      </div>

      <footer className="mt-10 flex flex-col gap-2 text-xs font-mono text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Onionman. All experiments continue.</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:your-email@example.com"
            className="hover:text-foreground"
          >
            Email
          </a>
          <a href="https://github.com/your-github" className="hover:text-foreground">
            GitHub
          </a>
        </div>
      </footer>
    </section>
  );
}

