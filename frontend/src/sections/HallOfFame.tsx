"use client";

import { useRef, useState } from "react";

const TOPPERS = [
  {
    id: 1,
    name: "Aarav Sharma",
    class: "Class 12th",
    score: "97.4%",
    stream: "Science (PCM)",
    achievement: "IIT-JEE Advanced",
    rank: "AIR 284",
    initials: "AS",
    avatarColor: "#1e3a6e",
  },
  {
    id: 2,
    name: "Priya Verma",
    class: "Class 12th",
    score: "98.2%",
    stream: "Science (PCB)",
    achievement: "NEET UG",
    rank: "AIR 156",
    initials: "PV",
    avatarColor: "#2d1b69",
  },
  {
    id: 3,
    name: "Rohan Gupta",
    class: "Class 10th",
    score: "96.8%",
    stream: "All Subjects",
    achievement: "CBSE Board",
    rank: "State Topper",
    initials: "RG",
    avatarColor: "#1a4731",
  },
  {
    id: 4,
    name: "Sneha Patel",
    class: "Class 12th",
    score: "95.6%",
    stream: "Commerce",
    achievement: "CA Foundation",
    rank: "All India 1st",
    initials: "SP",
    avatarColor: "#5c1a1a",
  },
  {
    id: 5,
    name: "Arjun Mehta",
    class: "Class 11th",
    score: "94.0%",
    stream: "Science (PCM)",
    achievement: "JEE Mains",
    rank: "99.2 Percentile",
    initials: "AM",
    avatarColor: "#3d2b00",
  },
  {
    id: 6,
    name: "Kavya Singh",
    class: "Class 10th",
    score: "99.0%",
    stream: "All Subjects",
    achievement: "CBSE Board",
    rank: "School Topper",
    initials: "KS",
    avatarColor: "#1a3a4a",
  },
];

const STREAM_COLORS: Record<string, { bg: string; text: string }> = {
  "Science (PCM)": { bg: "rgba(10,31,68,0.08)", text: "#0A1F44" },
  "Science (PCB)": { bg: "rgba(22,163,74,0.1)", text: "#16A34A" },
  "All Subjects": { bg: "rgba(212,175,55,0.12)", text: "#9a7a00" },
  Commerce: { bg: "rgba(99,102,241,0.1)", text: "#4338ca" },
};

