// eslint.config.js
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs"
    },
    rules: {
      semi: "error",
      quotes: ["error", "double"]
    }
  }
];
