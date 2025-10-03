// Flat config for ESLint v9 (CommonJS project + Jest)
const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js"],
    ignores: [
      "node_modules/**",
      "coverage/**",   // ✅ ignore coverage
      "dist/**",
      "build/**"
    ],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "commonjs", // if you switch to ESM, change to 'module'
      globals: {
        ...globals.node,
        ...globals.jest, // allow describe/it/expect without "no-undef"
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      // add custom rules below if needed
      // "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      // "prefer-const": "warn",
    },
  },
];
