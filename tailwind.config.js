const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBlack: "#202020",
      },
      fontFamily: { sans: ["Open Sans", ...defaultTheme.fontFamily.sans] },
    },
  },
  plugins: [],
};
