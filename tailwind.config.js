/** @type {import('tailwindcss').Config} */
 export default {
  content: [
   // './pages/**/*.{html,js}', //ben ekledim
   // './components/**/*.{html,js}', //ben ekledim.
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
} 



