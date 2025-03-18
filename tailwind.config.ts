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
      },
      colors: {
        turquoise: {
          200: "#D1F7EA",
        },
        black: {
          200: "#052B1E",
        },
        gray: {
          200: "#809FB8",
          400: "#4D5F6E",
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
