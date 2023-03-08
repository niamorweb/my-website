/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#0281f8",
        mainColorLight: "#0281f854",
        secondaryColor: "#252525",
      },
    },
  },
  plugins: [],
};
