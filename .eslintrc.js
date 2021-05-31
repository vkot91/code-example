module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
    'react/react-in-jsx-scope': 0,
    'no-console': 1,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'no-unused-vars': 0,
    'no-undef': 0,
    'react/display-name': 0,
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'always', prev: 'import', next: 'const' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: 'case', next: '*' }
    ]
  }
};
