"use client";

import { useState, useEffect } from "react";
import { X, ZoomIn, Camera } from "lucide-react";

type GalleryItem = {
  id: number;
  alt: string;
  caption: string;
  category: string;
  span: "tall" | "wide" | "square" | "big";
  bgFrom: string;
  bgTo: string;
  patternColor: string;
  emoji: string;
};

const GALLERY: GalleryItem[] = [
  {
    id: 1,
    alt: "classroom-session-1",
    caption: "Daily Classroom Sessions",
    category: "Academics",
    span: "wide",
    bgFrom: "#0A1F44",
    bgTo: "#132A5E",
    patternColor: "rgba(212,175,55,0.12)",
    emoji: "📖",
  },
  {
    id: 2,
    alt: "topper-felicitation-2025",
    caption: "Topper Felicitation 2025",
    category: "Achievements",
    span: "tall",
    bgFrom: "#1a3a1a",
    bgTo: "#2d5a2d",
    patternColor: "rgba(255,255,255,0.08)",
    emoji: "🏆",
  },
  {
    id: 3,
    alt: "test-environment-1",
    caption: "Weekly Test Series",
    category: "Academics",
    span: "square",
    bgFrom: "#2d1b69",
    bgTo: "#3d2b8a",
    patternColor: "rgba(212,175,55,0.1)",
    emoji: "📝",
  },
  {
    id: 4,
    alt: "republic-day-celebration-1",
    caption: "Republic Day Celebration 2026",
    category: "Events",
    span: "square",
    bgFrom: "#7c1d1d",
    bgTo: "#991f1f",
    patternColor: "rgba(255,200,100,0.12)",
    emoji: "🇮🇳",
  },
  {
    id: 5,
    alt: "science-lab-session-1",
    caption: "Hands-on Science Lab",
    category: "Academics",
    span: "big",
    bgFrom: "#0c3547",
    bgTo: "#0e4d68",
    patternColor: "rgba(100,200,255,0.1)",
    emoji: "🔬",
  },
  {
    id: 6,
    alt: "annual-prize-distribution-2025",
    caption: "Annual Prize Distribution",
    category: "Events",
    span: "wide",
    bgFrom: "#3d2800",
    bgTo: "#5c3d00",
    patternColor: "rgba(212,175,55,0.15)",
    emoji: "🎖️",
  },
  {
    id: 7,
    alt: "parent-teacher-meeting-1",
    caption: "Parent-Teacher Meeting",
    category: "Community",
    span: "square",
    bgFrom: "#1a1a4a",
    bgTo: "#252566",
    patternColor: "rgba(150,150,255,0.1)",
    emoji: "🤝",
  },
  {
    id: 8,
    alt: "independence-day-celebration-1",
    caption: "Independence Day 2025",
    category: "Events",
    span: "tall",
    bgFrom: "#003d1f",
    bgTo: "#005c2e",
    patternColor: "rgba(100,255,150,0.08)",
    emoji: "🎉",
  },
  {
    id: 9,
    alt: "doubt-clearing-session-1",
    caption: "One-on-One Doubt Clearing",
    category: "Academics",
    span: "square",
    bgFrom: "#2a1040",
    bgTo: "#3d1a5e",
    patternColor: "rgba(200,100,255,0.1)",
    emoji: "💡",
  },
  {
    id: 10,
    alt: "result-celebration-2025",
    caption: "Result Day Celebrations 2025",
    category: "Achievements",
    span: "wide",
    bgFrom: "#0A1F44",
    bgTo: "#061530",
    patternColor: "rgba(212,175,55,0.2)",
    emoji: "🎊",
  },
];

const CATEGORY_COLORS: Record<string, string> = {
  Academics: "#D4AF37",
  Achievements: "#16A34A",
  Events: "#e05c2a",
  Community: "#7c3aed",
};

// Pattern SVGs for each tile
function TilePattern({ color, type }: { color: string; type: number }) {
  if (type % 3 === 0) {
    return (
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}>
        <defs>
          <pattern id={`dots-${type}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill={color} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${type})`} />
      </svg>
    );
  }
  if (type % 3 === 1) {
    return (
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }}>
        <defs>
          <pattern id={`grid-${type}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke={color} strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${type})`} />
      </svg>
    );
  }
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.35 }}>
      <defs>
        <pattern id={`diag-${type}`} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M0 24 L24 0" stroke={color} strokeWidth="0.8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#diag-${type})`} />
    </svg>
  );
}

