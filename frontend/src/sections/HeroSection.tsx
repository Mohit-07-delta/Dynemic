"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0A1F44",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* ── Background Decorative SVG Shapes ── */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large top-right gold circle */}
        <circle cx="85%" cy="-5%" r="320" fill="rgba(212,175,55,0.05)" />
        {/* Mid-right ring */}
        <circle cx="90%" cy="55%" r="200" fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="60" />
        {/* Bottom-left accent blob */}
        <ellipse cx="5%" cy="95%" rx="280" ry="180" fill="rgba(212,175,55,0.04)" />
        {/* Top-left small diamond */}
        <rect x="6%" y="12%" width="60" height="60" rx="10" fill="rgba(212,175,55,0.07)" transform="rotate(45 6% 12%)" />
        {/* Dot grid pattern — top right quadrant */}
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => (
            <circle
              key={`dot-${row}-${col}`}
              cx={`${62 + col * 4.5}%`}
              cy={`${8 + row * 10}%`}
              r="1.5"
              fill="rgba(212,175,55,0.15)"
            />
          ))
        )}
        {/* Bottom horizontal line accent */}
        <line x1="0" y1="99%" x2="100%" y2="99%" stroke="rgba(212,175,55,0.1)" strokeWidth="1" />
      </svg>

      {/* ── Content Container ── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "8rem 1.5rem 5rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="hero-grid"
      >
        {/* ── LEFT: Text Content ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Badge */}
          <div style={{ display: "inline-flex", width: "fit-content" }}>
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                color: "#D4AF37",
                backgroundColor: "rgba(212,175,55,0.12)",
                border: "1px solid rgba(212,175,55,0.25)",
                padding: "0.35rem 0.9rem",
                borderRadius: "9999px",
                textTransform: "uppercase",
              }}
            >
              🏆 &nbsp;Trusted by 2000+ Students
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              lineHeight: 1.12,
              color: "#ffffff",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Building{" "}
            <span
              style={{
                color: "#D4AF37",
                position: "relative",
                display: "inline-block",
              }}
            >
              Toppers,
              {/* Gold underline squiggle */}
              <svg
                style={{ position: "absolute", bottom: "-6px", left: 0, width: "100%" }}
                viewBox="0 0 200 8"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,4 Q25,0 50,4 Q75,8 100,4 Q125,0 150,4 Q175,8 200,4"
                  stroke="#D4AF37"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            Not Just Students.
          </h1>

          {/* Sub-headline */}
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 400,
              fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
              lineHeight: 1.7,
              color: "#94a3b8",
              margin: 0,
              maxWidth: "480px",
            }}
          >
            With <strong style={{ color: "#e2e8f0" }}>10+ years</strong> of experienced faculty and a proven
            track record of{" "}
            <strong style={{ color: "#D4AF37" }}>500+ selections</strong> in competitive exams — we shape
            future engineers, doctors, and leaders.
          </p>

          {/* Stats Row */}
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {[
              { value: "500+", label: "Selections" },
              { value: "10+", label: "Yrs Experience" },
              { value: "98%", label: "Success Rate" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 800,
                    fontSize: "1.75rem",
                    color: "#D4AF37",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "0.78rem",
                    color: "#64748b",
                    marginTop: "0.25rem",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", paddingTop: "0.5rem" }}>
            {/* Primary — Gold */}
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: "0.95rem",
                backgroundColor: "#D4AF37",
                color: "#0A1F44",
                padding: "0.85rem 2rem",
                borderRadius: "9999px",
                textDecoration: "none",
                letterSpacing: "0.02em",
                boxShadow: "0 6px 24px rgba(212,175,55,0.4)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#E8C84A";
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 10px 32px rgba(212,175,55,0.55)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.backgroundColor = "#D4AF37";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 6px 24px rgba(212,175,55,0.4)";
              }}
            >
              Join New Batch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="#0A1F44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            {/* Secondary — Outline */}
            <a
              href="#results"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                fontSize: "0.95rem",
                backgroundColor: "transparent",
                color: "#ffffff",
                padding: "0.85rem 2rem",
                borderRadius: "9999px",
                textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.3)",
                letterSpacing: "0.02em",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "#D4AF37";
                el.style.color = "#D4AF37";
                el.style.backgroundColor = "rgba(212,175,55,0.07)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(255,255,255,0.3)";
                el.style.color = "#ffffff";
                el.style.backgroundColor = "transparent";
              }}
            >
              View Results
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12M8 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── RIGHT: Placeholder Image Area ── */}
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}
        >
          <div style={{ position: "relative" }}>
            {/* Gold offset border frame */}
            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                right: "-16px",
                bottom: "-16px",
                borderRadius: "20px",
                border: "2px solid rgba(212,175,55,0.3)",
                zIndex: 0,
              }}
            />

            {/* Image placeholder */}
            <div
              aria-label="student-hero-placeholder.jpg"
              role="img"
              style={{
                position: "relative",
                zIndex: 1,
                aspectRatio: "4 / 5",
                borderRadius: "20px",
                backgroundColor: "#132A5E",
                border: "1px solid rgba(212,175,55,0.15)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                overflow: "hidden",
              }}
            >
              {/* Decorative pattern inside placeholder */}
              <svg
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.3 }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern id="heroGrid" width="32" height="32" patternUnits="userSpaceOnUse">
                    <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(212,175,55,0.3)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#heroGrid)" />
              </svg>

              {/* Placeholder icon */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(212,175,55,0.15)",
                  border: "2px solid rgba(212,175,55,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="12" cy="7" r="4" stroke="#D4AF37" strokeWidth="1.5" />
                </svg>
              </div>
              <p
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "0.78rem",
                  color: "rgba(212,175,55,0.5)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  position: "relative",
                  zIndex: 1,
                  margin: 0,
                }}
              >
                student-hero-placeholder.jpg
              </p>

              {/* Bottom badge inside image */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.5rem",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "rgba(10,31,68,0.85)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(212,175,55,0.3)",
                  borderRadius: "12px",
                  padding: "0.75rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  whiteSpace: "nowrap",
                  zIndex: 2,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(212,175,55,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>🎓</span>
                </div>
                <div>
                  <div style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: "0.85rem", color: "#fff" }}>
                    Batch 2025 Results
                  </div>
                  <div style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.72rem", color: "#D4AF37" }}>
                    98% students cleared exams
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.4rem",
          opacity: 0.5,
        }}
      >
        <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.65rem", color: "#94a3b8", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "rgba(212,175,55,0.4)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Responsive grid styles */}
      <style>{`
        .hero-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
            padding-top: 6rem !important;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
