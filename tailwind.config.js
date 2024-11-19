/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js}",
    "./app/components/**/*.{html.js}",
    "./public/global.css"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}