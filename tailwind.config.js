module.exports = {
  theme: {
    extend: {
      colors: {
        'blackpearl': {
          100: '#E6E7E9',
          200: '#C0C2C7',
          300: '#9A9DA6',
          400: '#4F5463',
          500: '#030A20',
          600: '#03091D',
          700: '#020613',
          800: '#01050E',
          900: '#01030A',
        },
        'seance': {
          100: '#F2E9F4',
          200: '#DEC7E4',
          300: '#CAA5D3',
          400: '#A362B3',
          500: '#7B1E92',
          600: '#6F1B83',
          700: '#4A1258',
          800: '#370E42',
          900: '#25092C',
          },
        'lipstick': {
          100: '#F7E6EF',
          200: '#ECC2D8',
          300: '#E09DC0',
          400: '#C95391',
          500: '#B20962',
          600: '#A00858',
          700: '#6B053B',
          800: '#50042C',
          900: '#35031D',
        },
      },
      boxShadow: {
        lipstick: '0 0 20px -5px rgba(255, 0, 134, 0.76)'
      }
    },
    transitionProperty: { // defaults to these values
      'none': 'none',
      'all': 'all',
      'color': 'color',
      'bg': 'background-color',
      'border': 'border-color',
      'colors': ['color', 'background-color', 'border-color'],
      'opacity': 'opacity',
      'transform': 'transform',
    },
    transitionDuration: { // defaults to these values
      'default': '250ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    transitionTimingFunction: { // defaults to these values
      'default': 'ease',
      'linear': 'linear',
      'ease': 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    transitionDelay: { // defaults to these values
      'default': '0ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    willChange: { // defaults to these values
      'auto': 'auto',
      'scroll': 'scroll-position',
      'contents': 'contents',
      'opacity': 'opacity',
      'transform': 'transform',
    }
  },
  variants: { // all the following default to ['responsive']
    transitionProperty: ['responsive'],
    transitionDuration: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDelay: ['responsive'],
    willChange: ['responsive'],
  },
  plugins: [
    require('tailwindcss-transitions')(),
  ],
}
