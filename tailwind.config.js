/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F5F5',
        dark: '#191940',
        borderColor: "#8E8A95",
      },
    },
  },
  plugins: [],
}