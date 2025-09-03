import type { Metadata } from "next";
import { Montserrat, Inter, Comfortaa } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://dicume.app.br"
  ),
  title: {
    default: "DICUMÊ - Monte pratos mais saudáveis em segundos",
    template: "%s | DICUMÊ",
  },
  description:
    "DICUMÊ te ajuda a entender cada alimento com um semáforo nutricional simples. Busque, monte e salve suas refeições. Versão beta disponível para Android.",
  keywords: [
    "nutrição",
    "alimentação saudável",
    "semáforo nutricional",
    "refeições",
    "saúde",
    "app nutrição",
    "Android",
    "beta",
    "alimentação inteligente",
    "planejamento refeições",
  ],
  authors: [{ name: "Fábrica de Inovação" }],
  creator: "Fábrica de Inovação",
  publisher: "Fábrica de Inovação",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://dicume.app.br",
    siteName: "DICUMÊ",
    title: "DICUMÊ - Monte pratos mais saudáveis em segundos",
    description:
      "App de nutrição inteligente com semáforo nutricional. Versão beta disponível para Android.",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "DICUMÊ - App de nutrição inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DICUMÊ - Monte pratos mais saudáveis em segundos",
    description:
      "App de nutrição inteligente com semáforo nutricional. Versão beta disponível para Android.",
    images: ["/banner.png"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "apple-mobile-web-app-title": "DICUMÊ",
    "application-name": "DICUMÊ",
    "msapplication-TileColor": "#6366f1",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/dicume_logo.svg" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} ${comfortaa.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
