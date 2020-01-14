module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['airbnb-base'],
  plugins: ['prettier', 'eslint-plugin-import-helpers'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'arrow-parens': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['module', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
};
