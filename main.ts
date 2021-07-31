module.exports = {
  stories: ['./src/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials'],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'none',
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    },
  },
  core: {
    builder: 'webpack5',
  },
  features: {
    postcss: false,
  },
}
