import nextJest from 'next/jest.js'
 
const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})
 
// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  preset: 'ts-jest/presets/js-with-ts', 
  globals: {"ts-jest": {tsconfig: false, babelConfig: true, useESM: true}}, 
  transform: {'^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]},
  transformIgnorePatterns: [
    "node_modules/*"
  ], 
  moduleNameMapper: {'^uuid$': require.resolve('uuid'), '^next-auth': require.resolve('next-auth'), '^openid-client': require.resolve('openid-client'), "~/(.*)": ["<rootDir>/src/$1"]},
}
 
// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config as any)