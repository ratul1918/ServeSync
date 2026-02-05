import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { HowItWorks } from "../components/HowItWorks";
import { DashboardPreview } from "../components/DashboardPreview";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Features />
        <HowItWorks />
        <DashboardPreview />
        <Footer />
      </main>
    </div>
  );
}
