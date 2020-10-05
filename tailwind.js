module.exports = {
  variants: {
    boxShadow: ['responsive', 'hover', 'focus', 'active'],
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [],
  theme: {
    extend: {
      // backgroundColor: theme => ({

      // })
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
