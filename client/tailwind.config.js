/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      scale: {
        '175': '1.75',
        '200': '2',
        '300': '3',
        '400': '4',
        '500': '5'
      },
      colors: {
        'primary': '#006838',
        'secondary': '#55833D',
        'tertiary': '#8CC342'
      }
    },
    fontFamily: {
      'league': ['League', 'sans-serif'],
    },
  plugins: [],
}
}

