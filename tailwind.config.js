/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary":"#FF5F1B",
        "primary-dark": "#f04901",
        "primary-light":"#FFEFE8",
        "font-dark": "#212121",
        "text-medium": "#FFCFBA",
        "text-light": "#A1A1A1",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'], // Default sans-serif font stack
        'manrope': ['Manrope', 'sans-serif'],       // Default serif font stack
      },
      screens: {
        "md": "780px",
        'xxl': '1368px', // Define your custom breakpoint
        'xxxl': '1920px', // Define your custom breakpoint
      },
    },
  },
  plugins: [],
}
