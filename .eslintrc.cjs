module.exports = {
	root: true,
	ignorePatterns: [
		"node_modules/**/*",
		"content/**/*",
		".output/**/*",
		"dist/**/*",
	],
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
	extends: ["@nuxtjs/eslint-config-typescript"],
	rules: {
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"no-tabs": "off",
		indent: ["error", "tab"],

		"vue/multi-word-component-names": "off",
	},
};
