/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["Roboto Slab", "serif"]
      },
      fontWeight: {
        'extra-light': 200,
        'light': 300,
        'medium': 600,
        'bold': 800,
        'heavy': 900,
      },
    },
  },
  plugins: [],
}

