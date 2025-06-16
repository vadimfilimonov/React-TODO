import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import babelParser from "@babel/eslint-parser";

export default defineConfig([
  {
    // Configure parser and language options for all JS/JSX files
    // Using Babel parser to support JSX and modern JavaScript syntax.
    // Also sets browser global variables like window, document, etc.
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: "latest",           // Enable latest ECMAScript features
        sourceType: "module",            // Use ES modules (import/export)
        ecmaFeatures: {
          jsx: true,                     // Enable JSX syntax support
        },
        requireConfigFile: false,        // Don't require a separate babel config file
        babelOptions: {
          presets: ["@babel/preset-react"], // Use React preset for JSX parsing
        },
      },
      globals: globals.browser,          // Define browser global variables
    },
  },
  {
    // Enable recommended base JavaScript rules from ESLint
    // Provides standard best practices and error prevention for JS code
    files: ["**/*.{js,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    // Enable React plugin with recommended rules
    // Adds React-specific linting, including JSX and React API usage
    // Automatically detects React version for compatibility with rules
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
    },
  },
  {
    // Import plugin for managing import order and grouping
    files: ["**/*.{js,jsx}"],
    plugins: { import: pluginImport },
    rules: {
      // Enforce a convention in import order
      "import/order": [
        "error",
        {
          groups: [
            "builtin",   // Node.js built-ins: fs, path, etc.
            "external",  // Packages from node_modules
            "internal",  // Internal modules (your aliases, paths)
            "parent",    // Imports from parent directories
            "sibling",   // Imports from sibling directories
            "index",     // index files
            "object",    // Imports of objects (rare)
            "type",      // Type imports (TypeScript)
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react"],
          "newlines-between": "never",
        },
      ],
    },
  },
  {
    // Integrate Prettier formatting rules into ESLint
    // Reports formatting issues as ESLint errors to maintain consistent code style
    files: ["**/*.{js,jsx}"],
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
]);
