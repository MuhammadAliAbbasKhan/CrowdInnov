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
          lime: '#84CC16',
          limeBright: '#94E000',
          navy: '#0B1736',
          navyDark: '#061229',
          navyLight: '#142752',
          cyan: '#00A3E0',
          accent: '#38BDF8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
