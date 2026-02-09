/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "jubla-yellow": "#F0C714",
        "jubla-red": "#5E1635",
        "jubla-gray": "#191919",
        "jubla-black": "#000000",
        "jubla-white": "#ffffff",
      },
    },
  },
  plugins: [],
}

