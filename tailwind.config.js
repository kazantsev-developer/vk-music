/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'sans-serif'],
      },
      colors: {
        vk: {
          bg: '#050505',
          card: '#141416',
          cardHover: '#1D1D21',
          blue: '#EC53F6',
          link: '#F278FA',
          muted: '#9A9AA2',
        }
      }
    },
  },
  plugins: [],
}
