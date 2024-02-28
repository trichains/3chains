/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#171617',
        darkBlue: '#1A1825',
        light: '#FCFBFF',
        accent: '#85e',
        accentBg: '#437',
        accentText: '#E3D6FF',
        gray: '#757478',
        blueGray: '#E5E4E7'
      },
      fontFamily: {
        ms: ['var(--font-ms)'],
        in: ['var(--font-in)']
      },
      animation: {
        levitate: 'levitate 3s ease-in-out infinite',
        shadowWidth: 'shadowWidth 3s ease-in-out infinite'
      },
      keyframes: {
        levitate: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' }
        },
        shadowWidth: {
          '0%, 100%': { transform: 'scaleX(0.7)' },
          '50%': { transform: 'scaleX(0.4)' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
