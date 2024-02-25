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
        dark: '#171717',
        darkBlue: '#00050D',
        light: '#fff',
        accent: '#08D',
        buttonBg: '#069',
        accentDark: '#EEE0B1',
        gray: '#747474',
        blueGray: '#E4E5E7'
      },
      fontFamily: {
        ms: ['var(--font-ms)'],
        in: ['var(--font-in)']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
