import { pathsToModuleNameMapper } from 'ts-jest'
import { compilerOptions } from './tsconfig.json'
import type { JestConfigWithTsJest } from 'ts-jest'

const jestConfig: JestConfigWithTsJest = {
  transform: {
    '^.*\\.ts$': ['ts-jest', { tsconfig: "tsconfig.json" }],
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  resolver: 'ts-jest-resolver',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
}

export default jestConfig