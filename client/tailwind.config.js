/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#183B61',
        },
      },
      container: {
        center: true,
      },
      screens: {
        800: '800px',
        900: '900px',
        1066: '1066px',
        1299: '1299px',
        1534: '1534px',
      },
    },
  },
  plugins: [],
};
