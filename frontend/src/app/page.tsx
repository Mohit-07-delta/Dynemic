import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSection from "@/sections/HeroSection";
import HallOfFame from "@/sections/HallOfFame";
import CoursesSection from "@/sections/CoursesSection";
import GallerySection from "@/sections/GallerySection";
import AdmissionForm from "@/sections/AdmissionForm";
import Footer from "@/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* ── Skip-to-content link (Accessibility) ── */}
      <a
        href="#main-content"
        style={{
          position: "fixed",
          top: "-100px",
          left: "1rem",
          zIndex: 9999,
          backgroundColor: "#D4AF37",
          color: "#0A1F44",
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: "0.875rem",
          padding: "0.6rem 1.2rem",
          borderRadius: "8px",
          textDecoration: "none",
          transition: "top 0.2s",
        }}
        onFocus={(e) => { e.currentTarget.style.top = "1rem"; }}
        onBlur={(e)  => { e.currentTarget.style.top = "-100px"; }}
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        {/* ① Hero — no reveal delay; visible immediately */}
        <HeroSection />

        {/* ② Hall of Fame */}
        <ScrollReveal>
          <HallOfFame />
        </ScrollReveal>

        {/* ③ Courses */}
        <ScrollReveal delay={1}>
          <CoursesSection />
        </ScrollReveal>

        {/* ④ Gallery */}
        <ScrollReveal>
          <GallerySection />
        </ScrollReveal>

        {/* ⑤ Admission Form */}
        <ScrollReveal delay={1}>
          <AdmissionForm />
        </ScrollReveal>

        {/* ⑥ Footer */}
        <ScrollReveal>
          <Footer />
        </ScrollReveal>
      </main>

      {/* Floating — outside main so it overlays everything */}
      <WhatsAppButton />
    </>
  );
}
