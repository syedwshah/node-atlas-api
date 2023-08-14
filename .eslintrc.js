module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/typescript'
  ],
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'never'],
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    'import/extensions': ['error', 'always', { ignorePackages: true, js: 'never', ts: 'never' }],
    // ... other rules
  },
  settings: {
    'import/resolver': {
      typescript: {}, // Use the TypeScript resolver
    },
  },
}
