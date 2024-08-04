/** @type {import("prettier").Config} */
export default {
  tabWidth: 4,
  bracketSpacing: true,
  singleQuote: false,
  quoteProps: "consistent",
  printWidth: 120,
  semi: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
