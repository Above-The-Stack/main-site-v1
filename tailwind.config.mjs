/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050915",
        foreground: "#E8EDF7",
        accent: "#6DD6FF",
        cta: "#A87FF8",
        muted: "#9FB2D0",
        surface: "#0B1326",
        border: "#1D2843",
        card: "#0F1A30",
      },
      fontFamily: {
        sans: ["Inter", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 10px 40px rgba(0, 0, 0, 0.25)",
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
