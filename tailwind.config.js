/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
      },
    },
      colors: {
        primary: "#E6C744",
        secondary: "#C2C8DA",
        black: "#000000",
        white: "#fff",
      },
      screens: {
        sm: "480px",
      },
      content: {
        oval: 'url("../images/banner-image-2.png")',
      },
    },
  },
  plugins: [],
};
