module.exports = {
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  root: true,
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-unused-vars': 'off',
    'prettier/prettier': 0,
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
