const pkg = require('./package.json');

module.exports = {
	ignorePatterns: ['**/dist/*', '.eslintrc.js'],
	parser: '@typescript-eslint/parser',
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	env: {
		browser: true,
		node: true, // defines things like process.env when generating through node
	},
	extends: [
		'eslint:recommended', // use recommended configs
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier',
	],
	plugins: ['prettier'],
	rules: {
		'import/no-unresolved': [
			'error',
			{ignore: ['^@theme', '^@docusaurus', '^@generated']},
		],
		'import/order': [
			'warn',
			{
				'newlines-between': 'always',
				'pathGroups': Object.keys(pkg.dependencies).map((deps) => ({
					pattern: deps,
					group: 'external',
				})),
				'alphabetize': {
					order: 'asc',
					caseInsensitive: true,
				},
			},
		],
	},
};
