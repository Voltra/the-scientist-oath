export default {
	root: true,
	extends: [
		"stylelint-config-standard-scss",
		"stylelint-config-recommended-vue"
	],
	overrides: [
		{
			files: ["*.vue"],
			customSyntax: "postcss-html"
		}
	],
	rules: {
		// @see https://tailwindcss.com/docs/functions-and-directives#directives
		"scss/at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"apply",
					"layer",
					"responsive",
					"screen",
					"tailwind",
					"variants",
					/// /
					"function",
					"mixin",
					"include"
				]
			}
		],
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"apply",
					"layer",
					"responsive",
					"screen",
					"tailwind",
					"variants",
					/// /
					"function",
					"mixin",
					"include"
				]
			}
		],
		// @see https://tailwindcss.com/docs/functions-and-directives#functions
		"scss/function-no-unknown": [
			true,
			{
				ignoreFunctions: ["screen", "theme"]
			}
		],

		"selector-class-pattern": null,
		"scss/dollar-variable-pattern": null,
		"scss/at-mixin-pattern": null
	}
};
