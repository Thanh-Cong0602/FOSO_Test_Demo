import flowbite from "flowbite-react/tailwind";

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      borderRadius: {
        6: "24px",
        10: "40px",
      },
      lineHeight: {
        1.5: "150%",
        2: "200%",
        25: "100px",
      },
      gap: {
        "2.5": "10px",
      },
      colors: {
        turquoise: {
          100: "#10805B",
          200: "#D1F7EA",
          300: "#15AA7A",
          400: "#1AD598",
        },
        white: {
          200: "#E2F0FE",
          100: "#FFFFFF",
        },
        black: {
          200: "#052B1E",
          300: "#231F20",
          500: "#050505",
          900: "#000000",
        },
        gray: {
          100: "#D9E1E7",
          200: "#809FB8",
          300: "#33404A",
          400: "#4D5F6E",
          500: "#667F93",
        },
        blue: {
          500: "#0F4F9E",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
  corePlugins: {
    boxSizing: true,
  },
};
export default config;
