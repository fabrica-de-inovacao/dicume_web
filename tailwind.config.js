/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6D4C41",
          light: "#8D6E63",
          dark: "#5D4037",
        },
        secondary: "#2196F3",
        background: "#FAFAFA",
        surface: "#FFFFFF",
        outline: "#E0E0E0",
        text: {
          primary: "#212121",
          secondary: "#757575",
        },
        success: "#4CAF50",
        warning: "#FF9800",
        danger: "#F44336",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        soft: "0 6px 16px rgba(0, 0, 0, 0.06)",
      },
      spacing: {
        section: "64px",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
