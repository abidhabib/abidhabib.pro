/**
 * ProjectMockup — abstract, hand-composed interface illustrations.
 * Each variant reflects the project's real functional domain using pure
 * layout primitives. Decorative only (aria-hidden) — no fake data claims.
 * Flat print rules: square plates, hairline rules, two inks only.
 */

function Chrome({ title, dark = false }: { title: string; dark?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 border-b px-4 py-2.5 ${
        dark ? "border-[rgb(240_235_222/0.25)]" : "border-ink/25"
      }`}
    >
      <div className="flex gap-1.5" aria-hidden="true">
        <span className={`h-2 w-2 ${dark ? "bg-[#f0ebde]/80" : "bg-ink/70"}`} />
        <span className={`h-2 w-2 ${dark ? "bg-[#f0ebde]/45" : "bg-ink/40"}`} />
        <span className={`h-2 w-2 ${dark ? "bg-[#f0ebde]/25" : "bg-ink/20"}`} />
      </div>
      <span
        className={`font-mono text-[0.6rem] uppercase tracking-[0.18em] ${
          dark ? "text-[#f0ebde]/60" : "text-ink-3"
        }`}
      >
        {title}
      </span>
    </div>
  );
}

function Line({ w, tone = "base" }: { w: string; tone?: "base" | "soft" | "strong" }) {
  const tones = {
    base: "bg-ink/35",
    soft: "bg-ink/15",
    strong: "bg-ink/60",
  };
  return <span className={`block h-1.5 ${tones[tone]}`} style={{ width: w }} />;
}

function Dot({ tone = "line" }: { tone?: "line" | "accent" }) {
  return (
    <span
      className={`h-1.5 w-1.5 shrink-0 ${tone === "accent" ? "bg-ink" : "bg-ink/30"}`}
    />
  );
}

/* ---------------------------------- variants --------------------------------- */

function Dashboard() {
  return (
    <div className="flex h-full flex-col bg-bg">
      <Chrome title="members / overview" />
      <div className="flex min-h-0 flex-1">
        <div className="flex w-24 shrink-0 flex-col gap-3 border-r border-ink/20 p-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2">
              <Dot tone={i === 0 ? "accent" : "line"} />
              <Line w={i === 0 ? "100%" : "70%"} tone={i === 0 ? "strong" : "base"} />
            </div>
          ))}
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-4 p-4">
          <div className="grid grid-cols-3 gap-3">
            {["4,182", "312", "96.4k"].map((v, i) => (
              <div key={i} className="border border-ink/30 p-3">
                <span className="block font-mono text-sm text-ink">{v}</span>
                <Line w="60%" tone="soft" />
              </div>
            ))}
          </div>
          <div className="min-h-0 flex-1 space-y-2.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-3 border border-ink/20 px-3 py-2">
                <Dot tone={i % 2 ? "accent" : "line"} />
                <Line w="34%" tone={i === 1 ? "strong" : "base"} />
                <span className="ml-auto font-mono text-[0.62rem] text-ink-3">#{1040 + i * 7}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Ledger() {
  const rows = [
    { ref: "TX-90412", type: "CREDIT", amt: "+ 2,500", accent: false },
    { ref: "TX-90413", type: "DEBIT", amt: "− 800", accent: false },
    { ref: "TX-90414", type: "FEE", amt: "− 45", accent: true },
    { ref: "TX-90415", type: "CREDIT", amt: "+ 1,250", accent: false },
    { ref: "TX-90416", type: "DEBIT", amt: "− 300", accent: false },
  ];
  return (
    <div className="flex h-full flex-col bg-bg">
      <Chrome title="ledger / transactions" />
      <div className="grid grid-cols-[1fr_auto_auto] gap-x-6 border-b border-ink/25 px-5 py-2.5">
        {["reference", "type", "amount"].map((h) => (
          <span key={h} className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-ink-3">
            {h}
          </span>
        ))}
      </div>
      <div className="flex-1 space-y-1.5 p-4">
        {rows.map((r) => (
          <div
            key={r.ref}
            className={`grid grid-cols-[1fr_auto_auto] items-center gap-x-6 border px-4 py-2 ${
              r.accent ? "border-ink bg-accent-soft" : "border-ink/20"
            }`}
          >
            <span className="font-mono text-[0.66rem] text-ink-2">{r.ref}</span>
            <span
              className={`font-mono text-[0.58rem] tracking-[0.14em] ${
                r.accent ? "text-ink" : "text-ink-3"
              }`}
            >
              {r.type}
            </span>
            <span className="text-right font-mono text-[0.66rem] text-ink">{r.amt}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-ink/25 px-5 py-2.5">
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-ink-3">
          balance derived from ledger
        </span>
        <span className="font-mono text-[0.7rem] text-ink">2,605.00</span>
      </div>
    </div>
  );
}

function Payments() {
  return (
    <div className="flex h-full flex-col bg-bg">
      <Chrome title="payments / invoice monitor" />
      <div className="flex-1 p-4">
        <div className="border border-ink/30 p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.66rem] text-ink">INV-2041</span>
            <span className="inline-flex items-center gap-2 border border-ink bg-accent-soft px-2.5 py-1">
              <span className="h-1.5 w-1.5 bg-ink" />
              <span className="font-mono text-[0.56rem] uppercase tracking-[0.16em] text-ink">
                confirming
              </span>
            </span>
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="font-mono text-[0.62rem] text-ink-3">expected</span>
            <span className="font-mono text-sm text-ink">0.0240 BTC</span>
          </div>
          <div className="mt-3 flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-1.5 flex-1 bg-ink" />
            ))}
            <span className="h-1.5 flex-1 bg-ink/15" />
            <span className="ml-2 font-mono text-[0.6rem] text-ink-2">3 / 4 conf</span>
          </div>
        </div>
        <div className="mt-3 border border-ink/20 px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.6rem] text-ink-3">tx</span>
            <span className="font-mono text-[0.62rem] text-ink-2">3f9a…c41e</span>
          </div>
          <div className="mt-1.5 flex items-center justify-between">
            <span className="font-mono text-[0.6rem] text-ink-3">block</span>
            <span className="font-mono text-[0.62rem] text-ink-2">812,340</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Branches() {
  const branches = [
    { code: "ISB", w: "72%" },
    { code: "LHR", w: "54%" },
    { code: "KHI", w: "61%" },
    { code: "FSD", w: "38%" },
  ];
  return (
    <div className="flex h-full flex-col bg-bg">
      <Chrome title="operations / branches" />
      <div className="grid flex-1 grid-cols-2 gap-3 p-4">
        {branches.map((b) => (
          <div key={b.code} className="flex flex-col justify-between border border-ink/30 p-3.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.68rem] tracking-[0.14em] text-ink">{b.code}</span>
              <Dot tone={b.code === "ISB" ? "accent" : "line"} />
            </div>
            <div className="mt-3 space-y-1.5">
              <span className="block h-1.5 bg-ink/50" style={{ width: b.w }} />
              <span className="block h-1.5 bg-ink/15" style={{ width: "82%" }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mx-4 mb-4 flex items-center gap-3 border border-ink bg-accent-soft px-4 py-2.5">
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-ink">
          transfer
        </span>
        <span className="h-px flex-1 bg-ink/40" />
        <span className="font-mono text-[0.6rem] text-ink-2">ISB → KHI · STK-2847</span>
      </div>
    </div>
  );
}

function Infra() {
  return (
    <div className="flex h-full flex-col bg-deep text-[#f0ebde]">
      <Chrome title="vps / docker compose" dark />
      <div className="bg-graph-ink flex flex-1 flex-col justify-center gap-5 p-5">
        <div className="flex items-stretch gap-3">
          {[
            { name: "nginx", note: ":443" },
            { name: "api", note: "express" },
            { name: "mysql", note: "volume" },
          ].map((s, i) => (
            <div key={s.name} className="flex flex-1 items-center gap-3">
              <div
                className={`flex-1 border p-3 ${
                  i === 1 ? "border-[#f0ebde] bg-[#f0ebde]/10" : "border-[rgb(240_235_222/0.3)] bg-deep-2"
                }`}
              >
                <span className="block font-mono text-[0.64rem] text-[#f0ebde]">{s.name}</span>
                <span className="mt-1 block font-mono text-[0.55rem] text-[#f0ebde]/55">{s.note}</span>
              </div>
              {i < 2 && <span className="h-px w-3 shrink-0 bg-[rgb(240_235_222/0.3)]" />}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {[".env", "volumes/mysql", "certbot", "net: app-proxy"].map((c) => (
            <span
              key={c}
              className="border border-[rgb(240_235_222/0.3)] px-2 py-1 font-mono text-[0.55rem] text-[#f0ebde]/55"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="border border-[rgb(240_235_222/0.3)] bg-deep-2 px-3.5 py-2.5">
          <span className="font-mono text-[0.62rem]">
            <span className="text-[#f0ebde]">$</span>
            <span className="text-[#f0ebde]/60"> docker compose up -d --build</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Analytics() {
  const bars = [42, 68, 55, 82, 47, 90, 64, 74];
  return (
    <div className="flex h-full flex-col bg-bg">
      <Chrome title="admin / analytics" />
      <div className="flex-1 p-4">
        <div className="flex h-[52%] items-end gap-2 border-b border-ink/25 pb-px">
          {bars.map((h, i) => (
            <div key={i} className="flex h-full flex-1 items-end">
              <span
                className={`w-full ${i === 5 ? "bg-ink" : "bg-ink/30"}`}
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {[
            { label: "users", val: "1,284" },
            { label: "pending approvals", val: "17" },
          ].map((m) => (
            <div key={m.label} className="flex items-center justify-between border border-ink/20 px-3.5 py-2">
              <Line w="36%" tone="soft" />
              <span className="font-mono text-[0.64rem] text-ink">{m.val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Desktop() {
  return (
    <div className="flex h-full flex-col bg-deep text-[#f0ebde]">
      <Chrome title="remote / xfce desktop" dark />
      <div className="bg-graph-ink relative flex-1 overflow-hidden">
        <div className="absolute inset-x-4 top-3 flex items-center gap-3 border border-[rgb(240_235_222/0.35)] bg-deep-2 px-3 py-2">
          <span className="font-mono text-[0.55rem] text-[#f0ebde]/55">terminal — abid@vps</span>
          <span className="ml-auto flex gap-1">
            <span className="h-1.5 w-1.5 bg-[rgb(240_235_222/0.3)]" />
            <span className="h-1.5 w-1.5 bg-[#f0ebde]" />
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 border-t border-[rgb(240_235_222/0.25)] bg-deep-2/90 px-4 py-2.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`h-5 w-5 border ${
                i === 1 ? "border-[#f0ebde] bg-[#f0ebde]/25" : "border-[rgb(240_235_222/0.3)] bg-deep"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Catalog() {
  return (
    <div className="flex h-full flex-col bg-bg">
      <Chrome title="products / catalog" />
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 flex-1 items-center gap-2 border border-ink/30 px-3">
            <span className="h-1.5 w-1.5 bg-ink/30" />
            <Line w="40%" tone="soft" />
          </div>
          <span className="flex h-8 items-center bg-ink px-3.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-bg">
            add
          </span>
        </div>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2.5 p-4">
        {["SKU-114", "SKU-208", "SKU-233", "SKU-251", "SKU-267", "SKU-299"].map((sku, i) => (
          <div key={sku} className="flex flex-col overflow-hidden border border-ink/30">
            <span className={`h-10 w-full ${i === 2 ? "bg-ink/60" : "bg-ink/10"}`} />
            <div className="flex-1 space-y-1.5 p-2.5">
              <Line w="80%" tone="soft" />
              <span className="block font-mono text-[0.52rem] text-ink-3">{sku}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Terminal() {
  return (
    <div className="flex h-full flex-col bg-deep text-[#f0ebde]">
      <Chrome title="cron / maintenance" dark />
      <div className="flex-1 space-y-2.5 p-5 font-mono text-[0.64rem] leading-relaxed">
        <p>
          <span className="text-[#f0ebde]">$</span> <span className="text-[#f0ebde]">./db-backup.sh</span>
          <span className="text-[#f0ebde]/55"> --retention 14</span>
        </p>
        <p className="text-[#f0ebde]/55">dumping app_db … <span className="text-[#f0ebde]/90">done</span></p>
        <p className="text-[#f0ebde]/55">rotating archive … <span className="text-[#f0ebde]/90">14 kept</span></p>
        <p>
          <span className="text-[#f0ebde]">$</span> <span className="text-[#f0ebde]">./cleanup-logs.sh</span>
        </p>
        <p className="text-[#f0ebde]/55">nginx · journal · tmp … <span className="text-[#f0ebde]/90">cleared</span></p>
        <p>
          <span className="text-[#f0ebde]">$</span> <span className="text-[#f0ebde]">./health-check.sh</span>
        </p>
        <p className="text-[#f0ebde]/55">
          disk <span className="text-[#f0ebde]/90">ok</span> · services <span className="text-[#f0ebde]/90">running</span>
        </p>
        <p className="text-[#f0ebde]/55">
          next run <span className="text-[#f0ebde]/90">02:00 UTC</span>
        </p>
      </div>
    </div>
  );
}

function LocalAI() {
  return (
    <div className="flex h-full flex-col bg-bg">
      <Chrome title="self-hosted / local llm" />
      <div className="flex min-h-0 flex-1">
        <div className="flex w-28 shrink-0 flex-col gap-2.5 border-r border-ink/20 p-3.5">
          <span className="font-mono text-[0.55rem] uppercase tracking-[0.16em] text-ink-3">model</span>
          <span className="border border-ink bg-accent-soft px-2 py-1 font-mono text-[0.58rem] text-ink">
            qwen · local
          </span>
          <span className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-ink-3">quant</span>
          <div className="flex gap-1">
            {["q4", "q5", "q8"].map((q) => (
              <span
                key={q}
                className={`flex-1 border py-0.5 text-center font-mono text-[0.52rem] ${
                  q === "q5" ? "border-ink text-ink" : "border-ink/25 text-ink-3"
                }`}
              >
                {q}
              </span>
            ))}
          </div>
          <span className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-ink-3">ctx</span>
          <div className="h-1.5 bg-ink/15">
            <span className="block h-1.5 w-2/3 bg-ink" />
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-3.5">
          <div className="max-w-[85%] self-end border border-ink/25 bg-accent-soft px-3 py-2">
            <Line w="90%" tone="soft" />
          </div>
          <div className="max-w-[85%] self-start border border-ink/30 bg-bg px-3 py-2">
            <Line w="86%" tone="soft" />
            <span className="mt-1.5 block"><Line w="60%" tone="soft" /></span>
          </div>
          <div className="flex items-center gap-1.5 pl-1">
            <span className="h-1.5 w-1.5 bg-ink" />
            <span className="h-1.5 w-1.5 bg-ink/30" />
            <span className="h-1.5 w-1.5 bg-ink/15" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Market terminal — flat candlesticks + volume strip + depth rail.
   Values are fixed (decorative, aria-hidden), never random: stable SSR. */
const CANDLES: { body: number; wick: number; up: boolean }[] = [
  { body: 16, wick: 34, up: true },
  { body: 22, wick: 40, up: true },
  { body: 12, wick: 30, up: false },
  { body: 18, wick: 36, up: true },
  { body: 10, wick: 26, up: false },
  { body: 20, wick: 42, up: true },
  { body: 24, wick: 46, up: true },
  { body: 14, wick: 32, up: false },
  { body: 8, wick: 22, up: false },
  { body: 17, wick: 38, up: true },
  { body: 23, wick: 44, up: true },
  { body: 11, wick: 28, up: false },
  { body: 19, wick: 40, up: true },
  { body: 26, wick: 50, up: true },
  { body: 13, wick: 30, up: false },
  { body: 21, wick: 42, up: true },
];

const VOLUMES = [30, 55, 40, 70, 25, 60, 45, 80, 35, 50, 65, 30, 58, 75, 42, 68];

const DEPTH: { w: string; tone: "base" | "soft" | "strong" }[] = [
  { w: "85%", tone: "base" },
  { w: "62%", tone: "soft" },
  { w: "74%", tone: "base" },
  { w: "48%", tone: "soft" },
  { w: "90%", tone: "strong" },
  { w: "58%", tone: "soft" },
];

function Market() {
  return (
    <div className="flex h-full flex-col bg-bg">
      <Chrome title="market terminal · btc/usdt" />
      {/* Ticker row */}
      <div className="flex items-center gap-3 border-b border-ink/20 px-4 py-2">
        <span className="border border-ink bg-ink px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-bg">
          BTC / USDT
        </span>
        <span className="h-1.5 w-1.5 bg-ink" aria-hidden="true" />
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-ink-3">
          live · binance spot
        </span>
        <span className="ml-auto hidden gap-1 sm:flex" aria-hidden="true">
          {["1m", "5m", "1h", "1d"].map((tf, i) => (
            <span
              key={tf}
              className={`px-1.5 py-0.5 font-mono text-[0.52rem] ${
                i === 0 ? "border border-ink text-ink" : "text-ink-3"
              }`}
            >
              {tf}
            </span>
          ))}
        </span>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Chart field */}
        <div className="flex min-w-0 flex-1 flex-col border-r border-ink/20">
          <div className="flex min-h-0 flex-1 items-end gap-[3px] px-4 pt-4">
            {CANDLES.map((c, i) => (
              <div key={i} className="relative flex h-full flex-1 flex-col justify-end">
                <span
                  className="mx-auto w-px bg-ink/40"
                  style={{ height: `${c.wick}%` }}
                  aria-hidden="true"
                />
                <span
                  className={`mx-auto w-[62%] ${
                    c.up ? "bg-ink" : "border border-ink/60 bg-bg"
                  }`}
                  style={{ height: `${c.body}%` }}
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
          {/* Volume strip */}
          <div className="flex h-10 items-end gap-[3px] border-t border-ink/15 px-4 py-1.5">
            {VOLUMES.map((v, i) => (
              <span key={i} className="flex-1 bg-ink/25" style={{ height: `${v}%` }} />
            ))}
          </div>
        </div>

        {/* Depth rail */}
        <div className="hidden w-24 shrink-0 flex-col gap-2.5 p-3 sm:flex" aria-hidden="true">
          <span className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-ink-3">
            order book
          </span>
          {DEPTH.map((d, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <Dot tone={i === 4 ? "accent" : "line"} />
              <Line w={d.w} tone={d.tone} />
            </div>
          ))}
          <span className="mt-2 h-px w-full bg-ink/15" />
          <span className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-ink-3">
            trades
          </span>
          {DEPTH.slice(0, 3).map((d, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <Dot tone={i % 2 === 0 ? "accent" : "line"} />
              <Line w={d.w} tone="soft" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const variants = {
  dashboard: Dashboard,
  ledger: Ledger,
  payments: Payments,
  branches: Branches,
  infra: Infra,
  analytics: Analytics,
  desktop: Desktop,
  catalog: Catalog,
  terminal: Terminal,
  ai: LocalAI,
  market: Market,
} as const;

export function ProjectMockup({ type }: { type: keyof typeof variants }) {
  const Variant = variants[type];
  return (
    <div aria-hidden="true" className="h-full w-full overflow-hidden">
      <Variant />
    </div>
  );
}
