/** @type {import('tailwindcss').Config} */
import form from "@tailwindcss/forms"


export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
    
  ],
  theme: {
    extend: {},
  },
  plugins: [form()],
}

