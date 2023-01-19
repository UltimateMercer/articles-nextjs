const { fontFamily, defaultTheme } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // experimental: {
  //   optimizeUniversalDefaults: true,
  // },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{md,mdx}",
    "./assets/svg/**/*.svg",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "0 1rem",
    },
    extend: {
      spacing: {
        "9/16": "56.25%",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      fontFamily: {
        sans: ["var(--font-barlow)", ...fontFamily.sans],
        mono: ["var(--font-jetbrains)", ...fontFamily.mono],
        serif: ["var(--font-ibm-plex-serif)", ...fontFamily.serif],
      },
      maxWidth: {
        "8xl": "1320px",
      },
      colors: {
        transparent: "transparent",
        light: "#eaeaea",
        dark: "#121212",
        uv: {
          100: "#daceff",
          200: "#b69dff",
          300: "#916dff",
          400: "#6d3cff",
          500: "#480bff",
          600: "#3a09cc",
          700: "#2b0799",
          800: "#1d0466",
          900: "#0e0233",
        },
        polen: {
          100: "#fffdf8",
          200: "#fffbf1 ",
          300: "#fffaeb ",
          400: "#fff8e4",
          500: "#fff6dd",
          600: "#ccc5b1",
          700: "#999485",
          800: "#666258",
          900: "#33312c",
        },
        crimson: {
          100: "#fbd2d6",
          200: "#f7a5ad",
          300: "#f37884",
          400: "#ef4b5b",
          500: "#eb1e32",
          600: "#bc1828",
          700: "#8d121e",
          800: "#5e0c14",
          900: "#2f060a ",
        },
        "neon-yellow": {
          100: "#ffffcc",
          200: "#ffff99",
          300: "#ffff66",
          400: "#ffff33",
          500: "#ffff00",
          600: "#cccc00 ",
          700: "#999900",
          800: "#666600",
          900: "#333300 ",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "100%",
            color: theme("colors.dark"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: `${theme("colors.blue.700")} !important`,
              },
              code: { color: theme("colors.blue.400") },
            },
            p: {
              // fontSize: "20px",
              // letterSpacing: "0.01em",
              marginTop: "0",
              marginBottom: "1.5rem",
            },
            h1: {
              fontSize: "2.5rem",
              fontWeight: "700",
              letterSpacing: "0.03em",
              lineHeight: "1.5",
              color: theme("colors.dark"),
              marginTop: "0",
              marginBottom: "1.25rem",
            },
            h2: {
              fontSize: "2rem",
              fontWeight: "700",
              letterSpacing: "0.03em",
              color: theme("colors.dark"),
              margin: "0 0 1.25rem",
            },
            h3: {
              fontSize: "1.75rem",
              fontWeight: "700",
              letterSpacing: "0.03em",
              color: theme("colors.dark"),
              margin: "0 0 1.25rem",
            },
            h4: {
              fontSize: "1.5rem",
              fontWeight: "700",
              color: theme("colors.dark"),
              letterSpacing: "0.03em",
              margin: "0 0 1.25rem",
            },
            h5: {
              fontSize: "1.25rem",
              fontWeight: "700",
              color: theme("colors.dark"),
              letterSpacing: "0.03em",
              margin: "0 0 1.25rem",
            },
            h6: {
              fontSize: "1rem",
              fontWeight: "700",
              color: theme("colors.dark"),
              letterSpacing: "0.03em",
              margin: "0 0 1.25rem",
            },
            pre: {
              backgroundColor: theme("colors.dark"),
              whiteSpace: "pre-wrap",
              marginTop: "0.5rem",
              marginBottom: "1.25rem",
            },
            code: {
              color: theme("colors.blue.600"),
              backgroundColor: theme("colors.transparent"),
              paddingLeft: "0",
              paddingRight: "0",
              paddingTop: "0",
              paddingBottom: "0",
              borderRadius: "0",
              wordBreak: "break-all",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            details: {
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            hr: { borderColor: theme("colors.gray.200") },
            ol: {
              marginTop: "0",
            },
            ul: {
              marginTop: "0",
            },
            li: {
              marginTop: "0",
            },
            "ol li::marker": {
              fontWeight: "600",
              color: theme("colors.dark"),
            },
            "ul li::marker": {
              color: theme("colors.dark"),
            },
            strong: { fontWeight: "700", color: theme("colors.dark") },
            blockquote: {
              color: theme("colors.dark"),
              borderLeftColor: theme("colors.uv.500"),
              borderLeftWidth: "8px",
              borderBottomWidth: "1px",
              borderBottomColor: theme("colors.uv.500"),
              padding: "0.5rem 1.25rem",
              margin: "0.5rem 0 1.5rem",
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.light"),
            a: {
              color: theme("colors.cyan.500"),
              "&:hover": {
                color: `${theme("colors.cyan.400")} !important`,
              },
              code: { color: theme("colors.cyan.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: "0.03em",
              color: theme("colors.light"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: "0.03em",
              color: theme("colors.light"),
            },
            h3: {
              fontWeight: "700",
              color: theme("colors.light"),
            },
            "h4,h5,h6": {
              color: theme("colors.light"),
            },
            pre: {
              backgroundColor: theme("colors.dark"),
            },
            code: {
              color: theme("colors.fuchsia.400"),
              backgroundColor: theme("colors.transparent"),
            },
            details: {
              backgroundColor: theme("colors.gray.800"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            "ol li::marker": {
              fontWeight: "600",
              color: theme("colors.gray.400"),
            },
            "ul li::marker": {
              backgroundColor: theme("colors.gray.400"),
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              th: {
                color: theme("colors.gray.100"),
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
            blockquote: {
              color: theme("colors.light"),
              borderLeftColor: theme("colors.neon-yellow.500"),
              borderLeftWidth: "8px",
              borderBottomWidth: "1px",
              borderBottomColor: theme("colors.neon-yellow.500"),
              padding: "0.5rem 1.25rem",
              margin: "0.5rem 0 1.5rem",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
