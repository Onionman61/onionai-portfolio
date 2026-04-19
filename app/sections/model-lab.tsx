import { GalleryImageFrame } from "@/components/gallery-image-frame";
import { getGalleryItems } from "@/lib/api";

export async function ModelLabSection() {
  const items = await getGalleryItems();

  const groups = {
    "游戏资产": items.filter((i) => i.category === "game-assets"),
    "艺术风格": items.filter((i) => i.category === "art-style"),
    "建筑与空间": items.filter((i) => i.category === "architecture"),
  };

  return (
    <section
      id="lab"
      className="relative mx-auto mt-20 max-w-5xl px-0"
    >
      <div className="px-6 md:px-10 lg:px-0">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
              模型实验室 &amp; LoRA 画廊
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Model Lab &amp; LoRA Gallery
            </h2>
            <p className="max-w-xl text-sm text-muted">
              这里的每一张图，背后都是一组 LoRA、工作流与参数的组合——是“可复现的风格”，而不只是一次性灵感。
            </p>
          </div>
          <p className="mt-2 max-w-xs font-mono text-[11px] leading-relaxed text-muted">
            悬停卡片可略缩回裁切，查看更完整的画面构图。
          </p>
        </header>
      </div>

      <div className="mt-8 space-y-10">
        {Object.entries(groups).map(([title, groupItems]) => (
          <div key={title} className="space-y-3">
            <div className="px-6 md:px-10 lg:px-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                {title}
              </p>
            </div>
            <div className="no-scrollbar flex gap-4 overflow-x-auto px-6 pb-2 md:px-10 lg:px-0">
              {groupItems.map((item) => (
                <figure
                  key={item.id}
                  className="relative w-48 shrink-0 overflow-hidden rounded-2xl border border-grid/80 bg-black/70"
                >
                  <GalleryImageFrame
                    imageUrl={item.imageUrl}
                    ariaLabel={item.title}
                    aspectClassName="aspect-[3/4]"
                    imagePosition={item.imagePosition}
                    nudgeYPercent={item.imageNudgeYPercent}
                    zoom={1.1}
                    underlayClassName="bg-black/40"
                  />
                  <figcaption className="space-y-1 p-3 text-xs">
                    <p className="font-mono text-[11px] text-muted">
                      {item.tag}
                    </p>
                    <p className="text-foreground">{item.title}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

