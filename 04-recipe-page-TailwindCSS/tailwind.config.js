/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cardGray: "#BDBDBD",
        cardOrange: "#F2994A",
      },
      fontFamily: {
        playfairDisplay: ["Playfair Display"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
