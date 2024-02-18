/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
      orange: "hsl(346, 100%, 66%)",
    },
  },
  plugins: [],
};
