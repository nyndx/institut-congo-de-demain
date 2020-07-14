const defaultTheme = require("tailwindcss/defaultTheme")

// tailwindcss.config.js
const typography = require("@manishrc/tailwindcss-typography-js")

// Option 1 - Using a configuration
const typographyTheme = typography({
  baseFontSize: "18px",
  blockMarginBottom: 0.85,
  headerFontFamily: ["Inter var", ...defaultTheme.fontFamily.sans],
  bodyFontFamily: ["Inter var", ...defaultTheme.fontFamily.sans],

  // overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
  //   blockquote: {
  //     paddingLeft: 0,
  //     marginLeft: 0,
  //   },
  // }),
})

// Option 2 - Using a theme
// const githubTheme = require("typography-theme-github")
// const typographyTheme = typography(githubTheme)

module.exports = {
  purge: ["./src/**/*.js"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        default: {
          css: {
            color: "#333",
            a: {
              color: "#bada55",
              "&:hover": {
                color: "#facade",
              },
            },
            blockquote: {
              color: "#718096",
              borderLeftWidth: "4px",
              borderLeftStyle: "solid",
              borderLeftColor: "#63B3ED",
              paddingLeft: "1rem",
            },
            "* + blockquote": {
              marginTop: "1rem",
            },
            "blockquote + *": {
              marginTop: "1rem",
            },
          },
        },
      },
      // bullets: "line",
      // linkColor: [
      //   "#bada55",
      //   {
      //     hover: "#facade",
      //   },
      // ],

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
        "44vh": "44vh",
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
        "44vh": "44vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "75vh": "75vh",
        "80": "80%",
        "80vh": "80vh",
        full: "100%",
        "8rem": "8rem",
        "10rem": "10rem",
        "24rem": "24rem",
        "28rem": "28rem",
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
    textColor: ["focus", "responsive", "hover", "group-hover"],
    display: ["focus", "responsive", "hover", "group-hover"],
    margin: ["focus", "responsive", "hover", "group-hover"],
  },
  plugins: [
    require("@tailwindcss/ui"),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          "@font-face": {
            fontFamily: "Inter var",
            fontWeight: "100 900",
            fontStyle: "normal",
            fontNamedInstance: "Regular",
            fontDisplay: "swap",
            src: 'url("Inter-roman.var.woff2?v=3.13") format("woff2")',
          },
        },
        {
          "@font-face": {
            fontFamily: "Inter var",
            fontWeight: "100 900",
            fontStyle: "italic",
            fontNamedInstance: "Italic",
            fontDisplay: "swap",
            src: 'url("Inter-italic.var.woff2?v=3.13") format("woff2")',
          },
        },
      ])
    },
    require("@tailwindcss/typography"),
    typographyTheme,
  ],
}
