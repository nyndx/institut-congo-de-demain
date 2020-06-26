const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      maxWidth: {
        "1/4": "25%",
        "1/3": "33%",
        "1/2": "50%",
        "3/4": "75%",
      },
      height: {
        "20rem": "20rem",
        "24rem": "24rem",
        "28rem": "28rem",
        "29rem": "29rem",
        "30rem": "30rem",
        "32rem": "32rem",
        "36rem": "36rem",
        "40rem": "40rem",
        "44rem": "44rem",
        "46rem": "46rem",
        "48rem": "48rem",
        "52rem": "52rem",
        "56rem": "56rem",
        "60rem": "60rem",
        "64rem": "64rem",
        "68rem": "68rem",
        "72rem": "72rem",
        "76rem": "76rem",
        "80rem": "80rem",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "75vh": "75vh",
        "80vh": "80vh",
        "85vh": "85vh",
        "90vh": "90vh",
        "95vh": "95vh",
      },
      minHeight: {
        "0": "0",
        "1/4": "25%",
        "1/3": "33%",
        "1/2": "50%",
        "3/4": "75%",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "75vh": "75vh",
        "80": "80%",
        "80vh": "80vh",
        full: "100%",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        fira: ["Fira Sans", ...defaultTheme.fontFamily.sans],
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    fontFamily: ["responsive", "hover", "focus"],
    fontWeight: ["responsive", "hover", "focus,active"],
    borderStyle: ["responsive", "hover", "focus", "active"],
    borderWidth: ["responsive", "hover", "focus", "active"],
    borderColor: ["responsive", "hover", "focus", "active", "group-hover"],
    borderOpacity: ["responsive", "hover", "focus", "active", "group-hover"],
    borderRadius: ["responsive", "hover", "focus"],
    transitionProperty: ["responsive", "hover", "focus"],
    outline: ["focus", "responsive", "hover"],
  },
  plugins: [require("@tailwindcss/ui")],
}
