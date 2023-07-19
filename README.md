# T3-Testing-Setup

npm create t3-app@latest

npm i -D jest jest-environment-jsdom @testing-library/jest-dom @testing-library/react

npm i -D ts-jest

npm i -D ts-node

npm i -D eslint-plugin-jest-dom eslint-plugin-testing-library

### create jest.config.ts

```
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest'
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config)
```

### create jest.setup.js

```
import '@testing-library/jest-dom/extend-expect'
```

this created an error ...

```
Parsing error: ESLint was configured to run on `<tsconfigRootDir>/jest.setup.js` using `parserOptions.project`: /users/anthonycatullo/code/t3/t3-testing-attempt/tsconfig.json
However, that TSConfig does not include this file. Either:

- Change ESLint's list of included files to not include this file
- Change that TSConfig to include this file
- Create a new TSConfig that includes this file and include it in your parserOptions.project
  See the typescript-eslint docs for more info: https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-fileeslint

```

### added some extends to the eslintrc

```
    "next/core-web-vitals",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
```
