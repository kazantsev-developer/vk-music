/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "sans-serif",
        ],
      },
      colors: {
        vk: {
          bg: "#0A0A0C",
          card: "#19191D",
          cardHover: "#232329",
          blue: "#2D81E0",
          purple: "#7B3FE4",
          pink: "#E646B6",
          muted: "rgba(255, 255, 255, 0.55)",
        },
      },
    },
  },
  plugins: [],
};
