module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'tailwindcss': {},
    'autoprefixer': {
      overrideBrowserslist: [
        'last 2 versions',
        '> 1%',
        'not dead'
      ]
    },
    ...(process.env.NODE_ENV === 'production' ? {
      'cssnano': {
        preset: 'default'
      }
    } : {})
  }
}
