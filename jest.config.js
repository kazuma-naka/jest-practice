/** @type {import('jest').Config} */

const config = {
    roots: [
      "<rootDir>/src"
    ],
    testMatch: [
      "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
    transform: {
      "\\.(ts|tsx)$": "ts-jest"
    },
  };
  
  module.exports = config;
