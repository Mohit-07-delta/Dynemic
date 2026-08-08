import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  GraduationCap,
} from "lucide-react";

// Inline SVG icons for socials (lucide-react in this version has no social icons)
function SvgInstagram() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="#94a3b8" stroke="none" />
    </svg>
  );
}
function SvgFacebook() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function SvgYoutube() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" stroke="#94a3b8" fill="none" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Follow us on Instagram", href: "https://instagram.com/", Icon: SvgInstagram, hoverColor: "#e1306c" },
  { label: "Follow us on Facebook",  href: "https://facebook.com/",  Icon: SvgFacebook,  hoverColor: "#1877f2" },
  { label: "Subscribe on YouTube",   href: "https://youtube.com/",   Icon: SvgYoutube,   hoverColor: "#ff0000" },
];

const NAV_LINKS = [
  { label: "Home",    href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const CONTACT = [
  { icon: MapPin, lines: ["123, Shivaji Nagar, Near Bus Stand,", "Nagpur, Maharashtra \u2013 440001"] },
  { icon: Phone,  lines: ["+91 98765 43210", "+91 91234 56789"] },
  { icon: Mail,   lines: ["admissions@dynamicsolution.in"] },
  { icon: Clock,  lines: ["Mon \u2013 Sat: 7:00 AM \u2013 9:00 PM", "Sun: 10:00 AM \u2013 1:00 PM"] },
];

// Replace src with real Google Maps embed URL when available
const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2!2d79.0882!3d21.1458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDA4JzQ0LjkiTiA3OcKwMDUnMTcuNSJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin";

export default function Footer() {
  return (
    <footer id="footer" style={{ backgroundColor: "#061530", position: "relative", overflow: "hidden" }}>

      {/* Top gold accent line */}
      <div style={{ height: "2px", background: "linear-gradient(90deg, transparent 0%, #D4AF37 35%, #D4AF37 65%, transparent 100%)" }} />

      {/* Background decoration */}
      <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.6 }}>
        <circle cx="95%" cy="10%" r="260" fill="none" stroke="rgba(212,175,55,0.05)" strokeWidth="60" />
        <circle cx="2%" cy="90%" r="180" fill="rgba(212,175,55,0.03)" />
        {Array.from({ length: 4 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => (
            <circle key={`d-${r}-${c}`} cx={`${5 + c * 6}%`} cy={`${15 + r * 22}%`} r="1.2" fill="rgba(212,175,55,0.1)" />
          ))
        )}
      </svg>

      {/* 4-column grid */}
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem 1.5rem 2.5rem", position: "relative", zIndex: 1 }}
        className="footer-grid"
      >
        {/* Col 1 — Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <a href="#home" aria-label="Dynamic Solution Classes — Home" style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "#D4AF37", transform: "rotate(45deg)", flexShrink: 0 }} aria-hidden="true" />
            <div>
              <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800, fontSize: "1rem", color: "#ffffff", margin: 0, lineHeight: 1.2 }}>
                Dynamic <span style={{ color: "#D4AF37" }}>Solution</span>
              </p>
              <p style={{ fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: "0.62rem", color: "#64748b", margin: 0, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Classes
              </p>
            </div>
          </a>
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.85rem", color: "#94a3b8", lineHeight: 1.7, margin: 0, maxWidth: "240px" }}>
            Shaping the future, one topper at a time. Premier coaching for Class 8&ndash;12 since 2015.
          </p>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", width: "fit-content", backgroundColor: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "9999px", padding: "0.4rem 0.85rem" }}>
            <GraduationCap size={14} color="#D4AF37" aria-hidden="true" />
            <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.72rem", fontWeight: 600, color: "#D4AF37" }}>2000+ Students Taught</span>
          </div>
          <div style={{ display: "flex", gap: "0.65rem" }} role="list" aria-label="Social media links">
            {SOCIALS.map(({ label, href, Icon, hoverColor }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                role="listitem"
                style={{ width: "38px", height: "38px", borderRadius: "10px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", transition: "all 0.22s ease" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = hoverColor;
                  el.style.borderColor = hoverColor;
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = `0 6px 16px ${hoverColor}55`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "rgba(255,255,255,0.05)";
                  el.style.borderColor = "rgba(255,255,255,0.08)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 — Quick Links */}
        <nav aria-label="Footer navigation">
          <FooterHeading>Quick Links</FooterHeading>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}><FooterLink href={link.href}>{link.label}</FooterLink></li>
            ))}
            <li><FooterLink href="#contact">Free Demo Class</FooterLink></li>
          </ul>
        </nav>

        {/* Col 3 — Contact */}
        <address style={{ fontStyle: "normal" }}>
          <FooterHeading>Contact Us</FooterHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
            {CONTACT.map(({ icon: Icon, lines }) => (
              <div key={lines[0]} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <div style={{ width: "30px", height: "30px", borderRadius: "8px", flexShrink: 0, backgroundColor: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.18)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1px" }}>
                  <Icon size={14} color="#D4AF37" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div>
                  {lines.map((line) => (
                    <p key={line} style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.82rem", color: "#94a3b8", margin: 0, lineHeight: 1.6 }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </address>

        {/* Col 4 — Map */}
        <div>
          <FooterHeading>Find Us</FooterHeading>
          <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(212,175,55,0.2)", boxShadow: "0 8px 32px rgba(0,0,0,0.35)", position: "relative" }}>
            <iframe
              src={MAP_SRC}
              width="100%"
              height="220"
              style={{ border: 0, display: "block", filter: "grayscale(20%) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dynamic Solution Classes Location — Nagpur, Maharashtra"
            />
            <div style={{ position: "absolute", top: "0.6rem", left: "0.6rem", backgroundColor: "rgba(6,21,48,0.85)", backdropFilter: "blur(6px)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "8px", padding: "0.35rem 0.7rem", display: "flex", alignItems: "center", gap: "0.35rem" }}>
              <MapPin size={11} color="#D4AF37" aria-hidden="true" />
              <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.65rem", fontWeight: 600, color: "#ffffff" }}>Nagpur, Maharashtra</span>
            </div>
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions to Dynamic Solution Classes on Google Maps"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem", fontFamily: '"Inter", sans-serif', fontSize: "0.75rem", fontWeight: 600, color: "#D4AF37", textDecoration: "none", marginTop: "0.6rem", letterSpacing: "0.02em" }}
          >
            Get Directions <ChevronRight size={13} strokeWidth={2.5} aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }} className="footer-bottom">
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.78rem", color: "#475569", margin: 0 }}>
            &copy; 2026 <span style={{ color: "#D4AF37", fontWeight: 600 }}>Dynamic Solution Classes</span>. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Use"].map((t) => (
              <a
                key={t}
                href="#"
                style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.75rem", color: "#475569", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#D4AF37"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#475569"; }}
              >{t}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid { display: grid; grid-template-columns: 1.2fr 0.8fr 1.1fr 1.2fr; gap: 3rem; align-items: start; }
        @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2.5rem !important; } }
        @media (max-width: 600px)  { .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } .footer-bottom { flex-direction: column !important; text-align: center !important; } }
      `}</style>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <h3 style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: "0.88rem", color: "#ffffff", margin: "0 0 0.5rem", letterSpacing: "0.04em", textTransform: "uppercase" }}>
        {children}
      </h3>
      <div style={{ width: "28px", height: "2px", background: "linear-gradient(90deg, #D4AF37, rgba(212,175,55,0.2))", borderRadius: "9999px" }} />
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: '"Inter", sans-serif', fontSize: "0.83rem", color: "#94a3b8", textDecoration: "none", transition: "color 0.2s, gap 0.2s", lineHeight: 1 }}
      onMouseEnter={(e) => { const el = e.currentTarget; el.style.color = "#D4AF37"; el.style.gap = "0.6rem"; }}
      onMouseLeave={(e) => { const el = e.currentTarget; el.style.color = "#94a3b8"; el.style.gap = "0.4rem"; }}
    >
      <ChevronRight size={12} strokeWidth={2.5} aria-hidden="true" />
      {children}
    </a>
  );
}
