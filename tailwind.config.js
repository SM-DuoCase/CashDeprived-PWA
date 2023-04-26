/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        'progressGreen': '#7AAD8E',
        'cardGreen': '#165400',
      },
      boxShadow: {
        'btn': '0 6px 0px 0 rgba(18, 65, 0, 1)',
        'btnClick': '0 4px 0px 0 rgba(18, 65, 0, 1)',
      }
    },
  },
  plugins: [],
}

