/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      "dark-theme": "#1c1c1c",
      "light-theme": "#c6e3f7",
    },
  },
  plugins: [],
};
