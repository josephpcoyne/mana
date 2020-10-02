module.exports = {
  variants: {
    boxShadow: ["responsive", "hover", "focus", "active"],
    backgroundColor: ["responsive", "hover", "focus", "active"],
    fontWeight: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-focus",
      "group-hover",
    ],
    textColor: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-focus",
      "group-hover",
    ],
    outline: [
      "responsive",
      "focus",
      "hover",
      "active",
      "group-focus",
      "group-hover",
    ],
  },
  plugins: [],
  corePlugins:{
    outline: false
  },
  theme: {
    extend: {
      colors: {
        mana: {
          "100": "#e0f6ff",
          "200": "#32c0fb",
        }
      },
    },
  }
};
