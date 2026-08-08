"use client";

import { useState, useRef } from "react";
import {
  User,
  Phone,
  BookOpen,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock,
  ShieldCheck,
  HeadphonesIcon,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────
type FormData = {
  name: string;
  phone: string;
  course: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormData, string>>;
type Status = "idle" | "loading" | "success" | "error";

// ── Constants ─────────────────────────────────────────
const COURSES = [
  "Class 8th – Foundation",
  "Class 9th – Foundation",
  "Class 10th – All Subjects",
  "Class 11th – Science (PCM)",
  "Class 11th – Science (PCB)",
  "Class 12th – Science (PCM)",
  "Class 12th – Science (PCB)",
  "Class 12th – Commerce",
  "Other / Not sure yet",
];

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

// ── Validation ────────────────────────────────────────
function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Please enter your full name (min. 2 characters).";
  if (!/^[6-9]\d{9}$/.test(data.phone.trim()))
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  if (!data.course)
    errors.course = "Please select a class or subject.";
  return errors;
}

// ── Toast ─────────────────────────────────────────────
function Toast({ status, onDismiss }: { status: "success" | "error"; onDismiss: () => void }) {
  return (
    <div
      role="alert"
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: "5rem",
        right: "1.5rem",
        zIndex: 200,
        display: "flex",
        alignItems: "flex-start",
        gap: "0.75rem",
        backgroundColor: status === "success" ? "#052e16" : "#450a0a",
        border: `1px solid ${status === "success" ? "#16A34A" : "#dc2626"}`,
        borderRadius: "14px",
        padding: "1rem 1.25rem",
        maxWidth: "340px",
        boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
        animation: "slideUp 0.35s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      {status === "success" ? (
        <CheckCircle2 size={20} color="#4ade80" style={{ flexShrink: 0, marginTop: "1px" }} />
      ) : (
        <AlertCircle size={20} color="#f87171" style={{ flexShrink: 0, marginTop: "1px" }} />
      )}
      <div>
        <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: "0.88rem", color: "#fff", margin: "0 0 0.15rem" }}>
          {status === "success" ? "Request Received! 🎉" : "Submission Failed"}
        </p>
        <p style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.78rem", color: status === "success" ? "#86efac" : "#fca5a5", margin: 0 }}>
          {status === "success"
            ? "Our counselor will call you within 24 hours."
            : "Something went wrong. Please try again or WhatsApp us."}
        </p>
      </div>
      <button
        onClick={onDismiss}
        aria-label="Dismiss"
        style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.5)", fontSize: "1rem", marginLeft: "0.5rem", lineHeight: 1, flexShrink: 0 }}
      >
        ✕
      </button>
    </div>
  );
}

// ── Input Field ───────────────────────────────────────
function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      <label
        htmlFor={id}
        style={{
          fontFamily: '"Inter", sans-serif',
          fontWeight: 600,
          fontSize: "0.8rem",
          color: "#0A1F44",
          letterSpacing: "0.02em",
        }}
      >
        {label}
      </label>
      {children}
      {error && (
        <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
          <AlertCircle size={12} color="#dc2626" />
          <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.72rem", color: "#dc2626" }}>
            {error}
          </span>
        </div>
      )}
    </div>
  );
}

const inputBase = (hasError: boolean, focused: boolean): React.CSSProperties => ({
  width: "100%",
  padding: "0.78rem 0.9rem 0.78rem 2.6rem",
  fontFamily: '"Inter", sans-serif',
  fontSize: "0.88rem",
  color: "#0A1F44",
  backgroundColor: "#ffffff",
  border: `1.5px solid ${hasError ? "#dc2626" : focused ? "#D4AF37" : "#dde3f0"}`,
  borderRadius: "10px",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  boxShadow: focused ? `0 0 0 3px ${hasError ? "rgba(220,38,38,0.12)" : "rgba(212,175,55,0.15)"}` : "none",
  boxSizing: "border-box",
});

