/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans].join(','),
    },
    extend: {
      keyframes: {
        'skeleton-loading': {
          '0%': { backgroundPosition: '200% 0' },
          'to': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        skeleton: 'skeleton-loading 2.0s ease-in-out infinite',
      },
      backgroundImage: (theme: any) => ({
        'skeleton-gradient': `linear-gradient(45deg, ${colors.stone[950]}, ${colors.stone[900]}, ${colors.stone[800]}, ${colors.stone[900]}, ${colors.stone[950]})`,
      }),
      backgroundSize: {
        '400': '400% 100%',
      },
      colors: {
        primary: {
          DEFAULT: '#000515',
          500: '#000515',
        },
        secondary: {
          DEFAULT: '#011c7c',
          500: '#011c7c',
        },
        clockbase: {
          DEFAULT: '#040401',
          500: '#040401',
        }
      },
    },
  },
}