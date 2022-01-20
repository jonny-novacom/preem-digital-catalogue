module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      gothamNarrow: ['"Gotham Narrow"', '"Franklin Gothic Medium"', "Tahoma", "sans-serif"],
    },
    extend: {
      colors: {
        preemGreen: "#006341",
        preemYellow: "#ffac3a",
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}