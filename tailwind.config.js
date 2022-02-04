module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      gothamNarrow: [
        '"Gotham Narrow"',
        '"Franklin Gothic Medium"',
        "Tahoma",
        "sans-serif",
      ],
      debugScreens: {
        position: ["top", "left"],
      },
    },
    extend: {
      colors: {
        preemGreen: "#006341",
        preemYellow: "#ffac3a",
        preemLightGray: "#cccccc",
        preemMediumGray: "#999999",
        preemDarkGray: "#333333",
      },
      fontSize: {
        "55xl": "3.5rem",
      },
    },
  },
  variants: {},
  plugins: [
    require("tailwindcss-debug-screens"),
    require("tailwindcss-textshadow"),
  ],
};
