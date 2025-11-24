/** @type {import('tailwindcss').Config} */
const colors = {
  navy: "#0C101B",
  cyan: "#00C7C7",
  gray: "#8A93A6",
  white: "#FFFFFF",
};

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: colors.navy,
        accent: colors.cyan,
        muted: colors.gray,
        surface: "#111727",
        border: "#1B2236",
        card: "#12192A",
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
