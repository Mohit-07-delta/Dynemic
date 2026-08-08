import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import HallOfFame from "@/sections/HallOfFame";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HallOfFame />
    </main>
  );
}
