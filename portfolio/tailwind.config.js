/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', 
  theme: {
    extend: {
      colors:{
         primary: '#1a1a2e',
        secondary: '#16213e',
        accent: '#0f3460',
      }
    },
  },
  plugins: [],
}

