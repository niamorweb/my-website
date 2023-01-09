/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#1abc9c",
        mainColorLight: "#d8fff7"
      }
    },
  },
  plugins: [],
}