// ── Main Component ────────────────────────────────────
export default function AdmissionForm() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", course: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const formRef = useRef<HTMLFormElement>(null);

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const val = e.target.value;
    setForm((f) => ({ ...f, [field]: val }));
    if (touched[field]) {
      const newErrors = validate({ ...form, [field]: val });
      setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
    }
  };

  const blur = (field: keyof FormData) => () => {
    setFocused(null);
    setTouched((t) => ({ ...t, [field]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, phone: true, course: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    try {
      const res = await fetch(`${API_URL}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: `${form.phone.trim()}@placeholder.dsc`,   // email is required by schema; placeholder until added
          phone: form.phone.trim(),
          course: form.course,
          message: form.message.trim(),
        }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      setForm({ name: "", phone: "", course: "", message: "" });
      setTouched({});
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const isBusy = status === "loading";

  return (
    <>
      <section
        id="contact"
        style={{
          backgroundColor: "#0A1F44",
          padding: "5.5rem 0 6rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* BG decorations */}
        <svg aria-hidden="true" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}>
          <circle cx="8%" cy="80%" r="220" fill="rgba(212,175,55,0.04)" />
          <circle cx="95%" cy="15%" r="180" fill="none" stroke="rgba(212,175,55,0.07)" strokeWidth="50" />
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => (
              <circle key={`d-${row}-${col}`} cx={`${70 + col * 5}%`} cy={`${10 + row * 18}%`} r="1.5" fill="rgba(212,175,55,0.12)" />
            ))
          )}
        </svg>

        <div
          style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}
          className="admission-grid"
        >
          {/* ── Left: Context panel ── */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem" }}>
            {/* Label */}
            <div>
              <span
                style={{
                  fontFamily: '"Inter", sans-serif', fontWeight: 600, fontSize: "0.72rem",
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "#D4AF37", backgroundColor: "rgba(212,175,55,0.12)",
                  border: "1px solid rgba(212,175,55,0.25)", padding: "0.3rem 0.85rem", borderRadius: "9999px",
                }}
              >
                🎓 &nbsp;Free Demo Class
              </span>
            </div>

            <div>
              <h2
                style={{
                  fontFamily: '"Poppins", sans-serif', fontWeight: 800,
                  fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", color: "#ffffff",
                  margin: "0 0 0.85rem", letterSpacing: "-0.02em", lineHeight: 1.15,
                }}
              >
                Book Your{" "}
                <span style={{ color: "#D4AF37", position: "relative", display: "inline-block" }}>
                  Free Demo Class
                  <svg style={{ position: "absolute", bottom: "-5px", left: 0, width: "100%" }} viewBox="0 0 220 6" preserveAspectRatio="none">
                    <path d="M0,3 Q55,0 110,3 Q165,6 220,3" stroke="#D4AF37" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: "1rem", color: "#94a3b8", lineHeight: 1.7, margin: 0, maxWidth: "420px" }}>
                Fill in your details and our expert counselor will reach out to guide you to the right batch — completely free, no obligations.
              </p>
            </div>

            {/* Trust features */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: Clock, text: "Counselor calls within 24 hours" },
                { icon: ShieldCheck, text: "No spam, your data stays private" },
                { icon: HeadphonesIcon, text: "Free guidance, zero obligations" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <div
                    style={{
                      width: "36px", height: "36px", borderRadius: "10px", flexShrink: 0,
                      backgroundColor: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    <Icon size={16} color="#D4AF37" strokeWidth={1.8} />
                  </div>
                  <span style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.88rem", color: "#cbd5e1" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form card ── */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              padding: "2.5rem",
              boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
              border: "1px solid rgba(212,175,55,0.15)",
            }}
          >
            <h3
              style={{
                fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: "1.1rem",
                color: "#0A1F44", margin: "0 0 0.35rem",
              }}
            >
              Admission Inquiry Form
            </h3>
            <p style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.78rem", color: "#94a3b8", margin: "0 0 1.75rem" }}>
              All fields marked are required
            </p>

            <form ref={formRef} onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

              {/* Full Name */}
              <Field id="name" label="Full Name *" error={errors.name}>
                <div style={{ position: "relative" }}>
                  <User size={15} color={errors.name ? "#dc2626" : focused === "name" ? "#D4AF37" : "#94a3b8"}
                    style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                  <input
                    id="name" type="text" value={form.name} placeholder="e.g. Rahul Sharma"
                    onChange={set("name")} onFocus={() => setFocused("name")} onBlur={blur("name")}
                    disabled={isBusy} autoComplete="name"
                    style={inputBase(!!errors.name, focused === "name")}
                  />
                </div>
              </Field>

              {/* Phone */}
              <Field id="phone" label="Phone Number *" error={errors.phone}>
                <div style={{ position: "relative" }}>
                  <Phone size={15} color={errors.phone ? "#dc2626" : focused === "phone" ? "#D4AF37" : "#94a3b8"}
                    style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                  <input
                    id="phone" type="tel" value={form.phone} placeholder="10-digit mobile number"
                    onChange={set("phone")} onFocus={() => setFocused("phone")} onBlur={blur("phone")}
                    disabled={isBusy} autoComplete="tel" maxLength={10} inputMode="numeric"
                    style={inputBase(!!errors.phone, focused === "phone")}
                  />
                </div>
              </Field>

              {/* Course */}
              <Field id="course" label="Class / Subject Interested In *" error={errors.course}>
                <div style={{ position: "relative" }}>
                  <BookOpen size={15} color={errors.course ? "#dc2626" : focused === "course" ? "#D4AF37" : "#94a3b8"}
                    style={{ position: "absolute", left: "0.9rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", zIndex: 1 }} />
                  <ChevronDown size={15} color="#94a3b8"
                    style={{ position: "absolute", right: "0.9rem", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", zIndex: 1 }} />
                  <select
                    id="course" value={form.course}
                    onChange={set("course")} onFocus={() => setFocused("course")} onBlur={blur("course")}
                    disabled={isBusy}
                    style={{
                      ...inputBase(!!errors.course, focused === "course"),
                      padding: "0.78rem 2.6rem 0.78rem 2.6rem",
                      appearance: "none", WebkitAppearance: "none",
                      cursor: "pointer",
                      color: form.course ? "#0A1F44" : "#94a3b8",
                    }}
                  >
                    <option value="" disabled>Select a class or subject…</option>
                    {COURSES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </Field>

              {/* Optional message */}
              <Field id="message" label="Additional Message (Optional)">
                <textarea
                  id="message" value={form.message} rows={3}
                  placeholder="Any specific queries or preferred timing…"
                  onChange={set("message")} onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                  disabled={isBusy}
                  style={{
                    width: "100%", padding: "0.78rem 0.9rem",
                    fontFamily: '"Inter", sans-serif', fontSize: "0.88rem", color: "#0A1F44",
                    backgroundColor: "#ffffff",
                    border: `1.5px solid ${focused === "message" ? "#D4AF37" : "#dde3f0"}`,
                    borderRadius: "10px", outline: "none", resize: "vertical",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                    boxShadow: focused === "message" ? "0 0 0 3px rgba(212,175,55,0.15)" : "none",
                    boxSizing: "border-box",
                  }}
                />
              </Field>

              {/* Submit */}
              <button
                type="submit"
                disabled={isBusy}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem",
                  fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: "0.95rem",
                  backgroundColor: isBusy ? "#e2c96a" : "#D4AF37",
                  color: "#0A1F44",
                  padding: "0.9rem",
                  borderRadius: "10px",
                  border: "none",
                  cursor: isBusy ? "not-allowed" : "pointer",
                  boxShadow: "0 6px 24px rgba(212,175,55,0.4)",
                  transition: "all 0.22s ease",
                  marginTop: "0.25rem",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => { if (!isBusy) { e.currentTarget.style.backgroundColor = "#E8C84A"; e.currentTarget.style.transform = "translateY(-2px)"; }}}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = isBusy ? "#e2c96a" : "#D4AF37"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {isBusy ? (
                  <><Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} /> Submitting…</>
                ) : (
                  <>Request Callback 📞</>
                )}
              </button>

              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: "0.72rem", color: "#94a3b8", textAlign: "center", margin: 0 }}>
                🔒 We never share your information with third parties.
              </p>
            </form>
          </div>
        </div>

        {/* Responsive layout + animations */}
        <style>{`
          .admission-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
          }
          @media (max-width: 900px) {
            .admission-grid {
              grid-template-columns: 1fr !important;
              gap: 3rem !important;
            }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </section>

      {/* ── Toast ── */}
      {(status === "success" || status === "error") && (
        <Toast status={status} onDismiss={() => setStatus("idle")} />
      )}
    </>
  );
}
