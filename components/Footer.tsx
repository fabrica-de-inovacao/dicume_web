"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-outline py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <Image
                src="/dicume_logo.svg"
                alt="DICUMÊ Logo"
                width={100}
                height={32}
                className="h-6 w-auto"
              />
              <span
                className="text-text-primary text-[16px] sm:text-[18px] leading-none"
                style={{ fontFamily: "var(--font-comfortaa)" }}
              >
                dicumê
              </span>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            <a
              href="#home"
              className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
            >
              Recursos
            </a>
            <a
              href="#how-it-works"
              className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
            >
              Como Funciona
            </a>
            <a
              href="#testimonials"
              className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
            >
              Avaliações
            </a>
            <a
              href="#contact"
              className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
            >
              Contato
            </a>
          </motion.nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3"
          >
            <motion.a
              href="#"
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#"
              className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 pt-6 border-t border-outline flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0"
        >
          {/* Copyright */}
          <p className="text-xs text-text-secondary">
            © 2025 DICUMÊ. Todos os direitos reservados.
          </p>

          {/* Legal Links */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-xs text-text-secondary hover:text-primary transition-colors duration-200"
            >
              Sobre
            </a>
            <a
              href="#"
              className="text-xs text-text-secondary hover:text-primary transition-colors duration-200"
            >
              Privacidade
            </a>
            <a
              href="#"
              className="text-xs text-text-secondary hover:text-primary transition-colors duration-200"
            >
              Contato
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
