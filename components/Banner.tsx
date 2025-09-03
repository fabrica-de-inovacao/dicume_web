import Image from "next/image";
import { motion } from "framer-motion";

interface BannerProps {
  variant?: "hero" | "social" | "notification";
  className?: string;
  priority?: boolean;
}

export default function Banner({
  variant = "hero",
  className = "",
  priority = false,
}: BannerProps) {
  const bannerConfig = {
    hero: {
      src: "/banner.png", // Colocar banner.png na pasta public/
      alt: "DICUMÊ - App de nutrição inteligente",
      width: 1200,
      height: 630,
      className: "rounded-lg shadow-lg",
    },
    social: {
      src: "/banner.png",
      alt: "DICUMÊ - Monte pratos mais saudáveis em segundos",
      width: 1200,
      height: 630,
      className: "object-cover",
    },
    notification: {
      src: "/banner.png",
      alt: "DICUMÊ - Nova versão disponível",
      width: 800,
      height: 200,
      className: "rounded border",
    },
  };

  const config = bannerConfig[variant];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative ${className}`}
    >
      <Image
        src={config.src}
        alt={config.alt}
        width={config.width}
        height={config.height}
        className={config.className}
        priority={priority}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLDqvZHp9gSkzaKM2+3XTB1Fgz24FgK15BEj5VGjF1vJSk4CgR0/mH6g=="
      />
    </motion.div>
  );
}
