/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "peru": "#D87D4A",
      "desaturated-black": "#101010",
      "light-grey": "#f1f1f1",
      "offwhite": "#fafafa",
      "desaturated-peru": "#fbaf85",
      "white": "#ffffff",
      "black": "#000000"
    },
    fontFamily: {
      sans: ['Manrope', "sans-serif"]
    },
    fontSize: {
      h1: ["56px", {letterSpacing: "2px", fontWeight: "bold"}],
      h2: ["40px", {letterSpacing: "1.5px", fontWeight: "bold"}],
      h3: ["32px", {letterSpacing: "1.15px", fontWeight: "bold"}],
      h4: ["28px", {letterSpacing: "2px", fontWeight: "bold"}],
      h5: ["24px", {letterSpacing: "1.7px", fontWeight: "bold"}],
      h6: ["18px", {letterSpacing: "1.3px", fontWeight: "bold"}],
      "overline": ["14px", {letterSpacing: "10px"}],
      "sub-title": ["13px", {letterSpacing: "1px"}]
    },
    outlineWidth: {1: '1px'}
  },
  plugins: [],
}