function GalleryTile({
  item,
  onOpen,
}: {
  item: GalleryItem;
  onOpen: (item: GalleryItem) => void;
}) {
  const [hovered, setHovered] = useState(false);
  const catColor = CATEGORY_COLORS[item.category] ?? "#D4AF37";

  return (
    <div
      role="img"
      aria-label={item.alt}
      tabIndex={0}
      onClick={() => onOpen(item)}
      onKeyDown={(e) => e.key === "Enter" && onOpen(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "14px",
        overflow: "hidden",
        cursor: "pointer",
        background: `linear-gradient(135deg, ${item.bgFrom} 0%, ${item.bgTo} 100%)`,
        boxShadow: hovered
          ? "0 16px 48px rgba(0,0,0,0.35)"
          : "0 4px 16px rgba(0,0,0,0.18)",
        transform: hovered ? "scale(1.02)" : "scale(1)",
        transition: "all 0.32s cubic-bezier(0.34,1.2,0.64,1)",
        outline: "none",
      }}
    >
      {/* SVG background pattern */}
      <TilePattern color={item.patternColor} type={item.id} />

      {/* Center content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          padding: "1.5rem",
          minHeight: "inherit",
        }}
      >
        <div style={{ fontSize: "2.8rem", marginBottom: "0.5rem", lineHeight: 1 }}>
          {item.emoji}
        </div>
        <span
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          {item.alt}
        </span>
      </div>

      {/* Hover overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "1.2rem",
        }}
      >
        {/* Category badge */}
        <span
          style={{
            display: "inline-flex",
            width: "fit-content",
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: catColor,
            backgroundColor: `${catColor}22`,
            border: `1px solid ${catColor}55`,
            padding: "0.15rem 0.55rem",
            borderRadius: "9999px",
            marginBottom: "0.4rem",
          }}
        >
          {item.category}
        </span>

        {/* Caption */}
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: "0.88rem",
            color: "#ffffff",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {item.caption}
        </p>

        {/* Expand hint */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            marginTop: "0.5rem",
          }}
        >
          <ZoomIn size={12} color="rgba(212,175,55,0.85)" strokeWidth={2.5} />
          <span
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "0.65rem",
              color: "rgba(212,175,55,0.85)",
              letterSpacing: "0.05em",
            }}
          >
            Click to expand
          </span>
        </div>
      </div>
    </div>
  );
}

function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const catColor = CATEGORY_COLORS[item.category] ?? "#D4AF37";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        backgroundColor: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
    >
      {/* Lightbox card */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "680px",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
          position: "relative",
        }}
      >
        {/* Image area */}
        <div
          style={{
            height: "420px",
            background: `linear-gradient(135deg, ${item.bgFrom} 0%, ${item.bgTo} 100%)`,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TilePattern color={item.patternColor} type={item.id + 100} />
          <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <div style={{ fontSize: "5rem", marginBottom: "1rem" }}>{item.emoji}</div>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.72rem",
                letterSpacing: "0.1em",
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
              }}
            >
              {item.alt}
            </p>
          </div>
        </div>

        {/* Caption bar */}
        <div
          style={{
            backgroundColor: "#0A1F44",
            padding: "1.25rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.65rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: catColor,
                display: "block",
                marginBottom: "0.2rem",
              }}
            >
              {item.category}
            </span>
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: "1rem",
                color: "#ffffff",
                margin: 0,
              }}
            >
              {item.caption}
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
            <Camera size={16} color="#D4AF37" />
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.72rem",
                color: "#64748b",
              }}
            >
              {item.id} / {GALLERY.length}
            </span>
          </div>
        </div>
      </div>

      {/* Prev / Next */}
      {[
        { dir: "prev", label: "←", onClick: onPrev, side: "left" },
        { dir: "next", label: "→", onClick: onNext, side: "right" },
      ].map(({ label, onClick, side }) => (
        <button
          key={side}
          onClick={(e) => { e.stopPropagation(); onClick(); }}
          aria-label={label}
          style={{
            position: "absolute",
            [side]: "1.5rem",
            top: "50%",
            transform: "translateY(-50%)",
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backgroundColor: "rgba(10,31,68,0.7)",
            border: "1.5px solid rgba(212,175,55,0.4)",
            color: "#D4AF37",
            fontSize: "1.2rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(4px)",
            transition: "all 0.2s ease",
          }}
        >
          {label}
        </button>
      ))}

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close"
        style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.25rem",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.1)",
          border: "1px solid rgba(255,255,255,0.2)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(4px)",
          transition: "background 0.2s",
        }}
      >
        <X size={18} color="#ffffff" strokeWidth={2} />
      </button>

      {/* Keyboard hint */}
      <p
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: '"Inter", sans-serif',
          fontSize: "0.68rem",
          color: "rgba(255,255,255,0.3)",
          letterSpacing: "0.06em",
          whiteSpace: "nowrap",
        }}
      >
        ← → to navigate &nbsp;·&nbsp; ESC to close
      </p>
    </div>
  );
}

