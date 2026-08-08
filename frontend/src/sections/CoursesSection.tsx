"use client";

import { useState } from "react";
import {
  FlaskConical,
  Atom,
  BookOpenCheck,
  Calculator,
  Microscope,
  Layers,
  ChevronRight,
  Calendar,
  Clock,
} from "lucide-react";

type Course = {
  id: number;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  subjects: string[];
  description: string;
  batchDate: string;
  schedule: string;
  seats: number;
  highlight?: boolean;
};

const COURSES: Course[] = [
  {
    id: 1,
    icon: Atom,
    iconColor: "#0A1F44",
    iconBg: "rgba(10,31,68,0.07)",
    tag: "Class 11th",
    tagColor: "#0A1F44",
    title: "Class 11th — Science (PCM)",
    subtitle: "Physics · Chemistry · Maths",
    subjects: ["Physics", "Chemistry", "Mathematics", "English"],
    description:
      "Strong conceptual foundation for JEE/NEET aspirants. Covers complete NCERT + competitive exam syllabus with weekly tests.",
    batchDate: "New Batch: Aug 15",
    schedule: "Mon–Sat, 4:00–6:00 PM",
    seats: 30,
    highlight: false,
  },
  {
    id: 2,
    icon: Microscope,
    iconColor: "#16A34A",
    iconBg: "rgba(22,163,74,0.08)",
    tag: "Class 11th",
    tagColor: "#16A34A",
    title: "Class 11th — Science (PCB)",
    subtitle: "Physics · Chemistry · Biology",
    subjects: ["Physics", "Chemistry", "Biology", "English"],
    description:
      "Designed for NEET aspirants with in-depth biology coverage, diagram practice, and monthly mock tests.",
    batchDate: "New Batch: Aug 15",
    schedule: "Mon–Sat, 6:00–8:00 PM",
    seats: 25,
    highlight: false,
  },
  {
    id: 3,
    icon: FlaskConical,
    iconColor: "#D4AF37",
    iconBg: "rgba(212,175,55,0.1)",
    tag: "Class 12th",
    tagColor: "#9a7a00",
    title: "Class 12th — Science (PCM)",
    subtitle: "Physics · Chemistry · Maths",
    subjects: ["Physics", "Chemistry", "Mathematics", "English"],
    description:
      "Board + JEE dual preparation. Revision strategy, previous year papers, and 1:1 doubt sessions every week.",
    batchDate: "New Batch: Aug 20",
    schedule: "Mon–Sat, 7:00–9:00 AM",
    seats: 30,
    highlight: true,
  },
  {
    id: 4,
    icon: BookOpenCheck,
    iconColor: "#7c3aed",
    iconBg: "rgba(124,58,237,0.08)",
    tag: "Class 12th",
    tagColor: "#7c3aed",
    title: "Class 12th — Science (PCB)",
    subtitle: "Physics · Chemistry · Biology",
    subjects: ["Physics", "Chemistry", "Biology", "English"],
    description:
      "NEET-focused batch with chapter-wise tests, NCERT mastery, and biology long-answer writing practice.",
    batchDate: "New Batch: Aug 20",
    schedule: "Mon–Sat, 4:00–6:00 PM",
    seats: 20,
    highlight: false,
  },
  {
    id: 5,
    icon: Calculator,
    iconColor: "#0ea5e9",
    iconBg: "rgba(14,165,233,0.08)",
    tag: "Class 10th",
    tagColor: "#0369a1",
    title: "Class 10th — All Subjects",
    subtitle: "Maths · Science · SST · English",
    subjects: ["Mathematics", "Science", "Social Studies", "English", "Hindi"],
    description:
      "Comprehensive board prep with full NCERT coverage, sample papers, and term-wise revision planners.",
    batchDate: "New Batch: Sep 1",
    schedule: "Mon–Fri, 5:00–7:00 PM",
    seats: 35,
    highlight: false,
  },
  {
    id: 6,
    icon: Layers,
    iconColor: "#D4AF37",
    iconBg: "rgba(212,175,55,0.1)",
    tag: "Class 8th–10th",
    tagColor: "#b45309",
    title: "Foundation Batch",
    subtitle: "Maths · Science · Reasoning",
    subjects: ["Mathematics", "Science", "Mental Ability", "English"],
    description:
      "Early start advantage for future IIT/NEET aspirants. Builds strong fundamentals in Maths and Science from Class 8 onwards.",
    batchDate: "New Batch: Sep 5",
    schedule: "Sat–Sun, 10:00 AM–1:00 PM",
    seats: 40,
    highlight: false,
  },
];

