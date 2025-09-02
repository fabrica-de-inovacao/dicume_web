"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Users, CreditCard, ArrowDown } from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Alimentos regionais",
    description: "Conteúdo regional e porções recomendadas.",
    color: "bg-success/10",
    iconColor: "bg-success",
    image: "/placeholder-feature-1.jpg",
  },
  {
    icon: Users,
    title: "Nutrição personalizada",
    description: "Sugestões adaptadas ao seu perfil.",
    color: "bg-secondary/10",
    iconColor: "bg-secondary",
    image: "/placeholder-feature-2.jpg",
  },
  {
    icon: CreditCard,
    title: "Salvamento rápido",
    description: "Salve e sincronize com um toque.",
    color: "bg-warning/10",
    iconColor: "bg-warning",
    image: "/placeholder-feature-3.jpg",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-purple-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center mb-4"
          >
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center mr-3">
              <ArrowDown className="w-3 h-3 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
              Nutrição inteligente, experiência simples
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-base text-text-secondary max-w-2xl"
          >
            DICUMÊ oferece nutrição inteligente, experiência simples,
            recomendações personalizadas e sincronização segura tudo em um só
            lugar. Versão beta em desenvolvimento.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className={`relative overflow-hidden rounded-xl p-6 shadow-soft card-hover h-full ${
                  index === 0
                    ? "bg-gray-100"
                    : index === 1
                    ? "bg-purple-100"
                    : "bg-gray-200"
                }`}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                {/* Background image fills the entire card, color remains behind for transparency */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <Image
                    src={
                      index === 0
                        ? "/assets/asset_2.png"
                        : index === 1
                        ? "/assets/asset_3.png"
                        : "/assets/asset_4.jpg"
                    }
                    alt={feature.title}
                    fill
                    className="object-cover w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                    priority={index === 0}
                  />
                </div>
                {/* Elegant top overlay to improve text legibility over images */}
                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-white/85 via-white/40 to-transparent transition-opacity duration-300 group-hover:opacity-95"></div>
                {/* Icon in top right corner */}
                <div className="relative z-20 flex justify-end mb-4">
                  <div className="w-10 h-10 bg-black/90 rounded-full flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Title right aligned with controlled width for two-line wrap */}
                <div className="relative z-20 mb-6 flex justify-end">
                  <h3 className="text-xl font-bold text-text-primary text-right leading-snug tracking-tight max-w-[14ch]">
                    {feature.title}
                  </h3>
                </div>

                {/* Space to give height while background image fills the card */}
                <div className="relative z-20 h-64"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
