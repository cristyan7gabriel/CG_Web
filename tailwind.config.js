/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cgweb: {
          bg: '#00060D',
          bgSecondary: '#031226',
          bgTertiary: '#011140',
          primary: '#165FF2',
          secondary: '#0D65D9',
          textMain: '#FFFFFF',
          textMuted: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
