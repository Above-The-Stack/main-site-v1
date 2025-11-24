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
        brand: {
          primary: "rgb(var(--color-primary-rgb) / <alpha-value>)",
          accent: "rgb(var(--color-accent-rgb) / <alpha-value>)",
          bg: "rgb(var(--color-bg-rgb) / <alpha-value>)",
          surface: "rgb(var(--color-surface-rgb) / <alpha-value>)",
          "surface-soft": "rgb(var(--color-surface-soft-rgb) / <alpha-value>)",
          text: "rgb(var(--color-text-rgb) / <alpha-value>)",
          "text-muted": "rgb(var(--color-text-muted-rgb) / <alpha-value>)",
          "border-subtle": "rgb(var(--color-border-subtle-rgb) / <alpha-value>)",
        },
        background: "rgb(var(--color-bg-rgb) / <alpha-value>)",
        foreground: "rgb(var(--color-text-rgb) / <alpha-value>)",
        accent: "rgb(var(--color-accent-rgb) / <alpha-value>)",
        cta: "rgb(var(--color-primary-rgb) / <alpha-value>)",
        muted: "rgb(var(--color-text-muted-rgb) / <alpha-value>)",
        surface: "rgb(var(--color-surface-rgb) / <alpha-value>)",
        border: "rgb(var(--color-border-subtle-rgb) / <alpha-value>)",
        card: "rgb(var(--color-surface-soft-rgb) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["Inter", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 12px 40px rgba(12, 18, 74, 0.3)",
        soft: "0 24px 80px rgba(12, 20, 86, 0.4), 0 12px 36px rgba(16, 192, 231, 0.22)",
        glowPrimary: "0 10px 30px rgba(241, 130, 104, 0.45), 0 8px 24px rgba(16, 192, 231, 0.2)",
      },
      borderRadius: {
        xl: "1rem",
        '2xl': "1.25rem",
        pill: "999px",
      },
    },
  },
  plugins: [],
};

export default config;
