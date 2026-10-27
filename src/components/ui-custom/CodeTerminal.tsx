"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * CodeTerminal — decorative developer console that types out a short
 * session (whoami / stack / status). Purely visual: every line restates
 * facts that already exist in the profile data.
 */

type Line = { cmd: string; out: string; accent?: boolean };

const SESSION: Line[] = [
  { cmd: "whoami", out: "abid-habib · full-stack engineer" },
  { cmd: "stack --core", out: "react · node.js · express · mysql" },
  { cmd: "stack --infra", out: "ubuntu · nginx · docker · pm2" },
  { cmd: "cat status.txt", out: "● open to opportunities", accent: true },
];

const TYPE_MS = 55;
const OUTPUT_MS = 420;
const NEXT_LINE_MS = 620;
const RESTART_MS = 6500;

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
          <span className="text-[#8a9a7b]" aria-hidden="true">
            $
          </span>
          <span className="text-[#e8e6e1]">{cmdText}</span>
          {isCurrent && !reduced && (
            <span
              className="caret-blink inline-block h-[0.95em] w-[0.55em] translate-y-[0.15em] bg-[#b08563]"
              aria-hidden="true"
            />
          )}
        </p>
        {hasOutput && (
          <p
            className={`mt-0.5 whitespace-nowrap pl-4 ${
              line.accent ? "text-[#9fd6a3]" : "text-[#8f918c]"
            }`}
          >
            {line.out}
          </p>
        )}
      </div>
    );
  };

  return (
    <div
      className={`overflow-hidden rounded-xl border border-[#3a3d38] bg-[#161816]/95 shadow-[0_24px_60px_-24px_rgb(24_24_24/0.55)] backdrop-blur-md ${className}`}
      aria-hidden="true"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-[#2c2f2b] bg-[#1d1f1d]/90 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[0.6rem] tracking-[0.14em] text-[#8f918c]">
          abid@dev: ~/portfolio
        </span>
      </div>

      {/* Body */}
      <div className="space-y-2 px-4 py-3.5 font-mono text-[0.68rem] leading-relaxed sm:text-[0.74rem]">
        {SESSION.map(renderLine)}
        {reduced && (
          <p className="flex items-center gap-2 text-[#8a9a7b]">
            <span aria-hidden="true">$</span>
            <span className="caret-blink inline-block h-[0.95em] w-[0.55em] translate-y-[0.15em] bg-[#b08563]" />
          </p>
        )}
      </div>
    </div>
  );
}
