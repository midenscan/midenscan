/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a090d",
        secondary: "#fe4a3c",
        darkBg: "#0a090d",
        darkSecondary: "hsl(333deg, 100%, 52%)",
        darkMuted: "#111014",
        darkGreen: "hsl(160deg, 100%, 40%)",
        darkPrimary: "#7b3fe4",
        darkYellow: "hsl(53deg, 100%, 50%)",
      },
      animation: {
        cursor: "blink 1s linear infinite",
      },
      keyframes: {
        pgbar: {
          "0%, 100%": { backgroundPosition: "0% 66%" },
          "50%": { backgroundPosition: "100% 35%" },
        },
        blink: {
          "0%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": {
            opacity: 1,
          },
        },
        pingSmall: {
          "75%, 100%": {
            transform: "scale(1.2)",
            opacity: 0,
          },
        },
        pingSmaller: {
          "75%, 100%": {
            transform: "scale(1.05)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
