import js from "@eslint/js";
import globals from "globals";

export default [
  // Config recomendada do ESLint
  js.configs.recommended,

  // Arquivos JS (Browser + Node)
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Scripts CommonJS
{
  files: ["**/*.cjs"],
  languageOptions: {
    sourceType: "commonjs",
  },
}

];
