// eslint-disable-next-line no-undef
module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'overrides': [{
		'files': [
			'*.ts'
		],
	}],
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:lit/recommended',
		// 'airbnb-typescript/base',
		// 'prettier/@typescript-eslint',
		// 'plugin:prettier/recommended'
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
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'comma-dangle': ['error', {
			'arrays': 'never',
			'objects': 'never'
		}],
		'max-lines': 2,
		'max-lines-per-function': 2
	}
};
