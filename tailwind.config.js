/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oasis-gold': '#F7931E80',
      },
      fontFamily: {
        serif: ['Times New Roman', 'serif'], // Ensuring a classic serif fallback or specific font if desired
      }
    },
  },
  plugins: [],
}