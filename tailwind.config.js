/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily :{
        'rubik':['rubik','serif']
      },
      colors:{
        "very-dark-blue":"hsl(226, 43%, 10%)",
        "dark-blue":"hsl(235, 46%, 20%)",
        "desaturated":"hsl(235, 45%, 61%)",
        "pale-blue":"hsl(236, 100%, 87%)",
        "work":"hsl(15, 100%, 70%)",
        "play":"hsl(195, 74%, 62%)",
        "study":"hsl(348, 100%, 68%)",
        "exercise":"hsl(145, 58%, 55%)",
        "social":"hsl(264, 64%, 52%)",
        "self-care":"hsl(43, 84%, 65%)",
        "violet":"hsl(246, 80%, 60%)",
        "hover-blue":"hsl(230, 55%, 35%)",
        "whitish-blue":"hsl(227, 100%, 98%)",
        "navy-blue":"hsl(220, 18%, 16%)",
        "random":"hsl(227, 47%, 96%)",
        "gray":"hsl(217, 20%, 51%)",
        "grayish":"hsl(227, 105%, 90%)"
      },
      width:{
        "200":"60rem"
      }
    },
  },
  plugins: [],
}

