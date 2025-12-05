/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./src/components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        hmb: ['hmb'],      // map your font-family name from loadAsync
        hmb2: ['hmb2'],
        hmb7: ['hmb7'],
        hmb8: ['hmb8'],
      },
    },
  },
  plugins: [],
}