module.exports = {
  root: true,

  env: {
    node: true,
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    '@vue/airbnb',
  ],
};
