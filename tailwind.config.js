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
        headerBg: '#00050D',
        light: '#fff',
        accent: '#069',
        textAccent: '#CEF',
        accentDark: '#EEE0B1',
        gray: '#747474'
      },
      fontFamily: {
        ms: ['var(--font-ms)'],
        in: ['var(--font-in)']
      }
    }
  },
  plugins: []
};
