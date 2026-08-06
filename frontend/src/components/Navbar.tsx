"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "#0A1F44" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(10,31,68,0.35)" : "none",
        backdropFilter: scrolled ? "blur(8px)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* ── Logo ── */}
        <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {/* Gold diamond accent */}
          <span
            style={{
              width: "28px",
              height: "28px",
              backgroundColor: "#D4AF37",
              borderRadius: "6px",
              transform: "rotate(45deg)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 800,
              fontSize: "1.1rem",
              lineHeight: 1.2,
              color: "#ffffff",
              letterSpacing: "-0.01em",
            }}
          >
            Dynamic{" "}
            <span style={{ color: "#D4AF37" }}>Solution</span>
            <br />
            <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", color: "#94a3b8" }}>
              CLASSES
            </span>
          </span>
        </a>

        {/* ── Desktop Nav Links ── */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  color: "#cbd5e1",
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "color 0.2s",
                  position: "relative",
                  paddingBottom: "2px",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "#D4AF37";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "#cbd5e1";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA Button ── */}
        <a
          href="#contact"
          className="hidden md:inline-flex"
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: "0.875rem",
            backgroundColor: "#D4AF37",
            color: "#0A1F44",
            padding: "0.6rem 1.4rem",
            borderRadius: "9999px",
            textDecoration: "none",
            letterSpacing: "0.02em",
            transition: "all 0.25s ease",
            boxShadow: "0 4px 14px rgba(212,175,55,0.35)",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLAnchorElement).style.backgroundColor = "#E8C84A";
            (e.target as HTMLAnchorElement).style.transform = "translateY(-1px)";
            (e.target as HTMLAnchorElement).style.boxShadow = "0 6px 20px rgba(212,175,55,0.5)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLAnchorElement).style.backgroundColor = "#D4AF37";
            (e.target as HTMLAnchorElement).style.transform = "translateY(0)";
            (e.target as HTMLAnchorElement).style.boxShadow = "0 4px 14px rgba(212,175,55,0.35)";
          }}
        >
          Join New Batch
        </a>

        {/* ── Mobile Hamburger ── */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                backgroundColor: "#D4AF37",
                borderRadius: "2px",
                transition: "all 0.3s ease",
                transform:
                  menuOpen && i === 0
                    ? "translateY(7px) rotate(45deg)"
                    : menuOpen && i === 2
                    ? "translateY(-7px) rotate(-45deg)"
                    : menuOpen && i === 1
                    ? "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </nav>

      {/* ── Mobile Menu Dropdown ── */}
      <div
        style={{
          backgroundColor: "#0A1F44",
          overflow: "hidden",
          maxHeight: menuOpen ? "400px" : "0",
          transition: "max-height 0.35s ease",
          borderTop: menuOpen ? "1px solid rgba(212,175,55,0.2)" : "none",
        }}
        className="md:hidden"
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  fontFamily: '"Inter", sans-serif',
                  fontWeight: 500,
                  fontSize: "1rem",
                  color: "#e2e8f0",
                  textDecoration: "none",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li style={{ paddingTop: "1rem" }}>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                textAlign: "center",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: "0.9rem",
                backgroundColor: "#D4AF37",
                color: "#0A1F44",
                padding: "0.75rem",
                borderRadius: "9999px",
                textDecoration: "none",
              }}
            >
              Join New Batch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
