/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Mona Sans", "sans-serif"],
      mono: ["Mona Mono", "monospace"],
    },
    extend: {
      height: {
        "112": "28rem",
      }
    }
  },
  plugins: [],
}
