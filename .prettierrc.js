module.exports = {
  trailingComma: 'es5',
  singleQuote: true,
  printWidth: 80,
  semi: true,
  tabWidth: 2,
  overrides: [
    {
      files: '*.ts', // Apply these settings only to TypeScript files
      options: {
        singleQuote: true,
        semi: false,
        trailingComma: 'es5',
        bracketSpacing: true,
        arrowParens: 'always',
        importOrder: ['^\\u0000', '^@?\\w', '^', '^\\.'], // Order for imports
        importOrderSeparation: true, // Separate import groups with blank lines
      },
    },
  ],
};
