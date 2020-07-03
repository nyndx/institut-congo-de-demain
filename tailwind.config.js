const defaultTheme = require("tailwindcss/defaultTheme")

// tailwindcss.config.js
const typography = require("@manishrc/tailwindcss-typography-js")

// Option 1 - Using a configuration
const typographyTheme = typography({
  baseFontSize: "18px",
  blockMarginBottom: 0.85,
  headerFontFamily: ["Inter var", ...defaultTheme.fontFamily.sans],
  bodyFontFamily: ["Inter var", ...defaultTheme.fontFamily.sans],

  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    blockquote: {
      paddingLeft: 0,
      marginLeft: 0,
    },
  }),
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
        bullets: "line",
        linkColor: [
          "#bada55",
          {
            hover: "#facade",
          },
        ],
      },
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
  handler: function ({ addComponents, theme }) {
    addComponents({
      ".rich-text": theme("typography"),
    })
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

      addComponents({
        ".prose": {
          "> :first-child": {
            marginTop: "0",
          },
          "> :last-child": {
            marginBottom: "0",
          },

          fontSize: theme("fontSize.base"),
          lineHeight: theme("lineHeight.7"),
          color: theme("colors.gray.700"),
          p: {
            marginTop: theme("spacing.5"),
            marginBottom: theme("spacing.5"),
          },
          h2: {
            marginTop: theme("spacing.12"),
            marginBottom: theme("spacing.6"),
            fontSize: theme("fontSize.2xl"),
            fontWeight: "700",
            lineHeight: theme("lineHeight.8"),
            letterSpacing: theme("letterSpacing.tight"), // Consider removing
            color: theme("colors.gray.900"),
          },
          h3: {
            marginTop: theme("spacing.8"),
            marginBottom: theme("spacing.3"),
            fontSize: theme("fontSize.xl"),
            fontWeight: "600",
            lineHeight: theme("lineHeight.8"),
            color: theme("colors.gray.900"),
          },
          "h3 + *": {
            marginTop: "0",
          },
          ol: {
            counterReset: "list-counter",
            marginTop: theme("spacing.5"),
            marginBottom: theme("spacing.5"),
          },
          ul: {
            marginTop: theme("spacing.5"),
            marginBottom: theme("spacing.5"),
          },
          li: {
            marginTop: theme("spacing.2"),
            marginBottom: theme("spacing.2"),
          },
          "ol li": {
            position: "relative",
            counterIncrement: "list-counter",
            paddingLeft: theme("spacing.8"),
          },
          "ol li:before": {
            content: 'counter(list-counter) "."',
            position: "absolute",
            left: "0",
            fontWeight: "600",
            color: theme("colors.gray.500"),
          },
          "ul li": {
            position: "relative",
            paddingLeft: theme("spacing.8"),
          },
          "ul li:before": {
            content: '""',
            position: "absolute",
            top: "calc(0.875em - 0.0625em)",
            left: "0",
            backgroundColor: theme("colors.gray.400"),
            height: "0.125em",
            width: "0.75em",
          },
          img: {
            marginTop: theme("spacing.8"),
            marginBottom: theme("spacing.8"),
          },
          video: {
            marginTop: theme("spacing.8"),
            marginBottom: theme("spacing.8"),
          },
          figure: {
            marginTop: theme("spacing.8"),
            marginBottom: theme("spacing.8"),
          },
          blockquote: {
            color: theme("colors.gray.600"),
            fontStyle: "italic",
            borderLeftWidth: theme("borderWidth.4"),
            borderLeftStyle: "solid",
            borderLeftColor: theme("colors.blue.400"),
            paddingLeft: theme("spacing.4"),
          },
          "* + blockquote": {
            marginTop: theme("spacing.4"),
          },
          "blockquote + *": {
            marginTop: theme("spacing.4"),
          },
          code: {
            fontSize: theme("fontSize.sm"),
            lineHeight: theme("lineHeight.7"),
            fontFamily: theme("fontFamily.mono").join(", "),
            color: theme("colors.gray.700"),
            backgroundColor: theme("colors.gray.50"),
            borderColor: theme("colors.gray.200"),
            borderWidth: theme("borderWidth.default"),
            borderRadius: theme("borderRadius.md"),
            paddingTop: theme("spacing.1"),
            paddingRight: theme("spacing[1.5]"),
            paddingBottom: theme("spacing.1"),
            paddingLeft: theme("spacing[1.5]"),
          },
          a: {
            color: theme("colors.gray.900"),
            textDecoration: "underline",
          },
          pre: {
            color: theme("colors.gray.200"),
            fontSize: theme("fontSize.sm"),
            fontFamily: theme("fontFamily.mono").join(", "),
            lineHeight: theme("lineHeight.6"),
            borderRadius: theme("borderRadius.md"),
            backgroundColor: theme("colors.gray.800"),
            paddingTop: theme("spacing.3"),
            paddingRight: theme("spacing.4"),
            paddingBottom: theme("spacing.3"),
            paddingLeft: theme("spacing.4"),
            overflowX: "auto",
          },
          "pre code": {
            backgroundColor: "transparent",
            borderWidth: "0",
            borderRadius: "0",
            padding: "0",
            color: "inherit",
            fontSize: "inherit",
            fontFamily: "inherit",
            lineHeight: "inherit",
          },
        },
      })
    },
    typographyTheme,
  ],
}
