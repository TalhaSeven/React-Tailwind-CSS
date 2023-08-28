/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
],
  theme: {
    extend: {
      colors: {

        back: "#000000",
        cardBack: "#252D37",
        textColor: "#FFFFFF",
        buttonBack1: "#123D",
        buttonBack2: "#6A6D71",
        buttonBack3: "#E68226",
        buttonSubmit: "#D9D9D9",
        textColor1: "#D9D9D9",
      },
    },
    darkMode: "class",
    plugins: [require("tw-elements-react/dist/plugin.cjs")]
  },
};
