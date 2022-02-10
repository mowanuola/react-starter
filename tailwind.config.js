module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: 'hsla(18, 90%, 57%, 1)',
        'primary-light': 'hsla(18, 90%, 57%, 0.2)',
        error: 'hsla(3, 100%, 61%, 1)',
        success: 'hsla(162, 95%, 41%, 1)',
        grey: 'hsla(40, 3%, 60%, 1)',
        'cool-grey': 'hsla(206, 6%, 45%, 1)',
        'light-grey': '',
        'dark-grey': 'hsla(0, 0%, 20%, 1)',
      },
      backgroundColor: {
        primary: 'hsla(18, 90%, 57%, 1)', // a darker hue for improved A11y
        light: 'hsla(198, 21%, 88%, 0.24)',
      },
      textColor: {
        primary: 'hsla(18, 90%, 57%, 1)',
        soft: 'hsla(210, 18%, 40%, 1)',
      },
      borderColor: {
        default: 'hsl(205deg 25% 91%)',
        transparent: 'transparent',
      },
      fontSize: {
        title: ['1.75rem', '2.125rem'],
      },
      fontFamily: {
        hk: ['HK Grotesk', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
