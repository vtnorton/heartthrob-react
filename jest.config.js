module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|css|scss)$': '<rootDir>/src/infrastructure/test-helpers/file-mock.js',
	},
  transform: {},
  projects: 
	[
		{
			displayName: 'test',
			roots: ['<rootDir>/src'],
			transform: {
				'^.+\\.ts[x]?$': 'ts-jest',
			},
			testEnvironment: 'jsdom',
			coveragePathIgnorePatterns: [],
			moduleNameMapper: {
				'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|css|scss)$': '<rootDir>/src/infrastructure/test-helpers/file-mock.js',
			},
		},
	],
}
