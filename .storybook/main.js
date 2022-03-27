module.exports = {
  addons: [
		'@storybook/addon-essentials',
		'@storybook/addon-controls',
	],
	core: {
		builder: 'webpack5',
	},
  framework: '@storybook/react',
	features: {
		storyStoreV7: true,
	},
	stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async (config, { configType }) => {
    return config;
  },
};