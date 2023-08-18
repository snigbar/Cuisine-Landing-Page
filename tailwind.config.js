/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary":"#FF5F1B",
        "primary-light":"#FFEFE8",
        "text-primary": "#212121",
        "text-medium": "#FFCFBA",
        "text-primary-light": "#A1A1A1",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'], // Default sans-serif font stack
        'manrope': ['Manrope', 'sans-serif'],       // Default serif font stack
           // Custom font stack
      },
    },
  },
  plugins: [],
}
