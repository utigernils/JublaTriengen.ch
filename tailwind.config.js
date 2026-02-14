/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jubla: {
          yellow: '#F3C518',
          'yellow-dark': '#D4AA0F',
          green: '#2D5016',
          'green-dark': '#1F3A0F',
          red: '#E63946',
        },
      },
      fontFamily: {
        amatic: ['"Amatic SC"', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
