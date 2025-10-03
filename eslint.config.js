// Flat config for ESLint v9 (CommonJS project + Jest)
const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js"],
    ignores: ["node_modules/**", "coverage/**", "dist/**", "build/**"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs", // if you switch to ESM, change to 'module'
      globals: {
        ...globals.node,
        ...globals.jest, // let tests use describe/it/expect without "no-undef"
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      // add project rules below (examples):
      // "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      // "prefer-const": "warn",
    },
  },
];
