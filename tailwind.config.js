/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueBg: "#3556AB",
        primary: "#071D55",
        mutedText: "#8D8D8D",
        redBtn: "#AB3535",
        lemonBg: "#CDE53D",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
