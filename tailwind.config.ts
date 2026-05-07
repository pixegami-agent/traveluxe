import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fef9f0',
          100: '#fde8d0',
          200: '#fbd2a1',
          300: '#f9b871',
          400: '#f7a142',
          500: '#d4a574',
          600: '#a67c52',
          700: '#845d3f',
          800: '#5c3f2b',
          900: '#3a2618',
        },
        midnight: {
          50: '#f5f7fb',
          100: '#e8eef8',
          200: '#d0ddf0',
          300: '#a8bce8',
          400: '#7a9bdf',
          500: '#4d7ad6',
          600: '#3a5fa3',
          700: '#2d4a82',
          800: '#1f3356',
          900: '#132040',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
