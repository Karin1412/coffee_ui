/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        slideDown:{
          '0%':{transform: 'translateY(-100%)'},
          '100%':{transform: 'translateY(0)'},
        }
      },
      animation:{
        slideDown: 'slideDown .7s ease-in-out',
      }
    },
  },
  plugins: [],
}