import { getProductShowcase } from "@/lib/api";

export async function ProductShowcaseSection() {
  const products = await getProductShowcase();

  return (
    <section
      id="products"
      className="relative mx-auto mt-20 max-w-5xl px-6 md:px-10 lg:px-0"
    >
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            明星产品实战
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Product Showcase
          </h2>
          <p className="max-w-xl text-sm text-muted">
            三个落地到真实用户与团队里的“小产品”，分别对应插件、小程序与企业内部工具。
          </p>
        </div>
      </header>

      <div className="mt-10 space-y-10">
        {products.map((item, index) => {
          const isReversed = index % 2 === 1;
          return (
            <article
              key={item.id}
              className={`grid gap-6 md:grid-cols-2 md:items-stretch ${
                isReversed ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl border border-grid/80 bg-black/70">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(139,92,246,0.32),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(204,255,0,0.2),transparent_55%)] opacity-70 mix-blend-screen" />
                <div className="relative flex h-full flex-col justify-between p-5">
                  <div className="space-y-2">
                    <span className="inline-flex rounded-full border border-grid/80 bg-black/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                      {item.label}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="font-mono text-[11px] text-muted">
                      {item.role}
                    </p>
                  </div>
                  <div className="mt-4 h-[180px] rounded-xl border border-dashed border-grid/70 bg-[url('https://placehold.co/600x400/0a0a0a/ededed?text=Project+Preview')] bg-cover bg-center bg-no-repeat transition duration-500 hover:saturate-150 hover:brightness-110" />
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-grid/80 bg-black/70 p-5">
                <p className="text-sm leading-relaxed text-foreground">
                  {item.description}
                </p>
                <div className="mt-4 space-y-3 text-xs font-mono text-muted">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em]">
                      Tech Stack
                    </p>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-grid/70 bg-black/70 px-2 py-0.5 text-[10px] text-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em]">
                      Impact
                    </p>
                    <p className="mt-1 text-[11px] text-foreground">
                      {item.impact}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

