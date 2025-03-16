import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #FABBFF 0%, #B179FF 35%, #6DDDFF 83%)',
    },
    },
  },
  plugins: [],
};
export default config;
