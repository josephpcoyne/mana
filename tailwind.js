module.exports = {
  variants: {
    boxShadow: ['responsive', 'hover', 'focus', 'active'],
    backgroundColor: ['responsive', 'hover', 'focus', 'focus-within', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-focus', 'focus-within', 'group-hover'],
  },
  plugins: [],
  theme: {
    fontFamily: {
      'logo': 'Gilroy-ExtraBold',
      'sans': 'Circular-Book',
      'sans-bold': 'Circular-Medium'
    },
    extend: {
      colors: {
        mana: {
          "100": "#e0f6ff",
          "200": "#32c0fb"
        }
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
    },
  },

};
