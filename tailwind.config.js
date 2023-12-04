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
        'needhelp':"url('./imgs/needhelpbg.png')",
        'appbg':"url('./imgs/appbg.png')",
        'medusa':"url('./imgs/medusa.png')",
        'cardbg':"url('./imgs/cardbg.png')"
      },
      colors:{
        "linear-blue":"#0F123B",
        "linear-black":"#090D2E",
        "linear-2black":"#020515",
        "singin-button":"#0075FF",
        "sidebar-black":"#060B26",
        "sidebar-blue":"rgba(26, 31, 55, 0)",
        "lognav-white":"rgba(255, 255, 255, 0)",
        "lognav-second-white":"rgba(255, 255, 255, 0.39)",
        "button-bg":"#0075FF",
        "doc-bg-black":"rgba(10, 14, 35, 0.71)",
        "doc-bg-blue":"rgba(6, 11, 40, 0.74)",
        "card-black":"rgba(6, 11, 38, 0.74)",
        "card-blue":"rgba(26, 31, 55, 0.5)",
        "dark-blue":"rgba(34, 35, 75, 1)",
        "st-bg-black":"rgba(10, 14, 35, 1)",
        "st-bg-blue":"rgba(6, 11, 40, 1)",
        "rf-bg-black":"rgba(6, 12, 41, 1)",
        "rf-bg-blue":"rgba(4, 12, 48, 0.5)",
        "balance-black":"rgba(6, 11, 40, 0.94)",
        "balance-blue":"rgba(10, 14, 35, 0.29)",
        "bill-card-blue":"rgba(24, 40, 60, 0.4)",
        "bill-card-black":"rgba(57, 81, 197, 0.49)",
        "balance-icon-bg":"rgba(255, 255, 255, 0.099)"


      },
      fontFamily:{
        "signin-p": 'Plus Jakarta Sans , sans-serif'
      }
    },
  },
  plugins: [],
}

