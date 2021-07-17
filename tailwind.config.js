module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1680px',
    },
    extend: {
      colors: {
        'theme-blue-color': '#6666B3',
        'btn-light-gray': '#E3E3E3',
        'btn-wave-violet': '#F7F7FC',
        'theme-gray-color': '#8C8C8C',
        'custom-black': '#252C39',
        'custom-hover': '#F7F8FF',
        'custom-btn-bg': '#EFF2FE',
        'modal-overlay': 'rgba(0, 0, 0, 0.5)',
        'mobile-menu-bg': '#eff2fe',
        'light-pink': '#F7F7FC',
        'single-tags': '#EEEDF9',
      },
      opacity: {
        '90': '0.9',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      },
      height: {},
      width: {
        '415px': '465px',
      },
      padding: {
        '85px': '5.3rem',
      },
      margin: {
        '5px': '0.3rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
