const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      reemkufi: ['Reem Kufi', 'sans-serif'],
      lato: ['Lato', 'sans-serif']
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()]
})
