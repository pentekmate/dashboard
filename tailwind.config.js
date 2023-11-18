/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('./imgs/signinbg.png')",
      },
      colors:{
        "linear-blue":"#0F123B",
        "linear-black":"#090D2E",
        "linear-2black":"#020515",
        "singin-button":"#0075FF",
        "sidebar-black":"#060B26",
        "sidebar-blue":"rgba(26, 31, 55, 0)",
      },
      fontFamily:{
        "signin-p": 'Plus Jakarta Sans , sans-serif'
      }
    },
  },
  plugins: [],
}

