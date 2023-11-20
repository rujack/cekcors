import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        hijau: {
          50: "#F5FAF6",
          100: "#EBF4EC",
          200: "#D7EAD9",
          300: "#C3DFC7",
          400: "#AFD5B4",
          500: "#99C99F",
          600: "#6CB175",
          700: "#4A8C53",
          800: "#315D37",
          900: "#192F1C",
          950: "#0C170E",
        },
        kuning: {
          50: "#FFFBF5",
          100: "#FEF5E6",
          200: "#FEECD2",
          300: "#FDE2B9",
          400: "#FDDAA6",
          500: "#FCCF8C",
          600: "#FAB042",
          700: "#E58C06",
          800: "#9A5E04",
          900: "#4B2E02",
          950: "#281801",
        },
      },
    },
  },
  plugins: [],
};
export default config;
