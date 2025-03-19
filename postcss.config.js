module.exports = {
  plugins: {
    'tailwindcss': {},
    'postcss-preset-env': {
      features: {
        'nesting-rules': true,
      },
      autoprefixer: {
        flexbox: 'no-2009',
      },
    },
    ...(process.env.NODE_ENV === 'production' ? { 'cssnano': {} } : {}),
  },
}; 