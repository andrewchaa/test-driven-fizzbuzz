module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
  },
  env: {
    node: true
  },
  plugins: ['prettier'],
  rules: {
    quotes: ['error', 'single', {avoidEscape: true}],
    'comma-dangle': ['error', 'always-multiline'],
    'prettier/prettier': 'error',
  }
}
