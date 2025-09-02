"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
                {/* Phone Mockup (real image) */}
                <div className="relative w-64 h-[480px]">
                  <Image
                    src="/assets/asset_6.webp"
                    alt="Mockup DICUMÊ no telefone"
                    width={340}
                    height={620}
                    className="rounded-[2rem] object-cover shadow-large"
                    priority={false}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
