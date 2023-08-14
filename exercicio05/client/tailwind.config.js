/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      indigo: {
        light: '#7250a1',
        default: '#7250a1',
        dark: '#7250a1',
      },
      gray: {
        light: '#bcc3ce',
        default: '#5f6a7d',
        dark: '#14112d',
      },
      red: {
        light: '#ff7e7c',
        default: '#c52020',
        dark: '#c52020',
      },
      yellow: colors.amber,
      blue: {
        light: '#3c97ff',
        default: '#1768e1',
        dark: '#0168de',
      },
      green: {
        light: '#e6fffa',
        default: '#02bea2',
        hover: '#08ccaf',
      },
    },
  },
  plugins: [],
}
