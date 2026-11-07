import type { ReactNode } from "react";

/* ---------------------------------------------------------------------------
   Riso primitives — the recurring graphic punctuation of the ink grid:
   mono tags, registration crosses, QR mosaics, pixel-stack charts,
   stair-stepped glitch columns, vertical spine labels.
   Every block here is decorative and aria-hidden by default.
--------------------------------------------------------------------------- */

/** DM Mono tag: "CAT—001 · 2026.Q2" style metadata. */
export function MonoTag({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`mono-tag whitespace-nowrap uppercase ${className}`}>{children}</span>
  );
}

/** Registration crosshair — print alignment mark. */
export function Cross({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      focusable="false"
      className={`h-3 w-3 ${className}`}
    >
      <path d="M6 0v12M0 6h12" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

/** Deterministic PRNG so a given seed always prints the same mosaic. */
function seededBits(seed: string, count: number): boolean[] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const bits: boolean[] = [];
  let s = h >>> 0;
  for (let i = 0; i < count; i++) {
    s = (Math.imul(s, 1103515245) + 12345) >>> 0;
    bits.push(s % 100 < 46);
  }
  return bits;
}

/**
 * QRBlock — 8×8 mosaic patch used as graphic punctuation (not a real code).
 * Corner finder squares give it the QR silhouette.
 */
export function QRBlock({
  seed,
  cell = 9,
  gap = 2,
  className = "",
  label,
}: {
  seed: string;
  cell?: number;
  gap?: number;
  className?: string;
  label?: string;
}) {
  const N = 8;
  const bits = seededBits(seed, N * N);

  const isFinder = (r: number, c: number) =>
    (r < 3 && c < 3) || (r < 3 && c >= N - 3) || (r >= N - 3 && c < 3);

  /* Within a 3×3 finder: solid ring, hollow centre */
  const finderOn = (r: number, c: number) => {
    const a = r < 3 ? r : r - (N - 3);
    const b = c < 3 ? c : c - (N - 3);
    return !(a === 1 && b === 1);
  };

  const cells: boolean[] = [];
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (isFinder(r, c)) {
        cells.push(finderOn(r, c));
      } else {
        cells.push(bits[r * N + c]);
      }
    }
  }

  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : "true"}
      className={`inline-block leading-none ${className}`}
      style={{ display: "inline-grid", gridTemplateColumns: `repeat(${N}, ${cell}px)`, gap }}
    >
      {cells.map((on, i) => (
        <span
          key={i}
          className={on ? "bg-ink" : "bg-ink/10"}
          style={{ width: cell, height: cell }}
        />
      ))}
    </span>
  );
}

/**
 * PixelBars — pixel-stack bar chart. Each column stacks pixel rows:
 * filled rows are solid ink, the remainder sit at drafting 10%.
 */
export function PixelBars({
  values,
  max = 5,
  labels,
  rowHeight = 6,
  gap = 3,
  className = "",
}: {
  values: number[];
  max?: number;
  labels?: string[];
  rowHeight?: number;
  gap?: number;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={className}>
      <div className="flex items-end gap-4 sm:gap-6">
        {values.map((v, i) => {
          const filled = Math.max(1, Math.min(max, v));
          return (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="flex flex-col-reverse" style={{ gap }}>
                {Array.from({ length: max }).map((_, r) => (
                  <span
                    key={r}
                    className={r < filled ? "bg-ink" : "bg-ink/10"}
                    style={{ height: rowHeight, width: 34 }}
                  />
                ))}
              </div>
              {labels && (
                <span className="mono-tag text-[0.58rem] text-ink-3">{labels[i]}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * PixelColumn — stair-stepped scanline stack, the template's signature
 * "pixel glitch" decoration. Each row is a striped bar of the given width.
 */
export function PixelColumn({
  widths,
  rowHeight = 13,
  className = "",
}: {
  /** Row widths in percent (0–100), printed bottom-to-top. */
  widths: number[];
  rowHeight?: number;
  className?: string;
}) {
  return (
    <div aria-hidden="true" className={`flex flex-col items-start gap-[3px] ${className}`}>
      {widths.map((w, i) => (
        <span
          key={i}
          className="bg-scan-v block"
          style={{ height: rowHeight, width: `${w}%` }}
        />
      ))}
    </div>
  );
}

/** Vertical spine label — runs down the margin like a catalogue edge. */
export function SpineLabel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`v-text mono-tag text-[0.62rem] uppercase tracking-[0.14em] text-ink-3 ${className}`}
    >
      {children}
    </span>
  );
}

/** Framed section — top + bottom ink hairlines like the template frames. */
export function Frame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`rule-t rule-b ${className}`}>{children}</div>;
}
