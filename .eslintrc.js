module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        jsxSingleQuote: true,
        endOfLine: 'auto',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-unused-vars': 'warn',
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: false,
        variables: true,
      },
    ],
    'global-require': 0,
    'jsx-quotes': ['error', 'prefer-single'],
    'import/prefer-default-export': 0,
    'react/prop-types': 'off',
    'react/function-component-definition': 1,
    'react/jsx-no-constructed-context-values': 0,
    'react/jsx-props-no-spreading': 0,
    'no-plusplus': 0,
    'react/no-array-index-key': 0,
  },
};
