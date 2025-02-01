/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        customBlue: '#364C84',
        customYelGreen: '#E7F1A8',
        customBabyBlue: '95B1EE'
      },
    },
  },
  plugins: [],
}