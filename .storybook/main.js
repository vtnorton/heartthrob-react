module.exports = {
  addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-controls',
		'@storybook/preset-scss',
		{
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	core: {
		builder: 'webpack5',
	},
  framework: '@storybook/react',
	features: {
		storyStoreV7: true,
		postcss: false,
	},
	stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async (config, { configType }) => {
    return config;
  },
};