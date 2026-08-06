export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">

      {/* ── Nav ── */}
      <nav
        style={{ backgroundColor: "var(--color-primary-navy)" }}
        className="w-full px-8 py-4 flex items-center justify-between shadow-md"
      >
        <span
          style={{ fontFamily: "var(--font-heading)", color: "var(--color-accent-gold)" }}
          className="text-xl font-bold tracking-wide"
        >
          DSC
        </span>
        <div className="flex gap-6">
          {["Home", "Courses", "About", "Contact"].map((item) => (
            <span
              key={item}
              className="text-sm font-medium cursor-pointer transition-colors"
              style={{ color: "#e2e8f0" }}
            >
              {item}
            </span>
          ))}
        </div>
      </nav>

      {/* ── Hero ── */}
      <section
        className="flex flex-col items-center justify-center flex-1 px-6 py-24 text-center"
        style={{ backgroundColor: "var(--color-primary-navy)" }}
      >
        {/* Gold accent bar */}
        <div
          className="w-16 h-1 rounded-full mb-6"
          style={{ backgroundColor: "var(--color-accent-gold)" }}
        />

        <h1
          style={{
            fontFamily: "var(--font-heading)",
            color: "#ffffff",
            lineHeight: 1.15,
          }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 max-w-3xl"
        >
          Hello{" "}
          <span style={{ color: "var(--color-accent-gold)" }}>
            Dynamic Solution Classes
          </span>
        </h1>

        <p
          style={{ color: "#94a3b8", fontFamily: "var(--font-body)" }}
          className="text-lg max-w-xl mt-2 mb-10"
        >
          Scaffold confirmed. Design system ✅ · Tailwind v4 tokens ✅ · Next.js 16 ✅ · Express + SQLite ✅
        </p>

        {/* CTA Button */}
        <button
          style={{
            backgroundColor: "var(--color-accent-gold)",
            color: "var(--color-primary-navy)",
            fontFamily: "var(--font-heading)",
            boxShadow: "var(--shadow-gold)",
          }}
          className="px-8 py-3 rounded-lg font-bold text-base tracking-wide transition-all hover:brightness-110 active:scale-95"
        >
          Explore Courses →
        </button>

        {/* Token chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {[
            { label: "Primary Navy", hex: "#0A1F44", bg: "#0A1F44", text: "#D4AF37" },
            { label: "Accent Gold", hex: "#D4AF37", bg: "#D4AF37", text: "#0A1F44" },
            { label: "Off-white", hex: "#F8F9FA", bg: "#F8F9FA", text: "#0A1F44" },
            { label: "Trust Green", hex: "#16A34A", bg: "#16A34A", text: "#ffffff" },
          ].map((token) => (
            <div
              key={token.label}
              style={{ backgroundColor: token.bg, color: token.text }}
              className="px-4 py-2 rounded-full text-xs font-semibold shadow"
            >
              {token.label} · {token.hex}
            </div>
          ))}
        </div>
      </section>

      {/* ── Status Footer ── */}
      <footer
        style={{ backgroundColor: "var(--color-primary-navy-dark)", color: "#64748b" }}
        className="text-center py-4 text-xs"
      >
        Dynamic Solution Classes © 2025 · Scaffold v1.0 ·{" "}
        <span style={{ color: "var(--color-trust-green)" }}>All systems ready</span>
      </footer>

    </main>
  );
}
