const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 ],
  theme: {
    extend: {
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#0165b1',
      secondary: '#6daedb'
      },
      fontFamily: {
        quicksand: ["Quicksand"],
        poppins: ["Poppins"],
      },
    },
  },
  darkMode: ['class'],
  plugins: [],
}
