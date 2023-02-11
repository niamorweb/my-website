/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#8C9CFF",
        mainColorLight: "#d8fff7",
        secondaryColor: "#252525",
      },
    },
  },
  plugins: [],
};
