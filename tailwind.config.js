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
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-barlow)", "var(--font-inter)", "sans-serif"],
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
