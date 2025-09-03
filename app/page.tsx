import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

// Structured data for homepage SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "DICUMÊ",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dicume.app.br",
  description:
    "App de nutrição inteligente com semáforo nutricional. Monte pratos mais saudáveis em segundos.",
  applicationCategory: "HealthApplication",
  operatingSystem: ["Android"],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
  },
  creator: {
    "@type": "Organization",
    name: "Fábrica de Inovação",
  },
  featureList: [
    "Semáforo nutricional inteligente",
    "Busca de alimentos",
    "Montagem de pratos virtuais",
    "Sincronização entre dispositivos",
    "Compartilhamento de refeições",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
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
    </>
  );
}
