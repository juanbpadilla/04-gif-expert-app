module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'], // (opcional)
  // watchPathIgnorePatterns: ['<rootDir>/dist/','<rootDir>/node_modules/']
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
};