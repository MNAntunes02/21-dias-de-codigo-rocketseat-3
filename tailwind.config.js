/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'main': '#FF5A28',
        'second': '#01B47C'
      },
      colors:{
        'main': '#FF5A28',
        'second': '#01B47C'
      }
    },
  },
  plugins: [],
}
