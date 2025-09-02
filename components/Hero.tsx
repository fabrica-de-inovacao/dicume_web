"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import {
  Person,
  Phone,
} from "react-bootstrap-icons";

const Hero = () => {
  // Avatar sources: read from /public/avatars (1.webp..8.webp), randomized per mount
  const avatarFiles = ["1.webp","2.webp","3.webp","4.webp","5.webp","6.webp","7.webp","8.webp"];
  const avatarSources = useMemo(() => {
    const shuffled = [...avatarFiles].sort(() => Math.random() - 0.5);
    return shuffled.map((f) => `/avatars/${f}`);
  }, []);
  // Radial positions around the mockup
  const avatarPositions = [
    "top-16 left-[14%]",
    "top-24 right-[12%]",
    "top-1/3 left-[6%]",
    "top-1/3 right-[8%]",
    "bottom-24 left-[14%]",
    "bottom-28 right-[12%]",
    "bottom-16 left-1/2 -translate-x-1/2 -translate-y-4",
    "top-1/2 right-1/2 translate-x-16 -translate-y-8",
  ];
  // Fallback placeholders in case avatars are not present yet
  const [fallbacks, setFallbacks] = useState<boolean[]>(Array(8).fill(false));
  const onAvatarError = (idx: number) =>
    setFallbacks((prev) => prev.map((v, i) => (i === idx ? true : v)));

  return (
    <section className="pt-24 pb-0 lg:pt-28 lg:pb-0 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Decorative circles with avatars - replaced by circle_avatars near the mockup */}

        {/* Connecting lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          style={{ opacity: 0.06 }}
        >
          <line
            x1="20%"
            y1="25%"
            x2="35%"
            y2="40%"
            stroke="#6D4C41"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
          <line
            x1="65%"
            y1="30%"
            x2="80%"
            y2="45%"
            stroke="#2196F3"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      <div className="container-custom">
        <div className="text-center mx-auto">
          <div className="max-w-3xl mx-auto">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full border border-black/10 bg-white/80 backdrop-blur-sm text-sm font-medium text-text-primary shadow-sm mx-auto mb-3"
          >
            Transforme sua experiência
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary leading-tight mb-2"
          >
            Monte pratos mais saudáveis em{" "}
            <span className="text-gradient">segundos</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-text-secondary leading-relaxed mb-4 max-w-2xl mx-auto"
          >
            DICUMÊ te ajuda a entender cada alimento com um semáforo nutricional
            simples. Busque, monte e salve suas refeições. Versão beta
            disponível.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center mb-0"
          >
            <Link href="/experimentar">
              <motion.button
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 flex items-center space-x-3 shadow-soft card-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone />
                <span>Experimentar DICUMÊ</span>
              </motion.button>
            </Link>
          </motion.div>

          </div>

          {/* Phone Mockup - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="relative flex justify-center group"
          >
            {/* Circle Avatars - placeholders now; auto-load real images when provided */}
            <div className="pointer-events-none absolute inset-0 hidden sm:block">
              {avatarSources.map((src, idx) => (
                <div
                  key={idx}
                  className={`absolute ${avatarPositions[idx] ?? ""} animate-float transition-transform duration-300 group-hover:scale-105`}
                  style={{ animationDelay: `${idx * 0.25}s` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-white/70 shadow-md bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200">
                    {!fallbacks[idx] ? (
                      <Image
                        src={src}
                        alt="avatar"
                        width={62}
                        height={62}
                        className="w-full h-full object-cover"
                        onError={() => onAvatarError(idx)}
                      />
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="relative w-screen left-1/2 -translate-x-1/2 mt-8 sm:mt-10 md:mt-12 lg:mt-16">
                {/* Glow sutil atrás do telefone (mínimo para evitar espaço extra) */}
                <div className="pointer-events-none absolute -inset-1 -z-10">
                  <div className="h-full w-full rounded-full bg-gradient-to-tr from-purple-300/25 via-pink-200/20 to-blue-200/20 blur-xl" />
                </div>
                <Image
                  src="/assets/asset_1.png"
                  alt="Mockup DICUMÊ no telefone"
                  width={1280}
                  height={2560}
                  sizes="(min-width:1280px) 640px, (min-width:1024px) 560px, (min-width:768px) 480px, 70vw"
                  style={{ width: "min(70vw, 640px)", height: "auto" }}
                  className="block mx-auto drop-shadow-[0_36px_120px_rgba(0,0,0,0.35)]"
                  priority
                />
                {/* Fade-to-section color (smoothly blends into next section bg) */}
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 lg:h-48 bg-gradient-to-b from-transparent via-white/80 to-purple-50"></div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
