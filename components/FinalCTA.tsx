"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import {
  Phone,
  Cup,
  House,
  Search,
  Clipboard,
  People,
} from "react-bootstrap-icons";
import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-soft"
        >
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Pre-title */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg font-medium text-text-secondary"
              >
                Pronto para transformar sua alimentação?
              </motion.p>

              {/* Main Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-text-primary leading-tight"
              >
                Experimente DICUMÊ
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-base text-text-secondary leading-relaxed"
              >
                Acesse a versão beta e experimente nutrição inteligente hoje!
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Link href="/experimentar">
                  <motion.button
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 card-hover"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone />
                    <span>Experimentar DICUMÊ</span>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-sm text-text-secondary">
                  Versão beta disponível • Gratuito • Sem compromisso
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:justify-end"
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
                        <h3 className="font-bold text-base">DICUMÊ</h3>
                        <div className="w-6 h-6 bg-primary rounded-full"></div>
                      </div>

                      {/* Success Message */}
                      <div className="bg-success/10 rounded-lg p-3 text-center">
                        <div className="w-10 h-10 bg-success rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-lg">✓</span>
                        </div>
                        <h4 className="font-semibold text-success mb-1 text-sm">
                          Prato Salvo!
                        </h4>
                        <p className="text-xs text-text-secondary">
                          Sua refeição foi sincronizada
                        </p>
                      </div>

                      {/* Recent Meals */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">
                          Refeições Recentes
                        </h4>
                        <div className="space-y-1.5">
                          <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-md">
                            <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center">
                              <Cup className="text-success text-xs" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-xs">
                                Almoço Saudável
                              </div>
                              <div className="text-xs text-text-secondary">
                                Hoje, 12:30
                              </div>
                            </div>
                            <div className="flex space-x-0.5">
                              <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                              <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                              <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-md">
                            <div className="w-6 h-6 bg-warning/20 rounded-full flex items-center justify-center">
                              <Cup className="text-warning text-xs" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium text-xs">
                                Café da Manhã
                              </div>
                              <div className="text-xs text-text-secondary">
                                Hoje, 08:00
                              </div>
                            </div>
                            <div className="flex space-x-0.5">
                              <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                              <div className="w-1.5 h-1.5 bg-warning rounded-full"></div>
                              <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Share Button */}
                      <button className="w-full bg-secondary text-white py-2.5 rounded-lg font-medium text-sm">
                        Compartilhar Progresso
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

                {/* Hand holding phone placeholder */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gray-200 rounded-full opacity-20"></div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
