import js from "@eslint/js";
import globals from "globals";

export default [
  // Config recomendada do ESLint
  js.configs.recommended,

  // Seus arquivos JS
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Scripts CommonJS
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      sourceType: "modules"    
    },
  },
];
