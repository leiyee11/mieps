import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101D30",
        ocean: "#172D45",
        mineral: "#315D7A",
        paper: "#F7F8F5",
        stone: "#DCE2E4",
        muted: "#77838C",
        gold: "#C6A66B",
        tide: "#67B7B0",
      },
      fontFamily: {
        sans: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        editorial: ["var(--font-editorial)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