function CourseCard({ course }: { course: Course }) {
  const [hovered, setHovered] = useState(false);
  const Icon = course.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "16px",
        border: course.highlight
          ? "2px solid #D4AF37"
          : hovered
          ? "2px solid rgba(10,31,68,0.2)"
          : "2px solid #e8edf5",
        boxShadow: hovered
          ? "0 16px 48px rgba(10,31,68,0.12)"
          : "0 2px 16px rgba(10,31,68,0.05)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.28s cubic-bezier(0.34,1.28,0.64,1)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Popular badge */}
      {course.highlight && (
        <div
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            backgroundColor: "#D4AF37",
            color: "#0A1F44",
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: "0.65rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "0.2rem 0.6rem",
            borderRadius: "9999px",
          }}
        >
          Most Popular
        </div>
      )}

      {/* Top navy bar — thinner on non-highlighted, gold on highlighted */}
      <div
        style={{
          height: "3px",
          background: course.highlight
            ? "linear-gradient(90deg, #D4AF37, #E8C84A)"
            : "linear-gradient(90deg, #0A1F44, #132A5E)",
          borderRadius: "16px 16px 0 0",
        }}
      />

      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Icon + Tag row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "1rem" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: course.iconBg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Icon size={24} color={course.iconColor} strokeWidth={1.8} />
          </div>
          <span
            style={{
              fontFamily: '"Inter", sans-serif',
              fontWeight: 600,
              fontSize: "0.68rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: course.tagColor,
              backgroundColor: `${course.tagColor}15`,
              padding: "0.25rem 0.65rem",
              borderRadius: "9999px",
              border: `1px solid ${course.tagColor}30`,
              marginTop: "4px",
            }}
          >
            {course.tag}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: "1rem",
            color: "#0A1F44",
            margin: "0 0 0.25rem",
            lineHeight: 1.3,
          }}
        >
          {course.title}
        </h3>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.78rem",
            fontWeight: 600,
            color: "#D4AF37",
            margin: "0 0 0.75rem",
          }}
        >
          {course.subtitle}
        </p>

        {/* Description */}
        <p
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.82rem",
            color: "#64748b",
            lineHeight: 1.6,
            margin: "0 0 1rem",
            flex: 1,
          }}
        >
          {course.description}
        </p>

        {/* Subject tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginBottom: "1rem" }}>
          {course.subjects.map((s) => (
            <span
              key={s}
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.68rem",
                fontWeight: 500,
                backgroundColor: "#F1F5F9",
                color: "#475569",
                padding: "0.2rem 0.55rem",
                borderRadius: "6px",
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "#f1f5f9", margin: "0 0 1rem" }} />

        {/* Batch info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Calendar size={13} color="#D4AF37" strokeWidth={2} />
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#0A1F44",
              }}
            >
              {course.batchDate}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Clock size={13} color="#94a3b8" strokeWidth={2} />
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.75rem",
                color: "#64748b",
              }}
            >
              {course.schedule}
            </span>
          </div>
          {/* Seats indicator */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.1rem" }}>
            <div style={{ flex: 1, height: "4px", backgroundColor: "#f1f5f9", borderRadius: "9999px", overflow: "hidden" }}>
              <div
                style={{
                  width: `${Math.min(100, ((40 - course.seats) / 40) * 100 + 30)}%`,
                  height: "100%",
                  backgroundColor: course.seats < 25 ? "#16A34A" : "#D4AF37",
                  borderRadius: "9999px",
                  transition: "width 0.5s ease",
                }}
              />
            </div>
            <span
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.68rem",
                color: course.seats < 25 ? "#16A34A" : "#64748b",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              {course.seats} seats left
            </span>
          </div>
        </div>

        {/* Know More link */}
        <a
          href="#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.3rem",
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: "0.82rem",
            color: hovered ? "#B8960E" : "#D4AF37",
            textDecoration: "none",
            transition: "color 0.2s",
            letterSpacing: "0.02em",
          }}
        >
          Know More
          <ChevronRight
            size={15}
            strokeWidth={2.5}
            style={{
              transform: hovered ? "translateX(3px)" : "translateX(0)",
              transition: "transform 0.2s ease",
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default function CoursesSection() {
  return (
    <section
      id="courses"
      style={{
        backgroundColor: "#ffffff",
        padding: "5.5rem 0 6rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent — bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* ── Section Header ── */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
              📚 &nbsp;What We Teach
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
            Our{" "}
            <span style={{ color: "#D4AF37", position: "relative", display: "inline-block" }}>
              Courses
              <svg
                style={{ position: "absolute", bottom: "-4px", left: 0, width: "100%" }}
                viewBox="0 0 120 6"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,3 Q30,0 60,3 Q90,6 120,3"
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
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            From foundational classes to board & competitive exam preparation —{" "}
            <strong style={{ color: "#0A1F44" }}>structured batches for every learner.</strong>
          </p>
        </div>

        {/* ── Courses Grid ── */}
        <div
          style={{
            display: "grid",
            gap: "1.5rem",
          }}
          className="courses-grid"
        >
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* ── Bottom CTA Banner ── */}
        <div
          style={{
            marginTop: "3.5rem",
            background: "linear-gradient(135deg, #0A1F44 0%, #132A5E 100%)",
            borderRadius: "20px",
            padding: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative ring */}
          <div
            style={{
              position: "absolute",
              right: "-40px",
              top: "-40px",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              border: "40px solid rgba(212,175,55,0.08)",
              pointerEvents: "none",
            }}
          />

          <div>
            <h3
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "#ffffff",
                margin: "0 0 0.4rem",
              }}
            >
              Not sure which batch is right for you?
            </h3>
            <p
              style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.88rem",
                color: "#94a3b8",
                margin: 0,
              }}
            >
              Talk to our counselors — free guidance, no obligations.
            </p>
          </div>

          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: "0.9rem",
              backgroundColor: "#D4AF37",
              color: "#0A1F44",
              padding: "0.85rem 1.75rem",
              borderRadius: "9999px",
              textDecoration: "none",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
              flexShrink: 0,
              boxShadow: "0 6px 20px rgba(212,175,55,0.35)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#E8C84A";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "#D4AF37";
              el.style.transform = "translateY(0)";
            }}
          >
            Get Free Counseling
            <ChevronRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* Responsive grid */}
      <style>{`
        .courses-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 1024px) {
          .courses-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .courses-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
