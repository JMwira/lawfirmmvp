/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./Assets/1.jpg')",
        'footer-texture': "url('/Assets/2.jpg')",
      },
      
      colors:{
        primary:'#26723b',
        secondary:'#7c544c',
        tertiary:'#7c544c',
        link:'#0000FF',
        light:'#967E76'
      }
    },
  },
  plugins: [],
}

