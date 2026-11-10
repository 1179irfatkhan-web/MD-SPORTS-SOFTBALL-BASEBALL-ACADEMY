/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#08070B",
          navy: "#11172B",
          navyLight: "#18213D",
          orange: "#F36B16",
          orangeHover: "#E05A05",
          gold: "#FFB21A",
          goldHover: "#E69E10",
          offwhite: "#F5F1E9",
          muted: "#A7A7AD",
          cardBorder: "#242F52",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'flame-gradient': 'linear-gradient(135deg, #F36B16 0%, #FFB21A 100%)',
        'flame-glow': 'radial-gradient(circle at center, rgba(243, 107, 22, 0.15) 0%, rgba(8, 7, 11, 0) 70%)',
      },
      boxShadow: {
        'glow-orange': '0 0 25px -5px rgba(243, 107, 22, 0.35)',
        'glow-gold': '0 0 25px -5px rgba(255, 178, 26, 0.35)',
      }
    },
  },
  plugins: [],
}

