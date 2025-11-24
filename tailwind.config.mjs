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
        background: "#EAF2FC",
        foreground: "#0F2144",
        accent: "#1E73BE",
        cta: "#F36D53",
        muted: "#5C6F8F",
        surface: "#FFFFFF",
        border: "#CFDFF2",
        card: "#FFFFFF",
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
