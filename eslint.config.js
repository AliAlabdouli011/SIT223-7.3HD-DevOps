// eslint.config.js
import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",   // ✅ because your package.json has "type": "commonjs"
      globals: {
        ...globals.node,
        ...globals.jest,        // so ESLint understands jest test functions
      },
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
  },
];
