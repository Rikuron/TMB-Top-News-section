/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "!./node_modules/**/*"],
  theme: {
    extend: {
      fontFamily: {
        'nubernext': ['NuberNext', 'sans-serif'],
        'monasans': ['Mona Sans', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#0031FE',
        'custom-yellow': '#F3FF00',
        'custom-dark-red': '#B1124E',
        'custom-grey': '#ECECEC'
      }
    },
  },
  plugins: [],
}

