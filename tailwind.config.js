export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    },

    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1280px',
      xl: '1440px',
    },

    colors: () => ({
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',

      gray: {
        50: '#fafafa',
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
      },

      primary: {
        DEFAULT: '#003A5D',
        50: '#f1f6f9',
        100: '#d6e0e7',
        200: '#cadae4',
        300: '#abc7d8',
        400: '#8aabc0',
        500: '#60849A',
        600: '#46718A',
        700: '#2D5D7A',
        800: '#124869',
        900: '#003A5D',
      },

      error: {
        DEFAULT: '#AA4848',
        50: '#FAF5F5',
        100: '#F1E1E1',
        200: '#E7CCCC',
        300: '#DFB9B9',
        400: '#D7A8A8',
        500: '#CD9494',
        600: '#C48080',
        700: '#BB6D6D',
        800: '#B25959',
        900: '#AA4848',
      },

      success: {
        DEFAULT: '#0C875B',
        50: '#F4FAF7',
        100: '#D7EBE4',
        200: '#BDDFD3',
        300: '#A6D3C3',
        400: '#8EC7B3',
        500: '#73BAA0',
        600: '#57AC8D',
        700: '#3B9E7B',
        800: '#25946C',
        900: '#0C875B',
      },

      warning: {
        DEFAULT: '#713f12',
        50: '#fefce8',
        100: '#fef9c3',
        200: '#fef08a',
        300: '#fde047',
        400: '#facc15',
        500: '#eab308',
        600: '#ca8a04',
        700: '#a16207',
        800: '#854d0e',
        900: '#713f12',
      },
    }),
    borderRadius: {
      DEFAULT: '8px',
      none: '0',
      xs: '4px',
      sm: '6px',
      md: '8px',
      lg: '10px',
      xl: '12px',
      full: '9999px',
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      4: '4px',
      5: '5px',
      8: '8px',
    },

    boxShadow: {
      DEFAULT: '0px 0px 10px 4px rgb(0, 0, 0, 0.1)',
      inner: 'inset 4px 4px 10px rgba(0, 0, 0, 0.1)',
    },

    extend: {
      minWidth: ({ theme, breakpoints }) => ({
        ...breakpoints(theme('screens')),
      }),
      keyframes: {
        'loader-bar': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'wiggle': {
          '30%': { transform: 'scale(1.1)' },
          '40%, 60%': { transform: 'rotate(-20deg) scale(1.1)' },
          '50%': { transform: 'rotate(20deg) scale(1.1)' },
          '70%': { transform: 'rotate(0deg) scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'loader-bar': 'loader-bar 5s linear',
        'wiggle': 'wiggle 1s ease',
      },
    },
  },

  corePlugins: {
    preflight: false,
  },

  plugins: [],
}
