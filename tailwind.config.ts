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
        background: "#fefcf5", // Warm cream paper
        surface: {
          DEFAULT: "#fffcf6", // Warm white cards
          tint: "#eaeae2",    // Subtle dividers
          light: "#f7f7f5",   // Section tint
        },
        ink: {
          DEFAULT: "#3c3a39", // Warm near-black
          80: "#0b0907cc",
          60: "#0b090799",
          40: "#0b090766",
          20: "#0b090733",
          10: "#0b09071a",
          5: "#0b09070d",
        },
        accent: {
          red: "#ff272d",       // Primary voltage red
          orange: "#ff7300",    // Warm orange
          yellow: "#ffc753",    // Soft yellow
          gold: "#fdc211",      // Primary yellow
          pink: "#f49eff",      // Electric pastel pink
          lavender: "#817fff",  // Lavender purple
          blue: "#2677ff",      // Primary blue
          aqua: "#aaf2fc",      // Aqua highlight
          turquoise: "#79deeb", // Turquoise
          sage: "#81b09a",      // Soft green
          emerald: "#32ae88",   // Success green
        },
      },
      fontFamily: {
        sans: ["Suisse Int'l", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["Suisse Int'l Mono", "SFMono-Regular", "Consolas", "Liberation Mono", "Menlo", "monospace"],
      },
      borderRadius: {
        chip: "2px",
        subcard: "10px",
        card: "14px",
        modal: "18px",
        premium: "20px",
        pill: "40px",
        fullpill: "9999px",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.08), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        float: "0 4px 24px 0 rgba(0, 0, 0, 0.06)",
        popover: "0 2px 10px 0 rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
