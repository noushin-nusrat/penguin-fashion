/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
          customFont: ['"Custom Font"', "Bebas Neue"],
          // Add more custom font families as needed
        },
      },
    },
  
    plugins: [],
  };