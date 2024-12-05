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
        background: "url(/public/images/bg.jpg)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'my-image' : "url(/images/bgr.jpg)",
        'about-image' : "url(/images/bg.jpg)"
       },
    },
  },
  plugins: [],
};
export default config;
