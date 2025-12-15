/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fece51',
        secondary: '#fcf5f3',
        dark: '#333',
        gray: {
          light: '#f9f9f9',
          medium: '#666',
          dark: '#444',
        }
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      maxWidth: {
        '1366': '1366px',
        '1280': '1280px',
        '768': '768px',
        '640': '640px',
      }
    },
  },
  plugins: [],
}