module.exports = ({ config }) => {
	config.module.rules.push(
		{
			test: /\.(ts|tsx)$/,
			exclude: /node_modules/,
			use: [
				{
					loader: require.resolve('awesome-typescript-loader'),
				},
				{
					loader: require.resolve('react-docgen-typescript-loader'),
				},
			],
		},
		{
			test: /\.(css|scss)$/,
			exclude: /node_modules/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
		},
		{
			test: /\.stories\.tsx?$/,
			loaders: [
				{
					loader: require.resolve('@storybook/source-loader'),
					options: {
						parser: 'typescript',
					},
				},
			],
			enforce: 'pre',
		},
	)

	config.resolve.extensions.push('.ts', '.tsx')
	return config
}
