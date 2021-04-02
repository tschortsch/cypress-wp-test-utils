module.exports = {
	externals: {
		'@cypress/snapshot': 'commonjs2 @cypress/snapshot',
		'cypress-xpath': 'commonjs2 cypress-xpath',
		'cypress': 'commonjs2 cypress',
	},
	resolve: {
		fallback: {
			'path': require.resolve('path-browserify')
		}
	},
};
