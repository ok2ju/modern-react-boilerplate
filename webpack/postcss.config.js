const { join } = require('path');

module.exports = {
  plugins: {
    'postcss-import': {
      root: join(__dirname, '../'),
      path: [join(__dirname, '../src')]
    },
    'postcss-nesting': {},
    'postcss-cssnext': {},
    'postcss-reporter': {
      clearMessages: true
    }
  }
}
