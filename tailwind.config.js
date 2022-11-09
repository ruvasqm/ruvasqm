/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { primary: "#f0db4f", secondary: "#323330" },
      screens: {
        print: { raw: "print" },
      },
      fontFamily: {
        neutraface: ["NEUTRAFACE", "sans-serif"],
      },
    },
  },
  plugins: [],
};
