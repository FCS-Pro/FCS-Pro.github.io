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
        'deep-black': '#050505',
        'accent-cyan': '#00F0FF',
        'accent-purple': '#7000FF',
        'text-dim': '#888888',
      },
      fontFamily: {
        display: ['var(--font-orbitron)'],
        body: ['var(--font-inter)'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
