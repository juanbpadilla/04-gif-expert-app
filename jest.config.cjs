module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest-setup.cjs'], // (opcional)
  watchPathIgnorePatterns: ['<rootDir>/dist/','<rootDir>/node_modules/']
};