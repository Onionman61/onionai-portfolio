import type { CSSProperties } from "react";

/**
 * translateY(nudge%) 以「层自身高度」为基准；层比容器高 (100+2b)% 且 top:-b% 时，
 * 要使下移后仍盖住容器顶边，需 b ≤ n/(1-2n)（n、为小数形式的百分比）。
 */
function verticalBleedPercentForNudge(nudgePercent: number): number {
  if (nudgePercent <= 0) return 0;
  const n = nudgePercent / 100;
  const denom = 1 - 2 * n;
  if (denom <= 0.04) return 42;
  const b = (n / denom) * 100;
  return Math.min(48, b + 0.5);
}

export type GalleryImageFrameProps = {
  imageUrl: string;
  ariaLabel: string;
  aspectClassName?: string;
  /** background-position，默认居中 */
  imagePosition?: string;
  /** 背景层向下平移（相对自身高度的 %），竖版人像可避免头顶被裁 */
  nudgeYPercent?: number;
  /** 默认略放大，悬停回到 1 以露出更多画面 */
  zoom?: number;
  /** 外层底色（缩回时边角可能微露） */
  underlayClassName?: string;
};

export function GalleryImageFrame({
  imageUrl,
  ariaLabel,
  aspectClassName = "aspect-[4/3]",
  imagePosition = "50% 50%",
  nudgeYPercent = 0,
  zoom = 1.12,
  underlayClassName = "bg-black/50",
}: GalleryImageFrameProps) {
  const bleed = verticalBleedPercentForNudge(nudgeYPercent);

  const layerStyle = {
    "--gi-nudge": `${nudgeYPercent}%`,
    "--gi-zoom": String(zoom),
    backgroundImage: `url('${imageUrl}')`,
    backgroundSize: "cover",
    backgroundPosition: imagePosition,
    ...(bleed > 0
      ? {
          top: `${-bleed}%`,
          height: `${100 + 2 * bleed}%`,
          bottom: "auto",
        }
      : {}),
  } as CSSProperties;

  return (
    <div
      className={`lora-gallery-thumb relative ${aspectClassName} w-full overflow-hidden ${underlayClassName}`}
    >
      <div
        aria-label={ariaLabel}
        role="img"
        className={`lora-gallery-thumb__layer absolute left-0 right-0 bg-no-repeat [backface-visibility:hidden] ${bleed > 0 ? "" : "top-0 bottom-0"}`}
        style={layerStyle}
      />
    </div>
  );
}
