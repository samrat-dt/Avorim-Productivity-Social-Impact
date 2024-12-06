/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1a1a1a',
          100: '#2d2d2d',
          200: '#404040',
          300: '#525252',
          400: '#656565',
          500: '#787878',
          600: '#8b8b8b',
          700: '#9e9e9e',
          800: '#b1b1b1',
          900: '#c4c4c4',
        },
        purple: {
          DEFAULT: '#8b5cf6',
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
    },
  },
  plugins: [],
};