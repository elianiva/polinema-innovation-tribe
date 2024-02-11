/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        elblack: "#131A22",
        'surface' : {
          '100': "#1b1439",
          '200' : "#231b4b",
        }
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
