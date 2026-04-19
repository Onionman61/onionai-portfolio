"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Insight = {
  title: string;
  bullets: string[];
  todos: string[];
  chart: { label: string; value: number }[];
  highlights: { name: string; note: string; score: number }[];
  risks: string[];
};

const REPORT_ROWS = [
  {
    date: "04/12",
    person: "员工A",
    role: "销售",
    work: "跟进 6 个线索 + 电话回访",
    plan: "触达 8 个",
    done: "触达 6/8（2 个待补资料）",
    help: "售前协助 1 份方案",
  },
  {
    date: "04/12",
    person: "员工B",
    role: "推销员",
    work: "到店拜访 3 家 + 试用讲解",
    plan: "拜访 4 家",
    done: "完成 3/4（1 家改期）",
    help: "无",
  },
  {
    date: "04/12",
    person: "员工C",
    role: "售前",
    work: "输出 2 份报价 + 1 份演示稿",
    plan: "交付 3 份材料",
    done: "完成 2/3（缺参数表）",
    help: "产品补齐参数表",
  },
  {
    date: "04/12",
    person: "员工D",
    role: "运营",
    work: "线索清洗 + 投放复盘",
    plan: "产出 1 份复盘",
    done: "已完成（转化率下滑）",
    help: "审批预算/素材",
  },
] as const;

