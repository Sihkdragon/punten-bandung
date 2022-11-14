/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "2rem", lg: "8rem", xl: "14rem", "2xl": "14rem" },
      },
      fontFamily: {
        sans: ["Rubik"],
        main: ["Sono"],
      },
    },
  },
  plugins: [],
};
