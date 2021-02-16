module.exports = {
  purge: [
    './app/**/*.html.erb',
    './app/javascript/**/*.js',
  ],
  darkMode: false, // or false or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'slab': ['"Exo 2"', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
