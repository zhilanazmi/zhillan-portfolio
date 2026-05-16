/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: [
          "'Bricolage Grotesque'",
          "'Space Grotesk'",
          "'Inter'",
          "system-ui",
          "sans-serif",
        ],
        serif: ["'Instrument Serif'", "Georgia", "serif"],
        mono: [
          "'JetBrains Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      colors: {
        // Warm paper / ink palette
        paper: {
          50: "#FBF9F4",
          100: "#F5F2EA",
          200: "#EDE8DC",
          300: "#DAD2BF",
        },
        ink: {
          50: "#F7F6F2",
          100: "#E7E6E0",
          200: "#B5B4AE",
          300: "#787873",
          400: "#4B4B47",
          500: "#2A2A28",
          600: "#1B1B19",
          700: "#141413",
          800: "#0F0F0E",
          900: "#0A0A09",
          950: "#050504",
        },
        // Bold neon accent for highlights
        lime: {
          DEFAULT: "#D4FA3B",
          400: "#E1FA6C",
          500: "#D4FA3B",
          600: "#B8E000",
        },
        coral: {
          DEFAULT: "#FF5A36",
          400: "#FF7A5A",
          500: "#FF5A36",
          600: "#E03F1A",
        },
      },
      letterSpacing: {
        "tightest": "-0.05em",
        "display": "-0.04em",
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 50s linear infinite",
        blink: "blink 1s steps(2, start) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
