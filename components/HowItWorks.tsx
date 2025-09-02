"use client";

import { motion } from "framer-motion";
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
              {/* Phone Mockup */}
              <div className="relative w-64 h-[480px] bg-black rounded-[2rem] p-1.5 shadow-large">
                <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden relative">
                  {/* App Screen Content */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-base">Meu Prato</h3>
                      <div className="w-6 h-6 bg-primary rounded-full"></div>
                    </div>

                    {/* Plate Visualization */}
                    <div className="bg-gray-100 rounded-lg p-3 h-24 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-success/20 rounded-full mx-auto mb-1.5 flex items-center justify-center">
                          <Cup className="text-lg" />
                        </div>
                        <div className="text-xs text-text-secondary">
                          Seu prato virtual
                        </div>
                      </div>
                    </div>

                    {/* Food Items */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">
                        Itens adicionados
                      </h4>
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between p-2 bg-success/10 rounded-md">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-success rounded-full"></div>
                            <span className="text-xs font-medium">
                              Frango Grelhado
                            </span>
                          </div>
                          <span className="text-xs text-text-secondary">
                            150g
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-warning/10 rounded-md">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-warning rounded-full"></div>
                            <span className="text-xs font-medium">
                              Arroz Integral
                            </span>
                          </div>
                          <span className="text-xs text-text-secondary">
                            100g
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-success/10 rounded-md">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-success rounded-full"></div>
                            <span className="text-xs font-medium">
                              Brócolis
                            </span>
                          </div>
                          <span className="text-xs text-text-secondary">
                            80g
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Save Button */}
                    <button className="w-full bg-primary text-white py-2.5 rounded-lg font-medium text-sm">
                      Salvar Refeição
                    </button>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3">
                    <div className="flex justify-around">
                      <div className="text-gray-400">
                        <House />
                      </div>
                      <div className="text-gray-400">
                        <Search />
                      </div>
                      <div className="text-primary">
                        <Clipboard />
                      </div>
                      <div className="text-gray-400">
                        <People />
                      </div>
                    </div>
                  </div>
                </div>
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
