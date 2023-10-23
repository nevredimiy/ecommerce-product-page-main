/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      backgroundImage: {
        'cart-pattern': "url('./src/assets/images/icon-cart.svg')",
      },
      colors: {
        'orangeColor': 'hsl(26, 100%, 55%)',
        'paleOrange': 'hsl(25, 100%, 94%)',
        'veryDarkBlue': 'hsl(220, 13%, 13%)',
        'darkGrayishBlue': 'hsl(219, 9%, 45%)',
        'grayishBlue': 'hsl(220, 14%, 75%)',
        'lightGrayishBlue': 'hsl(223, 64%, 98%)'
      }
    },
  },
  plugins: [],
}

