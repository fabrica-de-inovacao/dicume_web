import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <div id="home">
        <Hero />
      </div>

      <div id="features">
        <Features />
      </div>

      <div id="how-it-works">
        <HowItWorks />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="download">
        <FinalCTA />
      </div>

      <Footer />

      <BackToTop />
    </main>
  );
}
