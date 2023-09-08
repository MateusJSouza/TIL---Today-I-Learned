/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'body': ['Josefin Sans', 'sans-serif']
    },
    extend: {
      boxShadow: {
        material: '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
        'material-lg': '0 14px 28px rgb(0 0 0 / 25%), 0 10px 10px rgb(0 0 0 / 22%)',
      },
      transitionTimingFunction: {
        material: 'cubic-bezier(.25,.8,.25,1)',
      },
      maxHeight: {
        'max-content': 'max-content',
        390: '392px',
      },
      height: {
        200: '200px',
        300: '300px',
      },
      width: {
        550: '550px',
        350: '350px',
      },
      letterSpacing: {
        tighter: '15px',
        tighest: '-0.25px'
      }
    },
  },
  plugins: [],
}
