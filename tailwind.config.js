/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4A574',
        secondary: '#8B9B8F',
        accent: '#E8DCC8',
      },
      fontFamily: {
        serif: ['Lora', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        bounce: 'bounce 2s infinite',
      },
      transitionDelay: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}
