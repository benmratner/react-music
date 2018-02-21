module.exports = {
	use: [
		[
			'@neutrinojs/react',
			{
				html: {
					title: 'react-music'
				}
			}
		],
		(neutrino) => {
			neutrino.config.resolve.alias
			.set('components', '/components/')
			.set('utils', '../../src/utils/')
		}
	]
};
