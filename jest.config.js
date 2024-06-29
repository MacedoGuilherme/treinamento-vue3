module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: [
    '**/*.spec.js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(axios)/)",
  ],
}
