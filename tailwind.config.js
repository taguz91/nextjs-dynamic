module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/core/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
