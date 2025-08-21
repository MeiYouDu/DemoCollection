import eslint from "@eslint/js";
import json from "eslint-plugin-jsonc";
import prettier from "eslint-plugin-prettier/recommended";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
	json.configs["flat/recommended-with-json"],
	{ ignores: ["*.d.ts", "**/coverage", "**/dist"] },
	{
		extends: [eslint.configs.recommended],
		files: ["**/*.{ts,tsx,jsx,js,vue}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: globals.browser,
		},
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
		},
		ignores: [
			"node_modules",
			"dist",
			".husky",
			".idea",
			".vscode",
			"logs",
			"*.log",
			"npm-debug.log*",
			"yarn-debug.log*",
			"yarn-error.log*",
			"lerna-debug.log*",
			".pnpm-debug.log*",
			"addons",
			"./tsconfig.json",
		],
	},
	prettier,
]);
