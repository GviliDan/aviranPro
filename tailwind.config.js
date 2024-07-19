const { COLORS } = require('./src/assets/fontColors');

// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...COLORS,
      },
      fontFamily: {
        assistant: ['Assistant', 'sans-serif'],
        heebo: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
