"use client";

import { useMemo, useRef, useState } from "react";

type ResultId = "result1" | "result2" | "result3";
type StylePackId = "style1" | "style2";

const RESULT_OPTIONS: { id: ResultId; label: string; desc: string }[] = [
  { id: "result1", label: "结果 1", desc: "创意倾向" },
  { id: "result2", label: "结果 2", desc: "细节理解" },
  { id: "result3", label: "结果 3", desc: "结构更稳" },
];

const STYLE_PACKS: {
  id: StylePackId;
  label: string;
  base: string;
  ref: string;
  compareAspectRatio: string;
  refAspectRatio: string;
  results: Record<ResultId, string>;
}[] = [
  {
    id: "style1",
    label: "风格参考 1",
    base: "/demo/style/base-ref1.png",
    ref: "/demo/style/style-ref1.png",
    compareAspectRatio: "3 / 4",
    refAspectRatio: "3 / 4",
    results: {
      result1: "/demo/style/out-ref1-result1.png",
      result2: "/demo/style/out-ref1-result2.png",
      result3: "/demo/style/out-ref1-result3.png",
    },
  },
  {
    id: "style2",
    label: "风格参考 2",
    base: "/demo/style/base-ref2.png",
    ref: "/demo/style/style-ref2.png",
    compareAspectRatio: "4 / 3",
    refAspectRatio: "4 / 3",
    results: {
      result1: "/demo/style/out-ref2-result1.png",
      result2: "/demo/style/out-ref2-result2.png",
      result3: "/demo/style/out-ref2-result3.png",
    },
  },
];

export function StyleTransferDemo() {
  const [ratio, setRatio] = useState(50);
  const [resultId, setResultId] = useState<ResultId>("result3");
  const [stylePackId, setStylePackId] = useState<StylePackId>("style1");
  const compareRef = useRef<HTMLDivElement | null>(null);

  const stylePack = useMemo(
    () => STYLE_PACKS.find((s) => s.id === stylePackId) ?? STYLE_PACKS[0],
    [stylePackId],
  );

  const result = useMemo(() => {
    return stylePack.results[resultId];
  }, [resultId, stylePack]);

  const updateRatioFromClientX = (clientX: number) => {
    const root = compareRef.current;
    if (!root) return;
    const rect = root.getBoundingClientRect();
    if (rect.width <= 0) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setRatio(Math.max(0, Math.min(100, next)));
  };

  const onPointerDownCompare = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    const el = e.currentTarget;
    el.setPointerCapture(e.pointerId);
    updateRatioFromClientX(e.clientX);
  };

  const onPointerMoveCompare = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    updateRatioFromClientX(e.clientX);
  };

  const onPointerUpCompare = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-2xl border border-grid/80 bg-black/70 p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          多模型动态路由架构 (Model Routing)
        </p>
        <h3 className="mt-2 text-lg font-semibold text-foreground">
          从“单一模型盲盒”到“按场景智能调度的生产线”
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          交互演示：针对 B 端严苛的控图需求，系统会对非标准输入进行前置处理，并根据用户核心意图动态分发至最佳生图链路。
        </p>

        <div className="mt-4 overflow-hidden rounded-xl border border-grid/70 bg-black/60">
          <div
            ref={compareRef}
            className="relative w-full"
            style={{ aspectRatio: stylePack.compareAspectRatio }}
            onPointerDown={onPointerDownCompare}
            onPointerMove={onPointerMoveCompare}
            onPointerUp={onPointerUpCompare}
            onPointerCancel={onPointerUpCompare}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${stylePack.base}')` }}
              aria-label="原始底图"
            />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${result}')`,
                clipPath: `inset(0 0 0 ${ratio}%)`,
                willChange: "clip-path",
              }}
              aria-label="生成效果"
            />
            <div
              className="absolute inset-y-0 w-px cursor-ew-resize bg-foreground/80"
              style={{ left: `${ratio}%` }}
            >
              <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-foreground/70 bg-black/85 shadow-[0_0_0_3px_rgba(0,0,0,0.35)]" />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between p-3 text-[10px] font-mono text-muted">
              <span>BASE</span>
              <span>RESULT</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <input
            aria-label="对比滑块"
            type="range"
            min={0}
            max={100}
            value={ratio}
            onInput={(e) => setRatio(Number((e.target as HTMLInputElement).value))}
            className="w-full accent-white/80"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-grid/80 bg-black/70 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            模型倾向
          </p>
          <div className="mt-3 grid gap-2">
            {RESULT_OPTIONS.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setResultId(m.id)}
                className={`rounded-xl border px-3 py-2 text-left transition ${
                  m.id === resultId
                    ? "border-foreground/40 bg-foreground/10 text-foreground"
                    : "border-grid/70 bg-black/60 text-muted hover:text-foreground"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
                    {m.label}
                  </span>
                  <span className="text-[11px]">{m.desc}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-grid/80 bg-black/70 p-5">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            风格参考
          </p>
          <div className="mt-3 grid gap-2">
            {STYLE_PACKS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStylePackId(s.id)}
                className={`rounded-xl border px-3 py-2 text-left transition ${
                  s.id === stylePackId
                    ? "border-foreground/40 bg-foreground/10 text-foreground"
                    : "border-grid/70 bg-black/60 text-muted hover:text-foreground"
                }`}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em]">
                  {s.label}
                </span>
              </button>
            ))}
          </div>
          <div
            className="mt-4 w-full overflow-hidden rounded-xl border border-grid/70 bg-cover bg-center"
            style={{
              backgroundImage: `url('${stylePack.ref}')`,
              aspectRatio: stylePack.refAspectRatio,
            }}
            aria-label="风格参考图"
          />
        </div>
      </div>
    </div>
  );
}

