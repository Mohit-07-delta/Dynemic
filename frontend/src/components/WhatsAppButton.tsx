"use client";

import { useState } from "react";

const WA_NUMBER = "91XXXXXXXXXX"; // Replace with real number
const WA_MESSAGE = encodeURIComponent(
  "Hello! I found Dynamic Solution Classes online and I'd like to know more about your batches and admission process."
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* Floating button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.75rem",
          zIndex: 999,
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          backgroundColor: "#25D366",
          borderRadius: "9999px",
          padding: hovered ? "0.85rem 1.4rem 0.85rem 1rem" : "0.85rem",
          boxShadow: hovered
            ? "0 8px 32px rgba(37,211,102,0.55)"
            : "0 6px 24px rgba(37,211,102,0.4)",
          textDecoration: "none",
          transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          overflow: "hidden",
          maxWidth: hovered ? "220px" : "56px",
          animation: "waBounce 3s ease-in-out infinite",
        }}
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          style={{ width: "26px", height: "26px", flexShrink: 0 }}
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.523 5.854L.057 23.215a.75.75 0 0 0 .921.921l5.376-1.466A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.86 0-3.607-.5-5.112-1.37l-.364-.211-3.792 1.033 1.035-3.786-.219-.368A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>

        {/* Expandable label */}
        <span
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: "0.85rem",
            color: "#ffffff",
            whiteSpace: "nowrap",
            opacity: hovered ? 1 : 0,
            maxWidth: hovered ? "160px" : "0",
            transition: "opacity 0.25s ease 0.05s, max-width 0.3s ease",
            overflow: "hidden",
          }}
        >
          Chat on WhatsApp
        </span>
      </a>

      {/* Pulse rings */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          bottom: "1.75rem",
          right: "1.75rem",
          zIndex: 998,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      >
        <span style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          backgroundColor: "#25D366", opacity: 0,
          animation: "waPulse 3s ease-in-out infinite",
        }} />
        <span style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          backgroundColor: "#25D366", opacity: 0,
          animation: "waPulse 3s ease-in-out infinite 1s",
        }} />
      </div>

      <style>{`
        @keyframes waBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-5px); }
        }
        @keyframes waPulse {
          0%   { transform: scale(1);   opacity: 0.5; }
          100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </>
  );
}
