import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DICUMÊ - App de Nutrição Inteligente",
    short_name: "DICUMÊ",
    description:
      "Monte pratos mais saudáveis em segundos com semáforo nutricional inteligente",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6366f1",
    categories: ["health", "lifestyle", "food"],
    icons: [
      {
        src: "/dicume_logo.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: "/dicume_logo.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
  };
}
