module.exports = {
  root: true,

  env: {
    node: true,
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'no-shadow': [
      'error',
      {
        allow: ['state'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  extends: ['plugin:vue/essential', '@vue/airbnb'],
};
