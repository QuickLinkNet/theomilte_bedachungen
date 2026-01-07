/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f6f9',
          100: '#dbe5ee',
          200: '#b7c7d8',
          500: '#2a4c65',
          600: '#223e54',
          700: '#1b3346',
          800: '#122734',
          900: '#0b1b27',
        },
        accent: {
          400: '#e1b26d',
          500: '#c8924c',
          600: '#a87438',
        },
        sand: '#f7f4ef',
        stone: '#e3ddd4',
        ink: '#0b1b27',
        moss: '#2a6b54',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -40px rgba(12, 22, 35, 0.45)',
        card: '0 16px 50px -32px rgba(12, 22, 35, 0.4)',
      },
    },
  },
  plugins: [],
};
