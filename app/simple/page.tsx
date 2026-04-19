import { GalleryImageFrame } from "@/components/gallery-image-frame";
import {
  getDevTools,
  getGalleryItems,
  getProductShowcase,
  getStylePipelines,
  getTimeline,
} from "@/lib/api";
import {
  Mail,
  MessageCircle,
  PlayCircle,
  Sparkles,
  CircleDotDashed,
  Dot,
} from "lucide-react";

export default async function SimpleExperimentPage() {
  const [pipelines, products, tools, gallery, timeline] = await Promise.all([
    getStylePipelines(),
    getProductShowcase(),
    getDevTools(),
    getGalleryItems(),
    getTimeline(),
  ]);

  const profile = {
    name: "ONIONMAN",
    brand: "ONIONMAN",
    role: "AIGC 工程师 / 设计与产品实现",
    highlights:
      "从建筑与游戏视觉出发，聚焦“Prompt 即产品”与多模型工作流落地，覆盖浏览器插件、微信小程序、企业智能分析机器人与 LoRA 训练体系。",
  };

  const pipelineCopy: Record<string, { name: string; description: string }> = {
    "creative-expansion": {
      name: "图像创意模式",
      description:
        "上传参考图 + 描述创意方向，由 AI 反推元素并生成结构化提示词，适用于概念探索与灵感发散。",
    },
    "precision-reconstruction": {
      name: "图像编辑模式",
      description:
        "针对现有图片做修改、优化与风格转换，强调可控性和稳定性，减少反复试错成本。",
    },
    "local-retouch": {
      name: "多模型路由闭环",
      description:
        "通过统一后端路由接入 OpenRouter / ModelScope 等模型，按场景动态分配最优能力，实现可扩展 AI 工作流。",
    },
  };

  const productCopy: Record<string, { label: string; title: string; description: string }> =
    {
      "onionman-extension": {
        label: "智能工作流引擎（浏览器插件）",
        title: "洋葱侠 AI 小助手",
        description:
          "将分散的 AIGC 能力聚合为可随时唤出的侧边栏插件。通过提示词工程把用户口语需求翻译为模型可执行指令，显著提升出图可控性与稳定性。",
      },
      "ai-divination-miniapp": {
        label: "Prompt 即产品（微信小程序）",
        title: "AI 占卜互动小程序",
        description:
          "面向 Z 世代的 AIGC 互动体验。采用微信小程序 + N8N 的轻量化架构，支持文本/图片输入，用 AI 人格化回复构建私密、即时、有趣的情绪场域。",
      },
      "enterprise-daily-bot": {
        label: "自动化洞察引擎（企业内部）",
        title: "企业报告分析机器人",
        description:
          "基于 N8N + AI Agent 自动聚合飞书日报，输出核心洞察与管理建议。将管理者每日审阅耗时从约 1 小时压缩到 5 分钟，效率提升超过 90%。",
      },
    };

  const toolCopy: Record<string, { title: string; description: string }> = {
    "comfyui-onionman-nodes": {
      title: "统一多模型适配架构",
      description:
        "以高内聚、低耦合方式封装不同 API 协议，前端获得一致调用体验；可持续接入更优模型而无需重构产品。",
    },
    "comfyui-modelscope-bridge": {
      title: "N8N 自动化工作流引擎",
      description:
        "从定时触发、数据拉取、Agent 分析到飞书推送形成无人值守闭环，让“读日报”升级为“看洞察”。",
    },
  };

  const galleryCopy: Record<string, { title: string; tag: string }> = {
    "pirate-mascot": { title: "星空幻想", tag: "幻想场景 / 氛围叙事" },
    "ink-landscape": { title: "古风仙侠厚涂", tag: "仙侠角色 / 国风厚涂" },
    "thick-paint-portrait": { title: "欧美厚涂 / 游戏", tag: "西方奇幻 / 游戏立绘" },
    "immersive-architecture": { title: "沉浸式空间装置", tag: "建筑与空间" },
    starscape: { title: "梦幻水彩", tag: "水彩质感 / 柔和光影" },
    "q-chibi-ink-game": {
      title: "Q 版水墨 · 游戏角色",
      tag: "Q版国风 / 游戏立绘",
    },
  };

  const timelineCopy: Record<string, { period: string; title: string; description: string }> =
    {
      "arch-school": {
        period: "建筑设计阶段",
        title: "建筑学与空间逻辑训练",
        description:
          "毕业于东莞理工学院建筑学，具备建筑设计与 BIM 基础能力，形成结构化问题拆解与空间叙事思维。",
      },
      "game-design": {
        period: "游戏视觉阶段",
        title: "游戏平面视觉与风格资产",
        description:
          "参与游戏平面视觉方向实践，沉淀角色、场景与风格表达经验，并逐步转向 AIGC 训练与资产化生产。",
      },
      "aigc-rnd": {
        period: "AIGC 工程化阶段",
        title: "AIGC 产品研发与落地",
        description:
          "落地浏览器插件、企业智能分析机器人、微信互动小程序与 LoRA 训练体系，打通“需求到实现”的完整路径。",
      },
    };

  const pipelineImages: Record<string, string> = {
    "creative-expansion":
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    "precision-reconstruction":
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    "local-retouch":
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80",
  };

  const productImages: Record<string, string> = {
    "onionman-extension":
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
    "ai-divination-miniapp":
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    "enterprise-daily-bot":
      "https://images.unsplash.com/photo-1551281044-8b1d6b89f5b3?auto=format&fit=crop&w=1200&q=80",
  };

  const toolImages: Record<string, string> = {
    "comfyui-onionman-nodes":
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=1200&q=80",
    "comfyui-modelscope-bridge":
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  };

  const galleryImages: Record<string, string> = {
    "pirate-mascot":
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=900&q=80",
    "ink-landscape":
      "https://images.unsplash.com/photo-1473447198193-c59a6d149b95?auto=format&fit=crop&w=900&q=80",
    "thick-paint-portrait":
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
    "immersive-architecture":
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    starscape:
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=900&q=80",
  };

  return (
    <div className="relative min-h-screen">
      {/* 柔和底色覆盖层：用米灰替代纯白，减少刺眼对比 */}
      <div className="fixed inset-0 z-0 bg-[#f2f1ee]" />
      <div className="pointer-events-none fixed inset-x-0 top-20 z-0 mx-auto h-px max-w-5xl bg-[#d9d6cf]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-16 z-0 mx-auto h-px max-w-5xl bg-[#d9d6cf]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24 text-center">
        <section id="simple-hero" className="mx-auto max-w-3xl space-y-4">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#d9d6cf] bg-[#f7f5f0] px-3 py-1.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#6a675f]">
              ○ 洋葱侠
            </span>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#666666]">
            {profile.brand}
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-[#222222] sm:text-4xl">
            {profile.name} · {profile.role}
          </h1>
          <p className="font-mono text-sm leading-relaxed text-[#666666]">
            {profile.highlights}
          </p>
          <div className="mx-auto mt-3 flex max-w-xl flex-wrap items-center justify-center gap-2">
            {["Prompt 即产品", "多模型路由", "工作流引擎", "LoRA 训练"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 rounded-full border border-[#d9d6cf] bg-[#f7f5f0] px-2.5 py-1 font-mono text-[10px] text-[#6a675f]"
              >
                <CircleDotDashed size={10} />
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section id="simple-matrix" className="mx-auto mt-16 max-w-6xl space-y-6">
          <h2 className="inline-flex items-center gap-1.5 text-xl font-semibold text-[#222222]">
            <span className="font-mono text-sm text-[#8a857b]">○</span>
            <span>智能图像处理矩阵</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {pipelines.map((flow) => (
              <article
                key={flow.id}
                className="overflow-hidden rounded-2xl border border-[#d9d6cf] bg-[#faf9f7] text-left shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
              >
                <div
                  className="aspect-[4/3] w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${pipelineImages[flow.id] ?? pipelineImages["creative-expansion"]}')`,
                  }}
                  aria-label={flow.name}
                />
                <div className="space-y-2 p-4">
                  <p className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[#666666]">
                    <Dot size={12} />
                    {flow.code}
                  </p>
                  <h3 className="text-base font-semibold text-[#222222]">
                    {pipelineCopy[flow.id]?.name ?? flow.name}
                  </h3>
                  <p className="text-sm text-[#555555]">
                    {pipelineCopy[flow.id]?.description ?? flow.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="simple-products" className="mx-auto mt-16 max-w-6xl space-y-6">
          <h2 className="inline-flex items-center gap-1.5 text-xl font-semibold text-[#222222]">
            <span className="font-mono text-sm text-[#8a857b]">○</span>
            <span>明星产品实战</span>
          </h2>
          <div className="space-y-6 text-left">
            {products.map((item) => (
              <article
                key={item.id}
                className="grid overflow-hidden rounded-2xl border border-[#d9d6cf] bg-[#faf9f7] shadow-[0_2px_10px_rgba(0,0,0,0.04)] md:grid-cols-[1.1fr_1.3fr]"
              >
                <div
                  className="min-h-[210px] bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${productImages[item.id] ?? productImages["onionman-extension"]}')`,
                  }}
                  aria-label={item.title}
                />
                <div className="space-y-3 p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#666666]">
                    {productCopy[item.id]?.label ?? item.label}
                  </p>
                  <h3 className="text-lg font-semibold text-[#222222]">
                    {productCopy[item.id]?.title ?? item.title}
                  </h3>
                  <p className="text-sm text-[#555555]">
                    {productCopy[item.id]?.description ?? item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="simple-tools" className="mx-auto mt-16 max-w-6xl space-y-6">
          <h2 className="inline-flex items-center gap-1.5 text-xl font-semibold text-[#222222]">
            <span className="font-mono text-sm text-[#8a857b]">○</span>
            <span>开源与底层工具</span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {tools.map((tool) => (
              <article
                key={tool.id}
                className="overflow-hidden rounded-2xl border border-[#d9d6cf] bg-[#faf9f7] text-left shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
              >
                <div
                  className="aspect-[16/9] w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${toolImages[tool.id] ?? toolImages["comfyui-onionman-nodes"]}')`,
                  }}
                  aria-label={tool.title}
                />
                <div className="space-y-2 p-4">
                  <h3 className="text-base font-semibold text-[#222222]">
                    {toolCopy[tool.id]?.title ?? tool.title}
                  </h3>
                  <p className="text-sm text-[#555555]">
                    {toolCopy[tool.id]?.description ?? tool.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="simple-lab" className="mx-auto mt-16 max-w-6xl space-y-6">
          <h2 className="inline-flex items-center gap-1.5 text-xl font-semibold text-[#222222]">
            <span className="font-mono text-sm text-[#8a857b]">○</span>
            <span>模型实验室 & LoRA 画廊</span>
          </h2>
          <div className="grid gap-6 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <article
                key={item.id}
                className="w-full max-w-[380px] overflow-hidden rounded-2xl border border-[#d9d6cf] bg-[#faf9f7] shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]"
              >
                <GalleryImageFrame
                  imageUrl={galleryImages[item.id] ?? item.imageUrl}
                  ariaLabel={item.title}
                  aspectClassName="aspect-[4/3]"
                  imagePosition={item.imagePosition}
                  nudgeYPercent={item.imageNudgeYPercent}
                  zoom={1.12}
                  underlayClassName="bg-[#e8e5e0]"
                />
                <div className="space-y-2 p-4 text-left">
                  <div className="flex items-center justify-between gap-3">
                    <span className="truncate font-mono text-[11px] uppercase tracking-[0.18em] text-[#666666]">
                      {item.category}
                    </span>
                    <span className="shrink-0 rounded-full border border-[#d9d6cf] bg-[#f1efe9] px-2 py-0.5 font-mono text-[10px] text-[#6a675f]">
                      {galleryCopy[item.id]?.tag ?? item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#222222]">
                    {galleryCopy[item.id]?.title ?? item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="simple-about" className="mx-auto mt-16 max-w-3xl space-y-6">
          <h2 className="inline-flex items-center gap-1.5 text-xl font-semibold text-[#222222]">
            <span className="font-mono text-sm text-[#8a857b]">○</span>
            <span>关于与履历</span>
          </h2>
          <div className="space-y-4 text-left">
            {timeline.map((t) => (
              <div
                key={t.id}
                className="rounded-xl border border-[#d9d6cf] bg-[#faf9f7] p-4"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#666666]">
                  {timelineCopy[t.id]?.period ?? t.period}
                </p>
                <h3 className="mt-1 text-base font-semibold text-[#222222]">
                  {timelineCopy[t.id]?.title ?? t.title}
                </h3>
                <p className="mt-1 text-sm text-[#555555]">
                  {timelineCopy[t.id]?.description ?? t.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:your-email@example.com"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d9d6cf] bg-[#f7f5f0] px-3 py-1.5 font-mono text-[11px] text-[#5f5b53] transition-colors hover:bg-white hover:text-[#222222]"
            >
              <Mail size={14} />
              <span>邮箱</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d9d6cf] bg-[#f7f5f0] px-3 py-1.5 font-mono text-[11px] text-[#5f5b53] transition-colors hover:bg-white hover:text-[#222222]"
              title="替换为你的微信二维码或联系方式链接"
            >
              <MessageCircle size={14} />
              <span>微信</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d9d6cf] bg-[#f7f5f0] px-3 py-1.5 font-mono text-[11px] text-[#5f5b53] transition-colors hover:bg-white hover:text-[#222222]"
              title="替换为你的小红书主页链接"
            >
              <Sparkles size={14} />
              <span>小红书</span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#d9d6cf] bg-[#f7f5f0] px-3 py-1.5 font-mono text-[11px] text-[#5f5b53] transition-colors hover:bg-white hover:text-[#222222]"
              title="替换为你的 B 站主页链接"
            >
              <PlayCircle size={14} />
              <span>B站</span>
            </a>
          </div>
          <p className="pb-4 pt-1 font-mono text-xs text-[#666666]">
            © {new Date().getFullYear()} 洋葱侠 · Simple experiment page
          </p>
        </section>
      </div>
    </div>
  );
}