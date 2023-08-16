/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",'./pages/**/*.{html,js}',
  './components/**/*.{html,js,jsx,ts,tsx}',],
  theme: {
    extend: {
      colors: {
        primaryDark:'#5651e5',
        primaryLight: '#709dff',
      },
    },
  },
  plugins: [],
}

