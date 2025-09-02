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
  title: "DICUMÊ - Monte pratos mais saudáveis em segundos",
  description:
    "DICUMÊ te ajuda a entender cada alimento com um semáforo nutricional simples. Busque, monte e salve suas refeições.",
  keywords:
    "nutrição, alimentação saudável, semáforo nutricional, refeições, saúde",
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
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} ${comfortaa.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
