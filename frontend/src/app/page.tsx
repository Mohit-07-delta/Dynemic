import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import HallOfFame from "@/sections/HallOfFame";
import CoursesSection from "@/sections/CoursesSection";
import GallerySection from "@/sections/GallerySection";
import AdmissionForm from "@/sections/AdmissionForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HallOfFame />
      <CoursesSection />
      <GallerySection />
      <AdmissionForm />
      <WhatsAppButton />
    </main>
  );
}
