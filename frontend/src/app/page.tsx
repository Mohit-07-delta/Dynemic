import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import HallOfFame from "@/sections/HallOfFame";
import CoursesSection from "@/sections/CoursesSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HallOfFame />
      <CoursesSection />
    </main>
  );
}
