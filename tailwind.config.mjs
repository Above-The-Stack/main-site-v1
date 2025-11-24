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
          primary: "var(--color-primary)",
          accent: "var(--color-accent)",
          bg: "var(--color-bg)",
          surface: "var(--color-surface)",
          "surface-soft": "var(--color-surface-soft)",
          text: "var(--color-text)",
          "text-muted": "var(--color-text-muted)",
          "border-subtle": "var(--color-border-subtle)",
        },
        background: "var(--color-bg)",
        foreground: "var(--color-text)",
        accent: "var(--color-accent)",
        cta: "var(--color-primary)",
        muted: "var(--color-text-muted)",
        surface: "var(--color-surface)",
        border: "var(--color-border-subtle)",
        card: "var(--color-surface-soft)",
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
