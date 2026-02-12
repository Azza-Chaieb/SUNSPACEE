/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        admin: {
          bg: '#f4f6f9',
          sidebar: 'rgba(255, 255, 255, 0.85)',
          primary: '#4f46e5',
        }
      }
    },
  },
  plugins: [],
}
