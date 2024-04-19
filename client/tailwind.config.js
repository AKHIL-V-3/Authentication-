/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
           "custom-red":"#D72638",
           "custom-purple":"#3A244A",
           "custom-white":"#FFFFFF",
       }
    },
  },
  plugins: [],
}

