/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      grey: {
        normal: "hsl(231, 7%, 60%)",
        charcoal: "hsl(235, 18%, 26%)",
        darkSlate: "hsl(234, 29%, 20%)",
      },
      white: "hsl(0, 0%, 100%)",
      tomato: "hsl(4, 100%, 67%)",
    },
  },
  plugins: [],
};
