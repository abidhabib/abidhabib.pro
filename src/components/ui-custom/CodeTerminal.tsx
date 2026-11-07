"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * CodeTerminal — decorative developer console that types out a short
 * session (whoami / stack / status), printed as a solid ink block:
 * ink plate, paper type, square traffic dots. Every line restates
 * facts that already exist in the profile data.
 */

type Line = { cmd: string; out: string; accent?: boolean };

const SESSION: Line[] = [
  { cmd: "whoami", out: "abid-habib · full-stack engineer" },
  { cmd: "stack --core", out: "react · node.js · express · mysql" },
  { cmd: "stack --infra", out: "ubuntu · nginx · docker · pm2" },
  { cmd: "cat status.txt", out: "open to opportunities", accent: true },
];

const TYPE_MS = 55;
const OUTPUT_MS = 420;
const NEXT_LINE_MS = 620;
const RESTART_MS = 6500;

const PAPER = "rgb(240 235 222 /";

export function CodeTerminal({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  const [lineIdx, setLineIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [revealed, setRevealed] = useState<number[]>([]);

  useEffect(() => {
    if (reduced) return;

    const line = SESSION[lineIdx];

    // Full session played out — pause, then restart the loop
    if (!line) {
      const t = setTimeout(() => {
        setLineIdx(0);
        setChars(0);
        setRevealed([]);
      }, RESTART_MS);
      return () => clearTimeout(t);
    }

    // Still typing the command
    if (chars < line.cmd.length) {
      const t = setTimeout(() => setChars((c) => c + 1), TYPE_MS);
      return () => clearTimeout(t);
    }

    // Command finished — reveal its output
    if (!revealed.includes(lineIdx)) {
      const t = setTimeout(() => setRevealed((r) => [...r, lineIdx]), OUTPUT_MS);
      return () => clearTimeout(t);
    }

    // Move on to the next command
    const t = setTimeout(() => {
      setLineIdx((i) => i + 1);
      setChars(0);
    }, NEXT_LINE_MS);
    return () => clearTimeout(t);
  }, [lineIdx, chars, revealed, reduced]);

  const renderLine = (line: Line, idx: number) => {
    const isCurrent = idx === lineIdx;
    const cmdText = isCurrent ? line.cmd.slice(0, chars) : line.cmd;
    const hasOutput = reduced || revealed.includes(idx);

    return (
      <div key={line.cmd}>
        <p className="flex items-center gap-2 whitespace-nowrap">
          <span style={{ color: `${PAPER} 0.55)` }} aria-hidden="true">
            $
          </span>
          <span className="text-[#f0ebde]">{cmdText}</span>
          {isCurrent && !reduced && (
            <span
              className="caret-blink inline-block h-[0.95em] w-[0.55em] translate-y-[0.15em] bg-[#f0ebde]"
              aria-hidden="true"
            />
          )}
        </p>
        {hasOutput && (
          <p className="mt-1 whitespace-nowrap pl-4">
            {line.accent ? (
              <span className="inline-flex items-center gap-2 bg-[#f0ebde] px-2 py-0.5 font-mono text-[0.72rem] text-deep">
                <span className="square-blink inline-block h-1.5 w-1.5 bg-deep" aria-hidden="true" />
                {line.out}
              </span>
            ) : (
              <span
                className="font-mono text-[0.92rem] sm:text-[0.78rem]"
                style={{ color: `${PAPER} 0.72)` }}
              >
                {line.out}
              </span>
            )}
          </p>
        )}
      </div>
    );
  };

  return (
    <div
      className={`overflow-hidden border border-ink bg-deep ${className}`}
      aria-hidden="true"
    >
      {/* Title bar — square traffic dots on the ink plate */}
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{ borderBottom: `1px solid ${PAPER} 0.25)` }}
      >
        <span className="square-blink inline-block h-2 w-2 bg-[#f0ebde]" />
        <span className="inline-block h-2 w-2" style={{ background: `${PAPER} 0.45)` }} />
        <span className="inline-block h-2 w-2" style={{ background: `${PAPER} 0.22)` }} />
        <span
          className="ml-2 font-mono text-[0.6rem] tracking-[0.14em]"
          style={{ color: `${PAPER} 0.65)` }}
        >
          abid@dev: ~/portfolio
        </span>
      </div>

      {/* Body */}
      <div className="space-y-2 px-4 py-3.5 font-mono text-[0.7rem] leading-relaxed sm:text-[0.76rem]">
        {SESSION.map(renderLine)}
        {reduced && (
          <p className="flex items-center gap-2" style={{ color: `${PAPER} 0.55)` }}>
            <span aria-hidden="true">$</span>
            <span className="caret-blink inline-block h-[0.95em] w-[0.55em] translate-y-[0.15em] bg-[#f0ebde]" />
          </p>
        )}
      </div>
    </div>
  );
}
