module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|css|scss)$': '<rootDir>/src/infrastructure/test-helpers/file-mock.js',
	},
  transform: {},
	coverageReporters: ['text', 'html', 'json'],
	coveragePathIgnorePatterns: [
		'/node_modules/', 
		'.stories.tsx',
	],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
  projects: 
	[
		{
			displayName: 'heartthrob-react',
			roots: ['<rootDir>/src'],
			transform: {
				'^.+\\.ts[x]?$': 'ts-jest',
			},
			testEnvironment: 'jsdom',
			coveragePathIgnorePatterns: ['.stories.tsx'],
			moduleNameMapper: {
				'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|css|scss)$': '<rootDir>/src/infrastructure/test-helpers/file-mock.js',
			},
		},
	],
}
