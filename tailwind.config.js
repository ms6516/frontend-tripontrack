/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        syne: ['var(--font-syne)', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
