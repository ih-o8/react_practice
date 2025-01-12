/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#395886',
        'somber-blue': '#768BAA',
        'bright-blue': '#628ECB',
        'soft-blue': '#8AAEE0',
        'pure-blue': '#D5DEEF',
        'dark-gray': '#434343',
      }
    },
  },
  plugins: [],
}