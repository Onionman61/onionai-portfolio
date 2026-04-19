"use client";

const sections = [
  { id: "who", label: "Who" },
  { id: "problems", label: "Pain" },
  { id: "solutions", label: "Demos" },
  { id: "skills", label: "Tech" },
  { id: "contact", label: "Contact" },
];

export function HeaderNav() {
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="pointer-events-auto mt-6 flex w-full max-w-7xl items-center justify-between rounded-full border border-grid/80 bg-black/70 px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-muted backdrop-blur-md">
      <div className="flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_rgba(139,92,246,0.75)]" />
        <span className="font-mono text-[10px] text-foreground">
          ONIONMAN.STUDIO
        </span>
      </div>
      <div className="flex items-center gap-4 font-mono text-[10px]">
        <div className="hidden items-center gap-3 sm:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => handleClick(s.id)}
              className="text-muted hover:text-foreground"
            >
              {s.label}
            </button>
          ))}
        </div>
        <span className="rounded-full border border-grid/70 bg-black/60 px-3 py-1 text-[9px] text-accent-2">
          personal portfolio
        </span>
      </div>
    </nav>
  );
}

