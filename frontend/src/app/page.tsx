import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import HallOfFame from "@/sections/HallOfFame";
import CoursesSection from "@/sections/CoursesSection";
import GallerySection from "@/sections/GallerySection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HallOfFame />
      <CoursesSection />
      <GallerySection />
    </main>
  );
}
