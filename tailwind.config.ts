import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "base-white": "#F5F5F5",
        "base-black": "#1A1A1A",
        "base-black-light": "#282828",
      },
      height: {
        18: "4.5rem",
        118: "28rem",
      },
      width: {
        118: "28rem",
        140: "35rem",
      },
      border: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
export default config;
