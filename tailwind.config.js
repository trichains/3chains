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
        light: '#FBFAFF',
        lightText: '#deddf4',
        dark: '#16141e',
        gray: '#918daa',
        lightGray: '#E4E5E7',
        darkGray: '#6e698633',
        darkSurface: '#201d2f',
        accent: '#85e',
        accentDark: '#c4a7e7',
        accentText: '#E3D6FF'
      },
      screens: {
        sxl: '1180px', // @media (min-width: 1180px)
        xs: '480px', // @media (min-width: 480px)
        sm: '640px', // @media (min-width: 640px)
        md: '768px', // @media (min-width: 768px)
        lg: '1024px', // @media (min-width: 1024px)
        xl: '1280px' // @media (min-width: 1280px)
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
