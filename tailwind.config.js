/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,jsx}',
      './components/**/*.{js,jsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          syne: ['Syne', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  