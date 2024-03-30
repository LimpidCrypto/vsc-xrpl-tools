/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
  ],
  theme: {
      extend: {
          colors: {
              'dark-blue': '#0b2549',
          },
          fontSize: {
            '2xs': '.5rem',
          }
      },
  },
  plugins: [],
}
