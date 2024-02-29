/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#1a1825',
        darkGray: '#6e698633',
        light: '#deddf4',
        gray: '#918daa',
        blueGray: '#E5E4E7',
        accent: '#85e',
        accentDark: '#c4a7e7',
        accentBg: '#252239',
        darkSurface: '#201d2f',
        accentText: '#E3D6FF'
      },
      fontFamily: {
        ms: ['var(--font-ms)'],
        in: ['var(--font-in)']
      },
      animation: {
        levitate: 'levitate 3s ease-in-out infinite',
        shadowWidth: 'shadowWidth 3s ease-in-out infinite',
        roll: 'roll 24s linear infinite'
      },
      keyframes: {
        levitate: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        shadowWidth: {
          '0%, 100%': { transform: 'scaleX(0.7)' },
          '50%': { transform: 'scaleX(0.4)' }
        },
        roll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      screens: {
        sxl: '1180px',
        xs: '480px'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
