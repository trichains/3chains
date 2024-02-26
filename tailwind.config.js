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
        dark: '#19191B',
        darkBlue: '#00050D',
        light: '#FBFCFF',
        accent: '#08D',
        accentBg: '#069',
        accentText: '#E1F0FF',
        gray: '#747678',
        blueGray: '#E4E5E7'
      },
      fontFamily: {
        ms: ['var(--font-ms)'],
        in: ['var(--font-in)']
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};
