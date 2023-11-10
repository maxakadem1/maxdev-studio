module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'custom-button': '0px 2px 0px 0px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
}
