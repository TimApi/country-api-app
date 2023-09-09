/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'blue': {
          dark: 'hsl(209, 23%, 22%)',
          darker: 'hsl(207, 26%, 17%)',
          darkest: 'hsl(200, 15%, 8%)'
        },
        'gray': {
          light: 'hsl(0, 0%, 98%)',
          dark: 'hsl(0, 0%, 52%)'
        },
      },
      fontFamily: {
        'NutoSans': ['"Nunito Sans", sans-serif'],
      },
    },
  },
  plugins: [],
}

