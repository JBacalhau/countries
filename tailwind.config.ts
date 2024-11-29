import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'b-light': '#fafafa',
        't-light': '#111517',
        'e-t-light': '#ffffff',
        'i-light': '#858585',
        'b-dark': '#202c37',
        'e-dark': '#2b3945',
      },


    },
  },
  plugins: [],
};
export default config;