function TopperCard({ topper }: { topper: (typeof TOPPERS)[0] }) {
  const [hovered, setHovered] = useState(false);
  const streamStyle = STREAM_COLORS[topper.stream] ?? { bg: "rgba(10,31,68,0.08)", text: "#0A1F44" };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink: 0,
        width: "260px",
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: hovered
          ? "0 20px 48px rgba(10,31,68,0.16), 0 4px 12px rgba(10,31,68,0.08)"
          : "0 4px 20px rgba(10,31,68,0.08)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        cursor: "default",
        position: "relative",
      }}
    >
      {/* Navy top accent bar */}
      <div
        style={{
          height: "4px",
          background: "linear-gradient(90deg, #0A1F44 0%, #D4AF37 100%)",
        }}
      />

      <div style={{ padding: "1.5rem" }}>
        {/* Circular photo placeholder */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
          <div
            role="img"
            aria-label="topper-photo-placeholder"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: topper.avatarColor,
              border: "3px solid #D4AF37",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 16px rgba(212,175,55,0.3)",
              position: "relative",
            }}
          >
            <span
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 800,
                fontSize: "1.4rem",
                color: "#D4AF37",
                letterSpacing: "0.02em",
              }}
            >
              {topper.initials}
            </span>
            {/* Small camera icon overlay */}
            <div
              style={{
                position: "absolute",
                bottom: -2,
                right: -2,
                width: "22px",
                height: "22px",
                borderRadius: "50%",
                backgroundColor: "#F8F9FA",
                border: "2px solid #D4AF37",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="13" r="4" stroke="#D4AF37" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Name + class */}
        <div style={{ textAlign: "center", marginBottom: "0.75rem" }}>
          <h3
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: "1rem",
              color: "#0A1F44",
              margin: "0 0 0.2rem",
            }}
          >
            {topper.name}
          </h3>
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.78rem",
              color: "#64748b",
              margin: 0,
            }}
          >
            {topper.class}
          </p>
        </div>

        {/* Score — most prominent */}
        <div
          style={{
            textAlign: "center",
            padding: "0.75rem 0",
            borderTop: "1px solid #f1f5f9",
            borderBottom: "1px solid #f1f5f9",
            marginBottom: "0.85rem",
          }}
        >
          <div
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 900,
              fontSize: "2.2rem",
              color: "#D4AF37",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            {topper.score}
          </div>
          <div
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.7rem",
              color: "#94a3b8",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginTop: "0.2rem",
            }}
          >
            Overall Score
          </div>
        </div>

        {/* Achievement + Rank */}
        <div style={{ textAlign: "center", marginBottom: "0.85rem" }}>
          <div
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: "0.82rem",
              color: "#0A1F44",
            }}
          >
            {topper.achievement}
          </div>
          <div
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.75rem",
              color: "#16A34A",
              fontWeight: 600,
              marginTop: "0.15rem",
            }}
          >
            🏆 {topper.rank}
          </div>
        </div>

        {/* Stream tag */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.72rem",
              fontWeight: 600,
              backgroundColor: streamStyle.bg,
              color: streamStyle.text,
              padding: "0.3rem 0.75rem",
              borderRadius: "9999px",
              letterSpacing: "0.04em",
            }}
          >
            {topper.stream}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HallOfFame() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    const el = sliderRef.current;
    if (!el) return;
    const amount = 300;
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  return (
    <section
      id="results"
      style={{
        backgroundColor: "#F8F9FA",
        padding: "5rem 0 6rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background pattern */}
      <svg
        aria-hidden="true"
        style={{ position: "absolute", top: 0, right: 0, opacity: 0.4, pointerEvents: "none" }}
        width="400" height="400" viewBox="0 0 400 400"
      >
        <circle cx="350" cy="50" r="200" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="6 10" />
        <circle cx="350" cy="50" r="130" fill="none" stroke="#0A1F44" strokeWidth="0.5" strokeDasharray="4 8" />
      </svg>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          {/* Label pill */}
          <div style={{ display: "inline-flex", marginBottom: "0.75rem" }}>
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontWeight: 600,
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#D4AF37",
                backgroundColor: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.25)",
                padding: "0.3rem 0.85rem",
                borderRadius: "9999px",
              }}
            >
              🏆 &nbsp;Student Achievements
            </span>
          </div>

          <h2
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "#0A1F44",
              margin: "0 0 0.75rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Hall of{" "}
            <span style={{ color: "#D4AF37", position: "relative", display: "inline-block" }}>
              Fame
              <svg
                style={{ position: "absolute", bottom: "-4px", left: 0, width: "100%" }}
                viewBox="0 0 120 6" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
              >
                <path d="M0,3 Q30,0 60,3 Q90,6 120,3" stroke="#D4AF37" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "1rem",
              color: "#64748b",
              margin: 0,
              maxWidth: "480px",
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.6,
            }}
          >
            Consistent results, year after year.{" "}
            <strong style={{ color: "#0A1F44" }}>Our students speak for themselves.</strong>
          </p>
        </div>

        {/* ── Slider Controls (desktop) + Slider ── */}
        <div style={{ position: "relative" }}>

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            style={{
              position: "absolute",
              left: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: canScrollLeft ? "#0A1F44" : "#e2e8f0",
              border: "none",
              cursor: canScrollLeft ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: canScrollLeft ? "0 4px 16px rgba(10,31,68,0.25)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke={canScrollLeft ? "#D4AF37" : "#94a3b8"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            style={{
              position: "absolute",
              right: "-20px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              backgroundColor: canScrollRight ? "#0A1F44" : "#e2e8f0",
              border: "none",
              cursor: canScrollRight ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: canScrollRight ? "0 4px 16px rgba(10,31,68,0.25)" : "none",
              transition: "all 0.2s ease",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke={canScrollRight ? "#D4AF37" : "#94a3b8"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* ── Card Slider Track ── */}
          <div
            ref={sliderRef}
            onScroll={onScroll}
            style={{
              display: "flex",
              gap: "1.5rem",
              overflowX: "auto",
              paddingBottom: "1.5rem",
              paddingTop: "0.5rem",
              scrollbarWidth: "none",        /* Firefox */
              msOverflowStyle: "none",       /* IE/Edge */
              WebkitOverflowScrolling: "touch",
            }}
          >
            {TOPPERS.map((topper) => (
              <TopperCard key={topper.id} topper={topper} />
            ))}
          </div>
        </div>

        {/* ── Bottom Trust Bar ── */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "3rem",
            flexWrap: "wrap",
            paddingTop: "2rem",
            borderTop: "1px solid #e2e8f0",
          }}
        >
          {[
            { value: "500+", label: "Total Selections" },
            { value: "8 Yrs", label: "Consistent Results" },
            { value: "12+", label: "Subjects Covered" },
            { value: "98%", label: "Avg. Pass Rate" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 800,
                  fontSize: "1.6rem",
                  color: "#D4AF37",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "0.75rem",
                  color: "#64748b",
                  marginTop: "0.3rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar in WebKit */}
      <style>{`
        div[style*="overflow-x: auto"]::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
