/**
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ['prettier-plugin-organize-imports'],
  singleQuote: true,
  arrowParens: 'always',
  printWidth: 120,
  trailingComma: 'es5',

  overrides: [
    {
      files: '**/*.html',
      options: {
        printWidth: 150,
        singleQuote: false,
      },
    },
  ],
};

export default config;
