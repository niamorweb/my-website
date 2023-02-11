/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#DAC4F5",
        mainColorLight: "#d8fff7",
      },
    },
  },
  plugins: [],
};
