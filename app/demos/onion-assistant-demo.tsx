"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Wand2, Layers3 } from "lucide-react";

const DEMO_INPUTS = [
  { id: "beauty", label: "人物", img: "/demo/onion/demo-input-1.png" },
  { id: "perfume", label: "商品", img: "/demo/onion/demo-input-2.png" },
] as const;

const MODEL_RESULTS = [
  {
    id: "nanobanana-pro",
    name: "NanoBanana Pro",
    img: "/demo/onion/demo-result-nanobanana-pro.png",
  },
  {
    id: "flux2-klein",
    name: "FLUX2-Klein",
    img: "/demo/onion/demo-result-flux2-klein.png",
  },
] as const;

const OPTIMIZED_PROMPT =
  "A cinematic perfume commercial photography, a beautiful young woman in light blue silk dress, holding a luxury [Chanel Coco Mademoiselle] perfume bottle delicately, standing under ethereal sunbeams in a misty gothic cathedral background, soap bubbles floating in the air, dreamy and sacred atmosphere. Soft focus, bokeh, backlit, high-end texture, 8k resolution, shot on Hasselblad, elegant lighting";

export function OnionAssistantDemo() {
  const [userInput, setUserInput] = useState("让这个美女拿着这个香水");
  const [loading, setLoading] = useState(false);
  const [resultReady, setResultReady] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [droppedNames, setDroppedNames] = useState<string[]>([]);
  const [playDragDemo, setPlayDragDemo] = useState(false);

  const optimizedPrompt = useMemo(() => OPTIMIZED_PROMPT, []);

  const run = () => {
    setLoading(true);
    setResultReady(false);
    window.setTimeout(() => {
      setLoading(false);
      setResultReady(true);
    }, 1500);
  };

  useEffect(() => {
    const start = () => {
      setPlayDragDemo(true);
      window.setTimeout(() => setPlayDragDemo(false), 2200);
    };

    start();
    const interval = window.setInterval(start, 6200);
    return () => window.clearInterval(interval);
  }, []);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files || []);
    if (!files.length) return;
    setDroppedNames(files.slice(0, 3).map((f) => f.name));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="grid gap-6 lg:grid-cols-2 lg:items-start"
    >
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
        className="rounded-2xl border border-grid/80 bg-black/70 p-5"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          洋葱侠 · 无缝集成 + Prompt 翻译官（模拟器）
        </p>
        <h3 className="mt-2 text-lg font-semibold text-foreground">
          任意窗口拖拽素材 · 一键优化 · 横向模型对比
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          聚合分散的 AIGC 服务为统一入口。通过内置提示词工程，将自然语言自动转为专业生成指令，降低门槛并提升结果可控性。
        </p>

        <motion.div
          className={`mt-4 rounded-xl border p-4 transition ${
            isDragging
              ? "border-foreground/45 bg-foreground/10"
              : "border-grid/70 bg-black/60"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={onDrop}
          animate={
            isDragging
              ? { scale: [1, 1.01, 1], borderColor: "rgba(255,255,255,0.45)" }
              : { scale: 1 }
          }
          transition={{ duration: 0.35 }}
        >
          <div className="relative mb-3 h-24 overflow-hidden rounded-lg border border-grid/70 bg-black/55">
            <div className="absolute inset-y-2 left-2 flex items-center gap-2">
              {DEMO_INPUTS.map((it) => (
                <div key={it.id} className="space-y-1">
                  <div
                    className="h-16 w-12 rounded border border-grid/70 bg-cover bg-center"
                    style={{ backgroundImage: `url('${it.img}')` }}
                    aria-label={`参考素材：${it.label}`}
                  />
                  <p className="text-center font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                    {it.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="absolute inset-y-0 right-2 flex items-center">
              <span className="rounded-full border border-grid/70 bg-black/60 px-2 py-1 font-mono text-[10px] text-muted">
                生成队列
              </span>
            </div>
          </div>
          <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            <Upload size={12} />
            拖拽素材区（任意网页图片）
          </p>
          <p className="mt-2 text-xs text-foreground/80">
            支持从不同网页直接拖拽图片到插件，自动作为参考素材进入生成流程（上方为参考输入预览）。
          </p>
          {!!droppedNames.length && (
            <div className="mt-2 flex flex-wrap gap-2">
              {droppedNames.map((n) => (
                <span
                  key={n}
                  className="rounded-full border border-grid/70 bg-black/65 px-2 py-0.5 font-mono text-[10px] text-foreground/80"
                >
                  {n}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        <div className="mt-4 rounded-xl border border-grid/70 bg-black/60 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            用户输入
          </p>
          <textarea
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="mt-2 min-h-24 w-full rounded-lg border border-grid/70 bg-black/55 p-3 text-sm text-foreground outline-none transition focus:border-foreground/40"
          />
        </div>

        <motion.button
          type="button"
          onClick={run}
          disabled={loading}
          whileHover={loading ? undefined : { scale: 1.01 }}
          whileTap={loading ? undefined : { scale: 0.99 }}
          animate={
            loading
              ? { boxShadow: "0 0 0 rgba(0,0,0,0)" }
              : {
                  boxShadow:
                    "0 0 0 1px rgba(139,92,246,0.22), 0 10px 34px rgba(139,92,246,0.16)",
                }
          }
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group relative mt-4 inline-flex w-full items-center justify-center overflow-hidden rounded-xl border border-[color:color-mix(in_oklab,var(--accent)_55%,transparent)] bg-gradient-to-r from-[color:color-mix(in_oklab,var(--accent)_28%,transparent)] via-black/75 to-[color:color-mix(in_oklab,var(--accent-2)_16%,transparent)] px-4 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground transition hover:brightness-110 disabled:opacity-60"
        >
          <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="absolute -left-1/3 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
          </span>
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <Wand2 size={14} />
              AI 思考中…
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              <Wand2 size={14} />
              立即生成对比结果
              <span className="ml-1 inline-flex items-center text-foreground/80 transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </span>
          )}
        </motion.button>

        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-grid/60">
          <motion.div
            className={`h-full bg-gradient-to-r from-foreground/40 via-foreground/70 to-foreground/40 transition-all duration-700 ${
              loading ? "w-[78%] opacity-100" : "w-[12%] opacity-40"
            }`}
            animate={loading ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.4 }}
            transition={{ duration: 1.1, repeat: loading ? Infinity : 0 }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
        className="rounded-2xl border border-grid/80 bg-black/70 p-5"
      >
        <p className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          <Layers3 size={12} />
          输出
        </p>
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-3 space-y-3"
            >
              <div className="h-3 w-2/3 rounded bg-foreground/10" />
              <div className="h-3 w-full rounded bg-foreground/10" />
              <div className="h-3 w-5/6 rounded bg-foreground/10" />
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-xl border border-grid/70 bg-black/60"
                  />
                ))}
              </div>
            </motion.div>
          )}

          {!loading && resultReady && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-3 space-y-3"
            >
              <div className="rounded-xl border border-grid/70 bg-black/60 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  Optimized prompt
                </p>
                <p className="mt-2 text-xs leading-relaxed text-foreground/90">
                  {optimizedPrompt}
                </p>
              </div>

              <motion.div
                className="grid gap-3 sm:grid-cols-2"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
                  },
                }}
              >
                {MODEL_RESULTS.map((m) => (
                  <motion.div
                    key={m.id}
                    className="overflow-hidden rounded-xl border border-grid/70 bg-black/60"
                    variants={{
                      hidden: { opacity: 0, y: 8, scale: 0.98 },
                      show: { opacity: 1, y: 0, scale: 1 },
                    }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                  >
                    <div
                      className="aspect-[4/3] w-full bg-cover bg-center transition-transform duration-500 hover:scale-[1.02]"
                      style={{ backgroundImage: `url('${m.img}')` }}
                      aria-label={`${m.name} 效果图`}
                    />
                    <p className="px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                      {m.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <a
                href="https://www.bilibili.com/video/BV1BRd8BpEH3/?share_source=copy_web&vd_source=e12e42dd7c4f709fb9a477ebf2cd2ad5"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-grid/70 bg-black/60 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/90 transition hover:border-foreground/25 hover:bg-foreground/[0.06] hover:text-foreground"
              >
                B站演示视频
              </a>
            </motion.div>
          )}

          {!loading && !resultReady && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-4 rounded-xl border border-dashed border-grid/70 bg-black/60 p-6 text-sm text-muted"
            >
              拖拽参考素材，然后点击「AI 一键优化」。
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

