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
      helvetica: ['"Helvetica 65"'],
    },
    debugScreens: {
      position: ["top", "left"],
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
      height: {
        18: "72px",
      },
    },
  },
  variants: {
    textColor: ["current"],
  },
  plugins: [
    require("tailwindcss-debug-screens"),
    require("tailwindcss-textshadow"),
    require("@tailwindcss/line-clamp"),
    require("@alexcarpenter/tailwindcss-aria"),
  ],
};
