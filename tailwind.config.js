/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdfd',
          100: '#ccf7f8',
          200: '#99f0f2',
          300: '#66e9ec',
          400: '#33e2e6',
          500: '#00dbdf',
          600: '#00A0AA',
          700: '#007d84',
          800: '#005a5f',
          900: '#002c2f',
        },
        secondary: {
          50: '#fff0f0',
          100: '#ffe6e6',
          200: '#ffc2c2',
          300: '#ff9999',
          400: '#ff7575',
          500: '#FF6B6B',
          600: '#ff4242',
          700: '#ff1919',
          800: '#e60000',
          900: '#b30000',
        },
      },
    },
  },
  plugins: [],
}