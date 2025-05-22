/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          400: '#A78BFA',
          500: '#8A63D2',
          600: '#7C3AED',
          900: '#4C1D95',
        },
        pink: {
          400: '#F472B6',
          500: '#D63384',
          600: '#DB2777',
          900: '#831843',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'glow': '0 0 15px 2px rgba(138, 99, 210, 0.3)',
      },
    },
  },
  plugins: [],
};