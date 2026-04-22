import next from 'eslint-config-next';

const config = [
	{ ignores: ['.next/**', 'out/**', 'node_modules/**', 'dist/**', 'build/**'] },
	...next,
	{
		rules: {
			'react-hooks/set-state-in-effect': 'off',
			'react-hooks/purity': 'off',
			'import/no-anonymous-default-export': 'off',
		},
	},
];

export default config;
