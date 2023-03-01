/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000112',
        veryDark: '#20212C',
        darkGrey: '#2B2C37',
        linesDark: '#3E3F4E',
        mediumGrey: '#828FA3',
        linesLight: '#E4EBFA',
        lightGrey: '#F4F7FD',
        white: '#FFFFFF',
        red: '#EA5555',
        redHover: '#FF9898',
        mainPurple: '#635FC7',
        mainPurpleHover: '#A8A4FF'
      }
    },
  },
  plugins: [],
}
