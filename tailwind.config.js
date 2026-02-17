/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jubla: {
          yellow: '#F3C518',
          red: '#772C33',
          green: '#2D5016',
          white : '#FFFFFF',
          gray : '#333333',
          black : '#000000',
        },
      },
      fontFamily: {
        amatic: ['"Amatic SC"', 'cursive'],
        mundial: ['"Mundial"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
