/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Josefin Sans', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'header-image': "url('/src/assets/bitmap.jpg')"
      },
      letterSpacing: {
        tighter: '-0.194px',
        tighest: '-0.25px',
      }
    },
  },
  plugins: [],
}

