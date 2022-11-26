/** @type {import('tailwindcss').Config} */
/*
  colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
*/
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        xl: '1124px',
        lg: '1124px',
        '2xl': '1124px',
      },
      padding: '1rem'
    },
    fontFamily:{
      'lato': ["'Lato', sans-serif"],
    },
    colors: {
        'my-red': {
          '100': 'hsl(12, 88%, 59%)',
          '200': 'hsl(12, 88%, 69%)',
        },
        'my-blue': {
          '100':'hsl(233, 12%, 13%)',
          '200': 'hsl(228, 39%, 23%)',
        },
        'my-gray': {
          '100': 'hsl(12, 88%, 95%)',
          '200': 'hsl(227, 12%, 61%)',
          '300': 'hsl(13, 100%, 96%)',
          '400': 'hsl(0, 0%, 98%)',
        }
    },
    backgroundPosition: {
      'top-center': '64% -6%',
      // 'top-center-sm': '-10% 33%',
      'top-center-sm': '-5% -10%',
      // 'top-center-md': '86% -7%'
    }
  },
  plugins: [],
}
