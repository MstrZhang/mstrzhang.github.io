/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index2.html"],
  theme: {
    extend: {
      colors: {
        t_white: "#f8f8f2",
        t_blue: "#66d9ef",
        t_green: "#a6e22e",
        t_gray: "#3e3d32",
        t_yellow: "#e6db74",
        t_red: "#ff4588",
        t_black: "#272822",
      },
      textShadow: {
        DEFAULT: "2px 3px 5px rgba(0,0,0,0.5)",
        glow: "0 0 3px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
