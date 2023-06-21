module.exports = {
	root: true,
	env: {
		node: true
	},
	// extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
	extends: ['plugin:vue/vue3-essential', 'eslint:recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		parser: '@typescript-eslint/parser'
	},
	rules: {
		'no-unused-vars': 'off',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
	}
};
