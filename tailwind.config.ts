import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        carousel: "carousel 9s linear infinite",
      },
      borderRadius: {
        "4xl": "32px",
      },
      colors: {
        primary: "#AD1FFF",
        "primary-background": "#3C005E",
        "contrast-dark": "#000",
        "contrast-light": "#fff",
        border: "#2B2B2B",
        text: "#A1A1A1",
        background: "#0D0D0D",
      },
      gridTemplateColumns: {
        products: "repeat(auto-fill, 320px)",
      },
      keyframes: {
        carousel: {
          "0%": {
            "transform": "translateX(50%)",
          },
          "50%": {
            "transform": "translateX(0)",
          },
          "100%": {
            "transform": "translateX(-50%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
