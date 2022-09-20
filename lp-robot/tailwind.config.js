/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
      'header-bg': "url('./assets/header.png')"
      }
    },
  },
  plugins: [require('preline/plugin')],
}
