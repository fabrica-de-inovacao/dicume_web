"use client";

import { motion } from "framer-motion";
import { Phone } from "react-bootstrap-icons";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        atTop ? "bg-transparent border-transparent" : "bg-white/95 backdrop-blur-sm border-outline"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex items-center justify-between h-16">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/dicume_logo.svg"
              alt="DICUMÊ Logo"
              width={120}
              height={38}
              className="h-[38px] w-auto"
            />
            <span
              className="text-text-primary text-[18px] sm:text-[20px] leading-none"
              style={{ fontFamily: "var(--font-comfortaa)" }}
            >
              dicumê
            </span>
          </Link>
        </motion.div>

        {/* CTA Button */}
        <Link href="/experimentar">
          <motion.button
            className="bg-text-primary hover:bg-text-secondary text-white h-[38px] sm:h-[40px] md:h-[42px] lg:h-[44px] px-4 sm:px-5 rounded-full font-medium transition-all duration-200 inline-flex items-center gap-2 shadow-soft card-hover text-sm sm:text-base leading-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Phone className="w-4 h-4 sm:w-[18px] sm:h-[18px] md:w-[19px] md:h-[19px] lg:w-5 lg:h-5" />
            <span>Experimentar</span>
          </motion.button>
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;
