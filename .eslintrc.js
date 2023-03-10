module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.jsx', '.tsx', '.ts', '.js'] }],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': 'warn',
    'no-underscore-dangle': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'max-len': ['error', { ignoreComments: true, code: 100 }],
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: ['data-testid'],
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
  },
  overrides: [{
    files: ['**/src/**/*.test.{ts,tsx}'],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  }],
};
