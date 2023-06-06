/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    container: {
      // screens: {
      //   xl: '144rem',
      // },
      center: true,
      padding: {
        DEFAULT: '2.4rem',
        md: '6.4rem',
      },
    },
  },
  plugins: [],
}
