/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0CAF60',
        danger: '#FD6A6A',
        purple: '#8C62FF',
        warning: '#D4A701',
        grey: '#FAFAFA',
        black: '#111827',
        slate: '#718096'
      },
      fontFamily: {
        sans: 'General Sans'
      }
    }
  },
  daisyui: {
    theme: [
      {
        mytheme: {
          'primary': '#0CAF60',
          'error': '#FD6A6A',
          'info': '#718096',
          'success': '#0CAF60',
          'warning': '#D4A701',
        }
      }
    ]
  },
  plugins: [daisyui]
}

