module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: 'hsla(183, 80%, 29%, 1)',
        error: 'hsl(0deg, 79%, 63%)',
      },
      backgroundColor: {
        primary: 'hsla(183, 80%, 29%, 1)', // a darker hue for improved A11y
        'primary-light': 'hsla(184, 47%, 93%, 1)',
        light: 'rgba(113, 135, 156, 0.1)',
      },
      textColor: {
        primary: 'hsla(183, 80%, 29%, 1)',
        soft: 'hsla(210, 18%, 40%, 1)',
      },
      borderColor: {
        default: 'hsl(205deg 25% 91%)',
      },
      fontSize: {
        title: ['1.75rem', '2.125rem'],
      },
      fontFamily: {
        tomato: ['Tomato', 'ui-monospace'],
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
