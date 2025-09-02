"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Search, Plus, Save, Share } from "lucide-react";
import { Cup, House, Clipboard, People } from "react-bootstrap-icons";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Buscar alimento",
    description: "Encontre alimentos por nome ou categoria.",
  },
  {
    number: "02",
    icon: Plus,
    title: "Montar prato",
    description: "Ajuste porções no prato virtual.",
  },
  {
    number: "03",
    icon: Save,
    title: "Salvar & Sincronizar",
    description: "Guarde suas refeições e acesse de qualquer dispositivo.",
  },
  {
    number: "04",
    icon: Share,
    title: "Compartilhar",
    description: "Compartilhe suas escolhas com nutricionistas/amigos.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Section Header */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-text-primary"
              >
                Passos simples para sua experiência nutricional
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-base text-text-secondary leading-relaxed"
              >
                Descubra como é fácil montar refeições saudáveis com DICUMÊ.
                Nosso processo intuitivo garante uma experiência suave e sem
                complicações desde a busca até o salvamento. Versão beta
                disponível.
              </motion.p>
            </div>

            {/* Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                        <step.icon className="w-3 h-3 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            <motion.div
              className="relative"
              whileHover={{
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 },
              }}
            >
              {/* Real phone mockup image (place asset_5.webp into public/assets) */}
              <div className="relative w-64 sm:w-72">
                <Image
                  src="/assets/asset_5.webp"
                  alt="Mockup DICUMÊ - telefone"
                  width={600}
                  height={680}
                  className="rounded-[2rem] shadow-large w-full h-auto"
                  priority={false}
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Demo Button */}
              <motion.button
                className="absolute -bottom-3 -right-3 bg-primary text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Demo
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
