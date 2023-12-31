module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    // ... other rules
  },
  settings: {
    'import/resolver': {
      typescript: {}, // Use the TypeScript resolver
    },
  },
}