export function EnterpriseBotAutoDemo() {
  const [phase, setPhase] = useState<"idle" | "processing" | "done">("idle");

  const insight: Insight = useMemo(
    () => ({
      title: "团队日报洞察（自动生成）",
      bullets: [
        "整体完成度 78%：触达推进稳定，售前/产品参数成为主要阻塞。",
        "建议：高意向线索优先级队列 + 售前/产品参数统一出口。",
      ],
      todos: [
        "售前补齐方案（对接 员工A）",
        "产品补齐参数表（支持 员工C）",
      ],
      chart: [
        { label: "总体完成度", value: 78 },
        { label: "触达进度", value: 75 },
        { label: "交付/材料", value: 67 },
      ],
      highlights: [
        { name: "员工A", note: "触达推进稳定，协同需求清晰", score: 86 },
      ],
      risks: [
        "售前材料/参数表不足 → 高意向推进延迟",
      ],
    }),
    [],
  );

  useEffect(() => {
    setPhase("processing");
    const t = window.setTimeout(() => setPhase("done"), 1500);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-grid/80 bg-black/70 p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
          自动化数据清洗流 (Data Pipeline)
        </p>
        <h3 className="mt-2 text-lg font-semibold text-foreground">
          零侵入式架构：不改变现有汇报习惯，重塑管理视图
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          模拟业务流：触发拉取 (Webhook/CRON) → 字段去重与清洗 → LLM 语义提炼 → 钉钉/飞书卡片推送。
        </p>

        <div className="mt-4 rounded-xl border border-grid/70 bg-black/60 p-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            员工日报（非结构化数据）
          </p>
          <div className="enterprise-scroll mt-3 max-h-36 overflow-auto rounded-lg border border-grid/70 bg-black/55">
            <table className="min-w-[980px] border-collapse text-left text-[11px] leading-relaxed">
              <thead>
                <tr className="bg-black/70 text-foreground/80">
                  {[
                    "日期",
                    "员工",
                    "角色",
                    "今日工作内容",
                    "原计划",
                    "当日完成",
                    "需要上级协调",
                  ].map((h) => (
                    <th
                      key={h}
                      className="whitespace-nowrap border-b border-grid/70 px-3 py-2 font-mono font-medium"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-foreground/90">
                {REPORT_ROWS.map((r, idx) => (
                  <tr
                    key={`${r.date}-${r.person}`}
                    className={idx % 2 === 0 ? "bg-black/50" : "bg-black/35"}
                  >
                    <td className="whitespace-nowrap border-b border-grid/70 px-3 py-1.5 text-muted">
                      {r.date}
                    </td>
                    <td className="whitespace-nowrap border-b border-grid/70 px-3 py-1.5">
                      {r.person}
                    </td>
                    <td className="whitespace-nowrap border-b border-grid/70 px-3 py-1.5 text-muted">
                      {r.role}
                    </td>
                    <td className="border-b border-grid/70 px-3 py-1.5">
                      {r.work}
                    </td>
                    <td className="border-b border-grid/70 px-3 py-1.5 text-muted">
                      {r.plan}
                    </td>
                    <td className="border-b border-grid/70 px-3 py-1.5">
                      {r.done}
                    </td>
                    <td className="border-b border-grid/70 px-3 py-1.5">
                      <span
                        className={
                          r.help === "无"
                            ? "text-muted"
                            : "text-foreground/90"
                        }
                      >
                        {r.help}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 rounded-xl border border-grid/70 bg-black/60 p-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              自动化处理
            </p>
            <span className="font-mono text-[10px] text-muted">
              {phase === "processing" ? "running…" : "ready"}
            </span>
          </div>

          <div className="mt-3 rounded-xl border border-grid/70 bg-black/55 p-3">
            <div className="enterprise-scroll max-h-56 overflow-y-auto pr-1">
            {[
              { id: "cron", label: "定时触发", hint: "每天 18:30 自动拉取" },
              { id: "clean", label: "聚合清洗", hint: "去重 / 归档 / 补字段" },
              { id: "agent", label: "Agent 提炼", hint: "完成度 / 风险 / 亮点" },
              { id: "push", label: "推送管理层", hint: "飞书卡片 + 看板" },
            ].map((s, i, arr) => {
              const active = phase !== "idle";
              const done = phase === "done";
              return (
                <div key={s.id} className="relative flex gap-3 py-1.5">
                  <div className="flex w-9 shrink-0 flex-col items-center">
                    <div
                      className={`grid h-8 w-8 place-items-center rounded-full border ${
                        done
                          ? "border-foreground/35 bg-foreground/10"
                          : active
                            ? "border-foreground/25 bg-black/60"
                            : "border-grid/70 bg-black/60"
                      }`}
                    >
                      <span
                        className={`font-mono text-[10px] ${
                          done ? "text-foreground/90" : "text-muted"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {i !== arr.length - 1 && (
                      <div className="mt-2 h-full w-px bg-grid/60" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <p className="truncate text-sm font-semibold text-foreground/90">
                        {s.label}
                      </p>
                      <span
                        className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] ${
                          done
                            ? "border-[color:color-mix(in_oklab,var(--accent-2)_45%,transparent)] bg-[color:color-mix(in_oklab,var(--accent-2)_16%,transparent)] text-foreground/85"
                            : active
                              ? "border-[color:color-mix(in_oklab,var(--accent)_40%,transparent)] bg-[color:color-mix(in_oklab,var(--accent)_14%,transparent)] text-foreground/75"
                              : "border-grid/70 bg-black/60 text-muted"
                        }`}
                      >
                        <span
                          className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${
                            done ? "bg-accent-2/80" : active ? "bg-accent/80" : "bg-grid/80"
                          }`}
                        />
                        {done ? "done" : active ? "running" : "pending"}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-muted">
                      {s.hint}
                    </p>

                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-grid/60">
                      <motion.div
                        className="h-full bg-gradient-to-r from-foreground/20 via-foreground/55 to-foreground/20"
                        animate={{
                          width: done ? "100%" : active ? "72%" : "18%",
                          opacity: done ? 0.9 : active ? 0.8 : 0.35,
                        }}
                        transition={{
                          duration: 0.55,
                          ease: "easeOut",
                          delay: i * 0.06,
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-grid/80 bg-black/70 p-5">
        <AnimatePresence mode="wait">
          {phase === "processing" && (
            <motion.div
              key="p"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="mt-5 rounded-xl border border-dashed border-grid/70 bg-black/60 p-4 text-sm text-muted"
            >
              正在生成洞察与管理视图…
            </motion.div>
          )}

          {phase === "done" && (
            <motion.div
              key="d"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              className="mt-5 space-y-4"
            >
              <div className="rounded-xl border border-grid/70 bg-black/60 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  {insight.title}
                </p>
                <ul className="mt-2 space-y-1 text-sm text-foreground/90">
                  {insight.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-foreground/60">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-grid/70 bg-black/60 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    明日待办
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-foreground/90">
                    {insight.todos.map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="text-foreground/60">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-grid/70 bg-black/60 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    进度视图
                  </p>
                  <div className="mt-2 space-y-2">
                    {insight.chart.map((c) => (
                      <div key={c.label} className="space-y-1">
                        <div className="flex items-center justify-between text-xs text-muted">
                          <span>{c.label}</span>
                          <span>{c.value}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-grid/60">
                          <div className="relative h-2 rounded-full bg-foreground/60" style={{ width: `${c.value}%` }}>
                            <span className="absolute -right-1 -top-1 h-4 w-4 rounded-full border border-grid/70 bg-black/70" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border border-grid/70 bg-black/60 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    突出成员
                  </p>
                  <div className="mt-2 space-y-2">
                    {insight.highlights.slice(0, 1).map((h) => (
                      <div key={h.name} className="rounded-lg border border-grid/70 bg-black/55 p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-foreground">{h.name}</span>
                          <span className="rounded-full border border-grid/70 bg-black/70 px-2 py-0.5 font-mono text-[10px] text-foreground/80">
                            {h.score}
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-muted">{h.note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-grid/70 bg-black/60 p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                    风险 / 阻塞
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-foreground/90">
                    {insight.risks.slice(0, 1).map((r) => (
                      <li key={r} className="flex gap-2">
                        <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                        <span className="text-foreground/90">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-xl border border-grid/70 bg-black/55 p-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  PM 旁白
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  PM 旁白：在不改变一线员工交互路径的前提下，利用低代码数据总线 (n8n) 将群聊中的“信息噪音”自动化提纯为“决策面板”。
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

