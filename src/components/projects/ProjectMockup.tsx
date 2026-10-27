/**
 * ProjectMockup — abstract, hand-composed interface illustrations.
 * Each variant reflects the project's real functional domain using pure
 * layout primitives. Decorative only (aria-hidden) — no fake data claims.
 */

function Chrome({ title, dark = false }: { title: string; dark?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 border-b px-4 py-2.5 ${
        dark ? "border-deep-line" : "border-line"
      }`}
    >
      <div className="flex gap-1.5" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-accent/70" />
      </div>
      <span
        className={`font-mono text-[0.6rem] tracking-[0.18em] uppercase ${
          dark ? "text-ink-3" : "text-ink-3"
        }`}
      >
        {title}
      </span>
    </div>
  );
}

function Line({ w, tone = "base" }: { w: string; tone?: "base" | "soft" | "strong" }) {
  const tones = {
    base: "bg-line-strong/70",
    soft: "bg-line",
    strong: "bg-ink-2/50",
  };
  return <span className={`block h-1.5 rounded-full ${tones[tone]}`} style={{ width: w }} />;
}

function Dot({ tone = "line" }: { tone?: "line" | "accent" }) {
  return (
    <span
      className={`h-1.5 w-1.5 shrink-0 rounded-full ${tone === "accent" ? "bg-accent" : "bg-line-strong"}`}
    />
  );
}

/* ---------------------------------- variants --------------------------------- */

function Dashboard() {
  return (
    <div className="flex h-full flex-col bg-surface">
      <Chrome title="members / overview" />
      <div className="flex min-h-0 flex-1">
        <div className="flex w-24 shrink-0 flex-col gap-3 border-r border-line p-4">
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
              <div key={i} className="rounded-md border border-line p-3">
                <span className="block font-mono text-sm text-ink">{v}</span>
                <Line w="60%" tone="soft" />
              </div>
            ))}
          </div>
          <div className="min-h-0 flex-1 space-y-2.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-md border border-line/70 px-3 py-2"
              >
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
    <div className="flex h-full flex-col bg-surface">
      <Chrome title="ledger / transactions" />
      <div className="grid grid-cols-[1fr_auto_auto] gap-x-6 border-b border-line px-5 py-2.5">
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
            className={`grid grid-cols-[1fr_auto_auto] items-center gap-x-6 rounded-md border px-4 py-2 ${
              r.accent ? "border-accent/40 bg-accent-soft/60" : "border-line/70"
            }`}
          >
            <span className="font-mono text-[0.66rem] text-ink-2">{r.ref}</span>
            <span
              className={`font-mono text-[0.58rem] tracking-[0.14em] ${
                r.accent ? "text-accent-strong" : "text-ink-3"
              }`}
            >
              {r.type}
            </span>
            <span className="text-right font-mono text-[0.66rem] text-ink">{r.amt}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-line px-5 py-2.5">
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
    <div className="flex h-full flex-col bg-surface">
      <Chrome title="payments / invoice monitor" />
      <div className="flex-1 p-4">
        <div className="rounded-lg border border-line p-4">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[0.66rem] text-ink">INV-2041</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft/70 px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="font-mono text-[0.56rem] uppercase tracking-[0.16em] text-accent-strong">
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
              <span key={i} className="h-1 flex-1 rounded-full bg-accent" />
            ))}
            <span className="h-1 flex-1 rounded-full bg-line" />
            <span className="ml-2 font-mono text-[0.6rem] text-ink-2">3 / 4 conf</span>
          </div>
        </div>
        <div className="mt-3 rounded-lg border border-line/70 px-4 py-3">
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
    <div className="flex h-full flex-col bg-surface">
      <Chrome title="operations / branches" />
      <div className="grid flex-1 grid-cols-2 gap-3 p-4">
        {branches.map((b) => (
          <div key={b.code} className="flex flex-col justify-between rounded-lg border border-line p-3.5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.68rem] tracking-[0.14em] text-ink">{b.code}</span>
              <Dot tone={b.code === "ISB" ? "accent" : "line"} />
            </div>
            <div className="mt-3 space-y-1.5">
              <span className="block h-1 rounded-full bg-line-strong/60" style={{ width: b.w }} />
              <span className="block h-1 rounded-full bg-line" style={{ width: "82%" }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mx-4 mb-4 flex items-center gap-3 rounded-md border border-accent/35 bg-accent-soft/50 px-4 py-2.5">
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-accent-strong">
          transfer
        </span>
        <span className="h-px flex-1 bg-accent/40" />
        <span className="font-mono text-[0.6rem] text-ink-2">ISB → KHI · STK-2847</span>
      </div>
    </div>
  );
}

function Infra() {
  return (
    <div className="flex h-full flex-col bg-deep text-[#f2f2ef]">
      <Chrome title="vps / docker compose" dark />
      <div className="flex flex-1 flex-col justify-center gap-5 p-5">
        <div className="flex items-stretch gap-3">
          {[
            { name: "nginx", note: ":443" },
            { name: "api", note: "express" },
            { name: "mysql", note: "volume" },
          ].map((s, i) => (
            <div key={s.name} className="flex flex-1 items-center gap-3">
              <div
                className={`flex-1 rounded-lg border p-3 ${
                  i === 1 ? "border-accent/50 bg-accent/10" : "border-deep-line bg-deep-2"
                }`}
              >
                <span className="block font-mono text-[0.64rem] text-[#f2f2ef]">{s.name}</span>
                <span className="mt-1 block font-mono text-[0.55rem] text-[#a3a5a1]">{s.note}</span>
              </div>
              {i < 2 && <span className="h-px w-3 shrink-0 bg-deep-line" />}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {[".env", "volumes/mysql", "certbot", "net: app-proxy"].map((c) => (
            <span
              key={c}
              className="rounded border border-deep-line px-2 py-1 font-mono text-[0.55rem] text-[#a3a5a1]"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="rounded-md border border-deep-line bg-deep-2 px-3.5 py-2.5">
          <span className="font-mono text-[0.62rem]">
            <span className="text-accent">$</span>
            <span className="text-[#a3a5a1]"> docker compose up -d --build</span>
          </span>
        </div>
      </div>
    </div>
  );
}

function Analytics() {
  const bars = [42, 68, 55, 82, 47, 90, 64, 74];
  return (
    <div className="flex h-full flex-col bg-surface">
      <Chrome title="admin / analytics" />
      <div className="flex-1 p-4">
        <div className="flex h-[52%] items-end gap-2 border-b border-line pb-px">
          {bars.map((h, i) => (
            <div key={i} className="flex h-full flex-1 items-end">
              <span
                className={`w-full rounded-t-sm ${i === 5 ? "bg-accent" : "bg-line-strong/70"}`}
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
            <div key={m.label} className="flex items-center justify-between rounded-md border border-line/70 px-3.5 py-2">
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
    <div className="flex h-full flex-col bg-deep text-[#f2f2ef]">
      <Chrome title="remote / xfce desktop" dark />
      <div className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-2 via-deep to-[#2a2d2b]" />
        <div className="absolute left-4 right-4 top-3 flex items-center gap-3 rounded-md border border-deep-line/80 bg-deep-2/80 px-3 py-2">
          <span className="font-mono text-[0.55rem] text-[#a3a5a1]">terminal — abid@vps</span>
          <span className="ml-auto flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-deep-line" />
            <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 border-t border-deep-line/70 bg-deep-2/70 px-4 py-2.5 backdrop-blur-sm">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`h-5 w-5 rounded-md border ${
                i === 1 ? "border-accent/60 bg-accent/25" : "border-deep-line bg-deep/80"
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
    <div className="flex h-full flex-col bg-surface">
      <Chrome title="products / catalog" />
      <div className="px-4 pt-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 flex-1 items-center gap-2 rounded-md border border-line px-3">
            <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
            <Line w="40%" tone="soft" />
          </div>
          <span className="flex h-8 items-center rounded-md bg-ink px-3.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-bg">
            add
          </span>
        </div>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-2.5 p-4">
        {["SKU-114", "SKU-208", "SKU-233", "SKU-251", "SKU-267", "SKU-299"].map((sku, i) => (
          <div key={sku} className="flex flex-col overflow-hidden rounded-lg border border-line">
            <span className={`h-10 w-full ${i === 2 ? "bg-accent-soft" : "bg-line/70"}`} />
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
    <div className="flex h-full flex-col bg-deep text-[#f2f2ef]">
      <Chrome title="cron / maintenance" dark />
      <div className="flex-1 space-y-2.5 p-5 font-mono text-[0.64rem] leading-relaxed">
        <p>
          <span className="text-accent">$</span> <span className="text-[#f2f2ef]">./db-backup.sh</span>
          <span className="text-[#a3a5a1]"> --retention 14</span>
        </p>
        <p className="text-[#a3a5a1]">dumping app_db … <span className="text-[#d8d8d1]">done</span></p>
        <p className="text-[#a3a5a1]">rotating archive … <span className="text-[#d8d8d1]">14 kept</span></p>
        <p>
          <span className="text-accent">$</span> <span className="text-[#f2f2ef]">./cleanup-logs.sh</span>
        </p>
        <p className="text-[#a3a5a1]">nginx · journal · tmp … <span className="text-[#d8d8d1]">cleared</span></p>
        <p>
          <span className="text-accent">$</span> <span className="text-[#f2f2ef]">./health-check.sh</span>
        </p>
        <p className="text-[#a3a5a1]">
          disk <span className="text-[#d8d8d1]">ok</span> · services <span className="text-[#d8d8d1]">running</span>
        </p>
        <p className="text-[#a3a5a1]">
          next run <span className="text-[#d8d8d1]">02:00 UTC</span>
        </p>
      </div>
    </div>
  );
}

function LocalAI() {
  return (
    <div className="flex h-full flex-col bg-surface">
      <Chrome title="self-hosted / local llm" />
        <div className="flex min-h-0 flex-1">
          <div className="flex w-28 shrink-0 flex-col gap-2.5 border-r border-line p-3.5">
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.16em] text-ink-3">model</span>
            <span className="rounded border border-accent/40 bg-accent-soft/60 px-2 py-1 font-mono text-[0.58rem] text-accent-strong">
              qwen · local
            </span>
            <span className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-ink-3">quant</span>
            <div className="flex gap-1">
              {["q4", "q5", "q8"].map((q) => (
                <span
                  key={q}
                  className={`flex-1 rounded border py-0.5 text-center font-mono text-[0.52rem] ${
                    q === "q5" ? "border-ink/40 text-ink" : "border-line text-ink-3"
                  }`}
                >
                  {q}
                </span>
              ))}
            </div>
            <span className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-ink-3">ctx</span>
            <div className="h-1 rounded-full bg-line">
              <span className="block h-1 w-2/3 rounded-full bg-accent" />
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-3.5">
            <div className="max-w-[85%] self-end rounded-lg rounded-br-sm bg-line/60 px-3 py-2">
              <Line w="90%" tone="soft" />
            </div>
            <div className="max-w-[85%] self-start rounded-lg rounded-bl-sm border border-line bg-bg px-3 py-2">
              <Line w="86%" tone="soft" />
              <span className="mt-1.5 block"><Line w="60%" tone="soft" /></span>
            </div>
            <div className="flex items-center gap-1.5 pl-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
              <span className="h-1.5 w-1.5 rounded-full bg-line" />
            </div>
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
} as const;

export function ProjectMockup({ type }: { type: keyof typeof variants }) {
  const Variant = variants[type];
  return (
    <div aria-hidden="true" className="h-full w-full overflow-hidden rounded-xl">
      <Variant />
    </div>
  );
}
