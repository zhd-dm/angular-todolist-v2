// eslint-disable-next-line no-undef
module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'overrides': [{
		'files': [
			'*.ts'
		]
	}],
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	'rules': {
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'max-lines': 2,
		'max-lines-per-function': 2,
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'comma-dangle': ['error', {'arrays': 'never', 'objects': 'never'}],
		'eqeqeq': ['error', 'always' ],
		'consistent-return': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'error',
		'no-void': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'prefer-const': 'error',
		'prefer-destructuring': ['error', {'array': true, 'object': true}],
		'no-duplicate-imports': 'error',
		'no-unused-private-class-members': 'error'
	}
};
