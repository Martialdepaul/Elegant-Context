/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "custom-brown-1": "#31220b",
      "custom-brown-2": "#382e1b",
      "custom-gold": "#d1b68b",
      white: "#ffff",
      red: "#FF0000",
      green: "#00FF00",
    },
    fontFamily: {
      quicksand: ["Quicksand", "sans-serif"],
      merriweather: ["Merriweather", "serif"],
    },
  },
  plugins: [],
};
