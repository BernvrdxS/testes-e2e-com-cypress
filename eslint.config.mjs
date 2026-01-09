import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended,

  // Config geral (ES Modules)
  {
    files: ["**/*.{js,mjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // 🔥 CommonJS (cypress.config.js)
  {
    files: ["cypress.config.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.node,
      },
    },
  },

  // Cypress tests
  {
    files: ["cypress/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.mocha,
        cy: "readonly",
        Cypress: "readonly",
      },
    },
  },
];
