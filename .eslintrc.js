module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:astro/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    // ESLint: https://eslint.org/docs/latest/rules/
    // TypeScript: https://typescript-eslint.io/rules/
    // Astro: https://ota-meshi.github.io/eslint-plugin-astro/rules/
  },
  overrides: [
    {
      files: ["*.*"],
      excludedFiles: ["*.astro"],
      extends: ["plugin:react/recommended"],
      rules: {
        // React: https://github.com/jsx-eslint/eslint-plugin-react#list-of-supported-rules
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
  ],
};
