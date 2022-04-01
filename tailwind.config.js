module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        '128': '32rem',
      },
      colors: {
        'brown': '#fec994',
        'salmon': '#fed9c9',
        'babyblue': '#c1e1d2',
        'orange-500': 'rgb(249 115 22)',
        'box': '#ffeede'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