export default function GallerySection() {
  const [lightboxId, setLightboxId] = useState<number | null>(null);

  const activeItem = lightboxId !== null ? GALLERY.find((g) => g.id === lightboxId) : null;

  const navigate = (dir: "prev" | "next") => {
    if (lightboxId === null) return;
    const idx = GALLERY.findIndex((g) => g.id === lightboxId);
    const next = dir === "next" ? (idx + 1) % GALLERY.length : (idx - 1 + GALLERY.length) % GALLERY.length;
    setLightboxId(GALLERY[next].id);
  };

  return (
    <>
      <section
        id="gallery"
        style={{
          backgroundColor: "#F8F9FA",
          padding: "5.5rem 0 6rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BG decoration */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "-60px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(10,31,68,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>

          {/* ── Section Header ── */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
                📸 &nbsp;Campus Life
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
              Life at{" "}
              <span style={{ color: "#D4AF37", position: "relative", display: "inline-block" }}>
                Dynamic Solution Classes
                <svg
                  style={{ position: "absolute", bottom: "-4px", left: 0, width: "100%" }}
                  viewBox="0 0 260 6"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,3 Q65,0 130,3 Q195,6 260,3"
                    stroke="#D4AF37"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "1rem",
                color: "#64748b",
                maxWidth: "480px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              From rigorous academics to joyful celebrations — a community that{" "}
              <strong style={{ color: "#0A1F44" }}>grows together.</strong>
            </p>

            {/* Category filter pills */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.6rem",
                flexWrap: "wrap",
                marginTop: "1.5rem",
              }}
            >
              {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
                <span
                  key={cat}
                  style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: color,
                    backgroundColor: `${color}15`,
                    border: `1px solid ${color}35`,
                    padding: "0.3rem 0.85rem",
                    borderRadius: "9999px",
                    letterSpacing: "0.04em",
                  }}
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {/* ── Masonry Grid ── */}
          <div className="gallery-grid">
            {GALLERY.map((item) => (
              <div
                key={item.id}
                className={`gallery-tile gallery-tile--${item.span}`}
              >
                <GalleryTile item={item} onOpen={(it) => setLightboxId(it.id)} />
              </div>
            ))}
          </div>

          {/* ── Bottom nudge ── */}
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.82rem",
                color: "#94a3b8",
              }}
            >
              Click any photo to explore • Real photos coming soon
            </p>
          </div>
        </div>

        {/* ── Grid + Responsive Styles ── */}
        <style>{`
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: 180px;
            gap: 14px;
          }

          /* Default: square = 1×1 */
          .gallery-tile { min-height: 180px; }
          .gallery-tile > div { height: 100%; }

          .gallery-tile--wide  { grid-column: span 2; }
          .gallery-tile--tall  { grid-row: span 2; }
          .gallery-tile--big   { grid-column: span 2; grid-row: span 2; }
          .gallery-tile--square { grid-column: span 1; grid-row: span 1; }

          /* Tablet: 3 columns */
          @media (max-width: 1024px) {
            .gallery-grid {
              grid-template-columns: repeat(3, 1fr);
              grid-auto-rows: 160px;
            }
          }

          /* Mobile: 2 columns, flatten spans */
          @media (max-width: 640px) {
            .gallery-grid {
              grid-template-columns: repeat(2, 1fr);
              grid-auto-rows: 140px;
              gap: 10px;
            }
            .gallery-tile--wide,
            .gallery-tile--big  { grid-column: span 2; }
            .gallery-tile--tall,
            .gallery-tile--square { grid-column: span 1; }
          }
        `}</style>
      </section>

      {/* ── Lightbox ── */}
      {activeItem && (
        <Lightbox
          item={activeItem}
          onClose={() => setLightboxId(null)}
          onPrev={() => navigate("prev")}
          onNext={() => navigate("next")}
        />
      )}
    </>
  );
}
