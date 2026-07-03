/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0F1B33",
        brand: "#1E4A9C",
        surface: "#F7F8FA",
        bodygrey: "#4B5563",
      },
      fontFamily: {
        // Switzer is the primary typeface for both body and headings.
        sans: [
          "var(--font-switzer)",
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: ["var(--font-switzer)", "var(--font-inter)", "sans-serif"],
      },
      // Fixed display type scale: h1 112px, h2 72px, body 20px.
      fontSize: {
        h1: ["112px", { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "700" }],
        h2: ["72px", { lineHeight: "1.05", letterSpacing: "-0.015em", fontWeight: "700" }],
        body: ["20px", { lineHeight: "1.6" }],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.9s ease-out both",
      },
      maxWidth: {
        prose: "700px",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(15, 27, 51, 0.15)",
      },
    },
  },
  plugins: [],
};
