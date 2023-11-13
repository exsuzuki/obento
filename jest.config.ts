import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testPathIgnorePatterns: ['/script/'],
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // ここを修正する
  testMatch: ['<rootDir>/src/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
};

export default config;
