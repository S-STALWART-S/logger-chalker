const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@cspell/recommended",
		"plugin:sonarjs/recommended",
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
	},
	plugins: [
		"@cspell",
		"sonarjs", //  "security"
	],
	rules: {
		"no-restricted-globals": ["error"].concat(restrictedGlobals),
		"@cspell/spellchecker": [
			"warn",
			{
				ignoreImportProperties: false,
				ignoreImports: false,
			},
		],
		"arrow-parens": "warn",
		"linebreak-style": ["error", "unix"],
		"no-delete-var": "warn",
		"no-unused-expressions": 0,
		"no-unused-vars": [
			"warn",
			{
				args: "after-used",
				argsIgnorePattern: "^_",
				ignoreRestSiblings: true,
				vars: "all",
			},
		],
		"no-use-before-define": [
			"error",
			{
				allowNamedExports: false,
				classes: true,
				functions: false,
				variables: false,
			},
		],
		"no-var": "warn",
		quotes: ["warn", "double"],
		semi: ["error", "always"],
	},
};
