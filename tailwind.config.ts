import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#FA7617',
        'secondaryColor': '#25262B',
        'accent':'#C1C2C5',
        'darkaccent':'#6c6d70'
      }
    }
  },
  plugins: [],
};
export default config;
